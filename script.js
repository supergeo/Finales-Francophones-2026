/********************************************
 * DONNÉES MATCHS (EXEMPLES PREMIUM)
 * Tu peux compléter les tableaux facilement.
 ********************************************/

// SAMEDI
const terrain1MatchesSamedi = [
  { time: "9h00", teams: "Waremme – Chaumont", category: "U17" },
  { time: "10h15", teams: "Nalinnes – Waremme", category: "U17" },
  { time: "11h30", teams: "Chaumont – Nalinnes", category: "U17" }
];

const terrain2MatchesSamedi = [
  { time: "9h00", teams: "Nalinnes – Le Roux", category: "U17" },
  { time: "10h15", teams: "Le Roux – Chaumont", category: "U17" },
  { time: "11h30", teams: "Waremme – Le Roux", category: "U17" }
];

const terrain3MatchesSamedi = [
  { time: "9h00", teams: "Thimister – Romedenne", category: "U13" },
  { time: "10h15", teams: "Nivelles – Thimister", category: "U13" },
  { time: "11h30", teams: "Romedenne – Nivelles", category: "U13" }
];

const terrain4MatchesSamedi = [
  { time: "9h00", teams: "Tchalou – BEVC", category: "U13" },
  { time: "10h15", teams: "Libramont – Tchalou", category: "U13" },
  { time: "11h30", teams: "BEVC – Libramont", category: "U13" }
];

const terrain5MatchesSamedi = [
  { time: "9h00", teams: "Tchalou – Waremme", category: "U15" },
  { time: "10h15", teams: "S Brussels – Tchalou", category: "U15" },
  { time: "11h30", teams: "Waremme – S Brussels", category: "U15" }
];

const terrain6MatchesSamedi = [
  { time: "9h00", teams: "Nalinnes – F Uccle", category: "U19" },
  { time: "10h00", teams: "Jemeppe – Nalinnes", category: "U19" },
  { time: "11h00", teams: "F Uccle – Jemeppe", category: "U19" }
];

// DIMANCHE
const terrain1MatchesDimanche = [
  { time: "9h00", teams: "Thimister – Limal", category: "U11" },
  { time: "10h00", teams: "Ixelles – Thimister", category: "U11" },
  { time: "11h00", teams: "Limal – Ixelles", category: "U11" }
];

const terrain2MatchesDimanche = [
  { time: "9h00", teams: "Gedinne – Tchalou", category: "U11" },
  { time: "10h00", teams: "S Eupen – Gedinne", category: "U11" },
  { time: "11h00", teams: "Tchalou – S Eupen", category: "U11" }
];

const terrain3MatchesDimanche = [
  { time: "9h00", teams: "Waremme – Chaumont", category: "U13" },
  { time: "10h15", teams: "Ohey – Soignies", category: "U13" },
  { time: "11h30", teams: "Bouillon – Waremme", category: "U13" }
];

const terrain4MatchesDimanche = [
  { time: "9h00", teams: "Waremme – Chaumont", category: "U15" },
  { time: "10h15", teams: "Bouillon – Waremme", category: "U15" },
  { time: "11h30", teams: "Chaumont – Bouillon", category: "U15" }
];

const terrain5MatchesDimanche = [
  { time: "9h00", teams: "Tchalou – Ciney", category: "U17" },
  { time: "10h15", teams: "Ixelles – Tchalou", category: "U17" },
  { time: "11h30", teams: "Ciney – Ixelles", category: "U17" }
];

const terrain6MatchesDimanche = [
  { time: "9h00", teams: "Waremme – Namur", category: "U19" },
  { time: "10h15", teams: "S Brussels – Waremme", category: "U19" },
  { time: "11h30", teams: "Namur – S Brussels", category: "U19" }
];

/********************************************
 * SCORES
 ********************************************/
let scores = []; // { day: 'samedi'|'dimanche', terrain: 'T1', match, scoreA, scoreB, time }

/********************************************
 * OUTILS
 ********************************************/
function getCurrentAndNext(matches, day, terrainId) {
  const played = scores
    .filter(s => s.day === day && s.terrain === terrainId)
    .map(s => s.matchId);

  const remaining = matches.map((m, idx) => ({ ...m, _id: idx }))
    .filter(m => !played.includes(m._id));

  const current = remaining[0] || null;
  const next = remaining[1] || null;
  return { current, next };
}

function renderTerrain(containerId, matches, day, terrainLabel) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { current, next } = getCurrentAndNext(matches, day, terrainLabel);

  container.innerHTML = `
    <div class="terrain-title">${terrainLabel}</div>
    ${current ? `
      <div class="match-block">
        <div class="match-label">Match en cours</div>
        <div class="match-time">${current.time}</div>
        <div class="match-teams">${current.teams}</div>
        <div class="match-category">${current.category}</div>
      </div>
    ` : `<div class="match-block"><div class="match-label">Aucun match en cours</div></div>`}
    ${next ? `
      <div class="match-block">
        <div class="match-label">Match à suivre</div>
        <div class="match-time">${next.time}</div>
        <div class="match-teams">${next.teams}</div>
        <div class="match-category">${next.category}</div>
      </div>
    ` : ``}
  `;
}

/********************************************
 * RENDU PAGES MATCHS
 ********************************************/
function renderMatchsSamedi() {
  renderTerrain("samedi-t1", terrain1MatchesSamedi, "samedi", "Terrain 1");
  renderTerrain("samedi-t2", terrain2MatchesSamedi, "samedi", "Terrain 2");
  renderTerrain("samedi-t3", terrain3MatchesSamedi, "samedi", "Terrain 3");
  renderTerrain("samedi-t4", terrain4MatchesSamedi, "samedi", "Terrain 4");
  renderTerrain("samedi-t5", terrain5MatchesSamedi, "samedi", "Terrain 5");
  renderTerrain("samedi-t6", terrain6MatchesSamedi, "samedi", "Terrain 6");
}

function renderMatchsDimanche() {
  renderTerrain("dimanche-t1", terrain1MatchesDimanche, "dimanche", "Terrain 1");
  renderTerrain("dimanche-t2", terrain2MatchesDimanche, "dimanche", "Terrain 2");
  renderTerrain("dimanche-t3", terrain3MatchesDimanche, "dimanche", "Terrain 3");
  renderTerrain("dimanche-t4", terrain4MatchesDimanche, "dimanche", "Terrain 4");
  renderTerrain("dimanche-t5", terrain5MatchesDimanche, "dimanche", "Terrain 5");
  renderTerrain("dimanche-t6", terrain6MatchesDimanche, "dimanche", "Terrain 6");
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
 * ADMIN + ENCODAGE SCORE
 ********************************************/
const adminModal = document.getElementById("admin-modal");
const adminCodeInput = document.getElementById("admin-code");
const adminCancel = document.getElementById("admin-cancel");
const adminValidate = document.getElementById("admin-validate");
const adminError = document.getElementById("admin-error");

const scoreModal = document.getElementById("score-modal");
const scoreMatch = document.getElementById("score-match");
const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");
const scoreSave = document.getElementById("score-save");
const scoreClose = document.getElementById("score-close");

const encoderSamedi = document.getElementById("encoder-score-samedi");
const encoderDimanche = document.getElementById("encoder-score-dimanche");

let currentDay = null;
let matchToScore = null;
let matchTerrain = null;
let matchId = null;

function openAdmin(day) {
  currentDay = day;
  adminModal.classList.remove("hidden");
  adminCodeInput.value = "";
  adminError.textContent = "";
  adminCodeInput.focus();
}

encoderSamedi.addEventListener("click", () => openAdmin("samedi"));
encoderDimanche.addEventListener("click", () => openAdmin("dimanche"));

adminCancel.addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

adminValidate.addEventListener("click", () => {
  if (adminCodeInput.value === "175") {
    adminModal.classList.add("hidden");
    // On prend le premier terrain avec un match en cours
    const terrains = currentDay === "samedi"
      ? [
          { id: "T1", list: terrain1MatchesSamedi },
          { id: "T2", list: terrain2MatchesSamedi },
          { id: "T3", list: terrain3MatchesSamedi },
          { id: "T4", list: terrain4MatchesSamedi },
          { id: "T5", list: terrain5MatchesSamedi },
          { id: "T6", list: terrain6MatchesSamedi }
        ]
      : [
          { id: "T1", list: terrain1MatchesDimanche },
          { id: "T2", list: terrain2MatchesDimanche },
          { id: "T3", list: terrain3MatchesDimanche },
          { id: "T4", list: terrain4MatchesDimanche },
          { id: "T5", list: terrain5MatchesDimanche },
          { id: "T6", list: terrain6MatchesDimanche }
        ];

    let found = null;
    for (const t of terrains) {
      const { current } = getCurrentAndNext(t.list, currentDay, t.id);
      if (current) {
        found = { terrain: t.id, match: current };
        matchId = t.list.indexOf(current);
        break;
      }
    }

    if (!found) {
      alert("Aucun match en cours à encoder.");
      return;
    }

    matchTerrain = found.terrain;
    matchToScore = found.match;

    scoreMatch.textContent = `${matchTerrain} – ${matchToScore.time} – ${matchToScore.teams} (${matchToScore.category})`;
    scoreA.value = "";
    scoreB.value = "";
    scoreModal.classList.remove("hidden");
  } else {
    adminError.textContent = "Code incorrect.";
  }
});

scoreSave.addEventListener("click", () => {
  const a = scoreA.value.trim();
  const b = scoreB.value.trim();
  if (a === "" || b === "") {
    alert("Veuillez entrer les deux scores.");
    return;
  }

  scores.push({
    day: currentDay,
    terrain: matchTerrain,
    match: matchToScore,
    matchId: matchId,
    scoreA: a,
    scoreB: b,
    time: new Date().toLocaleTimeString()
  });

  scoreModal.classList.add("hidden");
  if (currentDay === "samedi") renderMatchsSamedi();
  else renderMatchsDimanche();
  renderScores();
});

scoreClose.addEventListener("click", () => {
  scoreModal.classList.add("hidden");
});