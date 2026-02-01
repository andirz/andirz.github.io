---
layout: page
title: Quickdraw — Shoot / Don't Shoot
icon: "fas fa-crosshairs"
order: 12
---

## <i class="fas fa-crosshairs"></i> Quickdraw — Shoot / Don’t Shoot
Schieße nur auf „böse“ Ziele. „Gute“ Ziele darfst du nicht treffen.

---

<style>
  .qd-section{
    background: var(--bg-secondary);
    border-radius: 24px;
    padding: 30px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
    margin: 20px 0;
  }
  .qd-panel{
    display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-bottom:12px;
  }
  .qd-badge{
    background:#f8fafc;
    border:1px solid rgba(0,0,0,0.07);
    border-radius:999px;
    padding:8px 12px;
    font-weight:700;
    color:#0f172a;
  }
  .qd-danger{ color:#dc3545; }
  .qd-ok{ color:#16a34a; }

  .qd-stage{
    position:relative;
    width:100%;
    max-width:560px;
    margin:0 auto;
    aspect-ratio: 1 / 1;
    border-radius:18px;
    background: linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.02));
    border: 1px solid rgba(0,0,0,0.08);
    overflow:hidden;
    cursor: crosshair;
    user-select:none;
  }

  .qd-target{
    position:absolute;
    width:110px;
    height:110px;
    border-radius:18px;
    display:grid;
    place-items:center;
    transform: translate(-50%,-50%) scale(0.85);
    opacity:0;
    pointer-events:none;
    transition: opacity 0.10s ease, transform 0.10s ease;
    box-shadow: 0 10px 20px -8px rgba(0,0,0,0.22);
    background:#f1f5f9;
  }
  .qd-target.show{
    opacity:1;
    transform: translate(-50%,-50%) scale(1);
    pointer-events:auto;
  }

  .qd-target.qd-evil{
    border:2px solid rgba(220,53,69,0.85);
    background:#fee2e2;
  }
  .qd-target.qd-good{
    border:2px solid rgba(22,163,74,0.85);
    background:#dcfce7;
  }

  .qd-img{
    width: 92%;
    height: 92%;
    object-fit: contain;
    user-select:none;
    -webkit-user-drag:none;
    pointer-events:none; /* clicks should hit the target div */
  }

  .qd-fx{ position:absolute; inset:0; pointer-events:none; }
  .qd-pop{
    position:absolute;
    transform: translate(-50%,-50%);
    font-weight:900;
    animation: qdpop 520ms ease forwards;
    text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  }
  @keyframes qdpop{
    0%{ opacity:0; transform: translate(-50%,-50%) scale(0.75); }
    25%{ opacity:1; transform: translate(-50%,-50%) scale(1); }
    100%{ opacity:0; transform: translate(-50%,-70%) scale(1.15); }
  }

  .qd-actions{
    display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;
  }
  .qd-help{
    max-width:560px; margin:12px auto 0;
    color: rgba(15,23,42,0.75); font-size:0.95rem;
  }
  .qd-kbd{
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
    background: rgba(15,23,42,0.06);
    border: 1px solid rgba(15,23,42,0.12);
    border-radius: 8px;
    padding: 2px 6px;
    font-size: 0.9em;
  }
</style>

<section class="qd-section">
  <div class="row align-items-center">
    <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
      <h2 class="fw-800" style="color: var(--text-color);">Quickdraw</h2>
      <p class="text-muted">Triff nur die Bösen. Gute Ziele sind tabu.</p>

      <div class="qd-panel">
        <div class="qd-badge"><span id="qd-score">Score: 0</span></div>
        <div class="qd-badge"><span id="qd-combo">Combo: x1</span> <span style="opacity:.7" id="qd-combo-n">0</span></div>
        <div class="qd-badge"><span id="qd-time">Time: 30s</span></div>
      </div>

      <div class="qd-panel">
        <div class="qd-badge"><span id="qd-status" class="qd-ok">Ready</span></div>
      </div>

      <div class="qd-actions">
        <button class="btn btn-sm btn-outline-secondary" onclick="qdStart()">Start / Restart</button>
        <button class="btn btn-sm btn-outline-secondary" onclick="qdToggleHard()">Hard Mode: <span id="qd-hard">OFF</span></button>
      </div>

      <div class="qd-help">
        Klick ins Feld zählt als Schuss. Triffst du einen Guten → fette Strafe.
        Verpasst du einen Bösen → kleine Strafe.
        <span class="qd-kbd">Space</span> startet neu.
      </div>
    </div>

    <div class="col-lg-7">
      <div class="qd-stage" id="qd-stage">
        <div class="qd-target" id="qd-target">
          <img class="qd-img" id="qd-img" alt="character" />
        </div>
        <div class="qd-fx" id="qd-fx"></div>
      </div>
    </div>
  </div>
</section>

<script>
  (function(){
    const stage = document.getElementById('qd-stage');
    const target = document.getElementById('qd-target');
    const imgEl = document.getElementById('qd-img');
    const fx = document.getElementById('qd-fx');

    const scoreLabel = document.getElementById('qd-score');
    const comboLabel = document.getElementById('qd-combo');
    const comboNLabel = document.getElementById('qd-combo-n');
    const timeLabel = document.getElementById('qd-time');
    const statusLabel = document.getElementById('qd-status');
    const hardLabel = document.getElementById('qd-hard');

    // Your asset folder (Jekyll-friendly)
    const basePath = "{{ 'assets/img/games/shoot/' | relative_url }}";

    // Build filenames evil01..evil10, good01..good30
    const EVIL = Array.from({length: 10}, (_, i) => `evil${String(i+1).padStart(2,'0')}.png`);
    const GOOD = Array.from({length: 30}, (_, i) => `good${String(i+1).padStart(2,'0')}.png`);

    let score=0;
    let timeLeft=30;
    let running=false;
    let hard=false;

    let timer=null;
    let lifeTimer=null;

    let currentType=null; // "evil" | "good"
    let currentPos={x: 0, y: 0};
    let wasHit=false;

    let comboCount=0;
    let comboMult=1;

    function r(min,max){ return Math.random()*(max-min)+min; }

    function setStatus(text, ok=true){
      statusLabel.textContent = text;
      statusLabel.classList.toggle('qd-ok', ok);
      statusLabel.classList.toggle('qd-danger', !ok);
    }

    function ui(){
      scoreLabel.textContent = `Score: ${score}`;
      comboLabel.textContent = `Combo: x${comboMult}`;
      comboNLabel.textContent = `${comboCount}`;
      timeLabel.textContent = `Time: ${timeLeft}s`;
      timeLabel.classList.toggle('qd-danger', timeLeft <= 10);
    }

    function reset(){
      clearInterval(timer);
      clearTimeout(lifeTimer);
      running=false;

      score=0;
      timeLeft=30;
      comboCount=0;
      comboMult=1;

      hide(true);
      setStatus("Ready", true);
      ui();
    }

    function start(){
      reset();
      running=true;
      setStatus("Go!", true);

      timer=setInterval(()=>{
        timeLeft--;
        ui();
        if(timeLeft<=0) end();
      },1000);

      scheduleSpawn(250);
    }

    function end(){
      running=false;
      clearInterval(timer);
      clearTimeout(lifeTimer);
      hide(true);
      setStatus(`Done! Final score: ${score}`, true);
    }

    function hide(immediate=false){
      if(immediate){ target.classList.remove('show'); return; }
      target.classList.remove('show');
    }

    function pop(text, x, y, good=true){
      const el=document.createElement('div');
      el.className='qd-pop';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.color = good ? '#16a34a' : '#dc3545';
      el.textContent = text;
      fx.appendChild(el);
      setTimeout(()=>el.remove(), 550);
    }

    function add(points){
      score = Math.max(0, score + points);
      ui();
    }

    function comboUp(){
      comboCount++;
      comboMult = Math.min(5, 1 + Math.floor(comboCount/4)); // every 4 hits -> +1
    }

    function comboReset(){
      comboCount=0;
      comboMult=1;
    }

    function pick(arr){
      return arr[Math.floor(Math.random()*arr.length)];
    }

    function spawn(){
      if(!running) return;

      // Good should appear often, because player must "hold fire".
      // Tune here:
      const goodChance = hard ? 0.40 : 0.50;   // hard = fewer goods, more pressure
      currentType = (Math.random() < goodChance) ? "good" : "evil";

      wasHit=false;

      const file = currentType==="evil" ? pick(EVIL) : pick(GOOD);

      // Set image first (reduces flicker)
      imgEl.src = `${basePath}${file}`;

      target.classList.toggle('qd-evil', currentType==="evil");
      target.classList.toggle('qd-good', currentType==="good");

      // position
      const rect = stage.getBoundingClientRect();
      const pad = 80;
      const x = r(pad, rect.width - pad);
      const y = r(pad, rect.height - pad);
      currentPos = {x, y};

      target.style.left = `${x}px`;
      target.style.top = `${y}px`;
      target.classList.add('show');

      // lifetime
      const visible = hard ? r(300, 600) : r(420, 820);
      clearTimeout(lifeTimer);
      lifeTimer = setTimeout(()=>{
        if(!running) return;

        target.classList.remove('show');

        // miss handling: only punish missing EVIL
        if(currentType==="evil" && !wasHit){
          comboReset();
          add(hard ? -2 : -1);
          pop("MISS", x, y, false);
          setStatus("Missed evil!", false);
        }

        scheduleSpawn(hard ? r(110, 210) : r(150, 260));
      }, visible);
    }

    function scheduleSpawn(delay){
      clearTimeout(lifeTimer);
      lifeTimer = setTimeout(spawn, delay);
    }

    target.addEventListener('click', (e)=>{
      if(!running) return;
      e.stopPropagation();
      wasHit=true;
      clearTimeout(lifeTimer);

      const x=currentPos.x, y=currentPos.y;

      if(currentType==="evil"){
        comboUp();
        const points = (hard ? 3 : 2) * comboMult;
        add(points);
        pop(`+${points}`, x, y, true);
        setStatus(`Nice! +${points}`, true);
      } else {
        // shot a good -> big penalty + time penalty
        comboReset();
        const penalty = hard ? -10 : -7;
        const tpen = hard ? 3 : 2;
        add(penalty);
        timeLeft = Math.max(0, timeLeft - tpen);
        ui();
        pop(`${penalty} / -${tpen}s`, x, y, false);
        setStatus("NO! That was good!", false);
        if(timeLeft<=0){ end(); return; }
      }

      hide();
      scheduleSpawn(hard ? r(110, 210) : r(150, 260));
    });

    // click stage = shot in the air (tiny penalty)
    stage.addEventListener('click', (e)=>{
      if(!running) return;
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      comboReset();
      add(hard ? -2 : -1);
      pop("AIR", x, y, false);
      setStatus("No target…", false);
    });

    window.qdStart = start;
    window.qdToggleHard = function(){
      hard = !hard;
      hardLabel.textContent = hard ? "ON" : "OFF";
      setStatus(hard ? "Hard Mode enabled" : "Hard Mode disabled", true);
    };

    window.addEventListener('keydown', (e)=>{
      if(e.code==="Space"){
        e.preventDefault();
        start();
      }
    });

    reset();
  })();
</script>
