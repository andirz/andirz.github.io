---
layout: page
title: Pack Picker Game
icon: "fas fa-gamepad"
order: 10
---

## <i class="fas fa-stopwatch"></i> Pack Picker Challenge
Finde alle Paare, bevor die Zeit abläuft! Sul Sul!

---

<style>
  .memory-section {
    background: var(--bg-secondary);
    border-radius: 24px;
    padding: 30px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
    margin: 20px 0;
  }

  .memory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    max-width: 400px;
    margin: 0 auto;
  }

  .m-card {
    aspect-ratio: 1;
    cursor: pointer;
    perspective: 1000px;
  }

  .m-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
  }

  .m-card.flipped .m-inner { transform: rotateY(180deg); }

  .m-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .m-front {
    background: #1e293b;
    color: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .m-back {
    background: #f1f5f9;
    border: 2px solid #2ecc71;
    transform: rotateY(180deg);
    padding: 10px;
  }

  .m-back img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .timer-danger { color: #dc3545; font-weight: bold; }
</style>

<section class="memory-section">
  <div class="row align-items-center">
    <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
      <h2 class="fw-800" style="color: var(--text-color);">Pack Picker</h2>
      <p class="text-muted">Match the expansion and game packs.</p>
      
      <div class="badge bg-light text-dark p-2 mt-2">
        <span id="game-status">Matches: 0 / 8</span>
      </div>
      <div class="badge bg-light text-dark p-2 mt-2">
        <span id="game-timer">Time: 45s</span>
      </div>

      <div class="mt-3">
        <button class="btn btn-sm btn-outline-secondary" onclick="initGame()">Game Restart</button>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="memory-grid" id="memoryGrid"></div>
    </div>
  </div>
</section>

<script>
  (function() {
    const basePath = "{{ 'assets/img/packs_blue/' | relative_url }}";
    const epPacks = Array.from({length: 18}, (_, i) => `ep${(i + 1).toString().padStart(2, '0')}`);
    const gpPacks = Array.from({length: 12}, (_, i) => `gp${(i + 1).toString().padStart(2, '0')}`);
    const allPacks = [...epPacks, ...gpPacks];

    let flippedCards = [];
    let lockBoard = false;
    let matches = 0;
    let timeLeft = 45;
    let timerInterval = null;

    const grid = document.getElementById('memoryGrid');
    const statusLabel = document.getElementById('game-status');
    const timerLabel = document.getElementById('game-timer');

    window.initGame = function() {
      // Reset
      clearInterval(timerInterval);
      grid.innerHTML = '';
      flippedCards = [];
      lockBoard = false;
      matches = 0;
      timeLeft = 45;
      
      statusLabel.innerText = `Matches: 0 / 8`;
      timerLabel.innerText = `Time: 45s`;
      timerLabel.classList.remove('timer-danger');

      // Setup Deck
      let selected = allPacks.sort(() => 0.5 - Math.random()).slice(0, 8);
      let deck = [...selected, ...selected].sort(() => 0.5 - Math.random());
      
      deck.forEach(pack => grid.appendChild(createCard(pack)));
      startTimer();
    }

    function createCard(packName) {
      const card = document.createElement('div');
      card.classList.add('m-card');
      card.dataset.pack = packName;
      card.innerHTML = `
        <div class="m-inner">
          <div class="m-face m-front"><i class="fas fa-box-open"></i></div>
          <div class="m-face m-back"><img src="${basePath}${packName}.png" alt="Pack"></div>
        </div>`;
      card.addEventListener('click', flipCard);
      return card;
    }

    function flipCard() {
      if (lockBoard || this === flippedCards[0] || this.classList.contains('flipped')) return;
      this.classList.add('flipped');
      flippedCards.push(this);
      if (flippedCards.length === 2) checkMatch();
    }

    function checkMatch() {
      lockBoard = true;
      const isMatch = flippedCards[0].dataset.pack === flippedCards[1].dataset.pack;
      if (isMatch) {
        matches++;
        statusLabel.innerText = `Matches: ${matches} / 8`;
        flippedCards = [];
        lockBoard = false;
        if (matches === 8) {
          clearInterval(timerInterval);
          setTimeout(() => alert('Sul Sul! All packs matched.'), 500);
        }
      } else {
        setTimeout(() => {
          flippedCards.forEach(card => card.classList.remove('flipped'));
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        timeLeft--;
        timerLabel.innerText = `Time: ${timeLeft}s`;
        if (timeLeft <= 10) timerLabel.classList.add('timer-danger');
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          lockBoard = true;
          alert('Time is up!');
        }
      }, 1000);
    }

    initGame();
  })();
</script>