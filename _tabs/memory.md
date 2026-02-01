---

layout: page

title: Pack Picker Game

icon: "fas fa-gamepad"

order: 10

---



\## <i class="fas fa-puzzle-piece"></i> Training für Simmer

Willkommen beim Pack Picker! Dieses Spiel hilft dir dabei, dein Gedächtnis für die verschiedenen Sims-Erweiterungen zu trainieren. Perfekt für Modder wie dich, die täglich mit diesen Assets arbeiten.



---



<style>

&nbsp; .game-wrapper {

&nbsp;   background: var(--bg-secondary);

&nbsp;   border-radius: 16px;

&nbsp;   padding: 25px;

&nbsp;   border: 1px solid var(--border-color);

&nbsp;   box-shadow: 0 4px 12px rgba(0,0,0,0.05);

&nbsp;   margin-top: 20px;

&nbsp; }



&nbsp; .game-controls {

&nbsp;   display: flex;

&nbsp;   flex-wrap: wrap;

&nbsp;   gap: 15px;

&nbsp;   margin-bottom: 25px;

&nbsp;   padding: 15px;

&nbsp;   background: var(--bg-primary);

&nbsp;   border-radius: 10px;

&nbsp;   border: 1px solid var(--border-color);

&nbsp; }



&nbsp; .control-group {

&nbsp;   flex: 1;

&nbsp;   min-width: 150px;

&nbsp; }



&nbsp; .control-label {

&nbsp;   display: block;

&nbsp;   font-size: 0.75rem;

&nbsp;   font-weight: 700;

&nbsp;   color: var(--text-muted);

&nbsp;   text-transform: uppercase;

&nbsp;   margin-bottom: 5px;

&nbsp; }



&nbsp; .memory-grid {

&nbsp;   display: grid;

&nbsp;   gap: 12px;

&nbsp;   max-width: 600px;

&nbsp;   margin: 0 auto;

&nbsp; }



&nbsp; .grid-4 { grid-template-columns: repeat(4, 1fr); }

&nbsp; .grid-6 { grid-template-columns: repeat(6, 1fr); }



&nbsp; .m-card {

&nbsp;   aspect-ratio: 1;

&nbsp;   cursor: pointer;

&nbsp;   perspective: 1000px;

&nbsp; }



&nbsp; .m-inner {

&nbsp;   position: relative;

&nbsp;   width: 100%;

&nbsp;   height: 100%;

&nbsp;   transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

&nbsp;   transform-style: preserve-3d;

&nbsp; }



&nbsp; .m-card.flipped .m-inner { transform: rotateY(180deg); }



&nbsp; .m-face {

&nbsp;   position: absolute;

&nbsp;   width: 100%;

&nbsp;   height: 100%;

&nbsp;   backface-visibility: hidden;

&nbsp;   border-radius: 10px;

&nbsp;   display: flex;

&nbsp;   align-items: center;

&nbsp;   justify-content: center;

&nbsp; }



&nbsp; .m-front {

&nbsp;   background: #1e293b;

&nbsp;   color: rgba(255,255,255,0.1);

&nbsp;   border: 1px solid rgba(255,255,255,0.1);

&nbsp;   font-size: 1.5rem;

&nbsp; }



&nbsp; .m-back {

&nbsp;   background: white;

&nbsp;   transform: rotateY(180deg);

&nbsp;   padding: 5px;

&nbsp;   border: 2px solid var(--accent-color);

&nbsp; }



&nbsp; .m-back img {

&nbsp;   width: 100%;

&nbsp;   height: 100%;

&nbsp;   object-fit: contain;

&nbsp; }



&nbsp; .timer-val { font-weight: 700; color: var(--link-color); }

&nbsp; .timer-danger { color: #dc3545; animation: pulse 1s infinite; }

&nbsp; 

&nbsp; @keyframes pulse {

&nbsp;   0% { opacity: 1; }

&nbsp;   50% { opacity: 0.5; }

&nbsp;   100% { opacity: 1; }

&nbsp; }

</style>



<div class="game-wrapper">

&nbsp; <div class="game-controls">

&nbsp;   <div class="control-group">

&nbsp;     <label class="control-label">Schwierigkeit</label>

&nbsp;     <select id="gridSize" class="form-select form-select-sm" onchange="initGame()" style="width: 100%; background: var(--bg-secondary); color: var(--text-color); border: 1px solid var(--border-color); border-radius: 5px; padding: 5px;">

&nbsp;       <option value="16" data-cols="4" data-time="45">Normal (4x4 • 45s)</option>

&nbsp;       <option value="36" data-cols="6" data-time="100">Expert (6x6 • 100s)</option>

&nbsp;     </select>

&nbsp;   </div>

&nbsp;   <div class="control-group text-center">

&nbsp;     <span class="control-label">Zeit</span>

&nbsp;     <span id="game-timer" class="timer-val">--s</span>

&nbsp;   </div>

&nbsp;   <div class="control-group text-center">

&nbsp;     <span class="control-label">Matches</span>

&nbsp;     <span id="game-status" class="timer-val">0 / 0</span>

&nbsp;   </div>

&nbsp;   <div class="control-group">

&nbsp;     <button class="btn btn-primary btn-sm w-100" onclick="initGame()" style="font-weight: 700;">Reset</button>

&nbsp;   </div>

&nbsp; </div>



&nbsp; <div id="memoryGrid" class="memory-grid grid-4"></div>

</div>



<div style="display: flex; align-items: center; gap: 12px; background: rgba(0, 123, 255, 0.05); border: 1px solid rgba(0, 123, 255, 0.15); padding: 14px 20px; border-radius: 10px; margin-top: 25px;">

&nbsp; <i class="fas fa-info-circle" style="color: #007bff; font-size: 1.1rem;"></i>

&nbsp; <span style="font-size: 0.9rem; color: var(--text-color);">

&nbsp;   \*\*Pro-Tipp:\*\* Nutze den Expert-Modus, um dein Wissen über alle {{ site.data.mods.size }} Mods und Packs auf die Probe zu stellen!

&nbsp; </span>

</div>



<script>

&nbsp; (function() {

&nbsp;   const basePath = "{{ 'assets/img/packs\_blue/' | relative\_url }}";

&nbsp;   const epPacks = Array.from({length: 18}, (\_, i) => `ep${(i + 1).toString().padStart(2, '0')}`);

&nbsp;   const gpPacks = Array.from({length: 12}, (\_, i) => `gp${(i + 1).toString().padStart(2, '0')}`);

&nbsp;   const allPacksList = \[...epPacks, ...gpPacks];



&nbsp;   let flippedCards = \[];

&nbsp;   let lockBoard = false;

&nbsp;   let matches = 0;

&nbsp;   let totalPairs = 0;

&nbsp;   let timeLeft = 0;

&nbsp;   let timerInterval = null;



&nbsp;   window.initGame = function() {

&nbsp;     clearInterval(timerInterval);

&nbsp;     const grid = document.getElementById('memoryGrid');

&nbsp;     const sizeSelect = document.getElementById('gridSize');

&nbsp;     const selected = sizeSelect.options\[sizeSelect.selectedIndex];

&nbsp;     

&nbsp;     const count = parseInt(selected.value);

&nbsp;     totalPairs = count / 2;

&nbsp;     timeLeft = parseInt(selected.dataset.time);

&nbsp;     

&nbsp;     matches = 0;

&nbsp;     flippedCards = \[];

&nbsp;     lockBoard = false;



&nbsp;     grid.innerHTML = '';

&nbsp;     grid.className = `memory-grid grid-${selected.dataset.cols}`;

&nbsp;     document.getElementById('game-status').innerText = `0 / ${totalPairs}`;

&nbsp;     document.getElementById('game-timer').innerText = `${timeLeft}s`;

&nbsp;     document.getElementById('game-timer').classList.remove('timer-danger');

&nbsp;     

&nbsp;     let deck = \[...allPacksList].sort(() => 0.5 - Math.random()).slice(0, totalPairs);

&nbsp;     deck = \[...deck, ...deck].sort(() => 0.5 - Math.random());



&nbsp;     deck.forEach(p => grid.appendChild(createCard(p)));

&nbsp;     startTimer();

&nbsp;   }



&nbsp;   function createCard(pack) {

&nbsp;     const div = document.createElement('div');

&nbsp;     div.className = 'm-card';

&nbsp;     div.dataset.pack = pack;

&nbsp;     div.innerHTML = `

&nbsp;       <div class="m-inner">

&nbsp;         <div class="m-face m-front"><i class="fas fa-sim-card"></i></div>

&nbsp;         <div class="m-face m-back"><img src="${basePath}${pack}.png"></div>

&nbsp;       </div>`;

&nbsp;     div.onclick = function() {

&nbsp;       if (lockBoard || this.classList.contains('flipped') || flippedCards\[0] === this) return;

&nbsp;       this.classList.add('flipped');

&nbsp;       flippedCards.push(this);

&nbsp;       if (flippedCards.length === 2) {

&nbsp;         lockBoard = true;

&nbsp;         const isMatch = flippedCards\[0].dataset.pack === flippedCards\[1].dataset.pack;

&nbsp;         if (isMatch) {

&nbsp;           matches++;

&nbsp;           document.getElementById('game-status').innerText = `${matches} / ${totalPairs}`;

&nbsp;           flippedCards = \[];

&nbsp;           lockBoard = false;

&nbsp;           if (matches === totalPairs) { clearInterval(timerInterval); setTimeout(() => alert('Sul Sul! Sieg!'), 300); }

&nbsp;         } else {

&nbsp;           setTimeout(() => {

&nbsp;             flippedCards.forEach(c => c.classList.remove('flipped'));

&nbsp;             flippedCards = \[];

&nbsp;             lockBoard = false;

&nbsp;           }, 700);

&nbsp;         }

&nbsp;       }

&nbsp;     };

&nbsp;     return div;

&nbsp;   }



&nbsp;   function startTimer() {

&nbsp;     timerInterval = setInterval(() => {

&nbsp;       timeLeft--;

&nbsp;       const timerEl = document.getElementById('game-timer');

&nbsp;       timerEl.innerText = `${timeLeft}s`;

&nbsp;       if (timeLeft <= 10) timerEl.classList.add('timer-danger');

&nbsp;       if (timeLeft <= 0) { clearInterval(timerInterval); lockBoard = true; alert('Zeit abgelaufen!'); }

&nbsp;     }, 1000);

&nbsp;   }



&nbsp;   initGame();

&nbsp; })();

</script>



---



\## <i class="fas fa-comments"></i> Feedback

Hast du Wünsche für neue Spielmodi oder Icons? Melde dich in unserem \*\*\[Discord Community]({{ site.data.globals.links.discord }})\*\*!

