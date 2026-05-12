// ----------------------
// PANELS (cartes + icônes)
// ----------------------
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
// DONNÉES MATCHES (samedi + dimanche)
// ----------------------
// Format : jour, heure, terrain, equipes, type, categorie (optionnel)
const matches = [
  // DIMANCHE 17 MAI 2026
  // 9h00
  { jour: "dimanche", heure: "09:00", terrain: "T1", equipes: "Thimister - Limal" },
  { jour: "dimanche", heure: "09:00", terrain: "T2", equipes: "Gedinne - Tchalou" },
  { jour: "dimanche", heure: "09:00", terrain: "T3", equipes: "Waremme - Chaumont" },
  { jour: "dimanche", heure: "09:00", terrain: "T4", equipes: "Waremme - Chaumont" },
  { jour: "dimanche", heure: "09:00", terrain: "T5", equipes: "Tchalou - Ciney" },
  { jour: "dimanche", heure: "09:00", terrain: "T6", equipes: "Waremme - Namur" },
  { jour: "dimanche", heure: "09:00", terrain: "T7", equipes: "Chaumont - La Louvière" },
  { jour: "dimanche", heure: "09:00", terrain: "T8", equipes: "Bertrix - S Eupen" },

  // 10h / 10h15
  { jour: "dimanche", heure: "10:00", terrain: "T1", equipes: "Ixelles - Thimister" },
  { jour: "dimanche", heure: "10:00", terrain: "T2", equipes: "S Eupen - Gedinne" },
  { jour: "dimanche", heure: "10:15", terrain: "T3", equipes: "Ohey - Soignies" },
  { jour: "dimanche", heure: "10:15", terrain: "T4", equipes: "Bouillon - Waremme" },
  { jour: "dimanche", heure: "10:15", terrain: "T5", equipes: "Ixelles - Tchalou" },
  { jour: "dimanche", heure: "10:15", terrain: "T6", equipes: "S Brussels - Waremme" },
  { jour: "dimanche", heure: "10:15", terrain: "T7", equipes: "La Louvière - Bertrix" },
  { jour: "dimanche", heure: "10:15", terrain: "T8", equipes: "S Eupen - Chaumont" },

  // 11h / 11h30
  { jour: "dimanche", heure: "11:00", terrain: "T1", equipes: "Limal - Ixelles" },
  { jour: "dimanche", heure: "11:00", terrain: "T2", equipes: "Tchalou - S Eupen" },
  { jour: "dimanche", heure: "11:30", terrain: "T3", equipes: "Bouillon - Waremme" },
  { jour: "dimanche", heure: "11:30", terrain: "T4", equipes: "Chaumont - Bouillon" },
  { jour: "dimanche", heure: "11:30", terrain: "T5", equipes: "Ciney - Ixelles" },
  { jour: "dimanche", heure: "11:30", terrain: "T6", equipes: "Namur - S Brussels" },
  { jour: "dimanche", heure: "11:30", terrain: "T7", equipes: "La Louvière - S Eupen" },
  { jour: "dimanche", heure: "11:30", terrain: "T8", equipes: "Chaumont - Bertrix" },

  // 12h / 12h45
  { jour: "dimanche", heure: "12:00", terrain: "T1", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:00", terrain: "T2", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "12:45", terrain: "T3", equipes: "F Uccle - Ohey" },
  { jour: "dimanche", heure: "12:45", terrain: "T4", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "12:45", terrain: "T5", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:45", terrain: "T6", equipes: "5è Place" },
  { jour: "dimanche", heure: "12:45", terrain: "T7", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:45", terrain: "T8", equipes: "2è B - 1er A" },

  // 13h / 14h / 14h00
  { jour: "dimanche", heure: "13:00", terrain: "T1", equipes: "5è Place" },
  { jour: "dimanche", heure: "13:00", terrain: "T2", equipes: "3è place U11" },
  { jour: "dimanche", heure: "14:00", terrain: "T1", equipes: "Finale U11", type: "finale", categorie: "U11F" },
  { jour: "dimanche", heure: "14:00", terrain: "T3", equipes: "Chaumont - Bouillon" },
  { jour: "dimanche", heure: "14:00", terrain: "T4", equipes: "Soignies - F Uccle" },
  { jour: "dimanche", heure: "14:00", terrain: "T5", equipes: "5è place" },
  { jour: "dimanche", heure: "14:00", terrain: "T6", equipes: "Tchalou - Romedenne" },
  { jour: "dimanche", heure: "14:00", terrain: "T7", equipes: "3è Place" },
  { jour: "dimanche", heure: "14:00", terrain: "T8", equipes: "Waremme - Chaumont" },

  // 15h15
  { jour: "dimanche", heure: "15:15", terrain: "T3", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "15:15", terrain: "T4", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "15:15", terrain: "T5", equipes: "3è Place" },
  { jour: "dimanche", heure: "15:15", terrain: "T6", equipes: "Ixelles - Tchalou" },
  { jour: "dimanche", heure: "15:15", terrain: "T8", equipes: "Bertrix - Waremme" },

  // 16h30
  { jour: "dimanche", heure: "16:30", terrain: "T3", equipes: "3è Place" },
  { jour: "dimanche", heure: "16:30", terrain: "T4", equipes: "5è place" },
  { jour: "dimanche", heure: "16:30", terrain: "T6", equipes: "Romedenne - Ixelles" },
  { jour: "dimanche", heure: "16:30", terrain: "T8", equipes: "Chaumont - Waremme" },

  // 17h / 17h45
  { jour: "dimanche", heure: "17:00", terrain: "T1", equipes: "Finale U17 G", type: "finale", categorie: "U17G" },
  { jour: "dimanche", heure: "17:45", terrain: "T3", equipes: "Finale" },
  { jour: "dimanche", heure: "17:45", terrain: "T6", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "17:45", terrain: "T7", equipes: "5è place" },
  { jour: "dimanche", heure: "17:45", terrain: "T8", equipes: "2è A - 1er B" },

  // 19h30
  { jour: "dimanche", heure: "19:30", terrain: "T1", equipes: "Finale U19 F", type: "finale", categorie: "U19F" },
  { jour: "dimanche", heure: "19:30", terrain: "T5", equipes: "3è Place" },

  // SAMEDI 16 MAI 2026
  // 9h
  { jour: "samedi", heure: "09:00", terrain: "T1", equipes: "Waremme - Chaumont" },
  { jour: "samedi", heure: "09:00", terrain: "T2", equipes: "Nalinnes - Le Roux" },
  { jour: "samedi", heure: "09:00", terrain: "T3", equipes: "Thimister - Romedenne" },
  { jour: "samedi", heure: "09:00", terrain: "T4", equipes: "Tchalou - BEVC" },
  { jour: "samedi", heure: "09:00", terrain: "T5", equipes: "Tchalou - Waremme" },
  { jour: "samedi", heure: "09:00", terrain: "T6", equipes: "Nalinnes - F Uccle" },
  { jour: "samedi", heure: "09:00", terrain: "T7", equipes: "Jemeppe - Waremme" },
  { jour: "samedi", heure: "09:00", terrain: "T8", equipes: "Chaumont - Romedenne" },

  // 10h / 10h15 / 10h
  { jour: "samedi", heure: "10:15", terrain: "T1", equipes: "Nalinnes - Waremme" },
  { jour: "samedi", heure: "10:15", terrain: "T2", equipes: "Le Roux - Chaumont" },
  { jour: "samedi", heure: "10:15", terrain: "T3", equipes: "Nivelles - Thimister" },
  { jour: "samedi", heure: "10:15", terrain: "T4", equipes: "Libramont - Tchalou" },
  { jour: "samedi", heure: "10:15", terrain: "T5", equipes: "S Brussels - Tchalou" },
  { jour: "samedi", heure: "10:00", terrain: "T6", equipes: "Jemeppe - Nalinnes" },
  { jour: "samedi", heure: "10:00", terrain: "T7", equipes: "Waremme - Guibertin" },
  { jour: "samedi", heure: "10:15", terrain: "T8", equipes: "Stabulois - Chaumont" },

  // 11h30 / 11h
  { jour: "samedi", heure: "11:30", terrain: "T1", equipes: "Chaumont - Nalinnes" },
  { jour: "samedi", heure: "11:30", terrain: "T2", equipes: "Waremme - Le Roux" },
  { jour: "samedi", heure: "11:30", terrain: "T3", equipes: "Romedenne - Nivelles" },
  { jour: "samedi", heure: "11:30", terrain: "T4", equipes: "BEVC - Libramont" },
  { jour: "samedi", heure: "11:30", terrain: "T5", equipes: "Waremme - S Brussels" },
  { jour: "samedi", heure: "11:00", terrain: "T6", equipes: "F Uccle - Jemeppe" },
  { jour: "samedi", heure: "11:00", terrain: "T7", equipes: "Nalinnes - Guibertin" },
  { jour: "samedi", heure: "11:30", terrain: "T8", equipes: "Romedenne - Stabulois" },

  // 12h45 / 12h
  { jour: "samedi", heure: "12:45", terrain: "T1", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "12:45", terrain: "T2", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "12:45", terrain: "T3", equipes: "2è A - 1er B" },
  { jour: "samedi", heure: "12:45", terrain: "T4", equipes: "Waremme - Libramont" },
  { jour: "samedi", heure: "12:00", terrain: "T6", equipes: "F Uccle - Waremme" },
  { jour: "samedi", heure: "12:00", terrain: "T7", equipes: "Guibertin - Jemeppe" },
  { jour: "samedi", heure: "12:45", terrain: "T8", equipes: "La Louvière - Chaumont" },

  // 14h / 13h
  { jour: "samedi", heure: "14:00", terrain: "T1", equipes: "2è A - 1er B" },
  { jour: "samedi", heure: "14:00", terrain: "T2", equipes: "3è Place" },
  { jour: "samedi", heure: "14:00", terrain: "T3", equipes: "5è Place" },
  { jour: "samedi", heure: "14:00", terrain: "T4", equipes: "S Brussels - Waremme" },
  { jour: "samedi", heure: "13:00", terrain: "T6", equipes: "Waremme - Nalinnes" },
  { jour: "samedi", heure: "13:00", terrain: "T7", equipes: "Guibertin - F Uccle" },
  { jour: "samedi", heure: "14:00", terrain: "T8", equipes: "Namur - La Louvière" },

  // 15h30 / 15h15 / 14h / 15h15
  { jour: "samedi", heure: "15:30", terrain: "T1", equipes: "Finale U17", type: "finale", categorie: "U17F" },
  { jour: "samedi", heure: "15:15", terrain: "T3", equipes: "Finale" },
  { jour: "samedi", heure: "15:15", terrain: "T5", equipes: "Libramont - S Brussels" },
  { jour: "samedi", heure: "14:00", terrain: "T6", equipes: "5è Place" },
  { jour: "samedi", heure: "15:15", terrain: "T8", equipes: "Chaumont - Namur" },

  // 18h / 16h30 / 15h30 / 16h30
  { jour: "samedi", heure: "18:00", terrain: "T1", equipes: "3è Place U19 G" },
  { jour: "samedi", heure: "16:30", terrain: "T5", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "15:30", terrain: "T6", equipes: "3è Place" },
  { jour: "samedi", heure: "16:30", terrain: "T7", equipes: "5è Place" },
  { jour: "samedi", heure: "16:30", terrain: "T8", equipes: "2è A - 1er B" },

  // 19h30 / 17h45 / 20h / 19h
  { jour: "samedi", heure: "19:30", terrain: "T1", equipes: "Finale U19 G", type: "finale", categorie: "U19G" },
];

// Données finales par catégorie (plus lisibles pour l’assistant)
const finalesByCategorie = {
  // samedi
  U17F: {
    jour: "samedi",
    heure: "15:30",
    terrain: "T1",
    description: "Finale U17 filles le samedi à 15h30 sur T1.",
  },
  U19G: {
    jour: "samedi",
    heure: "19:30",
    terrain: "T1",
    description: "Finale U19 garçons le samedi à 19h30 sur T1.",
  },
  // dimanche
  U11F: {
    jour: "dimanche",
    heure: "14:00",
    terrain: "T1",
    description: "Finale U11 filles le dimanche à 14h00 sur T1.",
  },
  U15F: {
    // dans le PDF, la finale U15 F est indiquée à 15h (ligne '15h Finale U15 F')
    jour: "dimanche",
    heure: "15:00",
    terrain: "T1-T2",
    description: "Finale U15 filles le dimanche à 15h00 sur T1/T2.",
  },
  U17G: {
    jour: "dimanche",
    heure: "17:00",
    terrain: "T1",
    description: "Finale U17 garçons le dimanche à 17h00 sur T1.",
  },
  U19F: {
    jour: "dimanche",
    heure: "19:30",
    terrain: "T1",
    description: "Finale U19 filles le dimanche à 19h30 sur T1.",
  },
};

// ----------------------
// ASSISTANT
// ----------------------
const form = document.getElementById("assistant-form");
const input = document.getElementById("assistant-input");
const messagesBox = document.getElementById("assistant-messages");

// mémoire courte pour les questions ambiguës
let pendingClarification = null; // { type: 'finale' | 'finale-genre' | 'equipe-jour', data: {...} }

function addMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.classList.add("msg", from === "bot" ? "msg-bot" : "msg-user");
  div.innerHTML = text;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

// ----------------------
// Détection catégorie
// ----------------------
function detectCategorie(text) {
  const t = text.toUpperCase();

  if (t.includes("U11")) return "U11";
  if (t.includes("U13")) return "U13";
  if (t.includes("U15")) return "U15";
  if (t.includes("U17")) return "U17";
  if (t.includes("U19")) return "U19";

  return null;
}

// ----------------------
// Recherche par équipe
// ----------------------
function searchMatchesByTeam(query, jourPref = null) {
  const q = query.toLowerCase();
  const results = matches.filter((m) => {
    if (jourPref && m.jour !== jourPref) return false;
    return m.equipes.toLowerCase().includes(q);
  });
  return results;
}

function formatMatchesList(list) {
  if (!list.length) {
    return "Je ne trouve pas de match correspondant à cette équipe dans le programme.";
  }

  // on limite l’affichage pour éviter un pavé énorme
  const max = 6;
  const sliced = list.slice(0, max);
  let txt = "Voici ce que je trouve :<br>";
  sliced.forEach((m) => {
    txt += `• ${m.jour} à ${m.heure} sur ${m.terrain} : ${m.equipes}<br>`;
  });
  if (list.length > max) {
    txt += `… et encore ${list.length - max} autre(s) match(s) dans la journée.`;
  }
  return txt;
}

// ----------------------
// Gestion des finales par catégorie
// ----------------------
function handleFinaleQuestion(text) {
  const catBase = detectCategorie(text);
  const t = text.toLowerCase();

  // si aucune catégorie détectée
  if (!catBase) {
    pendingClarification = { type: "finale", data: {} };
    addMessage(
      "Tu parles de quelle finale exactement ? U11, U13, U15, U17 ou U19 ?"
    );
    return;
  }

  // si on a une catégorie mais pas le genre
  if (!t.includes("gar") && !t.includes("masc") && !t.includes("fill") && !t.includes("fem")) {
    pendingClarification = { type: "finale-genre", data: { base: catBase } };
    addMessage(
      `Pour la catégorie ${catBase}, tu parles des filles ou des garçons ?`
    );
    return;
  }

  // on essaie de construire la clé exacte
  let key = null;
  if (t.includes("gar") || t.includes("masc")) {
    key = catBase + "G";
  } else if (t.includes("fill") || t.includes("fem")) {
    key = catBase + "F";
  }

  if (key && finalesByCategorie[key]) {
    addMessage(finalesByCategorie[key].description);
  } else {
    addMessage(
      "Je ne trouve pas de finale précise pour cette catégorie dans le programme."
    );
  }
}

// ----------------------
// Clarifications
// ----------------------
function handleClarification(text) {
  if (!pendingClarification) return false;
  const t = text.toLowerCase();

  if (pendingClarification.type === "finale") {
    pendingClarification = null;
    handleFinaleQuestion(text);
    return true;
  }

  if (pendingClarification.type === "finale-genre") {
    const base = pendingClarification.data.base;
    let key = null;

    if (t.includes("gar") || t.includes("masc") || t.includes("g")) {
      key = base + "G";
    } else if (t.includes("fill") || t.includes("fem") || t.includes("f")) {
      key = base + "F";
    }

    pendingClarification = null;

    if (key && finalesByCategorie[key]) {
      addMessage(finalesByCategorie[key].description);
    } else {
      addMessage(
        "Je ne trouve pas de finale précise pour cette catégorie dans le programme."
      );
    }
    return true;
  }

  if (pendingClarification.type === "equipe-jour") {
    const jour = t.includes("samedi")
      ? "samedi"
      : t.includes("dimanche")
      ? "dimanche"
      : null;
    const equipe = pendingClarification.data.equipe;
    pendingClarification = null;

    if (!jour) {
      addMessage(
        "Je n’ai pas bien compris le jour. Tu peux préciser si c’est pour le samedi ou le dimanche ?"
      );
      return true;
    }

    const res = searchMatchesByTeam(equipe, jour);
    addMessage(formatMatchesList(res));
    return true;
  }

  return false;
}

// ----------------------
// Questions génériques
// ----------------------
function handleGenericQuestion(text) {
  const t = text.toLowerCase();

  if (t.includes("adresse") || (t.includes("où") && t.includes("spa"))) {
    addMessage(
      "Les finales se jouent à La Fraineuse : Avenue Amédée Hesse 39, 4900 Spa."
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

// ----------------------
// Détection équipe dans la question
// ----------------------
function detectTeamQuery(text) {
  const t = text.toLowerCase();

  // on cherche des mots-clés typiques d’une question par équipe
  if (
    t.includes("quand joue") ||
    t.includes("horaire") ||
    t.includes("à quelle heure") ||
    t.includes("a quelle heure")
  ) {
    return true;
  }
  return false;
}

function extractTeamName(text) {
  // approche simple : on enlève les mots fréquents et on garde le reste
  let t = text
    .toLowerCase()
    .replace("quand joue", "")
    .replace("quand est-ce que", "")
    .replace("quand est ce que", "")
    .replace("à quelle heure", "")
    .replace("a quelle heure", "")
    .replace("horaire", "")
    .replace("de", "")
    .replace("le", "")
    .replace("la", "")
    .replace("les", "")
    .replace("l'", "")
    .trim();

  return t;
}

function handleTeamQuestion(text) {
  const equipe = extractTeamName(text);
  if (!equipe || equipe.length < 3) {
    addMessage(
      "Tu peux me dire le nom de l’équipe dont tu veux l’horaire ?"
    );
    return;
  }

  // on regarde si la personne précise déjà samedi/dimanche
  const t = text.toLowerCase();
  let jour = null;
  if (t.includes("samedi")) jour = "samedi";
  if (t.includes("dimanche")) jour = "dimanche";

  if (!jour) {
    // on demande le jour
    pendingClarification = { type: "equipe-jour", data: { equipe } };
    addMessage(
      `Tu veux l’horaire de ${equipe} pour le samedi ou pour le dimanche ?`
    );
    return;
  }

  const res = searchMatchesByTeam(equipe, jour);
  addMessage(formatMatchesList(res));
}

// ----------------------
// SUBMIT
// ----------------------
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

  // questions par équipe
  if (detectTeamQuery(text)) {
    handleTeamQuestion(text);
    return;
  }

  // questions plus générales
  handleGenericQuestion(text);
});