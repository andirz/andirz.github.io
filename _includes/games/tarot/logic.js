const deck = ["advocate","chariot","coins","cups","death","emperor","empress","evil","fool","hermit","high_spellcaster","judgment","justice","lovers","magician","moon","star","strength","sun","suspension","swords","temperance","tower","wands","wheel_of_fortune","world"];

const meanings = {
  fool: { text: "A fresh start is coming. Just don't walk off any literal or metaphorical cliffs.", moods: ["✨ Inspired"] },
  death: { text: "Endings lead to new beginnings. Time to clear out your inventory.", moods: ["🦋 Renewed"] },
  sun: { text: "Success and joy! Your social meter is practically glowing.", moods: ["☀️ Happy"] },
  magician: { text: "You have the tools to succeed. Skill gain speed +50%.", moods: ["⚡ Focused"] },
  tower: { text: "Chaos! Something is about to break. Keep a repair kit handy.", moods: ["😱 Panicked"] }
  // Ergänze weitere nach Belieben...
};

function getImgPath(name) { 
    // Hier ist der Pfad, den du bestätigt hast
    return "/assets/img/games/tarot/" + name + ".png"; 
}

roots.forEach(root => {
  root.setAttribute('data-tf-init','1');
  const btn = root.querySelector('[data-tf-draw]');
  const cardsWrap = root.querySelector('[data-tf-cards]');
  const elReading = root.querySelector('[data-tf-reading]');
  const elPrompt = root.querySelector('[data-tf-prompt]');
  let spread = "quick";

  root.querySelectorAll('[data-tf-spread]').forEach(p => {
    p.addEventListener('click', () => {
      spread = p.dataset.tfSpread;
      root.querySelectorAll('[data-tf-spread]').forEach(b => b.classList.remove('active'));
      p.classList.add('active');
      cardsWrap.innerHTML = "";
      elReading.style.display = "none";
    });
  });

  btn.addEventListener('click', () => {
    playSynth('draw');
    const count = spread === "quick" ? 1 : 3;
    const drawn = [...deck].sort(() => Math.random() - 0.5).slice(0, count);
    const tags = spread === "quick" ? ["FATE"] : ["PAST", "PRESENT", "FUTURE"];
    
    cardsWrap.innerHTML = "";
    elReading.style.display = "none";
    elPrompt.textContent = "Wait for the spirits...";

    drawn.forEach((name, i) => {
      const card = document.createElement('div');
      card.className = "tf-card tf-back";
      card.dataset.name = name;
      card.dataset.tag = tags[i] || "FATE";
      card.innerHTML = `<span class="tf-tag">${card.dataset.tag}</span>`;
      
      card.addEventListener('click', function() {
        if (!this.classList.contains('tf-back')) return;
        playSynth('reveal');
        this.classList.remove('tf-back');
        this.innerHTML = `<span class="tf-tag">${this.dataset.tag}</span><img src="${getImgPath(this.dataset.name)}" alt="Card">`;
        
        if (root.querySelectorAll('.tf-back').length === 0) {
          elReading.style.display = "block";
          const finalCard = drawn[drawn.length - 1];
          root.querySelector('[data-tf-text]').textContent = meanings[finalCard]?.text || "The Watcher is mysterious today. Expect the unexpected.";
          
          const moodContainer = root.querySelector('[data-tf-moodlets]');
          moodContainer.innerHTML = "";
          (meanings[finalCard]?.moods || ["✨ Neutral"]).forEach(m => {
            const span = document.createElement('span');
            span.className = "tf-moodlet";
            span.textContent = m;
            moodContainer.appendChild(span);
          });
        }
      });
      cardsWrap.appendChild(card);
    });
    
    elPrompt.textContent = "Click to reveal your fate.";
  });
});