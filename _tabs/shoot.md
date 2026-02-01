---

layout: page

title: Quickdraw — Shoot / Don't Shoot

icon: "fas fa-crosshairs"

order: 12

---



\## <i class="fas fa-crosshairs"></i> Quickdraw — Shoot / Don’t Shoot

Klicke nur die „bösen“ Ziele. „Gute“ Ziele darfst du nicht treffen.



---



<style>

&nbsp; .qd-section{

&nbsp;   background: var(--bg-secondary);

&nbsp;   border-radius: 24px;

&nbsp;   padding: 30px;

&nbsp;   border: 1px solid var(--border-color);

&nbsp;   box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);

&nbsp;   margin: 20px 0;

&nbsp; }

&nbsp; .qd-panel{

&nbsp;   display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-bottom:12px;

&nbsp; }

&nbsp; .qd-badge{

&nbsp;   background:#f8fafc;

&nbsp;   border:1px solid rgba(0,0,0,0.07);

&nbsp;   border-radius:999px;

&nbsp;   padding:8px 12px;

&nbsp;   font-weight:700;

&nbsp;   color:#0f172a;

&nbsp; }

&nbsp; .qd-danger{ color:#dc3545; }

&nbsp; .qd-ok{ color:#16a34a; }

&nbsp; .qd-stage{

&nbsp;   position:relative;

&nbsp;   width:100%;

&nbsp;   max-width:560px;

&nbsp;   margin:0 auto;

&nbsp;   aspect-ratio: 1 / 1;

&nbsp;   border-radius:18px;

&nbsp;   background: linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.02));

&nbsp;   border: 1px solid rgba(0,0,0,0.08);

&nbsp;   overflow:hidden;

&nbsp;   cursor: crosshair;

&nbsp;   user-select:none;

&nbsp; }

&nbsp; .qd-target{

&nbsp;   position:absolute;

&nbsp;   width:96px;

&nbsp;   height:96px;

&nbsp;   border-radius:18px;

&nbsp;   display:grid;

&nbsp;   place-items:center;

&nbsp;   transform: translate(-50%,-50%) scale(0.85);

&nbsp;   opacity:0;

&nbsp;   pointer-events:none;

&nbsp;   transition: opacity 0.10s ease, transform 0.10s ease;

&nbsp;   box-shadow: 0 10px 20px -8px rgba(0,0,0,0.22);

&nbsp; }

&nbsp; .qd-target.show{

&nbsp;   opacity:1;

&nbsp;   transform: translate(-50%,-50%) scale(1);

&nbsp;   pointer-events:auto;

&nbsp; }

&nbsp; .qd-emoji{

&nbsp;   font-size:44px;

&nbsp;   line-height:1;

&nbsp; }

&nbsp; .qd-evil{

&nbsp;   background:#fee2e2;

&nbsp;   border:2px solid rgba(220,53,69,0.85);

&nbsp; }

&nbsp; .qd-good{

&nbsp;   background:#dcfce7;

&nbsp;   border:2px solid rgba(22,163,74,0.85);

&nbsp; }

&nbsp; .qd-fx{

&nbsp;   position:absolute; inset:0; pointer-events:none;

&nbsp; }

&nbsp; .qd-pop{

&nbsp;   position:absolute;

&nbsp;   transform: translate(-50%,-50%);

&nbsp;   font-weight:900;

&nbsp;   animation: qdpop 520ms ease forwards;

&nbsp;   text-shadow: 0 2px 12px rgba(0,0,0,0.18);

&nbsp; }

&nbsp; @keyframes qdpop{

&nbsp;   0%{ opacity:0; transform: translate(-50%,-50%) scale(0.75); }

&nbsp;   25%{ opacity:1; transform: translate(-50%,-50%) scale(1); }

&nbsp;   100%{ opacity:0; transform: translate(-50%,-70%) scale(1.15); }

&nbsp; }

&nbsp; .qd-actions{

&nbsp;   display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;

&nbsp; }

&nbsp; .qd-help{

&nbsp;   max-width:560px; margin:12px auto 0;

&nbsp;   color: rgba(15,23,42,0.75); font-size:0.95rem;

&nbsp; }

&nbsp; .qd-kbd{

&nbsp;   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;

&nbsp;   background: rgba(15,23,42,0.06);

&nbsp;   border: 1px solid rgba(15,23,42,0.12);

&nbsp;   border-radius: 8px;

&nbsp;   padding: 2px 6px;

&nbsp;   font-size: 0.9em;

&nbsp; }

</style>



<section class="qd-section">

&nbsp; <div class="row align-items-center">

&nbsp;   <div class="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">

&nbsp;     <h2 class="fw-800" style="color: var(--text-color);">Quickdraw</h2>

&nbsp;     <p class="text-muted">Triff nur die Bösen. Die Guten sind tabu.</p>



&nbsp;     <div class="qd-panel">

&nbsp;       <div class="qd-badge"><span id="qd-score">Score: 0</span></div>

&nbsp;       <div class="qd-badge"><span id="qd-combo">Combo: x1</span> <span style="opacity:.7" id="qd-combo-n">0</span></div>

&nbsp;       <div class="qd-badge"><span id="qd-time">Time: 30s</span></div>

&nbsp;     </div>



&nbsp;     <div class="qd-panel">

&nbsp;       <div class="qd-badge"><span id="qd-status" class="qd-ok">Ready</span></div>

&nbsp;     </div>



&nbsp;     <div class="qd-actions">

&nbsp;       <button class="btn btn-sm btn-outline-secondary" onclick="qdStart()">Start / Restart</button>

&nbsp;       <button class="btn btn-sm btn-outline-secondary" onclick="qdToggleHard()">Hard Mode: <span id="qd-hard">OFF</span></button>

&nbsp;     </div>



&nbsp;     <div class="qd-help">

&nbsp;       Klick ins Feld = „Schuss“. Triffst du einen Guten → Strafe. Verpasst du einen Bösen → kleine Strafe.

&nbsp;       <span class="qd-kbd">Space</span> startet neu.

&nbsp;     </div>

&nbsp;   </div>



&nbsp;   <div class="col-lg-7">

&nbsp;     <div class="qd-stage" id="qd-stage">

&nbsp;       <div class="qd-target" id="qd-target">

&nbsp;         <div class="qd-emoji" id="qd-emoji">😈</div>

&nbsp;       </div>

&nbsp;       <div class="qd-fx" id="qd-fx"></div>

&nbsp;     </div>

&nbsp;   </div>

&nbsp; </div>

</section>



<script>

&nbsp; (function(){

&nbsp;   const stage = document.getElementById('qd-stage');

&nbsp;   const target = document.getElementById('qd-target');

&nbsp;   const emojiEl = document.getElementById('qd-emoji');

&nbsp;   const fx = document.getElementById('qd-fx');



&nbsp;   const scoreLabel = document.getElementById('qd-score');

&nbsp;   const comboLabel = document.getElementById('qd-combo');

&nbsp;   const comboNLabel = document.getElementById('qd-combo-n');

&nbsp;   const timeLabel = document.getElementById('qd-time');

&nbsp;   const statusLabel = document.getElementById('qd-status');

&nbsp;   const hardLabel = document.getElementById('qd-hard');



&nbsp;   // You can later replace emojis with image sets if you want.

&nbsp;   const EVIL = \["😈","👹","💀","🧟","🕷️"];

&nbsp;   const GOOD = \["😇","🧚","🦋","🐶","🧸"];



&nbsp;   let score=0;

&nbsp;   let timeLeft=30;

&nbsp;   let running=false;

&nbsp;   let hard=false;



&nbsp;   let timer=null;

&nbsp;   let lifeTimer=null;



&nbsp;   let currentType=null; // "evil" | "good"

&nbsp;   let currentPos={x: 0, y: 0};

&nbsp;   let wasHit=false;



&nbsp;   let comboCount=0;

&nbsp;   let comboMult=1;



&nbsp;   function r(min,max){ return Math.random()\*(max-min)+min; }



&nbsp;   function setStatus(text, ok=true){

&nbsp;     statusLabel.textContent = text;

&nbsp;     statusLabel.classList.toggle('qd-ok', ok);

&nbsp;     statusLabel.classList.toggle('qd-danger', !ok);

&nbsp;   }



&nbsp;   function ui(){

&nbsp;     scoreLabel.textContent = `Score: ${score}`;

&nbsp;     comboLabel.textContent = `Combo: x${comboMult}`;

&nbsp;     comboNLabel.textContent = `${comboCount}`;

&nbsp;     timeLabel.textContent = `Time: ${timeLeft}s`;

&nbsp;     timeLabel.classList.toggle('qd-danger', timeLeft <= 10);

&nbsp;   }



&nbsp;   function reset(){

&nbsp;     clearInterval(timer);

&nbsp;     clearTimeout(lifeTimer);

&nbsp;     running=false;



&nbsp;     score=0;

&nbsp;     timeLeft=30;

&nbsp;     comboCount=0;

&nbsp;     comboMult=1;



&nbsp;     hide(true);

&nbsp;     setStatus("Ready", true);

&nbsp;     ui();

&nbsp;   }



&nbsp;   function start(){

&nbsp;     reset();

&nbsp;     running=true;

&nbsp;     setStatus("Go!", true);



&nbsp;     timer=setInterval(()=>{

&nbsp;       timeLeft--;

&nbsp;       ui();

&nbsp;       if(timeLeft<=0) end();

&nbsp;     },1000);



&nbsp;     scheduleSpawn(250);

&nbsp;   }



&nbsp;   function end(){

&nbsp;     running=false;

&nbsp;     clearInterval(timer);

&nbsp;     clearTimeout(lifeTimer);

&nbsp;     hide(true);

&nbsp;     setStatus(`Done! Final score: ${score}`, true);

&nbsp;   }



&nbsp;   function hide(immediate=false){

&nbsp;     if(immediate){ target.classList.remove('show'); return; }

&nbsp;     target.classList.remove('show');

&nbsp;   }



&nbsp;   function pop(text, x, y, good=true){

&nbsp;     const el=document.createElement('div');

&nbsp;     el.className='qd-pop';

&nbsp;     el.style.left = `${x}px`;

&nbsp;     el.style.top = `${y}px`;

&nbsp;     el.style.color = good ? '#16a34a' : '#dc3545';

&nbsp;     el.textContent = text;

&nbsp;     fx.appendChild(el);

&nbsp;     setTimeout(()=>el.remove(), 550);

&nbsp;   }



&nbsp;   function add(points){

&nbsp;     score = Math.max(0, score + points);

&nbsp;     ui();

&nbsp;   }



&nbsp;   function comboUp(){

&nbsp;     comboCount++;

&nbsp;     comboMult = Math.min(5, 1 + Math.floor(comboCount/4)); // every 4 hits -> +1

&nbsp;   }



&nbsp;   function comboReset(){

&nbsp;     comboCount=0;

&nbsp;     comboMult=1;

&nbsp;   }



&nbsp;   function spawn(){

&nbsp;     if(!running) return;



&nbsp;     // decide type: mostly evil, sometimes good

&nbsp;     const goodChance = hard ? 0.33 : 0.25;

&nbsp;     currentType = (Math.random() < goodChance) ? "good" : "evil";

&nbsp;     wasHit=false;



&nbsp;     // choose look

&nbsp;     const emoji = currentType==="evil"

&nbsp;       ? EVIL\[Math.floor(Math.random()\*EVIL.length)]

&nbsp;       : GOOD\[Math.floor(Math.random()\*GOOD.length)];



&nbsp;     emojiEl.textContent = emoji;



&nbsp;     target.classList.toggle('qd-evil', currentType==="evil");

&nbsp;     target.classList.toggle('qd-good', currentType==="good");



&nbsp;     // position

&nbsp;     const rect = stage.getBoundingClientRect();

&nbsp;     const pad = 70;

&nbsp;     const x = r(pad, rect.width - pad);

&nbsp;     const y = r(pad, rect.height - pad);

&nbsp;     currentPos = {x, y};



&nbsp;     target.style.left = `${x}px`;

&nbsp;     target.style.top = `${y}px`;

&nbsp;     target.classList.add('show');



&nbsp;     // lifetime

&nbsp;     const visible = hard ? r(320, 620) : r(450, 820);

&nbsp;     clearTimeout(lifeTimer);

&nbsp;     lifeTimer = setTimeout(()=>{

&nbsp;       if(!running) return;



&nbsp;       target.classList.remove('show');



&nbsp;       // miss handling:

&nbsp;       if(currentType==="evil" \&\& !wasHit){

&nbsp;         // missed an evil -> small penalty

&nbsp;         comboReset();

&nbsp;         add(hard ? -2 : -1);

&nbsp;         pop("MISS", x, y, false);

&nbsp;         setStatus("Missed evil!", false);

&nbsp;       }



&nbsp;       scheduleSpawn(hard ? r(120, 220) : r(160, 280));

&nbsp;     }, visible);

&nbsp;   }



&nbsp;   function scheduleSpawn(delay){

&nbsp;     clearTimeout(lifeTimer);

&nbsp;     lifeTimer = setTimeout(spawn, delay);

&nbsp;   }



&nbsp;   target.addEventListener('click', (e)=>{

&nbsp;     if(!running) return;

&nbsp;     e.stopPropagation();

&nbsp;     wasHit=true;

&nbsp;     clearTimeout(lifeTimer);



&nbsp;     const x=currentPos.x, y=currentPos.y;



&nbsp;     if(currentType==="evil"){

&nbsp;       comboUp();

&nbsp;       const points = (hard ? 3 : 2) \* comboMult;

&nbsp;       add(points);

&nbsp;       pop(`+${points}`, x, y, true);

&nbsp;       setStatus(`Nice! +${points}`, true);

&nbsp;     } else {

&nbsp;       // shot a good -> big penalty + time penalty

&nbsp;       comboReset();

&nbsp;       const penalty = hard ? -8 : -6;

&nbsp;       const tpen = hard ? 3 : 2;

&nbsp;       add(penalty);

&nbsp;       timeLeft = Math.max(0, timeLeft - tpen);

&nbsp;       ui();

&nbsp;       pop(`${penalty} / -${tpen}s`, x, y, false);

&nbsp;       setStatus("NO! That was good!", false);

&nbsp;       if(timeLeft<=0){ end(); return; }

&nbsp;     }



&nbsp;     hide();

&nbsp;     scheduleSpawn(hard ? r(120, 220) : r(160, 280));

&nbsp;   });



&nbsp;   // click stage = shot in the air (optional tiny penalty)

&nbsp;   stage.addEventListener('click', (e)=>{

&nbsp;     if(!running) return;

&nbsp;     const rect = stage.getBoundingClientRect();

&nbsp;     const x = e.clientX - rect.left;

&nbsp;     const y = e.clientY - rect.top;



&nbsp;     comboReset();

&nbsp;     add(hard ? -2 : -1);

&nbsp;     pop("AIR", x, y, false);

&nbsp;     setStatus("No target…", false);

&nbsp;   });



&nbsp;   window.qdStart = start;

&nbsp;   window.qdToggleHard = function(){

&nbsp;     hard = !hard;

&nbsp;     hardLabel.textContent = hard ? "ON" : "OFF";

&nbsp;     setStatus(hard ? "Hard Mode enabled" : "Hard Mode disabled", true);

&nbsp;   };



&nbsp;   window.addEventListener('keydown', (e)=>{

&nbsp;     if(e.code==="Space"){

&nbsp;       e.preventDefault();

&nbsp;       start();

&nbsp;     }

&nbsp;   });



&nbsp;   reset();

&nbsp; })();

</script>



