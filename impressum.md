---
layout: page
title: Legal Notice (Impressum)
permalink: /impressum/
nav_exclude: true
noindex: true
sitemap: false
---

<style>
  .protection-wrapper {
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }

  .lang-tabs {
    display: flex;
    gap: 14px;
    margin-bottom: 2rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .tab-btn {
    padding: 8px 22px;
    border: 1px solid #d1d1d1;
    background: #fdfdfd;
    cursor: pointer;
    font-weight: 600;
    color: #444;
    border-radius: 8px;
    transition: all .2s ease;
    font-size: .9rem;
  }

  .tab-btn.active {
    background: #007bff;
    color: #fff;
    border-color: #0056b3;
  }

  .contact-card {
    background: #fff;
    border: 1px solid #eee;
    border-left: 4px solid #007bff;
    padding: 24px;
    border-radius: 6px;
    margin: 20px 0;
    line-height: 1.6;
  }

  .contact-card strong {
    display: block;
    margin-top: 16px;
    font-size: .75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #111;
  }

  .legal-links {
    margin-top: 28px;
    font-size: .9rem;
  }

  .legal-links a {
    margin-right: 18px;
  }

  .lang-content { display: none; }
  .lang-content.active { display: block; }

  /* Canvas wrapper */
  .contact-canvas-wrap {
    margin-top: 6px;
  }

  /* Blur-layer (on focus loss) */
  .blurred {
    filter: blur(9px);
  }

  /* Optional: make text selection harder even outside wrapper */
  body { -webkit-user-select: none; user-select: none; }

  /* Keep links selectable/clickable */
  a, button { -webkit-user-select: auto; user-select: auto; }
</style>

<div class="lang-tabs">
  <button class="tab-btn active" id="tab-en" onclick="showLang('en')">English</button>
  <button class="tab-btn" id="tab-de" onclick="showLang('de')">Deutsch</button>
</div>

<div class="protection-wrapper" id="secure-imprint" oncopy="return false" oncontextmenu="return false">

  <!-- ENGLISH -->
  <div id="content-en" class="lang-content active">
    <h2>Legal Notice (Impressum)</h2>
    <p>Information according to § 5 TMG:</p>

    <div class="contact-card">
      <strong>Operator</strong>
      <div class="contact-canvas-wrap">
        <canvas id="cv-en-operator" aria-label="Operator details"></canvas>
      </div>

      <strong>Contact</strong>
      <div class="contact-canvas-wrap">
        <canvas id="cv-en-contact" aria-label="Contact details"></canvas>
      </div>
    </div>

    <h3>Intellectual Property & Media</h3>
    <p>
      Most images and visual content on this website consist of screenshots taken directly from
      <em>The Sims 4</em> and are used solely to illustrate the functionality of the published mods.
    </p>
    <p>
      <strong>Credits & Licenses:</strong>
      Sources and licenses for third-party icons, images, and similar assets used on this website
      are listed on a dedicated page:
      <a href="/licenses/">Credits & Licenses</a>.
    </p>

    <div class="legal-links">
      <a href="/privacy/">Privacy Policy</a>
      <a href="/cookies/">Cookie Policy</a>
    </div>
  </div>

  <!-- DEUTSCH -->
  <div id="content-de" class="lang-content">
    <h2>Impressum</h2>
    <p>Angaben gemäß § 5 TMG:</p>

    <div class="contact-card">
      <strong>Verantwortlich</strong>
      <div class="contact-canvas-wrap">
        <canvas id="cv-de-operator" aria-label="Angaben zum Verantwortlichen"></canvas>
      </div>

      <strong>Kontakt</strong>
      <div class="contact-canvas-wrap">
        <canvas id="cv-de-contact" aria-label="Kontaktangaben"></canvas>
      </div>
    </div>

    <h3>Urheberrecht & Medien</h3>
    <p>
      Der Großteil der auf dieser Website verwendeten Bilder und visuellen Inhalte besteht aus
      Screenshots aus <em>Die Sims 4</em> und dient ausschließlich der Darstellung der Mod-Funktionen.
    </p>
    <p>
      <strong>Credits & Lizenzen:</strong>
      Quellen und Lizenzen für verwendete Icons, Bilder und vergleichbare Drittanbieter-Assets
      sind auf einer separaten Seite zusammengefasst:
      <a href="/licenses/">Credits & Lizenzen</a>.
    </p>

    <div class="legal-links">
      <a href="/privacy/">Datenschutzerklärung</a>
      <a href="/cookies/">Cookie-Richtlinie</a>
    </div>
  </div>
</div>

<script>
  function showLang(lang) {
    document.querySelectorAll('.lang-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(e => e.classList.remove('active'));
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('tab-' + lang).classList.add('active');
  }

  // Block common shortcuts (still not "real security", but reduces casual copying)
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['c','u','s','p','i','a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  });
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Blur on focus loss (helps against many screenshot tool flows)
  window.addEventListener("blur", () => {
    const el = document.getElementById("secure-imprint");
    if (el) el.classList.add("blurred");
  });
  window.addEventListener("focus", () => {
    const el = document.getElementById("secure-imprint");
    if (el) el.classList.remove("blurred");
  });
</script>

<script>
(() => {
  // Decode helper: base64 -> reverse
  const decode = v => atob(v).split('').reverse().join('');

  // Data (no cleartext in HTML)
  const data = {
    name:   "emFhUiBzYWVyZG5B".split('').reverse().join(''),
    street: "MTcwIGVsbEEgcmV1bGF6bmVyUA==",
    city:   "bmlscmVCIDA5NDAx",
    mail:   "bW9jLmxpYW1nQHpyaWRuYTRzbWlz"
  };

  // Real displayed lines (kept minimal)
  const operatorLines = [
    decode(data.name),
    decode(data.street),
    decode(data.city),
    "Germany"
  ];
  const contactLines = [
    "E-Mail: " + decode(data.mail)
  ];

  // Canvas render (with subtle noise to mess with OCR)
  function renderLines(canvasId, lines) {
    const cv = document.getElementById(canvasId);
    if (!cv) return;

    // Basic sizing logic
    const font = "16px Arial";
    const lineH = 22;
    const pad = 2;

    // create offscreen measurement
    const tmp = document.createElement("canvas").getContext("2d");
    tmp.font = font;
    const width = Math.ceil(Math.max(...lines.map(l => tmp.measureText(l).width)) + pad * 2);
    const height = Math.ceil(lines.length * lineH + pad * 2);

    // set canvas size (important: set before drawing)
    cv.width = width;
    cv.height = height;

    const ctx = cv.getContext("2d", { alpha: true });
    ctx.clearRect(0, 0, width, height);

    // background transparent; text color close to your theme
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.fillStyle = "#111";
    ctx.imageSmoothingEnabled = true;

    // subtle per-line x jitter
    lines.forEach((line, i) => {
      const jitter = (i % 2 === 0) ? 0.35 : -0.35;
      ctx.fillText(line, pad + jitter, pad + i * lineH);
    });

    // OCR-noise: tiny dots (visually invisible-ish, but disrupts OCR)
    // Keep it light so it doesn't look dirty
    const dots = Math.min(220, Math.floor((width * height) / 180));
    ctx.fillStyle = "rgba(0,0,0,0.045)";
    for (let i = 0; i < dots; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  // Render for both languages (same data, different canvas ids)
  renderLines("cv-en-operator", operatorLines);
  renderLines("cv-de-operator", operatorLines);
  renderLines("cv-en-contact",  contactLines);
  renderLines("cv-de-contact",  contactLines);

  // Optional: prevent dragging the canvas as an image
  document.querySelectorAll("canvas").forEach(cv => {
    cv.addEventListener("dragstart", e => e.preventDefault());
  });
})();
</script>
