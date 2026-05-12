// Gestion des panneaux (cartes + icônes)
const panels = {
  samedi: document.getElementById("panel-samedi"),
  dimanche: document.getElementById("panel-dimanche"),
  terrains: document.getElementById("panel-terrains"),
  infos: document.getElementById("panel-infos"),
  categories: document.getElementById("panel-categories"),
  reglement: document.getElementById("panel-reglement"),
  contact: document.getElementById("panel-contact"),
};

function showPanel(key) {
  Object.values(panels).forEach((p) => p.classList.remove("active"));
  if (panels[key]) {
    panels[key].classList.add("active");
  }
}

document.querySelectorAll(".card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    showPanel(section);
  });
});

document.querySelectorAll(".icon-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    showPanel(section);
  });
});

// ----------------------
// Assistant intelligent
// ----------------------
const form = document.getElementById("assistant-form");
const input = document.getElementById("assistant-input");
const messagesBox = document.getElementById("assistant-messages");

// mémoire courte pour les questions ambiguës
let pendingClarification = null; // { type: 'finale', data: {...} }

function addMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.classList.add("msg", from === "bot" ? "msg-bot" : "msg-user");
  div.innerHTML = text;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

// petites données horaires simplifiées
const finalesData = {
  samedi: {
    U11G: "Finales U11 garçons à partir de 9h00 (samedi).",
    U13F: "Finales U13 filles en fin de matinée (samedi).",
    U15G: "Finales U15 garçons début d’après-midi (samedi).",
    U17F: "Finales U17 filles milieu d’après-midi (samedi).",
    U19G: "Finales U19 garçons fin d’après-midi (samedi).",
  },
  dimanche: {
    U11F: "Finales U11 filles à partir de 9h00 (dimanche).",
    U13G: "Finales U13 garçons en fin de matinée (dimanche).",
    U15F: "Finales U15 filles début d’après-midi (dimanche).",
    U17G: "Finales U17 garçons milieu d’après-midi (dimanche).",
    U19F: "Finales U19 filles fin d’après-midi (dimanche).",
  },
};

function detectCategorie(text) {
  const t = text.toUpperCase();

  if (t.includes("U11") && t.includes("GAR") || t.includes("U11 G")) return "U11G";
  if (t.includes("U11") && t.includes("FIL") || t.includes("U11 F")) return "U11F";

  if (t.includes("U13") && t.includes("GAR") || t.includes("U13 G")) return "U13G";
  if (t.includes("U13") && t.includes("FIL") || t.includes("U13 F")) return "U13F";

  if (t.includes("U15") && t.includes("GAR") || t.includes("U15 G")) return "U15G";
  if (t.includes("U15") && t.includes("FIL") || t.includes("U15 F")) return "U15F";

  if (t.includes("U17") && t.includes("GAR") || t.includes("U17 G")) return "U17G";
  if (t.includes("U17") && t.includes("FIL") || t.includes("U17 F")) return "U17F";

  if (t.includes("U19") && t.includes("GAR") || t.includes("U19 G")) return "U19G";
  if (t.includes("U19") && t.includes("FIL") || t.includes("U19 F")) return "U19F";

  // si juste "U11", "U13", etc. sans genre
  if (t.includes("U11")) return "U11";
  if (t.includes("U13")) return "U13";
  if (t.includes("U15")) return "U15";
  if (t.includes("U17")) return "U17";
  if (t.includes("U19")) return "U19";

  return null;
}

function handleFinaleQuestion(text) {
  const t = text.toLowerCase();
  const categorie = detectCategorie(text);

  // pas de catégorie du tout -> demander précision
  if (!categorie) {
    pendingClarification = { type: "finale", data: {} };
    addMessage(
      "Tu parles de quelle finale exactement ? U11, U13, U15, U17 ou U19, et filles ou garçons ?"
    );
    return;
  }

  // catégorie sans genre (ex: "U17") -> demander genre
  if (["U11", "U13", "U15", "U17", "U19"].includes(categorie)) {
    pendingClarification = { type: "finale-genre", data: { base: categorie } };
    addMessage(
      `Pour la catégorie ${categorie}, tu parles des filles ou des garçons ?`
    );
    return;
  }

  // catégorie complète (ex: U17G, U15F)
  let info = null;
  if (finalesData.samedi[categorie]) {
    info = finalesData.samedi[categorie];
  } else if (finalesData.dimanche[categorie]) {
    info = finalesData.dimanche[categorie];
  }

  if (info) {
    addMessage(info);
  } else {
    addMessage(
      "Je ne trouve pas l’horaire exact pour cette finale, mais les informations détaillées sont affichées sur place."
    );
  }
}

function handleClarification(text) {
  if (!pendingClarification) return false;

  const t = text.toLowerCase();

  if (pendingClarification.type === "finale") {
    // l’utilisateur répond par ex : "U17 garçons"
    pendingClarification = null;
    handleFinaleQuestion(text);
    return true;
  }

  if (pendingClarification.type === "finale-genre") {
    const base = pendingClarification.data.base; // ex: "U17"
    let cat = null;

    if (t.includes("gar") || t.includes("masc") || t.includes("g")) {
      cat = base + "G";
    } else if (t.includes("fil") || t.includes("fem") || t.includes("f")) {
      cat = base + "F";
    }

    pendingClarification = null;

    if (cat) {
      handleFinaleQuestion(cat);
    } else {
      addMessage(
        "Je n’ai pas bien compris, tu peux préciser si c’est pour les filles ou les garçons ?"
      );
    }
    return true;
  }

  return false;
}

function handleGenericQuestion(text) {
  const t = text.toLowerCase();

  if (t.includes("adresse") || t.includes("où") && t.includes("spa")) {
    addMessage(
      "Les finales se jouent à La Fraineuse : Avenue Amédée Hesse 41, 4900 Spa."
    );
    return;
  }

  if (t.includes("prix") || t.includes("entrée") || t.includes("entree")) {
    addMessage("L’entrée est à 5€ pour la journée.");
    return;
  }

  if (t.includes("parking")) {
    addMessage(
      "Un parking est disponible à proximité du site, avec une signalisation sur place."
    );
    return;
  }

  if (t.includes("buvette") || t.includes("boire") || t.includes("manger")) {
    addMessage(
      "Une buvette et une petite restauration sont disponibles sur place toute la journée."
    );
    return;
  }

  addMessage(
    "Je ne suis pas sûr de bien comprendre ta question. Tu peux reformuler ou préciser un peu ?"
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // si on attend une précision
  if (handleClarification(text)) {
    return;
  }

  const t = text.toLowerCase();

  // questions sur les finales
  if (t.includes("finale") || t.includes("finales")) {
    handleFinaleQuestion(text);
    return;
  }

  // questions plus générales
  handleGenericQuestion(text);
});