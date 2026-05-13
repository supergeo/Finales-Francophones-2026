/********************************************
 * DONNÉES MATCHES
 ********************************************/
const samediMatches = [
  { time: "9h00", terrain: "T1", teams: "Waremme - Chaumont" },
  { time: "10h15", terrain: "T1", teams: "Nalinnes - Waremme" },
  { time: "15h30", terrain: "T1/T2", teams: "Finale U17" }
];

const dimancheMatches = [
  { time: "9h00", terrain: "T3", teams: "Waremme - Chaumont" },
  { time: "15h00", terrain: "T1/T2", teams: "Finale U15 F" },
  { time: "19h30", terrain: "T1/T2", teams: "Finale U19 F" }
];

// Tous les matchs dans l’ordre
const allMatches = [...samediMatches, ...dimancheMatches];

/********************************************
 * SYSTÈME DE SCORES
 ********************************************/
let scores = []; // { match, scoreA, scoreB, time }

/** Vérifie si un match a déjà un score */
function hasScore(match) {
  return scores.some(s => s.match === match);
}

/** Match en cours = premier match sans score */
function getMatchEnCours() {
  return allMatches.find(m => !hasScore(m)) || null;
}

/** Match suivant = deuxième match sans score */
function getMatchSuivant() {
  const remaining = allMatches.filter(m => !hasScore(m));
  return remaining.length > 1 ? remaining[1] : null;
}

/********************************************
 * AFFICHAGE PAGE MATCHS
 ********************************************/
function renderMatchs() {
  const contEnCours = document.getElementById("matchs-en-cours");
  const contSuivants = document.getElementById("matchs-suivants");
  const btnScore = document.getElementById("encoder-score");

  const enCours = getMatchEnCours();
  const suivant = getMatchSuivant();

  contEnCours.innerHTML = "<h3>Match en cours</h3>";
  contSuivants.innerHTML = "<h3>Match à suivre</h3>";

  if (!enCours) {
    contEnCours.innerHTML += "<p>Aucun match en cours.</p>";
    btnScore.classList.add("hidden");
  } else {
    contEnCours.innerHTML += `
      <div class="match-card">
        <div class="match-teams">${enCours.teams}</div>
        <div class="match-time">${enCours.time} – ${enCours.terrain}</div>
      </div>
    `;
    btnScore.classList.remove("hidden");
  }

  if (!suivant) {
    contSuivants.innerHTML += "<p>Aucun match à suivre.</p>";
  } else {
    contSuivants.innerHTML += `
      <div class="match-card">
        <div class="match-teams">${suivant.teams}</div>
        <div class="match-time">${suivant.time} – ${suivant.terrain}</div>
      </div>
    `;
  }
}

/********************************************
 * AFFICHAGE PAGE SCORES
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
      <div class="match-card">
        <div class="match-teams">${s.match.teams}</div>
        <div class="match-time">${s.match.time} – ${s.match.terrain}</div>
        <div class="match-score">${s.scoreA} - ${s.scoreB}</div>
        <div class="match-extra">Encodé à ${s.time}</div>
      </div>
    `;
  });
}

/********************************************
 * NAVIGATION ENTRE PAGES
 ********************************************/
const navButtons = document.querySelectorAll("nav button, .card-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    if (!target) return;

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    if (target === "matchs") renderMatchs();
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

const encoderBtn = document.getElementById("encoder-score");

let matchToScore = null;

// Ouvrir popup admin
encoderBtn.addEventListener("click", () => {
  adminModal.classList.remove("hidden");
  adminCodeInput.value = "";
  adminError.textContent = "";
  adminCodeInput.focus();
});

// Annuler admin
adminCancel.addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

// Valider code admin
adminValidate.addEventListener("click", () => {
  if (adminCodeInput.value === "175") {
    adminModal.classList.add("hidden");

    const enCours = getMatchEnCours();
    if (!enCours) {
      alert("Aucun match en cours à encoder.");
      return;
    }

    matchToScore = enCours;
    scoreMatch.textContent = `${matchToScore.teams} – ${matchToScore.time} – ${matchToScore.terrain}`;
    scoreA.value = "";
    scoreB.value = "";

    scoreModal.classList.remove("hidden");
  } else {
    adminError.textContent = "Code incorrect.";
  }
});

// Enregistrer score
scoreSave.addEventListener("click", () => {
  const a = scoreA.value.trim();
  const b = scoreB.value.trim();

  if (a === "" || b === "") {
    alert("Veuillez entrer les deux scores.");
    return;
  }

  scores.push({
    match: matchToScore,
    scoreA: a,
    scoreB: b,
    time: new Date().toLocaleTimeString()
  });

  scoreModal.classList.add("hidden");
  renderMatchs();
  renderScores();
});

// Fermer score
scoreClose.addEventListener("click", () => {
  scoreModal.classList.add("hidden");
});