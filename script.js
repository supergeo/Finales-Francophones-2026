// --- Données matches (extraits des PDF, simplifiés) ---

const samediMatches = [
  { time: "9h00", terrain: "T1", teams: "Waremme - Chaumont", extra: "Hall 1" },
  { time: "9h00", terrain: "T2", teams: "Nalinnes - Le Roux", extra: "Hall 1" },
  { time: "9h00", terrain: "T3", teams: "Thimister - Romedenne", extra: "Hall 2" },
  { time: "9h00", terrain: "T4", teams: "Tchalou - BEVC", extra: "Hall 2" },
  { time: "9h00", terrain: "T5", teams: "Tchalou - Waremme", extra: "Hall 2" },
  { time: "9h00", terrain: "T6", teams: "Nalinnes - F Uccle", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T7", teams: "Jemeppe - Waremme", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T8", teams: "Chaumont - Romedenne", extra: "Hall ADEPS" },
  { time: "10h15", terrain: "T1", teams: "Nalinnes - Waremme" },
  { time: "10h15", terrain: "T2", teams: "Le Roux - Chaumont" },
  { time: "11h30", terrain: "T1", teams: "Chaumont - Nalinnes" },
  { time: "11h30", terrain: "T2", teams: "Waremme - Le Roux" },
  { time: "15h30", terrain: "T1/T2", teams: "Finale U17", extra: "T1-T2 central" },
  { time: "18h00", terrain: "T1/T2", teams: "3e place U19G" },
  { time: "19h30", terrain: "T1/T2", teams: "Finale U19G" }
];

const dimancheMatches = [
  { time: "9h00", terrain: "T1", teams: "Thimister - Limal", extra: "Hall 1" },
  { time: "9h00", terrain: "T2", teams: "Gedinne - Tchalou", extra: "Hall 1" },
  { time: "9h00", terrain: "T3", teams: "Waremme - Chaumont", extra: "Hall 2" },
  { time: "9h00", terrain: "T5", teams: "Tchalou - Ciney", extra: "Hall 2" },
  { time: "9h00", terrain: "T6", teams: "Waremme - Namur", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T7", teams: "Chaumont - La Louvière", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T8", teams: "Bertrix - S Eupen", extra: "Hall ADEPS" },
  { time: "15h00", terrain: "T1/T2", teams: "Finale U15 F" },
  { time: "17h00", terrain: "T1/T2", teams: "Finale U17 G" },
  { time: "19h30", terrain: "T1/T2", teams: "Finale U19 F" }
];

// --- Catégories ---
const categories = [
  { label: "Pupilles U11 Garçons", filet: "2,10 m", matchs: 6 },
  { label: "Min U13 Filles", filet: "2,10 m", matchs: 11 },
  { label: "Cadets U15 Garçons", filet: "2,24 m", matchs: 10 },
  { label: "Scol U17 Filles", filet: "2,18 m", matchs: 11 },
  { label: "Juniors U19 Garçons", filet: "2,43 m", matchs: 11 },
  { label: "Pupilles U11 Filles", filet: "2,10 m", matchs: 11 },
  { label: "Min U13 Garçons", filet: "2,14 m", matchs: 11 },
  { label: "Cadettes U15 Filles", filet: "2,14 m", matchs: 11 },
  { label: "Scol U17 Garçons", filet: "2,35 m", matchs: 14 },
  { label: "Juniors U19 Filles", filet: "2,24 m", matchs: 11 }
];

// --- Navigation ---
const navButtons = document.querySelectorAll("nav button, .card-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    if (!target) return;
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// --- Rendu des matchs ---
function renderMatches(list, containerId, filterValue = "") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const filter = filterValue.toLowerCase();

  list
    .filter(m =>
      !filter ||
      m.time.toLowerCase().includes(filter) ||
      m.terrain.toLowerCase().includes(filter) ||
      m.teams.toLowerCase().includes(filter)
    )
    .forEach(m => {
      const div = document.createElement("div");
      div.className = "match-card";
      div.innerHTML = `
        <div class="match-time">${m.time} – ${m.terrain}</div>
        <div class="match-teams">${m.teams}</div>
        ${m.extra ? `<div class="match-extra">${m.extra}</div>` : ""}
      `;
      container.appendChild(div);
    });
}

renderMatches(samediMatches, "samedi-list");
renderMatches(dimancheMatches, "dimanche-list");

document.getElementById("filter-samedi").addEventListener("input", e =>
  renderMatches(samediMatches, "samedi-list", e.target.value)
);

document.getElementById("filter-dimanche").addEventListener("input", e =>
  renderMatches(dimancheMatches, "dimanche-list", e.target.value)
);

// --- Catégories ---
const catContainer = document.getElementById("categories-list");
categories.forEach(c => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${c.label}</h3>
    <p>Hauteur de filet : <strong>${c.filet}</strong></p>
    <p>Nombre de matchs : ${c.matchs}</p>
  `;
  catContainer.appendChild(div);
});

// --- EXTRACTION AUTOMATIQUE DES ÉQUIPES ---
function extractTeams() {
  const all = [...samediMatches, ...dimancheMatches];
  const set = new Set();

  all.forEach(m => {
    const parts = m.teams.split("-");
    if (parts.length === 2) {
      set.add(parts[0].trim());
      set.add(parts[1].trim());
    }
  });

  return Array.from(set).sort();
}

const equipes = extractTeams();
const equipesButtons = document.getElementById("equipes-buttons");
const equipesResult = document.getElementById("equipes-result");

// Boutons d’équipes
equipes.forEach(eq => {
  const btn = document.createElement("button");
  btn.className = "card-btn";
  btn.textContent = eq;
  btn.addEventListener("click", () => showEquipe(eq));
  equipesButtons.appendChild(btn);
});

// Affichage des matchs d’une équipe
function showEquipe(eq) {
  equipesResult.innerHTML = `<h3>Matchs de ${eq}</h3>`;
  const all = [...samediMatches, ...dimancheMatches];
  const list = all.filter(m => m.teams.includes(eq));

  if (list.length === 0) {
    equipesResult.innerHTML += "<p>Aucun match trouvé.</p>";
    return;
  }

  list.forEach(m => {
    const div = document.createElement("div");
    div.className = "match-card";
    div.innerHTML = `
      <div class="match-time">${m.time} – ${m.terrain}</div>
      <div class="match-teams">${m.teams}</div>
      ${m.extra ? `<div class="match-extra">${m.extra}</div>` : ""}
    `;
    equipesResult.appendChild(div);
  });
}

// --- Assistant intelligent ---
const assistantLog = document.getElementById("assistant-log");
const assistantInput = document.getElementById("assistant-question");
const assistantSend = document.getElementById("assistant-send");

function addMsg(type, text) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.innerHTML = `<span>${text}</span>`;
  assistantLog.appendChild(div);
  assistantLog.scrollTop = assistantLog.scrollHeight;
}

function smartSearch(query) {
  const q = query.toLowerCase();
  const all = [...samediMatches, ...dimancheMatches];

  // 1) Recherche par équipe
  const team = equipes.find(e => q.includes(e.toLowerCase()));
  if (team) return all.filter(m => m.teams.toLowerCase().includes(team.toLowerCase()));

  // 2) Recherche par terrain
  const terrains = ["t1","t2","t3","t4","t5","t6","t7","t8"];
  const terrain = terrains.find(t => q.includes(t));
  if (terrain) return all.filter(m => m.terrain.toLowerCase() ===