---
layout: page
title: Games & Quizzes
icon: "fas fa-gamepad"
order: 4
---

<div class="games-container">
  <p>Willkommen im Fun-Bereich! Teste dein Wissen über Sims 4 Mods oder entspanne dich bei einer Runde Memory.</p>

  <div class="tabs-nav" style="display: flex; gap: 10px; border-bottom: 2px solid var(--border-color); margin-bottom: 25px;">
    <button class="game-tab-btn active" onclick="openGame(event, 'quiz')">Modding Quiz</button>
    <button class="game-tab-btn" onclick="openGame(event, 'memory')">Mod-Memory</button>
  </div>

  <div id="quiz" class="game-content" style="display: block;">
    <div class="quiz-card" style="background: var(--bg-secondary); padding: 20px; border-radius: 12px; border: 1px solid var(--border-color);">
      <h3 id="question-text">Lädt Quiz...</h3>
      <div id="answer-buttons" style="display: grid; gap: 10px; margin-top: 20px;">
        </div>
      <div id="quiz-results" style="display:none; text-align: center; margin-top: 20px;">
        <h4>Ergebnis: <span id="score"></span></h4>
        <button onclick="startQuiz()" style="background: var(--accent-color); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Nochmal spielen</button>
      </div>
    </div>
  </div>

  <div id="memory" class="game-content" style="display: none;">
    <div style="text-align: center; padding: 40px; background: var(--bg-secondary); border-radius: 12px; border: 2px dashed var(--border-color);">
      <i class="fas fa-th" style="font-size: 3rem; opacity: 0.3; margin-bottom: 15px;"></i>
      <h3>Mod-Memory</h3>
      <p>Kombiniere die Mod-Icons (SimSim, Obscura, etc.).</p>
      <button class="btn-primary" style="background: var(--accent-color); color: white; border: none; padding: 10px 20px; border-radius: 8px;">Spiel starten (Coming Soon)</button>
    </div>
  </div>
</div>

<style>
  .game-tab-btn {
    background: none; border: none; padding: 10px 20px; cursor: pointer;
    font-weight: 600; color: var(--text-muted); border-bottom: 3px solid transparent; transition: 0.3s;
  }
  .game-tab-btn.active { color: var(--accent-color); border-bottom: 3px solid var(--accent-color); }
  
  .quiz-btn {
    background: var(--bg-primary); border: 1px solid var(--border-color);
    padding: 12px; border-radius: 8px; cursor: pointer; text-align: left; transition: 0.2s;
  }
  .quiz-btn:hover { background: var(--accent-color-transparent); border-color: var(--accent-color); }
</style>

<script>
// Tab-Logik
function openGame(evt, gameName) {
  var i, content, links;
  content = document.getElementsByClassName("game-content");
  for (i = 0; i < content.length; i++) { content[i].style.display = "none"; }
  links = document.getElementsByClassName("game-tab-btn");
  for (i = 0; i < links.length; i++) { links[i].className = links[i].className.replace(" active", ""); }
  document.getElementById(gameName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Einfache Quiz-Logik
const questions = [
  { q: "Welcher Mod erlaubt Online-Shopping im Spiel?", a: ["SimSim Online Store", "Obscura Network"], correct: 0 },
  { q: "Was benötigt das 'Smart Core Script'?", a: ["Nichts", "Aktuellsten Patch & Script-Erlaubnis"], correct: 1 },
  { q: "Welcher Mod verbessert die Essensbestellung?", a: ["Sim-Nom-Nom", "Better Pie Menu"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0; score = 0;
  document.getElementById("quiz-results").style.display = "none";
  document.getElementById("answer-buttons").style.display = "grid";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").innerText = q.q;
  const btnContainer = document.getElementById("answer-buttons");
  btnContainer.innerHTML = "";
  q.a.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(idx);
    btnContainer.appendChild(btn);
  });
}

function checkAnswer(idx) {
  if(idx === questions[currentQuestion].correct) score++;
  currentQuestion++;
  if(currentQuestion < questions.length) { showQuestion(); } 
  else { showResults(); }
}

function showResults() {
  document.getElementById("question-text").innerText = "Quiz beendet!";
  document.getElementById("answer-buttons").style.display = "none";
  document.getElementById("quiz-results").style.display = "block";
  document.getElementById("score").innerText = score + " von " + questions.length;
}

startQuiz();
</script>
