---
layout: default
title: Memory Game
---

<style>
  :root {
    --sims-blue: #0076ff;
    --sims-green: #2ecc71;
  }

  .game-container {
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
    padding: 20px;
  }

  /* Scoreboard */
  .scoreboard {
    display: flex;
    justify-content: space-around;
    background: var(--shimmer-color, #f8f9fa);
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .stat-val { color: var(--sims-blue); display: block; font-size: 1.2rem; }

  /* Grid */
  .memory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 0 auto;
  }

  .memory-card { aspect-ratio: 1; cursor: pointer; perspective: 1000px; }
  .m-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
  .memory-card.flipped .m-inner { transform: rotateY(180deg); }
  
  .face { 
    position: absolute; width: 100%; height: 100%; 
    backface-visibility: hidden; border-radius: 12px; 
    display: flex; align-items: center; justify-content: center; font-size: 1.5rem; 
  }
  
  .front { background: var(--sims-blue); color: white; }
  .back { 
    background: white; color: var(--sims-blue); 
    border: 3px solid var(--sims-blue); transform: rotateY(180deg); 
  }

  .sims-btn-restart {
    margin-top: 30px;
    background: var(--sims-green);
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
  }
</style>

<div class="game-container">
  <h1 class="mb-4">Mod Memory Challenge</h1>

  <div class="scoreboard">
    <div>SCORE <span id="score" class="stat-val">0</span></div>
    <div>CLICKS <span id="clicks" class="stat-val">0</span></div>
    <div>TIME <span id="timer" class="stat-val">0s</span></div>
  </div>

  <div class="memory-grid" id="memoryGrid"></div>
  
  <button class="sims-btn-restart" onclick="location.reload()">Reset Game</button>
</div>

<script>
  (function() {
    const icons = ['fa-gem', 'fa-shopping-cart', 'fa-pizza-slice', 'fa-university', 'fa-microchip', 'fa-heart', 'fa-flask', 'fa-code'];
    let gameIcons = [...icons, ...icons].sort(() => 0.5 - Math.random());
    const grid = document.getElementById('memoryGrid');
    
    let flipped = [];
    let matched = 0;
    let score = 0;
    let clicks = 0;
    let seconds = 0;
    let gameActive = false;
    let timerInterval;

    function updateStats() {
      document.getElementById('score').innerText = score;
      document.getElementById('clicks').innerText = clicks;
      document.getElementById('timer').innerText = seconds + 's';
    }

    function startTimer() {
      if (!gameActive) {
        gameActive = true;
        timerInterval = setInterval(() => {
          seconds++;
          // Kleiner Punktabzug pro 5 Sekunden, um Schnelligkeit zu belohnen
          if (seconds % 5 === 0 && score > 0) score -= 2; 
          updateStats();
        }, 1000);
      }
    }

    gameIcons.forEach(icon => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <div class="m-inner">
          <div class="face front"><i class="fas fa-question"></i></div>
          <div class="face back"><i class="fas ${icon}"></i></div>
        </div>`;

      card.onclick = () => {
        if (flipped.length < 2 && !card.classList.contains('flipped')) {
          startTimer();
          card.classList.add('flipped');
          flipped.push({card, icon});

          if (flipped.length === 2) {
            clicks++;
            if (flipped[0].icon === flipped[1].icon) {
              // Treffer!
              matched++;
              score += 100; // Bonus für Match
              flipped = [];
              if (matched === icons.length) {
                clearInterval(timerInterval);
                const timeBonus = Math.max(0, 500 - (seconds * 5));
                score += timeBonus;
                updateStats();
                setTimeout(() => alert(`Dag Dag! Final Score: ${score} (Time Bonus: ${timeBonus})`), 500);
              }
            } else {
              // Kein Treffer
              score = Math.max(0, score - 10); // Strafe
              setTimeout(() => {
                flipped[0].card.classList.remove('flipped');
                flipped[1].card.classList.remove('flipped');
                flipped = [];
              }, 800);
            }
            updateStats();
          }
        }
      };
      grid.appendChild(card);
    });
  })();
</script>
