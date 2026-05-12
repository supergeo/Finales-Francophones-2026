// ----------------------
// DONNÉES DE BASE
// ----------------------

// Matches (samedi + dimanche) extraits des PDF
// jour: "samedi" | "dimanche"
// heure: "HH:MM"
// terrain: "T1"..."T8"
// equipes: "EquipeA - EquipeB" ou libellé
// type: "finale" | "placement" | undefined
// categorie: "U11F", "U13G", "U15F", "U17G", "U17F", "U19F", "U19G" | undefined

const matches = [
  // DIMANCHE
  { jour: "dimanche", heure: "09:00", terrain: "T1", equipes: "Thimister - Limal" },
  { jour: "dimanche", heure: "09:00", terrain: "T2", equipes: "Gedinne - Tchalou" },
  { jour: "dimanche", heure: "09:00", terrain: "T3", equipes: "Waremme - Chaumont" },
  { jour: "dimanche", heure: "09:00", terrain: "T4", equipes: "Waremme - Chaumont" },
  { jour: "dimanche", heure: "09:00", terrain: "T5", equipes: "Tchalou - Ciney" },
  { jour: "dimanche", heure: "09:00", terrain: "T6", equipes: "Waremme - Namur" },
  { jour: "dimanche", heure: "09:00", terrain: "T7", equipes: "Chaumont - La Louvière" },
  { jour: "dimanche", heure: "09:00", terrain: "T8", equipes: "Bertrix - S Eupen" },

  { jour: "dimanche", heure: "10:00", terrain: "T1", equipes: "Ixelles - Thimister" },
  { jour: "dimanche", heure: "10:00", terrain: "T2", equipes: "S Eupen - Gedinne" },
  { jour: "dimanche", heure: "10:15", terrain: "T3", equipes: "Ohey - Soignies" },
  { jour: "dimanche", heure: "10:15", terrain: "T4", equipes: "Bouillon - Waremme" },
  { jour: "dimanche", heure: "10:15", terrain: "T5", equipes: "Ixelles - Tchalou" },
  { jour: "dimanche", heure: "10:15", terrain: "T6", equipes: "S Brussels - Waremme" },
  { jour: "dimanche", heure: "10:15", terrain: "T7", equipes: "La Louvière - Bertrix" },
  { jour: "dimanche", heure: "10:15", terrain: "T8", equipes: "S Eupen - Chaumont" },

  { jour: "dimanche", heure: "11:00", terrain: "T1", equipes: "Limal - Ixelles" },
  { jour: "dimanche", heure: "11:00", terrain: "T2", equipes: "Tchalou - S Eupen" },
  { jour: "dimanche", heure: "11:30", terrain: "T3", equipes: "Bouillon - Waremme" },
  { jour: "dimanche", heure: "11:30", terrain: "T4", equipes: "Chaumont - Bouillon" },
  { jour: "dimanche", heure: "11:30", terrain: "T5", equipes: "Ciney - Ixelles" },
  { jour: "dimanche", heure: "11:30", terrain: "T6", equipes: "Namur - S Brussels" },
  { jour: "dimanche", heure: "11:30", terrain: "T7", equipes: "La Louvière - S Eupen" },
  { jour: "dimanche", heure: "11:30", terrain: "T8", equipes: "Chaumont - Bertrix" },

  { jour: "dimanche", heure: "12:00", terrain: "T1", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:00", terrain: "T2", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "12:45", terrain: "T3", equipes: "F Uccle - Ohey" },
  { jour: "dimanche", heure: "12:45", terrain: "T4", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "12:45", terrain: "T5", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:45", terrain: "T6", equipes: "5è place", type: "placement" },
  { jour: "dimanche", heure: "12:45", terrain: "T7", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "12:45", terrain: "T8", equipes: "2è B - 1er A" },

  { jour: "dimanche", heure: "13:00", terrain: "T1", equipes: "5è place", type: "placement" },
  { jour: "dimanche", heure: "13:00", terrain: "T2", equipes: "3è place U11", type: "placement", categorie: "U11F" },

  { jour: "dimanche", heure: "14:00", terrain: "T1", equipes: "Finale U11", type: "finale", categorie: "U11F" },
  { jour: "dimanche", heure: "14:00", terrain: "T3", equipes: "Chaumont - Bouillon" },
  { jour: "dimanche", heure: "14:00", terrain: "T4", equipes: "Soignies - F Uccle" },
  { jour: "dimanche", heure: "14:00", terrain: "T5", equipes: "5è place", type: "placement" },
  { jour: "dimanche", heure: "14:00", terrain: "T6", equipes: "Tchalou - Romedenne" },
  { jour: "dimanche", heure: "14:00", terrain: "T7", equipes: "3è place", type: "placement" },
  { jour: "dimanche", heure: "14:00", terrain: "T8", equipes: "Waremme - Chaumont" },

  { jour: "dimanche", heure: "15:00", terrain: "T1", equipes: "Finale U15 F", type: "finale", categorie: "U15F" },

  { jour: "dimanche", heure: "15:15", terrain: "T3", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "15:15", terrain: "T4", equipes: "2è A - 1er B" },
  { jour: "dimanche", heure: "15:15", terrain: "T5", equipes: "3è place", type: "placement" },
  { jour: "dimanche", heure: "15:15", terrain: "T6", equipes: "Ixelles - Tchalou" },
  { jour: "dimanche", heure: "15:15", terrain: "T8", equipes: "Bertrix - Waremme" },

  { jour: "dimanche", heure: "16:30", terrain: "T3", equipes: "3è place", type: "placement" },
  { jour: "dimanche", heure: "16:30", terrain: "T4", equipes: "5è place", type: "placement" },
  { jour: "dimanche", heure: "16:30", terrain: "T6", equipes: "Romedenne - Ixelles" },
  { jour: "dimanche", heure: "16:30", terrain: "T8", equipes: "Chaumont - Waremme" },

  { jour: "dimanche", heure: "17:00", terrain: "T1", equipes: "Finale U17 G", type: "finale", categorie: "U17G" },

  { jour: "dimanche", heure: "17:45", terrain: "T3", equipes: "Finale" },
  { jour: "dimanche", heure: "17:45", terrain: "T6", equipes: "2è B - 1er A" },
  { jour: "dimanche", heure: "17:45", terrain: "T7", equipes: "5è place", type: "placement" },
  { jour: "dimanche", heure: "17:45", terrain: "T8", equipes: "2è A - 1er B" },

  { jour: "dimanche", heure: "19:30", terrain: "T1", equipes: "Finale U19 F", type: "finale", categorie: "U19F" },
  { jour: "dimanche", heure: "19:30", terrain: "T5", equipes: "3è place", type: "placement" },

  // SAMEDI
  { jour: "samedi", heure: "09:00", terrain: "T1", equipes: "Waremme - Chaumont" },
  { jour: "samedi", heure: "09:00", terrain: "T2", equipes: "Nalinnes - Le Roux" },
  { jour: "samedi", heure: "09:00", terrain: "T3", equipes: "Thimister - Romedenne" },
  { jour: "samedi", heure: "09:00", terrain: "T4", equipes: "Tchalou - BEVC" },
  { jour: "samedi", heure: "09:00", terrain: "T5", equipes: "Tchalou - Waremme" },
  { jour: "samedi", heure: "09:00", terrain: "T6", equipes: "Nalinnes - F Uccle" },
  { jour: "samedi", heure: "09:00", terrain: "T7", equipes: "Jemeppe - Waremme" },
  { jour: "samedi", heure: "09:00", terrain: "T8", equipes: "Chaumont - Romedenne" },

  { jour: "samedi", heure: "10:15", terrain: "T1", equipes: "Nalinnes - Waremme" },
  { jour: "samedi", heure: "10:15", terrain: "T2", equipes: "Le Roux - Chaumont" },
  { jour: "samedi", heure: "10:15", terrain: "T3", equipes: "Nivelles - Thimister" },
  { jour: "samedi", heure: "10:15", terrain: "T4", equipes: "Libramont - Tchalou" },
  { jour: "samedi", heure: "10:15", terrain: "T5", equipes: "S Brussels - Tchalou" },
  { jour: "samedi", heure: "10:00", terrain: "T6", equipes: "Jemeppe - Nalinnes" },
  { jour: "samedi", heure: "10:00", terrain: "T7", equipes: "Waremme - Guibertin" },
  { jour: "samedi", heure: "10:15", terrain: "T8", equipes: "Stabulois - Chaumont" },

  { jour: "samedi", heure: "11:30", terrain: "T1", equipes: "Chaumont - Nalinnes" },
  { jour: "samedi", heure: "11:30", terrain: "T2", equipes: "Waremme - Le Roux" },
  { jour: "samedi", heure: "11:30", terrain: "T3", equipes: "Romedenne - Nivelles" },
  { jour: "samedi", heure: "11:30", terrain: "T4", equipes: "BEVC - Libramont" },
  { jour: "samedi", heure: "11:30", terrain: "T5", equipes: "Waremme - S Brussels" },
  { jour: "samedi", heure: "11:00", terrain: "T6", equipes: "F Uccle - Jemeppe" },
  { jour: "samedi", heure: "11:00", terrain: "T7", equipes: "Nalinnes - Guibertin" },
  { jour: "samedi", heure: "11:30", terrain: "T8", equipes: "Romedenne - Stabulois" },

  { jour: "samedi", heure: "12:45", terrain: "T1", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "12:45", terrain: "T2", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "12:45", terrain: "T3", equipes: "2è A - 1er B" },
  { jour: "samedi", heure: "12:45", terrain: "T4", equipes: "Waremme - Libramont" },
  { jour: "samedi", heure: "12:00", terrain: "T6", equipes: "F Uccle - Waremme" },
  { jour: "samedi", heure: "12:00", terrain: "T7", equipes: "Guibertin - Jemeppe" },
  { jour: "samedi", heure: "12:45", terrain: "T8", equipes: "La Louvière - Chaumont" },

  { jour: "samedi", heure: "14:00", terrain: "T1", equipes: "2è A - 1er B" },
  { jour: "samedi", heure: "14:00", terrain: "T2", equipes: "3è place", type: "placement" },
  { jour: "samedi", heure: "14:00", terrain: "T3", equipes: "5è place", type: "placement" },
  { jour: "samedi", heure: "14:00", terrain: "T4", equipes: "S Brussels - Waremme" },
  { jour: "samedi", heure: "13:00", terrain: "T6", equipes: "Waremme - Nalinnes" },
  { jour: "samedi", heure: "13:00", terrain: "T7", equipes: "Guibertin - F Uccle" },
  { jour: "samedi", heure: "14:00", terrain: "T8", equipes: "Namur - La Louvière" },

  { jour: "samedi", heure: "15:30", terrain: "T1", equipes: "Finale U17", type: "finale", categorie: "U17F" },
  { jour: "samedi", heure: "15:15", terrain: "T3", equipes: "Finale" },
  { jour: "samedi", heure: "15:15", terrain: "T5", equipes: "Libramont - S Brussels" },
  { jour: "samedi", heure: "14:00", terrain: "T6", equipes: "5è place", type: "placement" },
  { jour: "samedi", heure: "15:15", terrain: "T8", equipes: "Chaumont - Namur" },

  { jour: "samedi", heure: "18:00", terrain: "T1", equipes: "3è place U19 G", type: "placement", categorie: "U19G" },
  { jour: "samedi", heure: "16:30", terrain: "T5", equipes: "2è B - 1er A" },
  { jour: "samedi", heure: "15:30", terrain: "T6", equipes: "3è place", type: "placement" },
  { jour: "samedi", heure: "16:30", terrain: "T7", equipes: "5è place", type: "placement" },
  { jour: "samedi", heure: "16:30", terrain: "T8", equipes: "2è A - 1er B" },

  { jour: "samedi", heure: "19:30", terrain: "T1", equipes: "Finale U19 G", type: "finale", categorie: "U19G" },
];

// Catégories (données PDF dimanche)
const categoriesData = [
  { code: "U11F", label: "Pupilles Filles U11F", equipes: 6, filet: "2,10 m", matchs: 11 },
  { code: "U13G", label: "Min Garçons U13G", equipes: 6, filet: "2,14 m", matchs: 11 },
  { code: "U15F", label: "Cadettes Filles U15F", equipes: 6, filet: "2,14 m", matchs: 11 },
  { code: "U17G", label: "Scol Garçons U17G", equipes: 7, filet: "2,35 m", matchs: 14 },
  { code: "U19F", label: "Juniors Filles U19F", equipes: 6, filet: "2,24 m", matchs: 11 },
  // Samedi (autres catégories)
  { code: "U11G", label: "Pupilles U11 Garçons", equipes: 3, filet: "2,10 m", matchs: 6 },
  { code: "U13F", label: "Min U13 Filles", equipes: 6, filet: "2,10 m", matchs: 11 },
  { code: "U15G", label: "Cadets U15 Garçons", equipes: 6, filet: "2,24 m", matchs: 10 },
  { code: "U17F", label: "Scol U17 Filles", equipes: 6, filet: "2,18 m", matchs: 11 },
  { code: "U19G", label: "Juniors U19 Garçons", equipes: 6, filet: "2,43 m", matchs: 11 },
];

// Finales par catégorie
const finalesByCategorie = {
  U11F: { jour: "dimanche", heure: "14:00", terrain: "T1", description: "Finale U11 filles le dimanche à 14h00 sur T1." },
  U15F: { jour: "dimanche", heure: "15:00", terrain: "T1", description: "Finale U15 filles le dimanche à 15h00 sur T1." },
  U17G: { jour: "dimanche", heure: "17:00", terrain: "T1", description: "Finale U17 garçons le dimanche à 17h00 sur T1." },
  U19F: { jour: "dimanche", heure: "19:30", terrain: "T1", description: "Finale U19 filles le dimanche à 19h30 sur T1." },
  U17F: { jour: "samedi", heure: "15:30", terrain: "T1", description: "Finale U17 filles le samedi à 15h30 sur T1." },
  U19G: { jour: "samedi", heure: "19:30", terrain: "T1", description: "Finale U19 garçons le samedi à 19h30 sur T1." },
};

// Liste des équipes (extraites des matches)
const equipesSet = new Set();
matches.forEach(m => {
  const parts = m.equipes.split("-");
  if (parts.length === 2) {
    equipesSet.add(parts[0].trim());
    equipesSet.add(parts[1].trim());
  }
});
const equipesList = Array.from(equipesSet).sort();

// ----------------------
// UTILITAIRES
// ----------------------

function createMatchCard(m) {
  const div = document.createElement("div");
  div.className = "match-card";
  div.innerHTML = `
    <div class="match-time">${m.heure} • ${m.terrain} • ${m.jour}</div>
    <div>${m.equipes}</div>
    ${m.type === "finale" ? `<div><strong>Finale ${m.categorie || ""}</strong></div>` : ""}
  `;
  return div;
}

function filterMatches({ jour = null, terrain = null, equipe = null } = {}) {
  return matches.filter(m => {
    if (jour && m.jour !== jour) return false;
    if (terrain && m.terrain !== terrain) return false;
    if (equipe && !m.equipes.toLowerCase().includes(equipe.toLowerCase())) return false;
    return true;
  });
}

// ----------------------
// RENDU DES PAGES
// ----------------------

// Accueil : panneaux samedi/dimanche/terrains
const panelSamedi = document.getElementById("panel-samedi");
const panelDimanche = document.getElementById("panel-dimanche");
const panelTerrains = document.getElementById("panel-terrains");

function renderAccueilPanels() {
  // Samedi
  panelSamedi.innerHTML = "<h2>Horaires samedi 16 mai</h2>";
  filterMatches({ jour: "samedi" }).forEach(m => {
    panelSamedi.appendChild(createMatchCard(m));
  });

  // Dimanche
  panelDimanche.innerHTML = "<h2>Horaires dimanche 17 mai</h2>";
  filterMatches({ jour: "dimanche" }).forEach(m => {
    panelDimanche.appendChild(createMatchCard(m));
  });

  // Terrains (résumé)
  panelTerrains.innerHTML = "<h2>Terrains</h2><p>Les matchs se jouent sur T1 à T8, répartis dans les différents halls.</p>";
}
renderAccueilPanels();

// Page Catégories
const pageCategories = document.getElementById("categories");
function renderCategoriesPage() {
  pageCategories.innerHTML = "<h2>Catégories</h2>";
  categoriesData.forEach(cat => {
    const div = document.createElement("div");
    div.className = "match-card";
    div.innerHTML = `
      <div><strong>${cat.label}</strong> (${cat.code})</div>
      <div>Équipes : ${cat.equipes}</div>
      <div>Hauteur de filet : ${cat.filet}</div>
      <div>Nombre de matchs : ${cat.matchs}</div>
    `;
    pageCategories.appendChild(div);
  });
}
renderCategoriesPage();

// Page Équipes
const pageEquipes = document.getElementById("equipes");
function renderEquipesPage() {
  pageEquipes.innerHTML = "<h2>Équipes</h2>";
  equipesList.forEach(eq => {
    const div = document.createElement("div");
    div.className = "match-card";
    div.style.cursor = "pointer";
    div.innerHTML = `<div><strong>${eq}</strong></div><div style="font-size:0.8rem;color:#555;">Voir les matchs</div>`;
    div.addEventListener("click", () => {
      showEquipeMatches(eq);
    });
    pageEquipes.appendChild(div);
  });
}
function showEquipeMatches(eq) {
  pageEquipes.innerHTML = `<h2>Matchs de ${eq}</h2>`;
  const list = filterMatches({ equipe: eq });
  if (!list.length) {
    pageEquipes.innerHTML += "<p>Aucun match trouvé pour cette équipe.</p>";
    return;
  }
  list.forEach(m => pageEquipes.appendChild(createMatchCard(m)));
  const back = document.createElement("button");
  back.textContent = "← Retour à la liste des équipes";
  back.style.marginTop = "0.5rem";
  back.onclick = renderEquipesPage;
  pageEquipes.appendChild(back);
}
renderEquipesPage();

// Page Horaires (tous les matchs)
const pageHoraires = document.getElementById("horaires");
function renderHorairesPage() {
  pageHoraires.innerHTML = "<h2>Horaires complets</h2>";

  const hSam = document.createElement("h3");
  hSam.textContent = "Samedi 16 mai";
  pageHoraires.appendChild(hSam);
  filterMatches({ jour: "samedi" }).forEach(m => pageHoraires.appendChild(createMatchCard(m)));

  const hDim = document.createElement("h3");
  hDim.textContent = "Dimanche 17 mai";
  pageHoraires.appendChild(hDim);
  filterMatches({ jour: "dimanche" }).forEach(m => pageHoraires.appendChild(createMatchCard(m)));
}
renderHorairesPage();

// Page Terrains
const pageTerrains = document.getElementById("terrains");
function renderTerrainsPage() {
  pageTerrains.innerHTML = "<h2>Matchs par terrain</h2>";
  const terrains = ["T1","T2","T3","T4","T5","T6","T7","T8"];
  terrains.forEach(t => {
    const h = document.createElement("h3");
    h.textContent = t;
    pageTerrains.appendChild(h);
    const list = matches.filter(m => m.terrain === t);
    if (!list.length) {
      const p = document.createElement("p");
      p.textContent = "Aucun match sur ce terrain.";
      pageTerrains.appendChild(p);
    } else {
      list.forEach(m => pageTerrains.appendChild(createMatchCard(m)));
    }
  });
}
renderTerrainsPage();

// ----------------------
// NAVIGATION ENTRE PAGES
// ----------------------
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  const page = document.getElementById(id);
  if (page) page.classList.add("active");
  navButtons.forEach(b => b.classList.remove("active"));
  navButtons.forEach(b => {
    if (b.getAttribute("data-target") === id) b.classList.add("active");
  });
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    showPage(target);
  });
});

// ----------------------
// ASSISTANT
// ----------------------
const form = document.getElementById("assistant-form");
const input = document.getElementById("assistant-input");
const messagesBox = document.getElementById("assistant-messages");

let pendingClarification = null; // { type, data }

function addMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.className = "msg " + (from === "bot" ? "msg-bot" : "msg-user");
  div.innerHTML = text;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function detectCategorie(text) {
  const t = text.toUpperCase();
  if (t.includes("U11")) return "U11";
  if (t.includes("U13")) return "U13";
  if (t.includes("U15")) return "U15";
  if (t.includes("U17")) return "U17";
  if (t.includes("U19")) return "U19";
  return null;
}

function handleFinaleQuestion(text) {
  const base = detectCategorie(text);
  const t = text.toLowerCase();

  if (!base) {
    pendingClarification = { type: "finale", data: {} };
    addMessage("Tu parles de quelle finale exactement ? U11, U13, U15, U17 ou U19 ?");
    return;
  }

  if (!t.includes("gar") && !t.includes("masc") && !t.includes("fill") && !t.includes("fem")) {
    pendingClarification = { type: "finale-genre", data: { base } };
    addMessage(`Pour la catégorie ${base}, tu parles des filles ou des garçons ?`);
    return;
  }

  let key = null;
  if (t.includes("gar") || t.includes("masc")) key = base + "G";
  if (t.includes("fill") || t.includes("fem")) key = base + "F";

  if (key && finalesByCategorie[key]) {
    addMessage(finalesByCategorie[key].description);
  } else {
    addMessage("Je ne trouve pas de finale précise pour cette catégorie dans le programme.");
  }
}

function searchMatchesByTeam(query, jourPref = null) {
  const q = query.toLowerCase();
  return matches.filter(m => {
    if (jourPref && m.jour !== jourPref) return false;
    return m.equipes.toLowerCase().includes(q);
  });
}

function formatMatchesList(list) {
  if (!list.length) return "Je ne trouve pas de match correspondant à cette équipe dans le programme.";
  const max = 6;
  const sliced = list.slice(0, max);
  let txt = "Voici ce que je trouve :<br>";
  sliced.forEach(m => {
    txt += `• ${m.jour} à ${m.heure} sur ${m.terrain} : ${m.equipes}<br>`;
  });
  if (list.length > max) txt += `… et encore ${list.length - max} autre(s) match(s).`;
  return txt;
}

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
    if (t.includes("gar") || t.includes("masc") || t.includes("g")) key = base + "G";
    if (t.includes("fill") || t.includes("fem") || t.includes("f")) key = base + "F";
    pendingClarification = null;
    if (key && finalesByCategorie[key]) {
      addMessage(finalesByCategorie[key].description);
    } else {
      addMessage("Je ne trouve pas de finale précise pour cette catégorie dans le programme.");
    }
    return true;
  }

  if (pendingClarification.type === "equipe-jour") {
    const jour = t.includes("samedi") ? "samedi" : t.includes("dimanche") ? "dimanche" : null;
    const equipe = pendingClarification.data.equipe;
    pendingClarification = null;
    if (!jour) {
      addMessage("Tu peux préciser si c’est pour le samedi ou le dimanche ?");
      return true;
    }
    const res = searchMatchesByTeam(equipe, jour);
    addMessage(formatMatchesList(res));
    return true;
  }

  return false;
}

function detectTeamQuery(text) {
  const t = text.toLowerCase();
  return (
    t.includes("quand joue") ||
    t.includes("horaire") ||
    t.includes("à quelle heure") ||
    t.includes("a quelle heure")
  );
}

function extractTeamName(text) {
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
    addMessage("Tu peux me dire le nom de l’équipe dont tu veux l’horaire ?");
    return;
  }
  const t = text.toLowerCase();
  let jour = null;
  if (t.includes("samedi")) jour = "samedi";
  if (t.includes("dimanche")) jour = "dimanche";

  if (!jour) {
    pendingClarification = { type: "equipe-jour", data: { equipe } };
    addMessage(`Tu veux l’horaire de ${equipe} pour le samedi ou pour le dimanche ?`);
    return;
  }

  const res = searchMatchesByTeam(equipe, jour);
  addMessage(formatMatchesList(res));
}

function handleGenericQuestion(text) {
  const t = text.toLowerCase();

  if (t.includes("adresse") || (t.includes("où") && t.includes("spa"))) {
    addMessage("Les finales se jouent à La Fraineuse : Avenue Amédée Hesse 39, 4900 Spa.");
    return;
  }
  if (t.includes("prix") || t.includes("entrée") || t.includes("entree")) {
    addMessage("L’entrée est à 5€ pour la journée.");
    return;
  }
  if (t.includes("parking")) {
    addMessage("Un parking est disponible à proximité du site, avec une signalisation sur place.");
    return;
  }
  if (t.includes("buvette") || t.includes("boire") || t.includes("manger")) {
    addMessage("Une buvette et une petite restauration sont disponibles sur place toute la journée.");
    return;
  }

  addMessage("Je ne suis pas sûr de bien comprendre ta question. Tu peux reformuler ou préciser un peu ?");
}

// Submit assistant
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";

  if (handleClarification(text)) return;

  const t = text.toLowerCase();

  if (t.includes("finale")) {
    handleFinaleQuestion(text);
    return;
  }

  if (detectTeamQuery(text)) {
    handleTeamQuestion(text);
    return;
  }

  handleGenericQuestion(text);
});