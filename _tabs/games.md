---
layout: page
title: Pack Memory
icon: "fas fa-th"
---

<div class="memory-game-container" style="max-width: 600px; margin: 0 auto; text-align: center;">
    <p>Finde die passenden Paare deiner Lieblings-Mods!</p>
    
    <div style="margin-bottom: 20px; font-weight: bold; font-size: 1.2rem;">
        Versuche: <span id="moves">0</span> | Paare: <span id="matches">0</span>/8
    </div>

    <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px;">
        </div>

    <button onclick="resetGame()" style="background: var(--accent-color); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold;">
        Spiel neu starten
    </button>
</div>

<style>
    .memory-card {
        aspect-ratio: 1 / 1;
        background: var(--bg-secondary);
        border: 2px solid var(--border-color);
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }

    .memory-card.flipped {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
    }

    .card-back {
        background: var(--accent-color);
        color: white;
        font-size: 2rem;
    }

    .card-front {
        background: white;
        transform: rotateY(180deg);
    }

    .card-front img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }

    .matched {
        opacity: 0.6;
        cursor: default;
        border-color: #28a745 !important;
    }
</style>

<script>
    // Hier die exakten Dateinamen aus deinem /assets/img/logos/ Ordner eintragen!
    const logoFiles = [
        'simsim.png', 
        'obscura.png', 
        'sim-nom-nom.png', 
        'better-shopping.png',
        'better-pie.png',
        'weather.png',
        'smart-core.png',
        'university.png'
    ];

    let cards = [];
    let flippedCards = [];
    let moves = 0;
    let matches = 0;
    let canFlip = true;

    function createBoard() {
        const grid = document.getElementById('memory-grid');
        grid.innerHTML = '';
        
        // Verdoppeln für Paare und mischen
        const gameIcons = [...logoFiles, ...logoFiles]
            .sort(() => Math.random() - 0.5);

        gameIcons.forEach((icon, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.icon = icon;
            card.innerHTML = `
                <div class="card-back"><i class="fas fa-question"></i></div>
                <div class="card-front">
                    <img src="/assets/img/logos/${icon}" alt="Mod Logo">
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
        const isMatch = card1.dataset.icon === card2.dataset.icon;

        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matches++;
            document.getElementById('matches').innerText = matches;
            resetTurn();
            if (matches === 8) setTimeout(() => alert('Glückwunsch! Du hast alle Paare gefunden!'), 500);
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                resetTurn();
            }, 1000);
        }
    }

    function resetTurn() {
        flippedCards = [];
        canFlip = true;
    }

    function resetGame() {
        moves = 0;
        matches = 0;
        document.getElementById('moves').innerText = '0';
        document.getElementById('matches').innerText = '0';
        createBoard();
    }

    // Spiel beim Laden starten
    createBoard();
</script>
