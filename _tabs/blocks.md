---
layout: page
title: Whack-a-Pack
icon: "fas fa-bullseye"
order: 11
---

## <i class="fas fa-bullseye"></i> Whack-a-Pack
Klicke die Packs so schnell du kannst! Bonus für Combos. Sul Sul!

---

<style>
  .whack-section {
    background: var(--bg-secondary);
    border-radius: 24px;
    padding: 30px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
    margin: 20px 0;
  }

  .whack-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
  }

  .whack-badge {
    background: #f8fafc;
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 999px;
    padding: 8px 12px;
    font-weight: 700;
    color: #0f172a;
  }

  .whack-badge .sub {
    font-weight: 600;
    opacity: 0.75;
    margin-left: 6px;
  }

  .whack-danger { color: #dc3545; }
  .whack-ok { color: #16a34a; }

  .whack-stage {
    position: relative;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.02));
    border: 1px solid rgba(0,0,0,0.08);
    overflow: hidden;
  }

  .whack-target {
    position: absolute;
    width: 96px;
    height: 96px;
    border-radius: 16px;
    background: #f1f5f9;
    border: 2px solid rgba(46, 204, 113, 0.9);
    box-shadow: 0 10px 20px -8px rgba(0,0,0,0.20);
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease, transform 0.12s ease;
  }

  .whack-target.show {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }

  .whack-target img {
    width: 86%;
    height: 86%;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
  }

  .whack-miss-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .whack-miss-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: rgba(220, 53, 69, 0.75);
    transform: translate(-50%, -50%);
    animation: pop 420ms ease forwards;
  }

  @keyframes pop {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
    30% { opacity: 1; transform: translate(-50%, -50%) scale(1.0); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
  }

  .whack-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 14px;
    flex-wrap: wrap;
  }

  .whack-help {
    max-width: 560px;
    margin: 12px auto 0;
    color: rgba(15,23,42,0.75);
    font-size: 0.95rem;
  }

  .whack-kbd {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    background: rgba(15,23,42,0.06);
    border: 1px solid rgba(15,23,42,0.12);
    border-radius: 8px;
    padding: 2px 6px;
    font-size: 0.9em;
  }
</style>

<section class="whack-section">
  <div class="row align-items-center">
    <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
      <h2 class="fw-800" style="color: var(--text-color);">Whack-a-Pack</h2>
      <p class="text-muted">Treffe die Packs. Missklicks kosten Punkte & Zeit.</p>

      <div class="whack-panel">
        <div class="whack-badge"><span id="w-score">Score: 0</span></div>
        <div class="whack-badge"><span id="w-streak">Combo: x1</span><span class="sub" id="w-streak-sub">0</span></div>
        <div class="whack-badge"><span id="w-time">Time: 30s</span></div>
      </div>

      <div class="whack-panel">
        <div class="whack-badge"><span id="w-status" class="whack-ok">Ready</span></div>
      </div>

      <div class="whack-actions">
        <button class="btn btn-sm btn-outline-secondary" onclick="startWhack()">Start / Restart</button>
        <button class="btn btn-sm btn-outline-secondary" onclick="toggleHardMode()">Hard Mode: <span id="w-hard">OFF</span></button>
      </div>

      <div class="whack-help">
        Tipp: Klick ins Feld zählt als Miss. Im Hard Mode spawnt es schneller und Miss kostet mehr.
        Du kannst auch <span class="whack-kbd">Space</span> zum Starten drücken.
      </div>
    </div>

    <div class="col-lg-7">
      <div class="whack-stage" id="w-stage">
        <div class="whack-target" id="w-target" aria-label="target">
          <img id="w-img" alt="Pack" />
        </div>
        <div class="whack-miss-overlay" id="w-miss"></div>
      </div>
    </div>
  </div>
</section>

<script>
  (function() {
    const basePath = "{{ 'assets/img/packs_blue/' | relative_url }}";
    const epPacks = Array.from({length: 18}, (_, i) => `ep${(i + 1).toString().padStart(2, '0')}`);
    const gpPacks = Array.from({length: 12}, (_, i) => `gp${(i + 1).toString().padStart(2, '0')}`);
    const allPacks = [...epPacks, ...gpPacks];

    const stage = document.getElementById('w-stage');
    const target = document.getElementById('w-target');
    const img = document.getElementById('w-img');
    const missOverlay = document.getElementById('w-miss');

    const scoreLabel = document.getElementById('w-score');
    const streakLabel = document.getElementById('w-streak');
    const streakSubLabel = document.getElementById('w-streak-sub');
    const timeLabel = document.getElementById('w-time');
    const statusLabel = document.getElementById('w-status');
    const hardLabel = document.getElementById('w-hard');

    let score = 0;
    let timeLeft = 30;
    let timer = null;
    let spawnTimer = null;
    let isRunning = false;
    let hardMode = false;

    let currentPack = null;
    let comboCount = 0; // increases on hits, resets on miss
    let comboMult = 1;  // 1..5

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function updateUI() {
      scoreLabel.innerText = `Score: ${score}`;
      streakLabel.innerText = `Combo: x${comboMult}`;
      streakSubLabel.innerText = `${comboCount}`;
      timeLabel.innerText = `Time: ${timeLeft}s`;

      if (timeLeft <= 10) timeLabel.classList.add('whack-danger');
      else timeLabel.classList.remove('whack-danger');
    }

    function setStatus(text, ok=true) {
      statusLabel.innerText = text;
      statusLabel.classList.toggle('whack-ok', ok);
      statusLabel.classList.toggle('whack-danger', !ok);
    }

    function resetGame() {
      clearInterval(timer);
      clearTimeout(spawnTimer);
      isRunning = false;

      score = 0;
      timeLeft = 30;
      comboCount = 0;
      comboMult = 1;
      currentPack = null;

      hideTarget(true);
      setStatus('Ready', true);
      updateUI();
    }

    function startGame() {
      resetGame();
      isRunning = true;
      setStatus('Go!', true);

      timer = setInterval(() => {
        timeLeft--;
        updateUI();
        if (timeLeft <= 0) endGame();
      }, 1000);

      scheduleSpawn(300);
    }

    function endGame() {
      isRunning = false;
      clearInterval(timer);
      clearTimeout(spawnTimer);
      hideTarget(true);
      setStatus(`Done! Final score: ${score}`, true);
    }

    function hideTarget(immediate=false) {
      if (immediate) {
        target.classList.remove('show');
        return;
      }
      target.classList.remove('show');
    }

    function showTarget(pack) {
      currentPack = pack;
      img.src = `${basePath}${pack}.png`;

      // random position inside stage padding
      const rect = stage.getBoundingClientRect();
      const pad = 70; // keeps target away from edges
      const x = rand(pad, rect.width - pad);
      const y = rand(pad, rect.height - pad);

      target.style.left = `${x}px`;
      target.style.top = `${y}px`;

      target.classList.add('show');

      // visible duration
      const visibleMs = hardMode ? rand(380, 650) : rand(520, 900);
      clearTimeout(spawnTimer);
      spawnTimer = setTimeout(() => {
        if (!isRunning) return;
        // If it was missed (target times out)
        registerMiss(x, y, true);
        hideTarget();
        scheduleSpawn(hardMode ? rand(120, 240) : rand(160, 320));
      }, visibleMs);
    }

    function scheduleSpawn(delayMs) {
      clearTimeout(spawnTimer);
      spawnTimer = setTimeout(() => {
        if (!isRunning) return;
        const pack = allPacks[Math.floor(Math.random() * allPacks.length)];
        showTarget(pack);
      }, delayMs);
    }

    function addScore(points) {
      score = Math.max(0, score + points);
      updateUI();
    }

    function bumpCombo() {
      comboCount++;
      comboMult = Math.min(5, 1 + Math.floor(comboCount / 5)); // every 5 hits +1
    }

    function resetCombo() {
      comboCount = 0;
      comboMult = 1;
    }

    function registerHit() {
      const isEP = currentPack && currentPack.startsWith('ep');
      const base = isEP ? 2 : 1; // EP slightly better than GP
      bumpCombo();
      const points = base * comboMult;
      addScore(points);

      setStatus(`+${points} (x${comboMult})`, true);

      hideTarget();
      scheduleSpawn(hardMode ? rand(120, 240) : rand(160, 320));
    }

    function registerMiss(x, y, timeout=false) {
      const missPenalty = hardMode ? -3 : -2;
      const timePenalty = hardMode ? 2 : 1;

      resetCombo();
      addScore(missPenalty);
      timeLeft = Math.max(0, timeLeft - timePenalty);

      setStatus(timeout ? `Missed! ${missPenalty} & -${timePenalty}s` : `Miss! ${missPenalty} & -${timePenalty}s`, false);

      // visual dot
      const dot = document.createElement('div');
      dot.className = 'whack-miss-dot';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      missOverlay.appendChild(dot);
      setTimeout(() => dot.remove(), 450);

      updateUI();
      if (timeLeft <= 0) endGame();
    }

    // Click handlers
    target.addEventListener('click', (e) => {
      if (!isRunning) return;
      e.stopPropagation(); // do not count as stage miss
      clearTimeout(spawnTimer); // prevent timeout miss
      registerHit();
    });

    stage.addEventListener('click', (e) => {
      if (!isRunning) return;
      // stage click = miss
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      registerMiss(x, y, false);
    });

    // Public buttons
    window.startWhack = function() { startGame(); };
    window.toggleHardMode = function() {
      hardMode = !hardMode;
      hardLabel.innerText = hardMode ? 'ON' : 'OFF';
      setStatus(hardMode ? 'Hard Mode enabled' : 'Hard Mode disabled', true);
    };

    // Keyboard shortcut
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        startGame();
      }
    });

    // Init
    resetGame();
  })();
</script>
