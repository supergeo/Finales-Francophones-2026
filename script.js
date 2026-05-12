// --- Données matches (extraits des PDF, simplifiés) ---
// Tu pourras en ajouter dans admin plus tard si besoin.

const samediMatches = [
  { time: "9h00", terrain: "T1", teams: "Waremme - Chaumont", extra: "Hall 1" },
  { time: "9h00", terrain: "T2", teams: "Nalinnes - Le Roux", extra: "Hall 1" },
  { time: "9h00", terrain: "T3", teams: "Thimister - Romedenne", extra: "Hall 2" },
  { time: "9h00", terrain: "T4", teams: "Tchalou - BEVC", extra: "Hall 2" },
  { time: "9h00", terrain: "T5", teams: "Tchalou - Waremme", extra: "Hall 2" },
  { time: "9h00", terrain: "T6", teams: "Nalinnes - F Uccle", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T7", teams: "Jemeppe - Waremme", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T8", teams: "Chaumont - Romedenne", extra: "Hall ADEPS" },
  { time: "10h15", terrain: "T1", teams: "Nalinnes - Waremme", extra: "" },
  { time: "10h15", terrain: "T2", teams: "Le Roux - Chaumont", extra: "" },
  { time: "11h30", terrain: "T1", teams: "Chaumont - Nalinnes", extra: "" },
  { time: "11h30", terrain: "T2", teams: "Waremme - Le Roux", extra: "" },
  { time: "15h30", terrain: "T1/T2", teams: "Finale U17", extra: "T1-T2 central" },
  { time: "18h00", terrain: "T1/T2", teams: "3e place U19G", extra: "" },
  { time: "19h30", terrain: "T1/T2", teams: "Finale U19G", extra: "" }
];

const dimancheMatches = [
  { time: "9h00", terrain: "T1", teams: "Thimister - Limal", extra: "Hall 1" },
  { time: "9h00", terrain: "T2", teams: "Gedinne - Tchalou", extra: "Hall 1" },
  { time: "9h00", terrain: "T3", teams: "Waremme - Chaumont", extra: "Hall 2" },
  { time: "9h00", terrain: "T5", teams: "Tchalou - Ciney", extra: "Hall 2" },
  { time: "9h00", terrain: "T6", teams: "Waremme - Namur", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T7", teams: "Chaumont - La Louvière", extra: "Hall ADEPS" },
  { time: "9h00", terrain: "T8", teams: "Bertrix - S Eupen", extra: "Hall ADEPS" },
  { time: "15h00", terrain: "T1/T2", teams: "Finale U15 F", extra: "" },
  { time: "17h00", terrain: "T1/T2", teams: "Finale U17 G", extra: "" },
  { time: "19h30", terrain: "T1/T2", teams: "Finale U19 F", extra: "" }
];

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

// Règles personnalisées assistant (admin)
let assistantRules = [];

// Message important (admin)
let importantMessage = "";

// --- Navigation sections ---

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
    .filter(m => {
      if (!filter) return true;
      return (
        m.time.toLowerCase().includes(filter) ||
        m.terrain.toLowerCase().includes(filter) ||
        m.teams.toLowerCase().includes(filter)
      );
    })
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

document.getElementById("filter-samedi").addEventListener("input", e => {
  renderMatches(samediMatches, "samedi-list", e.target.value);
});

document.getElementById("filter-dimanche").addEventListener("input", e => {
  renderMatches(dimancheMatches, "dimanche-list", e.target.value);
});

// --- Rendu catégories ---

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

// --- Assistant ---

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

function findMatchByTeamOrTime(query) {
  const q = query.toLowerCase();
  const all = [...samediMatches, ...dimancheMatches];
  return all.filter(m =>
    m.teams.toLowerCase().includes(q) ||
    m.terrain.toLowerCase().includes(q) ||
    m.time.toLowerCase().includes(q)
  );
}

function handleAssistantQuestion() {
  const q = assistantInput.value.trim();
  if (!q) return;
  addMsg("user", q);
  assistantInput.value = "";

  // Règles admin d'abord
  for (const rule of assistantRules) {
    if (q.toLowerCase().includes(rule.keyword.toLowerCase())) {
      addMsg("bot", rule.answer);
      return;
    }
  }

  // Recherche match
  const results = findMatchByTeamOrTime(q);
  if (results.length > 0) {
    const first = results[0];
    addMsg(
      "bot",
      `Je vois un match : ${first.teams} à ${first.time} sur ${first.terrain}.`
    );
  } else {
    addMsg(
      "bot",
      "Je ne trouve pas directement, essaie avec le nom d’une équipe ou un terrain (ex: Waremme, T3, 9h)."
    );
  }
}

assistantSend.addEventListener("click", handleAssistantQuestion);
assistantInput.addEventListener("keydown", e => {
  if (e.key === "Enter") handleAssistantQuestion();
});

// --- Admin ---

const adminBtn = document.getElementById("admin-btn");
const adminModal = document.getElementById("admin-modal");
const adminCodeInput = document.getElementById("admin-code");
const adminCancel = document.getElementById("admin-cancel");
const adminValidate = document.getElementById("admin-validate");
const adminError = document.getElementById("admin-error");
const adminPanel = document.getElementById("admin-panel");
const adminClose = document.getElementById("admin-close");

const adminMessageInput = document.getElementById("admin-message");
const adminSaveMessage = document.getElementById("admin-save-message");
const adminKeywordInput = document.getElementById("admin-keyword");
const adminAnswerInput = document.getElementById("admin-answer");
const adminSaveAnswer = document.getElementById("admin-save-answer");
const importantBanner = document.getElementById("important-banner");

const ADMIN_CODE = "175";

adminBtn.addEventListener("click", () => {
  adminModal.classList.remove("hidden");
  adminCodeInput.value = "";
  adminError.textContent = "";
  adminCodeInput.focus();
});

adminCancel.addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

adminValidate.addEventListener("click", () => {
  if (adminCodeInput.value === ADMIN_CODE) {
    adminModal.classList.add("hidden");
    adminPanel.classList.remove("hidden");
  } else {
    adminError.textContent = "Code incorrect.";
  }
});

adminClose.addEventListener("click", () => {
  adminPanel.classList.add("hidden");
});

// Message important
adminSaveMessage.addEventListener("click", () => {
  importantMessage = adminMessageInput.value.trim();
  if (importantMessage) {
    importantBanner.textContent = importantMessage;
    importantBanner.classList.remove("hidden");
  } else {
    importantBanner.classList.add("hidden");
  }
});

// Règle assistant
adminSaveAnswer.addEventListener("click", () => {
  const keyword = adminKeywordInput.value.trim();
  const answer = adminAnswerInput.value.trim();
  if (!keyword || !answer) return;
  assistantRules.push({ keyword, answer });
  adminKeywordInput.value = "";
  adminAnswerInput.value = "";
  alert("Règle enregistrée pour l’assistant.");
});