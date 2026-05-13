/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  background: #f4f4f4;
  color: #222;
}

/* HEADER */
.app-header {
  background: #1a237e;
  color: white;
  padding: 20px;
  text-align: center;
}

.header-main {
  font-size: 26px;
  font-weight: 700;
}

.header-sub {
  font-size: 14px;
  opacity: 0.8;
}

/* SECTIONS */
.section {
  display: none;
  padding: 20px;
}

.section.active {
  display: block;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 24px;
  font-weight: 700;
}

.back-btn {
  background: #ddd;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

/* HOME GRID */
.home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.home-btn {
  padding: 20px;
  background: white;
  border-radius: 10px;
  border: 2px solid #1a237e;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.home-btn:hover {
  background: #1a237e;
  color: white;
}

/* TERRAINS GRID */
.terrains-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.terrain-card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  border: 2px solid #1a237e;
}

.terrain-header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.edit-terrain {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* MATCH BLOCKS */
.match-block {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.match-hour {
  font-weight: 700;
  color: #1a237e;
}

.match-teams {
  margin-top: 4px;
  font-size: 15px;
}

/* GROUPED BY HOUR */
.hour-group {
  background: white;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 15px;
  border-left: 5px solid #1a237e;
}

.hour-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.hour-item {
  padding: 6px 0;
  border-bottom: 1px solid #ddd;
}

.hour-item:last-child {
  border-bottom: none;
}

.hour-item span {
  font-weight: 600;
}

/* SORT BAR */
.sort-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.sort-btn,
.sort-btn-hall {
  padding: 10px 16px;
  border-radius: 8px;
  border: 2px solid #1a237e;
  background: white;
  cursor: pointer;
  font-weight: 600;
}

.sort-btn.active,
.sort-btn-hall.active {
  background: #1a237e;
  color: white;
}

/* TABS */
.tabs-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.tab-btn {
  padding: 10px 16px;
  border-radius: 8px;
  border: 2px solid #1a237e;
  background: white;
  cursor: pointer;
  font-weight: 600;
}

.tab-btn.active {
  background: #1a237e;
  color: white;
}

/* SCORES */
.scores-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.score-item {
  background: white;
  padding: 12px;
  border-radius: 8px;
  border-left: 5px solid #1a237e;
}

/* CATEGORIES */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 15px;
}

.cat-btn {
  padding: 18px;
  background: white;
  border-radius: 10px;
  border: 2px solid #1a237e;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.cat-btn:hover {
  background: #1a237e;
  color: white;
}

/* EQUIPES */
.equipes-layout {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: 20px;
}

.equipes-cats ul,
#equipes-list {
  list-style: none;
}

.equipes-cats li,
#equipes-list li {
  padding: 10px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 2px solid #1a237e;
}

.equipes-cats li:hover,
#equipes-list li:hover {
  background: #1a237e;
  color: white;
}

.equipe-detail-wrapper {
  background: white;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #1a237e;
}

/* MODALS */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.modal-actions button {
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

#admin-cancel,
#score-close {
  background: #ddd;
}

#admin-validate,
#score-save {
  background: #1a237e;
  color: white;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .equipes-layout {
    grid-template-columns: 1fr;
  }
}
