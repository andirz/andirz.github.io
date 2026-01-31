---
layout: page
title: Pack Memory
icon: "fas fa-th"
---

<div class="memory-game-container" style="max-width: 650px; margin: 0 auto; text-align: center;">
    <p>Find the matching pairs of Expansion Packs (EP01 - EP11)!</p>
    
    <div id="game-stats" style="margin-bottom: 20px; font-weight: bold; font-size: 1.2rem; display: none;">
        Moves: <span id="moves">0</span> | Matches: <span id="matches">0</span> / <span id="total-pairs">0</span>
    </div>

    <div id="loading-msg">Scanning for Pack Icons...</div>

    <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px;">
        </div>

    <button id="restart-btn" onclick="startGame()" style="display: none; background: var(--accent-color); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; margin: 0 auto; transition: opacity 0.3s;">
        Restart Game
    </button>
</div>

<style>
    .memory-card {
        aspect-ratio: 1 / 1;
        background: var(--bg-secondary);
        border: 2px solid var(--border-color);
        border-radius: 10px;
        cursor: pointer;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s, box-shadow 0.3s;
    }
    .memory-card:hover { box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .memory-card.flipped { transform: rotateY(180deg); }
    
    .card-front, .card-back {
        position: absolute; width: 100%; height: 100%;
        backface-visibility: hidden; display: flex;
        align-items: center; justify-content: center; border-radius: 8px;
    }
    .card-back { background: var(--accent-color); color: white; font-size: 1.8rem; }
    .card-front { background: white; transform: rotateY(180deg); }
    .card-front img { width: 85%; height: 85%; object-fit: contain; }
    
    .matched { 
        opacity: 0.4; 
        cursor: default; 
        border-color: #28a745 !important;
        pointer-events: none;
    }
</style>

<script>
    const basePath = "{{ '/assets/img/logos/' | relative_url }}";
    let validPacks = [];
    let flippedCards = [];
    let moves = 0;
    let matches = 0;
    let canFlip = false;

    // Scan only EP01 to EP11
    async function checkExistingPacks() {
        const checkPromises = [];
        for (let i = 1; i <= 11; i++) {
            const fileName = `pack_ep${i.toString().padStart(2, '0')}.png`;
            const fullPath = basePath + fileName;
            
            checkPromises.push(new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(fileName);
                img.onerror = () => resolve(null);
                img.src = fullPath;
            }));
        }

        const results = await Promise.all(checkPromises);
        validPacks = results.filter(name => name !== null);
        
        if (validPacks.length < 2) {
            document.getElementById('loading-msg').innerText = "Error: No pack icons (pack_ep01.png etc.) found.";
        } else {
            document.getElementById('loading-msg').style.display = "none";
            document.getElementById('game-stats').style.display = "block";
            document.getElementById('restart-btn').style.display = "block";
            startGame();
        }
    }

    function startGame() {
        moves = 0;
        matches = 0;
        flippedCards = [];
        canFlip = true;
        document.getElementById('moves').innerText = '0';
        document.getElementById('matches').innerText = '0';

        const grid = document.getElementById('memory-grid');
        grid.innerHTML = '';

        // Pick max 8 or 10 pairs to keep it challenging but playable
        // If we have 11 packs, let's use 8 pairs for a perfect 4x4 grid (16 cards)
        // If we want to use all 11, we would need 22 cards (less symmetrical)
        let pairCount = (validPacks.length >= 8) ? 8 : validPacks.length;
        let selectedPacks = [...validPacks].sort(() => Math.random() - 0.5).slice(0, pairCount);
        
        document.getElementById('total-pairs').innerText = selectedPacks.length;

        const gameIcons = [...selectedPacks, ...selectedPacks].sort(() => Math.random() - 0.5);

        gameIcons.forEach((icon) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.icon = icon;
            card.innerHTML = `
                <div class="card-back"><i class="fas fa-question"></i></div>
                <div class="card-front"><img src="${basePath}${icon}" alt="Pack"></div>
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
            if (matches === parseInt(document.getElementById('total-pairs').innerText)) {
                setTimeout(() => alert('Great job! You found all expansion pack pairs!'), 500);
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

    checkExistingPacks();
</script>
