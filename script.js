/* =========================
   CONFIG & UTILITAIRES
========================= */

const ADMIN_CODE = "175";

function parseTime(t) {
  if (!t) return 0;
  let s = t.replace("h", ":");
  if (!s.includes(":")) s += ":00";
  const [h, m] = s.split(":").map(Number);
  return h * 60 + (m || 0);
}

/* =========================
   DONNÉES MATCHS (PDF)
========================= */

let matches = [

  /* ===== SAMEDI ===== */

  // 9h00
  { id:"S-T1-9h", day:"samedi", terrain:1, time:"9h00", teamA:"Waremme", teamB:"Chaumont" },
  { id:"S-T2-9h", day:"samedi", terrain:2, time:"9h00", teamA:"Nalinnes", teamB:"Le Roux" },
  { id:"S-T3-9h", day:"samedi", terrain:3, time:"9h00", teamA:"Thimister", teamB:"Romedenne" },
  { id:"S-T4-9h", day:"samedi", terrain:4, time:"9h00", teamA:"Tchalou", teamB:"BEVC" },
  { id:"S-T5-9h", day:"samedi", terrain:5, time:"9h00", teamA:"Tchalou", teamB:"Waremme" },
  { id:"S-T6-9h", day:"samedi", terrain:6, time:"9h00", teamA:"Nalinnes", teamB:"F Uccle" },
  { id:"S-T7-9h", day:"samedi", terrain:7, time:"9h00", teamA:"Jemeppe", teamB:"Waremme" },
  { id:"S-T8-9h", day:"samedi", terrain:8, time:"9h00", teamA:"Chaumont", teamB:"Romedenne" },

  // 10h / 10h15
  { id:"S-T1-10h15", day:"samedi", terrain:1, time:"10h15", teamA:"Nalinnes", teamB:"Waremme" },
  { id:"S-T2-10h15", day:"samedi", terrain:2, time:"10h15", teamA:"Le Roux", teamB:"Chaumont" },
  { id:"S-T3-10h15", day:"samedi", terrain:3, time:"10h15", teamA:"Nivelles", teamB:"Thimister" },
  { id:"S-T4-10h15", day:"samedi", terrain:4, time:"10h15", teamA:"Libramont", teamB:"Tchalou" },
  { id:"S-T5-10h15", day:"samedi", terrain:5, time:"10h15", teamA:"S Brussels", teamB:"Tchalou" },
  { id:"S-T6-10h",   day:"samedi", terrain:6, time:"10h00", teamA:"Jemeppe", teamB:"Nalinnes" },
  { id:"S-T7-10h",   day:"samedi", terrain:7, time:"10h00", teamA:"Waremme", teamB:"Guibertin" },
  { id:"S-T8-10h15", day:"samedi", terrain:8, time:"10h15", teamA:"Stabulois", teamB:"Chaumont" },

  // 11h / 11h30
  { id:"S-T1-11h30", day:"samedi", terrain:1, time:"11h30", teamA:"Chaumont", teamB:"Nalinnes" },
  { id:"S-T2-11h30", day:"samedi", terrain:2, time:"11h30", teamA:"Waremme", teamB:"Leroux" },
  { id:"S-T3-11h30", day:"samedi", terrain:3, time:"11h30", teamA:"Romedenne", teamB:"Nivelles" },
  { id:"S-T4-11h30", day:"samedi", terrain:4, time:"11h30", teamA:"BEVC", teamB:"Libramont" },
  { id:"S-T5-11h30", day:"samedi", terrain:5, time:"11h30", teamA:"Waremme", teamB:"S Brussels" },
  { id:"S-T6-11h",   day:"samedi", terrain:6, time:"11h00", teamA:"F Uccle", teamB:"Jemeppe" },
  { id:"S-T7-11h",   day:"samedi", terrain:7, time:"11h00", teamA:"Nalinnes", teamB:"Guibertin" },
  { id:"S-T8-11h30", day:"samedi", terrain:8, time:"11h30", teamA:"Romedenne", teamB:"Stabulois" },

  // 12h / 12h45
  { id:"S-T1-12h45", day:"samedi", terrain:1, time:"12h45", teamA:"2èB", teamB:"1erA" },
  { id:"S-T3-12h45", day:"samedi", terrain:3, time:"12h45", teamA:"2èB", teamB:"1erA" },
  { id:"S-T4-12h45", day:"samedi", terrain:4, time:"12h45", teamA:"2èA", teamB:"1erB" },
  { id:"S-T5-12h45", day:"samedi", terrain:5, time:"12h45", teamA:"Waremme", teamB:"Libramont" },
  { id:"S-T6-12h",   day:"samedi", terrain:6, time:"12h00", teamA:"F Uccle", teamB:"Waremme" },
  { id:"S-T7-12h",   day:"samedi", terrain:7, time:"12h00", teamA:"Guibertin", teamB:"Jemeppe" },
  { id:"S-T8-12h45", day:"samedi", terrain:8, time:"12h45", teamA:"La Louvière", teamB:"Chaumont" },

  // 14h
  { id:"S-T1-14h", day:"samedi", terrain:1, time:"14h00", teamA:"2èA", teamB:"1erB" },
  { id:"S-T3-14h", day:"samedi", terrain:3, time:"14h00", teamA:"3è Place", teamB:"" },
  { id:"S-T4-14h", day:"samedi", terrain:4, time:"14h00", teamA:"5è Place", teamB:"" },
  { id:"S-T5-14h", day:"samedi", terrain:5, time:"14h00", teamA:"S Brussels", teamB:"Waremme" },
  { id:"S-T6-13h", day:"samedi", terrain:6, time:"13h00", teamA:"Waremme", teamB:"Nalinnes" },
  { id:"S-T7-13h", day:"samedi", terrain:7, time:"13h00", teamA:"Guibertin", teamB:"F Uccle" },
  { id:"S-T8-14h", day:"samedi", terrain:8, time:"14h00", teamA:"Namur", teamB:"La Louvière" },

  // 15h / 15h15
  { id:"S-T1-15h30", day:"samedi", terrain:1, time:"15h30", teamA:"Finale U17", teamB:"" },
  { id:"S-T3-15h15", day:"samedi", terrain:3, time:"15h15", teamA:"Finale", teamB:"" },
  { id:"S-T5-15h15", day:"samedi", terrain:5, time:"15h15", teamA:"Libramont", teamB:"S Brussels" },
  { id:"S-T6-14h",   day:"samedi", terrain:6, time:"14h00", teamA:"5è Place", teamB:"" },
  { id:"S-T8-15h15", day:"samedi", terrain:8, time:"15h15", teamA:"Chaumont", teamB:"Namur" },

  // 18h / 16h30 / 15h30
  { id:"S-T1-18h", day:"samedi", terrain:1, time:"18h00", teamA:"3è Place U19G", teamB:"" },
  { id:"S-T5-16h30", day:"samedi", terrain:5, time:"16h30", teamA:"2è B", teamB:"1erA" },
  { id:"S-T6-15h30", day:"samedi", terrain:6, time:"15h30", teamA:"3e Place", teamB:"" },
  { id:"S-T7-16h30", day:"samedi", terrain:7, time:"16h30", teamA:"5è Place", teamB:"" },
  { id:"S-T8-16h30", day:"samedi", terrain:8, time:"16h30", teamA:"2èA", teamB:"1erB" },

  // 19h30
  { id:"S-T1-19h30", day:"samedi", terrain:1, time:"19h30", teamA:"Finale U19G", teamB:"" },

  /* ===== DIMANCHE ===== */

  // 9h00
  { id:"D-T1-9h", day:"dimanche", terrain:1, time:"9h00", teamA:"Thimister", teamB:"Limal" },
  { id:"D-T2-9h", day:"dimanche", terrain:2, time:"9h00", teamA:"Gedinne", teamB:"Tchalou" },
  { id:"D-T3-9h", day:"dimanche", terrain:3, time:"9h00", teamA:"Waremme", teamB:"Chaumont" },
  { id:"D-T4-9h", day:"dimanche", terrain:4, time:"9h00", teamA:"Waremme", teamB:"Chaumont" },
  { id:"D-T5-9h", day:"dimanche", terrain:5, time:"9h00", teamA:"Tchalou", teamB:"Ciney" },
  { id:"D-T6-9h", day:"dimanche", terrain:6, time:"9h00", teamA:"Waremme", teamB:"Namur" },
  { id:"D-T7-9h", day:"dimanche", terrain:7, time:"9h00", teamA:"Chaumont", teamB:"La Louvière" },
  { id:"D-T8-9h", day:"dimanche", terrain:8, time:"9h00", teamA:"Bertrix", teamB:"S Eupen" },

  // 10h / 10h15
  { id:"D-T1-10h", day:"dimanche", terrain:1, time:"10h00", teamA:"Ixelles", teamB:"Thimister" },
  { id:"D-T2-10h", day:"dimanche", terrain:2, time:"10h00", teamA:"S Eupen", teamB:"Gedinne" },
  { id:"D-T3-10h15", day:"dimanche", terrain:3, time:"10h15", teamA:"Ohey", teamB:"Soignies" },
  { id:"D-T4-10h15", day:"dimanche", terrain:4, time:"10h15", teamA:"Bouillon", teamB:"Waremme" },
  { id:"D-T5-10h15", day:"dimanche", terrain:5, time:"10h15", teamA:"Ixelles", teamB:"Tchalou" },
  { id:"D-T6-10h15", day:"dimanche", terrain:6, time:"10h15", teamA:"S Brussels", teamB:"Waremme" },
  { id:"D-T7-10h15", day:"dimanche", terrain:7, time:"10h15", teamA:"La Louvière", teamB:"Bertrix" },
  { id:"D-T8-10h15", day:"dimanche", terrain:8, time:"10h15", teamA:"S Eupen", teamB:"Chaumont" },

  // 11h / 11h30
  { id:"D-T1-11h", day:"dimanche", terrain:1, time:"11h00", teamA:"Limal", teamB:"Ixelles" },
  { id:"D-T2-11h", day:"dimanche", terrain:2, time:"11h00", teamA:"Tchalou", teamB:"S Eupen" },
  { id:"D-T3-11h30", day:"dimanche", terrain:3, time:"11h30", teamA:"Bouillon", teamB:"Waremme" },
  { id:"D-T4-11h30", day:"dimanche", terrain:4, time:"11h30", teamA:"Chaumont", teamB:"Bouillon" },
  { id:"D-T5-11h30", day:"dimanche", terrain:5, time:"11h30", teamA:"Ciney", teamB:"Ixelles" },
  { id:"D-T6-11h30", day:"dimanche", terrain:6, time:"11h30", teamA:"Namur", teamB:"S Brussels" },
  { id:"D-T7-11h30", day:"dimanche", terrain:7, time:"11h30", teamA:"La Louvière", teamB:"S Eupen" },
  { id:"D-T8-11h30", day:"dimanche", terrain:8, time:"11h30", teamA:"Chaumont", teamB:"Bertrix" },

  // 12h / 12h45
  { id:"D-T1-12h", day:"dimanche", terrain:1, time:"12h00", teamA:"2è A", teamB:"1erB" },
  { id:"D-T2-12h", day:"dimanche", terrain:2, time:"12h00", teamA:"2è B", teamB:"1er A" },
  { id:"D-T3-12h45", day:"dimanche", terrain:3, time:"12h45", teamA:"F Uccle", teamB:"Ohey" },
  { id:"D-T4-12h45", day:"dimanche", terrain:4, time:"12h45", teamA:"2è B", teamB:"1er A" },
  { id:"D-T5-12h45", day:"dimanche", terrain:5, time:"12h45", teamA:"2è A", teamB:"1er B" },
  { id:"D-T6-12h45", day:"dimanche", terrain:6, time:"12h45", teamA:"5è Place", teamB:"" },
  { id:"D-T7-12h45", day:"dimanche", terrain:7, time:"12h45", teamA:"2è A", teamB:"1er B" },
  { id:"D-T8-12h45", day:"dimanche", terrain:8, time:"12h45", teamA:"2è B", teamB:"1er A" },

  // 13h / 14h
  { id:"D-T1-13h", day:"dimanche", terrain:1, time:"13h00", teamA:"5è Place", teamB:"" },
  { id:"D-T2-13h", day:"dimanche", terrain:2, time:"13h00", teamA:"3è place U11", teamB:"" },
  { id:"D-T3-14h", day:"dimanche", terrain:3, time:"14h00", teamA:"Chaumont", teamB:"Bouillon" },
  { id:"D-T4-14h", day:"dimanche", terrain:4, time:"14h00", teamA:"Soignies", teamB:"F Uccle" },
  { id:"D-T5-14h", day:"dimanche", terrain:5, time:"14h00", teamA:"5è place", teamB:"" },
  { id:"D-T6-14h", day:"dimanche", terrain:6, time:"14h00", teamA:"Tchalou", teamB:"Romedenne" },
  { id:"D-T7-14h", day:"dimanche", terrain:7, time:"14h00", teamA:"3è Place", teamB:"" },
  { id:"D-T8-14h", day:"dimanche", terrain:8, time:"14h00", teamA:"Waremme", teamB:"Chaumont" },

  // 14h / 15h15
  { id:"D-T1-14h-FinalU11", day:"dimanche", terrain:1, time:"14h00", teamA:"Finale U11
    { id:"D-T1-14h-FinalU11", day:"dimanche", terrain:1, time:"14h00", teamA:"Finale U11", teamB:"" },

  // 15h15
  { id:"D-T3-15h15", day:"dimanche", terrain:3, time:"15h15", teamA:"2èB", teamB:"1er A" },
  { id:"D-T4-15h15", day:"dimanche", terrain:4, time:"15h15", teamA:"2è A", teamB:"1er B" },
  { id:"D-T5-15h15", day:"dimanche", terrain:5, time:"15h15", teamA:"3è Place", teamB:"" },
  { id:"D-T6-15h15", day:"dimanche", terrain:6, time:"15h15", teamA:"Ixelles", teamB:"Tchalou" },
  { id:"D-T8-15h15", day:"dimanche", terrain:8, time:"15h15", teamA:"Bertrix", teamB:"Waremme" },

  // 15h00 / 16h30
  { id:"D-T1-15h", day:"dimanche", terrain:1, time:"15h00", teamA:"Finale U15 F", teamB:"" },
  { id:"D-T3-16h30", day:"dimanche", terrain:3, time:"16h30", teamA:"3è Place", teamB:"" },
  { id:"D-T4-16h30", day:"dimanche", terrain:4, time:"16h30", teamA:"5è place", teamB:"" },
  { id:"D-T6-16h30", day:"dimanche", terrain:6, time:"16h30", teamA:"Romedenne", teamB:"Ixelles" },
  { id:"D-T8-16h30", day:"dimanche", terrain:8, time:"16h30", teamA:"Chaumont", teamB:"Waremme" },

  // 17h / 17h45
  { id:"D-T1-17h", day:"dimanche", terrain:1, time:"17h00", teamA:"Finale U17 G", teamB:"" },
  { id:"D-T3-17h45", day:"dimanche", terrain:3, time:"17h45", teamA:"Finale", teamB:"" },
  { id:"D-T6-17h45", day:"dimanche", terrain:6, time:"17h45", teamA:"2è B", teamB:"1er A" },
  { id:"D-T7-17h45", day:"dimanche", terrain:7, time:"17h45", teamA:"5è place", teamB:"" },
  { id:"D-T8-17h45", day:"dimanche", terrain:8, time:"17h45", teamA:"2èA", teamB:"1erB" },

  // 19h30
  { id:"D-T1-19h30", day:"dimanche", terrain:1, time:"19h30", teamA:"Finale U19 F", teamB:"" },
  { id:"D-T5-19h30", day:"dimanche", terrain:5, time:"19h30", teamA:"3è Place", teamB:"" }

];

/* =========================
   SCORES (localStorage)
========================= */

let scores = {};

function loadScores() {
  const saved = localStorage.getItem("ffspa_scores");
  if (saved) scores = JSON.parse(saved);
}

function saveScores() {
  localStorage.setItem("ffspa_scores", JSON.stringify(scores));
}

/* =========================
   NAVIGATION
========================= */

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function setupNavigation() {
  document.querySelectorAll(".home-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      showSection(target);

      if (target === "matchs-samedi") renderTerrainsDay("samedi");
      if (target === "matchs-dimanche") renderTerrainsDay("dimanche");
      if (target === "scores") renderScores();
      if (target === "equipes") renderEquipes();
      if (target === "hall1") renderHall("hall1");
      if (target === "hall2") renderHall("hall2");
      if (target === "hall-adeps") renderHall("hall-adeps");
    });
  });

  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  });

  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      showSection(target);
      const cat = target.split("-")[1].toUpperCase();
      renderCategory(cat, "heure");
    });
  });
}

/* =========================
   RENDU TERRAINS PAR JOUR
========================= */

function renderTerrainsDay(day) {
  for (let t = 1; t <= 8; t++) {
    const container = document.getElementById(`${day}-t${t}`);
    container.innerHTML = "";

    matches
      .filter(m => m.day === day && m.terrain === t)
      .sort((a, b) => parseTime(a.time) - parseTime(b.time))
      .forEach(m => {
        const div = document.createElement("div");
        div.className = "match-block";
        div.innerHTML = `
          <div class="match-hour">${m.time}</div>
          <div class="match-teams">${m.teamA} - ${m.teamB}</div>
          <div class="match-score">${scores[m.id] || ""}</div>
        `;
        div.addEventListener("click", () => onMatchClick(m));
        container.appendChild(div);
      });
  }
}

/* =========================
   TABLEAU DES SCORES
========================= */

function renderScores() {
  const container = document.getElementById("scores-list");
  container.innerHTML = "";

  const scored = matches.filter(m => scores[m.id]);

  if (scored.length === 0) {
    container.innerHTML = "<p>Aucun score encodé pour l’instant.</p>";
    return;
  }

  scored.forEach(m => {
    const div = document.createElement("div");
    div.className = "score-item";
    div.innerHTML = `
      <div><strong>${m.day.toUpperCase()}</strong> • T${m.terrain} • ${m.time}</div>
      <div>${m.teamA} - ${m.teamB}</div>
      <div><strong>Score :</strong> ${scores[m.id]}</div>
    `;
    container.appendChild(div);
  });
}

/* =========================
   HALLS
========================= */

const hallTerrains = {
  hall1: [1, 2],
  hall2: [3, 4, 5],
  "hall-adeps": [6, 7, 8]
};

const hallState = {
  hall1: { day: "samedi", sort: "heure" },
  hall2: { day: "samedi", sort: "heure" },
  "hall-adeps": { day: "samedi", sort: "heure" }
};

function setupHalls() {
  document.querySelectorAll(".hall-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const hall = btn.dataset.hall;
      hallState[hall].day = btn.dataset.day;

      document.querySelectorAll(`.hall-tab[data-hall="${hall}"]`)
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      renderHall(hall);
    });
  });

  document.querySelectorAll(".sort-btn-hall").forEach(btn => {
    btn.addEventListener("click", () => {
      const hall = btn.dataset.hall;
      hallState[hall].sort = btn.dataset.sort;

      document.querySelectorAll(`.sort-btn-hall[data-hall="${hall}"]`)
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      renderHall(hall);
    });
  });
}

function renderHall(hallId) {
  const container = document.getElementById(`${hallId}-content`);
  container.innerHTML = "";

  const terrains = hallTerrains[hallId];
  const state = hallState[hallId];

  const list = matches.filter(
    m => m.day === state.day && terrains.includes(m.terrain)
  );

  if (state.sort === "terrain") {
    terrains.forEach(t => {
      const card = document.createElement("div");
      card.className = "terrain-card";

      const header = document.createElement("div");
      header.className = "terrain-header";
      header.innerHTML = `<span>Terrain ${t}</span>`;
      card.appendChild(header);

      list
        .filter(m => m.terrain === t)
        .sort((a, b) => parseTime(a.time) - parseTime(b.time))
        .forEach(m => {
          const div = document.createElement("div");
          div.className = "match-block";
          div.innerHTML = `
            <div class="match-hour">${m.time}</div>
            <div class="match-teams">${m.teamA} - ${m.teamB}</div>
            <div class="match-score">${scores[m.id] || ""}</div>
          `;
          div.addEventListener("click", () => onMatchClick(m));
          card.appendChild(div);
        });

      container.appendChild(card);
    });

  } else {
    const byTime = {};

    list.forEach(m => {
      if (!byTime[m.time]) byTime[m.time] = [];
      byTime[m.time].push(m);
    });

    Object.keys(byTime)
      .sort((a, b) => parseTime(a) - parseTime(b))
      .forEach(time => {
        const group = document.createElement("div");
        group.className = "hour-group";

        const title = document.createElement("div");
        title.className = "hour-title";
        title.textContent = time;
        group.appendChild(title);

        byTime[time]
          .sort((a, b) => a.terrain - b.terrain)
          .forEach(m => {
            const item = document.createElement("div");
            item.className = "hour-item";
            item.innerHTML = `
              <span>T${m.terrain}</span> : ${m.teamA} - ${m.teamB}
              <span style="float:right;">${scores[m.id] || ""}</span>
            `;
            item.addEventListener("click", () => onMatchClick(m));
            group.appendChild(item);
          });

        container.appendChild(group);
      });
  }
}

/* =========================
   ÉQUIPES
========================= */

function getAllTeams() {
  const set = new Set();
  matches.forEach(m => {
    if (m.teamA) set.add(m.teamA);
    if (m.teamB) set.add(m.teamB);
  });
  return [...set].filter(t =>
    t && !t.toLowerCase().includes("place") && !t.toLowerCase().includes("finale")
  );
}

function renderEquipes() {
  const catList = document.getElementById("equipes-categories");
  const teamList = document.getElementById("equipes-list");
  const detail = document.getElementById("equipe-detail");

  catList.innerHTML = "";
  teamList.innerHTML = "";
  detail.innerHTML = "<p>Sélectionnez une équipe pour voir ses matchs.</p>";

  const li = document.createElement("li");
  li.textContent = "Toutes les équipes";
  li.addEventListener("click", renderEquipesList);
  catList.appendChild(li);

  renderEquipesList();
}

function renderEquipesList() {
  const teamList = document.getElementById("equipes-list");
  const detail = document.getElementById("equipe-detail");

  teamList.innerHTML = "";
  detail.innerHTML = "<p>Sélectionnez une équipe pour voir ses matchs.</p>";

  getAllTeams()
    .sort()
    .forEach(team => {
      const li = document.createElement("li");
      li.textContent = team;
      li.addEventListener("click", () => renderEquipeDetail(team));
      teamList.appendChild(li);
    });
}

function renderEquipeDetail(team) {
  const detail = document.getElementById("equipe-detail");
  detail.innerHTML = "";

  const list = matches.filter(m => m.teamA === team || m.teamB === team);

  if (list.length === 0) {
    detail.innerHTML = "<p>Aucun match trouvé.</p>";
    return;
  }

  const title = document.createElement("h4");
  title.textContent = team;
  detail.appendChild(title);

  list
    .sort((a, b) => parseTime(a.time) - parseTime(b.time))
    .forEach(m => {
      const div = document.createElement("div");
      div.className = "match-block";
      div.innerHTML = `
        <div class="match-hour">${m.day.toUpperCase()} • T${m.terrain} • ${m.time}</div>
        <div class="match-teams">${m.teamA} - ${m.teamB}</div>
        <div class="match-score">${scores[m.id] || ""}</div>
      `;
      div.addEventListener("click", () => onMatchClick(m));
      detail.appendChild(div);
    });
}

/* =========================
   CATÉGORIES (structure prête)
========================= */

function setupCategories() {
  document.querySelectorAll(".sort-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      const sort = btn.dataset.sort;

      document
        .querySelectorAll(`.sort-btn[data-cat="${cat}"]`)
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      renderCategory(cat, sort);
    });
  });
}

function renderCategory(cat, mode) {
  const container = document.getElementById(`cat-${cat.toLowerCase()}-content`);
  container.innerHTML = "<p>Aucune catégorie définie dans les données.</p>";
}

/* =========================
   ADMIN + SCORE
========================= */

let adminUnlocked = false;
let pendingMatch = null;

function setupAdmin() {
  const modal = document.getElementById("admin-modal");
  const input = document.getElementById("admin-code");
  const error = document.getElementById("admin-error");

  document.querySelectorAll(".edit-terrain").forEach(btn => {
    btn.addEventListener("click", () => {
      input.value = "";
      error.textContent = "";
      modal.classList.remove("hidden");
    });
  });

  document.getElementById("admin-cancel").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("admin-validate").addEventListener("click", () => {
    if (input.value === ADMIN_CODE) {
      adminUnlocked = true;
      modal.classList.add("hidden");
    } else {
      error.textContent = "Code incorrect.";
    }
  });
}

function onMatchClick(match) {
  if (!adminUnlocked) return;

  pendingMatch = match;

  const modal = document.getElementById("score-modal");
  const label = document.getElementById("score-match");
  const select = document.getElementById("score-select");

  label.textContent = `${match.day.toUpperCase()} • T${match.terrain} • ${match.time} • ${match.teamA} - ${match.teamB}`;
  select.value = scores[match.id] || "";

  modal.classList.remove("hidden");
}

function setupScoreModal() {
  const modal = document.getElementById("score-modal");
  const select = document.getElementById("score-select");

  document.getElementById("score-close").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("score-save").addEventListener("click", () => {
    if (!pendingMatch) return;

    const val = select.value;

    if (!val) delete scores[pendingMatch.id];
    else scores[pendingMatch.id] = val;

    saveScores();
    modal.classList.add("hidden");

    renderTerrainsDay("samedi");
    renderTerrainsDay("dimanche");
    renderHall("hall1");
    renderHall("hall2");
    renderHall("hall-adeps");
    renderScores();
  });
}

/* =========================
   INIT
========================= */

window.addEventListener("DOMContentLoaded", () => {
  loadScores();
  setupNavigation();
  setupHalls();
  setupCategories();
  setupAdmin();
  setupScoreModal();

  renderTerrainsDay("samedi");
  renderTerrainsDay("dimanche");
  renderHall("hall1");
  renderHall("hall2");
  renderHall("hall-adeps");
});

