/* ============================
   VARIABLES GLOBALES
============================ */

let currentSection = "home";
let currentHall = "hall1";
let currentHallDay = "samedi";

let terrainsData = {};
let equipesData = {};
let categoriesData = {};
let scoresData = {};

/* ============================
   NAVIGATION ENTRE SECTIONS
============================ */

document.querySelectorAll(".home-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    showSection(target);
  });
});

document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    showSection(target);
  });
});

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  currentSection = id;
}

/* ============================
   CHARGEMENT DES DONNÉES JSON
============================ */

async function loadJSON() {
  try {
    const terrains = await fetch("data/terrains.json").then(r => r.json());
    const equipes = await fetch("data/equipes.json").then(r => r.json());
    const categories = await fetch("data/categories.json").then(r => r.json());
    const scores = await fetch("data/scores.json").then(r => r.json());

    terrainsData = terrains;
    equipesData = equipes;
    categoriesData = categories;
    scoresData = scores;

    renderAllTerrains();
    renderEquipes();
    renderCategories();
    renderScores();

  } catch (err) {
    console.error("Erreur JSON :", err);
  }
}

loadJSON();

/* ============================
   AFFICHAGE DES MATCHS PAR TERRAIN
============================ */

function renderAllTerrains() {
  Object.keys(terrainsData).forEach(key => {
    const container = document.getElementById(key);
    if (!container) return;

    container.innerHTML = terrainsData[key]
      .map(match => formatMatch(match))
      .join("");
  });
}

function formatMatch(match) {
  const score = scoresData[match.id] || "";
  return `
    <div class="match-card" data-id="${match.id}">
      <div><strong>${match.heure}</strong></div>
      <div>${match.equipeA} vs ${match.equipeB}</div>
      <div class="match-score">${score || "-"}</div>
      <button class="btn-score" data-id="${match.id}">Encoder</button>
    </div>
  `;
}

/* ============================
   OUVERTURE MODALE SCORE
============================ */

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-score")) {
    const id = e.target.dataset.id;
    openScoreModal(id);
  }
});

function openScoreModal(id) {
  const modal = document.getElementById("score-modal");
  const label = document.getElementById("score-match");

  const match = findMatchById(id);
  label.textContent = `${match.equipeA} vs ${match.equipeB}`;

  modal.dataset.id = id;
  modal.classList.remove("hidden");
}

function findMatchById(id) {
  for (const key in terrainsData) {
    const found = terrainsData[key].find(m => m.id === id);
    if (found) return found;
  }
  return null;
}
/* ============================
   FERMETURE MODALE SCORE
============================ */

document.getElementById("score-close").addEventListener("click", () => {
  document.getElementById("score-modal").classList.add("hidden");
});

/* ============================
   ENREGISTREMENT DU SCORE
============================ */

document.getElementById("score-save").addEventListener("click", () => {
  const modal = document.getElementById("score-modal");
  const id = modal.dataset.id;
  const score = document.getElementById("score-select").value;

  if (!score) {
    alert("Choisis un score !");
    return;
  }

  scoresData[id] = score;
  saveScores();
  renderScores();
  renderAllTerrains();

  modal.classList.add("hidden");
});

function saveScores() {
  localStorage.setItem("scoresData", JSON.stringify(scoresData));
}

function loadScores() {
  const saved = localStorage.getItem("scoresData");
  if (saved) scoresData = JSON.parse(saved);
}

loadScores();

/* ============================
   TABLEAU DES SCORES
============================ */

function renderScores() {
  const container = document.getElementById("scores");
  if (!container) return;

  let html = `<h2>Tableau des scores</h2>`;

  Object.keys(scoresData).forEach(id => {
    const match = findMatchById(id);
    if (!match) return;

    html += `
      <div class="score-row">
        <span>${match.equipeA} vs ${match.equipeB}</span>
        <strong>${scoresData[id]}</strong>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* ============================
   CATÉGORIES
============================ */

function renderCategories() {
  const list = document.getElementById("categories");
  if (!list) return;

  list.innerHTML = categoriesData
    .map(cat => `<li>${cat}</li>`)
    .join("");
}

/* ============================
   ÉQUIPES
============================ */

function renderEquipes() {
  const catList = document.getElementById("equipes-categories");
  const eqList = document.getElementById("equipes-list");

  if (!catList || !eqList) return;

  catList.innerHTML = Object.keys(equipesData)
    .map(cat => `<li data-cat="${cat}">${cat}</li>`)
    .join("");

  catList.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const cat = li.dataset.cat;
      showEquipesByCategory(cat);
    });
  });
}

function showEquipesByCategory(cat) {
  const eqList = document.getElementById("equipes-list");
  const detail = document.getElementById("equipe-detail");

  eqList.innerHTML = equipesData[cat]
    .map(eq => `<li data-team="${eq.nom}">${eq.nom}</li>`)
    .join("");

  detail.innerHTML = `<em>Sélectionne une équipe</em>`;

  eqList.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const team = li.dataset.team;
      showEquipeDetail(cat, team);
    });
  });
}

function showEquipeDetail(cat, team) {
  const detail = document.getElementById("equipe-detail");
  const eq = equipesData[cat].find(e => e.nom === team);

  detail.innerHTML = `
    <h4>${eq.nom}</h4>
    <p><strong>Club :</strong> ${eq.club}</p>
    <p><strong>Joueurs :</strong></p>
    <ul>
      ${eq.joueurs.map(j => `<li>${j}</li>`).join("")}
    </ul>
  `;
}
/* ============================
   HALLS — CHANGEMENT DE JOUR
============================ */

document.querySelectorAll(".hall-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".hall-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentHall = btn.dataset.hall;
    currentHallDay = btn.dataset.day;

    renderHall(currentHall, currentHallDay);
  });
});

/* ============================
   HALLS — TRI PAR HEURE / TERRAIN
============================ */

document.querySelectorAll(".sort-btn-hall").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sort-btn-hall").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const hall = btn.dataset.hall;
    const sort = btn.dataset.sort;

    renderHall(hall, currentHallDay, sort);
  });
});

/* ============================
   AFFICHAGE DES HALLS
============================ */

function renderHall(hall, day, sort = "heure") {
  const container = document.getElementById(`${hall}-content`);
  if (!container) return;

  const terrains = {
    "hall1": ["samedi-t1", "samedi-t2", "dimanche-t1", "dimanche-t2"],
    "hall2": ["samedi-t3", "samedi-t4", "samedi-t5", "dimanche-t3", "dimanche-t4", "dimanche-t5"],
    "hall-adeps": ["samedi-t6", "samedi-t7", "samedi-t8", "dimanche-t6", "dimanche-t7", "dimanche-t8"]
  };

  const filtered = terrains[hall].filter(t => t.includes(day));

  let matches = [];

  filtered.forEach(t => {
    terrainsData[t].forEach(m => {
      matches.push({ ...m, terrain: t });
    });
  });

  if (sort === "heure") {
    matches.sort((a, b) => a.heure.localeCompare(b.heure));
  } else {
    matches.sort((a, b) => a.terrain.localeCompare(b.terrain));
  }

  container.innerHTML = matches
    .map(m => `
      <div class="hall-match">
        <div><strong>${m.heure}</strong> — ${m.terrain.toUpperCase()}</div>
        <div>${m.equipeA} vs ${m.equipeB}</div>
        <div class="match-score">${scoresData[m.id] || "-"}</div>
        <button class="btn-score" data-id="${m.id}">Encoder</button>
      </div>
    `)
    .join("");
}
/* ============================
   ÉDITION DES MATCHS (ADMIN)
============================ */

document.querySelectorAll(".edit-terrain").forEach(btn => {
  btn.addEventListener("click", () => {
    const terrain = btn.dataset.terrain;

    const code = prompt("Code admin ?");
    if (code !== "175") {
      alert("Code incorrect");
      return;
    }

    const current = terrainsData[terrain]
      .map(m => `${m.heure} | ${m.equipeA} vs ${m.equipeB}`)
      .join("\n");

    const edited = prompt(
      "Modifie les matchs (format : heure | équipeA vs équipeB)",
      current
    );

    if (!edited) return;

    const lines = edited.split("\n").map(l => l.trim()).filter(l => l !== "");

    terrainsData[terrain] = lines.map((line, index) => {
      const [heure, teams] = line.split("|").map(s => s.trim());
      const [equipeA, equipeB] = teams.split("vs").map(s => s.trim());

      return {
        id: `${terrain}-${index}`,
        heure,
        equipeA,
        equipeB
      };
    });

    saveTerrains();
    renderAllTerrains();
  });
});

function saveTerrains() {
  localStorage.setItem("terrainsData", JSON.stringify(terrainsData));
}

function loadTerrains() {
  const saved = localStorage.getItem("terrainsData");
  if (saved) terrainsData = JSON.parse(saved);
}

loadTerrains();

/* ============================
   FIN DU SCRIPT
============================ */

console.log("Application Finales Francophones 2026 chargée !");
