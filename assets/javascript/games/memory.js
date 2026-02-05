(() => {
  try {
    if (customElements.get("chaos-memory")) return;

    const tpl = document.createElement("template");
    tpl.innerHTML = `
      <style>
        :host{
          --bg:#ffffff; --card:#ffffff; --ink:#0b0b0b; --muted:#4b5563;
          --border:#d1d1d1; --shadow:0 14px 20px -10px rgba(0,0,0,.18);
          --radius:22px; --gap:10px; --flip:0.42s cubic-bezier(.175,.885,.32,1.22);
          --size:146px; display:block;
        }
        .shell{
          background: var(--bg); border: 1px solid var(--border);
          border-radius: var(--radius); box-shadow: var(--shadow);
          padding: 1.1rem; position: relative;
        }
        .top{
          display:flex; justify-content:space-between; align-items:flex-start;
          gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;
        }
        h2{ margin:0; font-size:1.3rem; font-weight:850; color:var(--ink); }
        p{ margin:.25rem 0 0; color:var(--muted); font-size:.9rem; }

        .stats-wrapper{ display:flex; flex-direction:column; align-items:flex-end; gap:.5rem; }
        .sound-toggle{ font-size:.8rem; font-weight:700; color:var(--muted); }

        .stats{ display:flex; gap:.5rem; flex-wrap:wrap; justify-content:flex-end; }
        .pill{
          background: var(--card); border:2px solid var(--border);
          border-radius:999px; padding:.42rem .7rem;
          font-weight:800; font-size:.85rem; min-width:110px;
          text-align:center;
        }
        .pill.chaos-active{ background:#ef4444; border-color:#ef4444; color:#fff; transform:scale(1.08); }
        .pill.timer-urgent{ background:#ef4444; border-color:#ef4444; color:#fff; animation:pulse .9s infinite; }
        @keyframes pulse{50%{transform:scale(1.08)}}

        .btn{
          background:#0b0b0b; color:#fff; border:0;
          border-radius:12px; padding:.5rem .9rem;
          font-weight:850; cursor:pointer;
        }

        .grid{ display:grid; gap:var(--gap); justify-content:center; perspective:1100px; }
        @media(min-width:621px){ .grid{ grid-template-columns:repeat(6,var(--size)); } }
        @media(max-width:620px){
          :host{ --size:88px; --gap:6px; }
          .grid{ grid-template-columns:repeat(4,var(--size)); }
        }

        .card{
          width:var(--size); height:var(--size);
          transform-style:preserve-3d; transition:transform var(--flip);
          background:none; border:0; cursor:pointer;
        }
        .card[state="up"], .card[state="match"]{ transform:rotateY(180deg); }
        .card[state="match"]{ pointer-events:none; }

        .face{
          position:absolute; inset:0; backface-visibility:hidden;
          border-radius:12px; display:flex; align-items:center; justify-content:center;
        }
        .front{ background:#0b0b0b; color:#fff; font-weight:900; }
        .back{ background:#fff; transform:rotateY(180deg); border:2px solid #0b0b0b; }
        .back img{ width:100%; height:100%; object-fit:contain; }

        .overlay{
          position:absolute; inset:0; display:none;
          background:rgba(255,255,255,.85); backdrop-filter:blur(4px);
          border-radius:var(--radius);
        }
        .overlay[open]{ display:flex; align-items:center; justify-content:center; }
      </style>

      <div class="shell">
        <div class="top">
          <div>
            <h2>Pack Picker Memory</h2>
            <p>At 10 misses a solved pair closes again</p>
          </div>
          <div class="stats-wrapper">
            <label class="sound-toggle">
              <input type="checkbox" id="sound-chk"> Sound
            </label>
            <div class="stats">
              <div class="pill" id="status"></div>
              <div class="pill" id="misses-pill"></div>
              <div class="pill" id="timer-pill"><span id="timer"></span></div>
              <button class="btn" id="restart">Restart</button>
            </div>
          </div>
        </div>

        <div class="grid" id="grid"></div>

        <div class="overlay" id="overlay">
          <div>
            <h3 id="ovTitle"></h3>
            <p id="ovMsg"></p>
            <button class="btn" id="restart2">Play again</button>
          </div>
        </div>
      </div>
    `;

    class ChaosMemory extends HTMLElement {
      /* 👉 dein kompletter JS-Code unverändert */
    }

    customElements.define("chaos-memory", ChaosMemory);
  } catch (e) {
    console.error("Memory game failed", e);
  }
})();
