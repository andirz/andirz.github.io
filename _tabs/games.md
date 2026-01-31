---
layout: page
title: Pack Memory
icon: "fas fa-th"
order: 5
---

<div class="memory-game-container" style="max-width: 600px; margin: 0 auto; text-align: center;">
    <p style="margin-bottom: 25px; color: var(--text-muted);">Match the Expansion Pack icons to win!</p>
    
    <div id="game-stats" style="margin-bottom: 20px; font-weight: bold; font-size: 1.2rem;">
        Moves: <span id="moves" style="color: var(--accent-color);">0</span> | Matches: <span id="matches" style="color: #28a745;">0</span> / 8
    </div>

    <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 30px;">
        </div>

    <button onclick="startGame()" style="background: var(--accent-color); color: white; border: none; padding: 12px 28px; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">
        Restart Game
    </button>
</div>

<style>
    .memory-card {
        aspect-ratio: 1 / 1;
        background: var(--card-bg);
        border: 2px solid var(--card-border-color);
        border-radius: 12px;
        cursor: pointer;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .memory-card.flipped { transform: rotateY(180deg); }
    
    .card-front, .card-back {
        position: absolute; width: 100%; height: 100%;
        backface-visibility: hidden; display: flex;
        align-items: center; justify-content: center; border-radius: 10px;
    }
    .card-back { background: var(--accent-color); color: white; font-size: 1.8rem; }
    .card-front { background: white; transform: rotateY(180deg); padding: 8px; }
    .card-front img { width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
    
    .matched { 
        opacity: 0.5; 
        cursor: default; 
        border-color: #28a745 !important;
        pointer-events: none;
    }
</style>

<script>
    /**
     * Konfiguration der Pfade
     * Wir nutzen hier den Pfad deiner neuen Domain für maximale Kompatibilität.
     */
    const basePath = "https://andirz.github.io/assets/img/logos/";

    const packFiles = [
        'pack_ep01.png', 'pack_ep02.png', 'pack_ep03.png', 'pack_ep04.png',
        'pack_ep05.png', 'pack_ep06.png', 'pack_ep07.png', 'pack_ep08.png',
        'pack_ep09.png', 'pack_ep10.png', 'pack_ep11.png'
    ];

    let flippedCards = [];
    let moves = 0;
    let matches = 0;
    let canFlip = true;

    function startGame() {
        moves = 0;
        matches = 0;
        flippedCards = [];
        canFlip = true;
        document.getElementById('moves').innerText = '0';
        document.getElementById('matches').innerText = '0';

        const grid = document.getElementById('memory-grid');
        grid.innerHTML = '';

        // Zufällige Auswahl von 8 Packs aus den verfügbaren 11
        const selected = [...packFiles].sort(() => 0.5 - Math.random()).slice(0, 8);
        const gameSet = [...selected, ...selected].sort(() => 0.5 - Math.random());

        gameSet.forEach(fileName => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.icon = fileName;
            card.innerHTML = `
                <div class="card-back"><i class="fas fa-question"></i></div>
                <div class="card-front">
                    <img src="${basePath}${fileName}" alt="Pack Icon">
                </div>
            `;
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        });
    }

    function flipCard() {
        if (!canFlip || this.classList.contains('flipped') || this.classList.contains('matched')) return;

        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            document.getElementById('moves').innerText = moves;
            checkMatch();
        }
    }

    function checkMatch() {
        canFlip = false;
        const [card1, card2] = flippedCards;

        if (card1.dataset.icon === card2.dataset.icon) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matches++;
            document.getElementById('matches').innerText = matches;
            flippedCards = [];
            canFlip = true;
            
            if (matches === 8) {
                setTimeout(() => {
                    alert('Sul Sul! You found all pairs in ' + moves + ' moves!');
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }

    // Spielstart wenn die Seite geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startGame);
    } else {
        startGame();
    }
</script>
