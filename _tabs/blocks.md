---

layout: page

title: Whack-a-Pack

icon: "fas fa-bullseye"

order: 11

---



\## <i class="fas fa-bullseye"></i> Whack-a-Pack

Klicke die Packs so schnell du kannst! Bonus für Combos. Sul Sul!



---



<style>

&nbsp; .whack-section {

&nbsp;   background: var(--bg-secondary);

&nbsp;   border-radius: 24px;

&nbsp;   padding: 30px;

&nbsp;   border: 1px solid var(--border-color);

&nbsp;   box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);

&nbsp;   margin: 20px 0;

&nbsp; }



&nbsp; .whack-panel {

&nbsp;   display: flex;

&nbsp;   flex-wrap: wrap;

&nbsp;   gap: 10px;

&nbsp;   align-items: center;

&nbsp;   justify-content: flex-start;

&nbsp;   margin-bottom: 12px;

&nbsp; }



&nbsp; .whack-badge {

&nbsp;   background: #f8fafc;

&nbsp;   border: 1px solid rgba(0,0,0,0.07);

&nbsp;   border-radius: 999px;

&nbsp;   padding: 8px 12px;

&nbsp;   font-weight: 700;

&nbsp;   color: #0f172a;

&nbsp; }



&nbsp; .whack-badge .sub {

&nbsp;   font-weight: 600;

&nbsp;   opacity: 0.75;

&nbsp;   margin-left: 6px;

&nbsp; }



&nbsp; .whack-danger { color: #dc3545; }

&nbsp; .whack-ok { color: #16a34a; }



&nbsp; .whack-stage {

&nbsp;   position: relative;

&nbsp;   width: 100%;

&nbsp;   max-width: 560px;

&nbsp;   margin: 0 auto;

&nbsp;   aspect-ratio: 1 / 1;

&nbsp;   border-radius: 18px;

&nbsp;   background: linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.02));

&nbsp;   border: 1px solid rgba(0,0,0,0.08);

&nbsp;   overflow: hidden;

&nbsp; }



&nbsp; .whack-target {

&nbsp;   position: absolute;

&nbsp;   width: 96px;

&nbsp;   height: 96px;

&nbsp;   border-radius: 16px;

&nbsp;   background: #f1f5f9;

&nbsp;   border: 2px solid rgba(46, 204, 113, 0.9);

&nbsp;   box-shadow: 0 10px 20px -8px rgba(0,0,0,0.20);

&nbsp;   display: grid;

&nbsp;   place-items: center;

&nbsp;   transform: translate(-50%, -50%) scale(0.9);

&nbsp;   opacity: 0;

&nbsp;   pointer-events: none;

&nbsp;   transition: opacity 0.12s ease, transform 0.12s ease;

&nbsp; }



&nbsp; .whack-target.show {

&nbsp;   opacity: 1;

&nbsp;   transform: translate(-50%, -50%) scale(1);

&nbsp;   pointer-events: auto;

&nbsp; }



&nbsp; .whack-target img {

&nbsp;   width: 86%;

&nbsp;   height: 86%;

&nbsp;   object-fit: contain;

&nbsp;   user-select: none;

&nbsp;   -webkit-user-drag: none;

&nbsp; }



&nbsp; .whack-miss-overlay {

&nbsp;   position: absolute;

&nbsp;   inset: 0;

&nbsp;   pointer-events: none;

&nbsp; }



&nbsp; .whack-miss-dot {

&nbsp;   position: absolute;

&nbsp;   width: 14px;

&nbsp;   height: 14px;

&nbsp;   border-radius: 999px;

&nbsp;   background: rgba(220, 53, 69, 0.75);

&nbsp;   transform: translate(-50%, -50%);

&nbsp;   animation: pop 420ms ease forwards;

&nbsp; }



&nbsp; @keyframes pop {

&nbsp;   0% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }

&nbsp;   30% { opacity: 1; transform: translate(-50%, -50%) scale(1.0); }

&nbsp;   100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }

&nbsp; }



&nbsp; .whack-actions {

&nbsp;   display: flex;

&nbsp;   gap: 10px;

&nbsp;   justify-content: center;

&nbsp;   margin-top: 14px;

&nbsp;   flex-wrap: wrap;

&nbsp; }



&nbsp; .whack-help {

&nbsp;   max-width: 560px;

&nbsp;   margin: 12px auto 0;

&nbsp;   color: rgba(15,23,42,0.75);

&nbsp;   font-size: 0.95rem;

&nbsp; }



&nbsp; .whack-kbd {

&nbsp;   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

&nbsp;   background: rgba(15,23,42,0.06);

&nbsp;   border: 1px solid rgba(15,23,42,0.12);

&nbsp;   border-radius: 8px;

&nbsp;   padding: 2px 6px;

&nbsp;   font-size: 0.9em;

&nbsp; }

</style>



<section class="whack-section">

&nbsp; <div class="row align-items-center">

&nbsp;   <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">

&nbsp;     <h2 class="fw-800" style="color: var(--text-color);">Whack-a-Pack</h2>

&nbsp;     <p class="text-muted">Treffe die Packs. Missklicks kosten Punkte \& Zeit.</p>



&nbsp;     <div class="whack-panel">

&nbsp;       <div class="whack-badge"><span id="w-score">Score: 0</span></div>

&nbsp;       <div class="whack-badge"><span id="w-streak">Combo: x1</span><span class="sub" id="w-streak-sub">0</span></div>

&nbsp;       <div class="whack-badge"><span id="w-time">Time: 30s</span></div>

&nbsp;     </div>



&nbsp;     <div class="whack-panel">

&nbsp;       <div class="whack-badge"><span id="w-status" class="whack-ok">Ready</span></div>

&nbsp;     </div>



&nbsp;     <div class="whack-actions">

&nbsp;       <button class="btn btn-sm btn-outline-secondary" onclick="startWhack()">Start / Restart</button>

&nbsp;       <button class="btn btn-sm btn-outline-secondary" onclick="toggleHardMode()">Hard Mode: <span id="w-hard">OFF</span></button>

&nbsp;     </div>



&nbsp;     <div class="whack-help">

&nbsp;       Tipp: Klick ins Feld zählt als Miss. Im Hard Mode spawnt es schneller und Miss kostet mehr.

&nbsp;       Du kannst auch <span class="whack-kbd">Space</span> zum Starten drücken.

&nbsp;     </div>

&nbsp;   </div>



&nbsp;   <div class="col-lg-7">

&nbsp;     <div class="whack-stage" id="w-stage">

&nbsp;       <div class="whack-target" id="w-target" aria-label="target">

&nbsp;         <img id="w-img" alt="Pack" />

&nbsp;       </div>

&nbsp;       <div class="whack-miss-overlay" id="w-miss"></div>

&nbsp;     </div>

&nbsp;   </div>

&nbsp; </div>

</section>



<script>

&nbsp; (function() {

&nbsp;   const basePath = "{{ 'assets/img/packs\_blue/' | relative\_url }}";

&nbsp;   const epPacks = Array.from({length: 18}, (\_, i) => `ep${(i + 1).toString().padStart(2, '0')}`);

&nbsp;   const gpPacks = Array.from({length: 12}, (\_, i) => `gp${(i + 1).toString().padStart(2, '0')}`);

&nbsp;   const allPacks = \[...epPacks, ...gpPacks];



&nbsp;   const stage = document.getElementById('w-stage');

&nbsp;   const target = document.getElementById('w-target');

&nbsp;   const img = document.getElementById('w-img');

&nbsp;   const missOverlay = document.getElementById('w-miss');



&nbsp;   const scoreLabel = document.getElementById('w-score');

&nbsp;   const streakLabel = document.getElementById('w-streak');

&nbsp;   const streakSubLabel = document.getElementById('w-streak-sub');

&nbsp;   const timeLabel = document.getElementById('w-time');

&nbsp;   const statusLabel = document.getElementById('w-status');

&nbsp;   const hardLabel = document.getElementById('w-hard');



&nbsp;   let score = 0;

&nbsp;   let timeLeft = 30;

&nbsp;   let timer = null;

&nbsp;   let spawnTimer = null;

&nbsp;   let isRunning = false;

&nbsp;   let hardMode = false;



&nbsp;   let currentPack = null;

&nbsp;   let comboCount = 0; // increases on hits, resets on miss

&nbsp;   let comboMult = 1;  // 1..5



&nbsp;   function rand(min, max) { return Math.random() \* (max - min) + min; }



&nbsp;   function updateUI() {

&nbsp;     scoreLabel.innerText = `Score: ${score}`;

&nbsp;     streakLabel.innerText = `Combo: x${comboMult}`;

&nbsp;     streakSubLabel.innerText = `${comboCount}`;

&nbsp;     timeLabel.innerText = `Time: ${timeLeft}s`;



&nbsp;     if (timeLeft <= 10) timeLabel.classList.add('whack-danger');

&nbsp;     else timeLabel.classList.remove('whack-danger');

&nbsp;   }



&nbsp;   function setStatus(text, ok=true) {

&nbsp;     statusLabel.innerText = text;

&nbsp;     statusLabel.classList.toggle('whack-ok', ok);

&nbsp;     statusLabel.classList.toggle('whack-danger', !ok);

&nbsp;   }



&nbsp;   function resetGame() {

&nbsp;     clearInterval(timer);

&nbsp;     clearTimeout(spawnTimer);

&nbsp;     isRunning = false;



&nbsp;     score = 0;

&nbsp;     timeLeft = 30;

&nbsp;     comboCount = 0;

&nbsp;     comboMult = 1;

&nbsp;     currentPack = null;



&nbsp;     hideTarget(true);

&nbsp;     setStatus('Ready', true);

&nbsp;     updateUI();

&nbsp;   }



&nbsp;   function startGame() {

&nbsp;     resetGame();

&nbsp;     isRunning = true;

&nbsp;     setStatus('Go!', true);



&nbsp;     timer = setInterval(() => {

&nbsp;       timeLeft--;

&nbsp;       updateUI();

&nbsp;       if (timeLeft <= 0) endGame();

&nbsp;     }, 1000);



&nbsp;     scheduleSpawn(300);

&nbsp;   }



&nbsp;   function endGame() {

&nbsp;     isRunning = false;

&nbsp;     clearInterval(timer);

&nbsp;     clearTimeout(spawnTimer);

&nbsp;     hideTarget(true);

&nbsp;     setStatus(`Done! Final score: ${score}`, true);

&nbsp;   }



&nbsp;   function hideTarget(immediate=false) {

&nbsp;     if (immediate) {

&nbsp;       target.classList.remove('show');

&nbsp;       return;

&nbsp;     }

&nbsp;     target.classList.remove('show');

&nbsp;   }



&nbsp;   function showTarget(pack) {

&nbsp;     currentPack = pack;

&nbsp;     img.src = `${basePath}${pack}.png`;



&nbsp;     // random position inside stage padding

&nbsp;     const rect = stage.getBoundingClientRect();

&nbsp;     const pad = 70; // keeps target away from edges

&nbsp;     const x = rand(pad, rect.width - pad);

&nbsp;     const y = rand(pad, rect.height - pad);



&nbsp;     target.style.left = `${x}px`;

&nbsp;     target.style.top = `${y}px`;



&nbsp;     target.classList.add('show');



&nbsp;     // visible duration

&nbsp;     const visibleMs = hardMode ? rand(380, 650) : rand(520, 900);

&nbsp;     clearTimeout(spawnTimer);

&nbsp;     spawnTimer = setTimeout(() => {

&nbsp;       if (!isRunning) return;

&nbsp;       // If it was missed (target times out)

&nbsp;       registerMiss(x, y, true);

&nbsp;       hideTarget();

&nbsp;       scheduleSpawn(hardMode ? rand(120, 240) : rand(160, 320));

&nbsp;     }, visibleMs);

&nbsp;   }



&nbsp;   function scheduleSpawn(delayMs) {

&nbsp;     clearTimeout(spawnTimer);

&nbsp;     spawnTimer = setTimeout(() => {

&nbsp;       if (!isRunning) return;

&nbsp;       const pack = allPacks\[Math.floor(Math.random() \* allPacks.length)];

&nbsp;       showTarget(pack);

&nbsp;     }, delayMs);

&nbsp;   }



&nbsp;   function addScore(points) {

&nbsp;     score = Math.max(0, score + points);

&nbsp;     updateUI();

&nbsp;   }



&nbsp;   function bumpCombo() {

&nbsp;     comboCount++;

&nbsp;     comboMult = Math.min(5, 1 + Math.floor(comboCount / 5)); // every 5 hits +1

&nbsp;   }



&nbsp;   function resetCombo() {

&nbsp;     comboCount = 0;

&nbsp;     comboMult = 1;

&nbsp;   }



&nbsp;   function registerHit() {

&nbsp;     const isEP = currentPack \&\& currentPack.startsWith('ep');

&nbsp;     const base = isEP ? 2 : 1; // EP slightly better than GP

&nbsp;     bumpCombo();

&nbsp;     const points = base \* comboMult;

&nbsp;     addScore(points);



&nbsp;     setStatus(`+${points} (x${comboMult})`, true);



&nbsp;     hideTarget();

&nbsp;     scheduleSpawn(hardMode ? rand(120, 240) : rand(160, 320));

&nbsp;   }



&nbsp;   function registerMiss(x, y, timeout=false) {

&nbsp;     const missPenalty = hardMode ? -3 : -2;

&nbsp;     const timePenalty = hardMode ? 2 : 1;



&nbsp;     resetCombo();

&nbsp;     addScore(missPenalty);

&nbsp;     timeLeft = Math.max(0, timeLeft - timePenalty);



&nbsp;     setStatus(timeout ? `Missed! ${missPenalty} \& -${timePenalty}s` : `Miss! ${missPenalty} \& -${timePenalty}s`, false);



&nbsp;     // visual dot

&nbsp;     const dot = document.createElement('div');

&nbsp;     dot.className = 'whack-miss-dot';

&nbsp;     dot.style.left = `${x}px`;

&nbsp;     dot.style.top = `${y}px`;

&nbsp;     missOverlay.appendChild(dot);

&nbsp;     setTimeout(() => dot.remove(), 450);



&nbsp;     updateUI();

&nbsp;     if (timeLeft <= 0) endGame();

&nbsp;   }



&nbsp;   // Click handlers

&nbsp;   target.addEventListener('click', (e) => {

&nbsp;     if (!isRunning) return;

&nbsp;     e.stopPropagation(); // do not count as stage miss

&nbsp;     clearTimeout(spawnTimer); // prevent timeout miss

&nbsp;     registerHit();

&nbsp;   });



&nbsp;   stage.addEventListener('click', (e) => {

&nbsp;     if (!isRunning) return;

&nbsp;     // stage click = miss

&nbsp;     const rect = stage.getBoundingClientRect();

&nbsp;     const x = e.clientX - rect.left;

&nbsp;     const y = e.clientY - rect.top;

&nbsp;     registerMiss(x, y, false);

&nbsp;   });



&nbsp;   // Public buttons

&nbsp;   window.startWhack = function() { startGame(); };

&nbsp;   window.toggleHardMode = function() {

&nbsp;     hardMode = !hardMode;

&nbsp;     hardLabel.innerText = hardMode ? 'ON' : 'OFF';

&nbsp;     setStatus(hardMode ? 'Hard Mode enabled' : 'Hard Mode disabled', true);

&nbsp;   };



&nbsp;   // Keyboard shortcut

&nbsp;   window.addEventListener('keydown', (e) => {

&nbsp;     if (e.code === 'Space') {

&nbsp;       e.preventDefault();

&nbsp;       startGame();

&nbsp;     }

&nbsp;   });



&nbsp;   // Init

&nbsp;   resetGame();

&nbsp; })();

</script>



