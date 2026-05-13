/********************************************
 * LOCAL STORAGE
 ********************************************/
function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function loadScores() {
  const data = localStorage.getItem("scores");
  if (data) scores = JSON.parse(data);
}

let scores = [];
loadScores();

/********************************************
 * DONNÉES MATCHS (EXEMPLES)
 ********************************************/
const samedi = {
  t1: [
    { time: "9h00", teams: "Waremme – Chaumont", category: "U17" },
    { time: "10h15", teams: "Nalinnes – Waremme", category: "U17" },
    { time: "11h30", teams: "Chaumont – Nalinnes", category: "U17" }
  ],
  t2: [
    { time: "9h00", teams: "Nalinnes – Le Roux", category: "U17" },
    { time: "10h15", teams: "Le Roux – Chaumont", category: "U17" },
    { time: "11h30", teams: "Waremme – Le Roux", category: "U17" }
  ],
  t3: [
    { time: "9h00", teams: "Thimister – Romedenne", category: "U13" },
    { time: "10h15", teams: "Nivelles – Thimister", category: "U13" },
    { time: "11h30", teams: "Romedenne – Nivelles", category: "U13" }
  ],
  t4: [
    { time: "9h00", teams: "Tchalou – BEVC", category: "U13" },
    { time: "10h15", teams: "Libramont – Tchalou", category: "U13" },
    { time: "11h30", teams: "BEVC – Libramont", category: "U13" }
  ],
  t5: [
    { time: "9h00", teams: "Tchalou – Waremme", category: "U15" },
    { time: "10h15", teams: "S Brussels – Tchalou", category: "U15" },
    { time: "11h30", teams: "Waremme – S Brussels", category: "U15" }
  ],
  t6: [
    { time: "9h00", teams: "Nalinnes – F Uccle", category: "U19" },
    { time: "10h00", teams: "Jemeppe – Nalinnes", category: "U19" },
    { time: "11h00", teams: "F Uccle – Jemeppe", category: "U19" }
  ]
};

const dimanche = {
  t1: [
    { time: "9h00", teams: "Thimister – Limal", category: "U11" },
    { time: "10h00", teams: "Ixelles – Thimister", category: "U11" },
    { time: "11h00", teams: "Limal – Ixelles", category: "U11" }
  ],
  t2: [
    { time: "9h00", teams: "Gedinne – Tchalou", category: "U11" },
    { time: "10h00", teams: "S Eupen – Gedinne", category: "U11" },
    { time: "11h00", teams: "Tchalou – S Eupen", category: "U11" }
  ],
  t3: [
    { time: "9h00", teams: "Waremme – Chaumont", category: "U13" },
    { time: "10h15", teams: "Ohey – Soignies", category: "U13" },
    { time: "11h30", teams: "Bouillon – Waremme", category: "U13" }
  ],
  t4: [
    { time: "9h00", teams: "Waremme – Chaumont", category: "U15" },
    { time: "10h15", teams: "Bouillon – Waremme", category: "U15" },
    { time: "11h30", teams: "Chaumont – Bouillon", category: "U15" }
  ],
  t5: [
    { time: "9h00", teams: "Tchalou – Ciney", category: "U17" },
    { time: "10h15", teams: "Ixelles – Tchalou", category: "U17" },
    { time: "11h30", teams: "Ciney – Ixelles", category: "U17" }
  ],
  t6: [
    { time: "9h00", teams: "Waremme – Namur", category: "U19" },
    { time: "10h15", teams: "S Brussels – Waremme", category: "U19" },
    { time: "11h30", teams: "Namur – S Brussels", category: "U19" }
  ]
};

/********************************************
 * OUTILS
 ********************************************/
function getPlayedMatches(day, terrain) {
  return scores.filter(s => s.day === day && s.terrain === terrain);
}

function getCurrentAndNext(matches, played) {
  const playedIds = played.map(p => p.matchId);
  const remaining = matches
    .map((m, i) => ({ ...m, _id: i }))
    .filter(m => !playedIds.includes(m._id));

  return {
    current: remaining[0] || null,
    next: remaining[1] || null
  };
}

/********************************************
 * RENDU TERRAIN
 ********************************************/
function renderTerrain(day, terrainId, matches) {
  const container = document.getElementById(`${day}-${terrainId}`);
  if (!container) return;

  const played = getPlayedMatches(day, terrainId);
  const { current, next } = getCurrentAndNext(matches, played);

  let html = "";

  if (current) {
    html += `
      <div class="match-block">
        <div class="match-label">Match en cours</div>
        <div class="match-time">${current.time}</div>
        <div class="match-teams">${current.teams}</div>
        <div class="match-category">${current.category}</div>
      </div>
    `;
  } else {
    html += `<div class="match-block"><div class="match-label">Aucun match en cours</div></div>`;
  }

  if (next) {
    html += `
      <div class="match-block">
        <div class="match-label">Match suivant</div>
        <div class="match-time">${next.time}</div>
        <div class="match-teams">${next.teams}</div>
        <div class="match-category">${next.category}</div>
      </div>
    `;
  }

  if (played.length > 0) {
    html += `<div class="past-matches-title">Matchs passés</div>`;
    played.forEach(p => {
      html += `
        <div class="past-match-line">
          ${p.match.time} — ${p.match.teams} : ${p.scoreA}-${p.scoreB}
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

/********************************************
 * RENDU PAGES MATCHS
 ********************************************/
function renderMatchsSamedi() {
  renderTerrain("samedi", "t1", samedi.t1);
  renderTerrain("samedi", "t2", samedi.t2);
  renderTerrain("samedi", "t3", samedi.t3);
  renderTerrain("samedi", "t4", samedi.t4);
  renderTerrain("samedi", "t5", samedi.t5);
  renderTerrain("samedi", "t6", samedi.t6);
}

function renderMatchsDimanche() {
  renderTerrain("dimanche", "t1", dimanche.t1);
  renderTerrain("dimanche", "t2", dimanche.t2);
  renderTerrain("dimanche", "t3", dimanche.t3);
  renderTerrain("dimanche", "t4", dimanche.t4);
  renderTerrain("dimanche", "t5", dimanche.t5);
  renderTerrain("dimanche", "t6", dimanche.t6);
}

/********************************************
 * RENDU SCORES
 ********************************************/
function renderScores() {
  const cont = document.getElementById("scores-list");
  cont.innerHTML = "";

  if (scores.length === 0) {
    cont.innerHTML = "<p>Aucun score encodé pour le moment.</p>";
    return;
  }

  scores.forEach(s => {
    cont.innerHTML += `
      <div class="score-card">
        <div class="score-line">${s.match.teams} : ${s.scoreA} - ${s.scoreB}</div>
        <div class="score-meta">
          ${s.day === "samedi" ? "Samedi" : "Dimanche"} – ${s.terrain} – ${s.match.time} – ${s.match.category}<br>
          Encodé à ${s.time}
        </div>
      </div>
    `;
  });
}

/********************************************
 * NAVIGATION
 ********************************************/
const sections = document.querySelectorAll(".section");
const clickable = document.querySelectorAll("[data-section]");

clickable.forEach(el => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-section");
    if (!target) return;
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    if (target === "matchs-samedi") renderMatchsSamedi();
    if (target === "matchs-dimanche") renderMatchsDimanche();
    if (target === "scores") renderScores();
  });
});

/********************************************
 * ADMIN + SCORE
 ********************************************/
let currentDay = null;
let currentTerrain = null;
let currentMatch = null;
let currentMatchId = null;

const adminModal = document.getElementById("admin-modal");
const adminCodeInput = document.getElementById("admin-code");
const adminError = document.getElementById("admin-error");

const scoreModal = document.getElementById("score-modal");
const scoreMatch = document.getElementById("score-match");
const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");

document.querySelectorAll(".edit-terrain").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.terrain;
    const [day, terrain] = id.split("-");
    currentDay = day;
    currentTerrain = terrain;

    adminModal.classList.remove("hidden");
    adminCodeInput.value = "";
    adminError.textContent = "";
    adminCodeInput.focus();
  });
});

document.getElementById("admin-cancel").addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

document.getElementById("admin-validate").addEventListener("click", () => {
  if (adminCodeInput.value !== "175") {
    adminError.textContent = "Code incorrect.";
    return;
  }

  adminModal.classList.add("hidden");

  const matches = currentDay === "samedi" ? samedi[currentTerrain] : dimanche[currentTerrain];
  const played = getPlayedMatches(currentDay, currentTerrain);
  const { current } = getCurrentAndNext(matches, played);

  if (!current) {
    alert("Aucun match en cours à encoder.");
    return;
  }

  currentMatch = current;
  currentMatchId = current._id;

  scoreMatch.textContent = `${currentMatch.time} — ${currentMatch.teams} (${currentMatch.category})`;
  scoreA.value = "";
  scoreB.value = "";
  scoreModal.classList.remove("hidden");
});

/********************************************
 * ENREGISTRER SCORE
 ********************************************/
document.getElementById("score-save").addEventListener("click", () => {
  if (scoreA.value === "" || scoreB.value === "") {
    alert("Veuillez entrer les deux scores.");
    return;
  }

  scores.push({
    day: currentDay,
    terrain: currentTerrain,
    match: currentMatch,
    matchId: currentMatchId,
    scoreA: scoreA.value,
    scoreB: scoreB.value,
    time: new Date().toLocaleTimeString()
  });

  saveScores();
  scoreModal.classList.add("hidden");

  if (currentDay === "samedi") renderMatchsSamedi();
  else renderMatchsDimanche();
  renderScores();
});

document.getElementById("score-close").addEventListener("click", () => {
  scoreModal.classList.add("hidden");
});
