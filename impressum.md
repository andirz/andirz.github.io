---
layout: page
title: Legal Notice (Impressum)
permalink: /impressum/
nav_exclude: true
noindex: true
sitemap: false
---

<style>
  .lang-tabs{
    display:flex;
    gap:14px;
    margin-bottom:2rem;
    padding-bottom:10px;
    border-bottom:1px solid var(--border-color, rgba(0,0,0,.12));
  }

  .tab-btn{
    padding:8px 22px;
    border:1px solid var(--border-color, rgba(0,0,0,.18));
    background: var(--main-bg, transparent);
    cursor:pointer;
    font-weight:600;
    color: var(--text-color, inherit);
    border-radius:8px;
    transition:all .2s ease;
    font-size:.9rem;
  }

  .tab-btn.active{
    background:#007bff;
    color:#fff;
    border-color:#0056b3;
  }

  /* WICHTIG: kein hartes #fff, damit Dark Mode nicht "unsichtbar" wird */
  .contact-card{
    background: var(--card-bg, var(--main-bg, transparent));
    color: var(--text-color, inherit);
    border: 1px solid var(--border-color, rgba(0,0,0,.12));
    border-left: 4px solid #007bff;
    padding:24px;
    border-radius:10px;
    margin:20px 0;
    line-height:1.6;
  }

  .contact-card strong{
    display:block;
    margin-top:16px;
    font-size:.75rem;
    letter-spacing:1px;
    text-transform:uppercase;
    opacity:.9;
  }

  .legal-links{
    margin-top:28px;
    font-size:.95rem;
  }
  .legal-links a{ margin-right:18px; }

  .lang-content{ display:none; }
  .lang-content.active{ display:block; }
</style>

<div class="lang-tabs">
  <button class="tab-btn active" id="tab-de" onclick="showLang('de')">Deutsch</button>
  <button class="tab-btn" id="tab-en" onclick="showLang('en')">English</button>
</div>

<div id="content-de" class="lang-content active">
  <h2>Impressum</h2>
  <p>Angaben gemäß § 5 TMG:</p>

  <div class="contact-card" data-contact></div>

  <h3>Urheberrecht &amp; Medien</h3>
  <p>
    Der Großteil der auf dieser Website verwendeten Bilder und visuellen Inhalte besteht aus
    Screenshots aus <em>Die Sims 4</em> und dient ausschließlich der Darstellung der Mod-Funktionen.
  </p>
  <p>
    <strong>Credits &amp; Lizenzen:</strong>
    Quellen und Lizenzen für verwendete Icons und Bilder:
    <a href="/licenses/">Credits &amp; Lizenzen</a>
  </p>

  <div class="legal-links">
    <a href="/privacy/">Datenschutzerklärung</a>
    <a href="/cookies/">Cookie-Richtlinie</a>
  </div>
</div>

<div id="content-en" class="lang-content">
  <h2>Legal Notice (Impressum)</h2>
  <p>Information according to § 5 TMG:</p>

  <div class="contact-card" data-contact></div>

  <h3>Intellectual Property &amp; Media</h3>
  <p>
    Most images and visual content on this website consist of screenshots taken directly from
    <em>The Sims 4</em> and are used solely to illustrate mod functionality.
  </p>
  <p>
    <strong>Credits &amp; Licenses:</strong>
    Sources and licenses for icons and images:
    <a href="/licenses/">Credits &amp; Licenses</a>
  </p>

  <div class="legal-links">
    <a href="/privacy/">Privacy Policy</a>
    <a href="/cookies/">Cookie Policy</a>
  </div>
</div>

<script>
  function showLang(lang){
    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('tab-' + lang).classList.add('active');
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Kein Klartext im HTML: Daten als Char-Codes
    const d = [
      [65,110,100,114,101,97,115,32,82,97,97,122],
      [80,114,101,110,122,108,97,117,101,114,32,65,108,108,101,101,32,49,55,48],
      [49,48,52,48,57,32,66,101,114,108,105,110],
      [115,105,109,115,52,97,110,100,105,114,122,64,103,109,97,105,108,46,99,111,109]
    ];
    const t = arr => arr.map(c => String.fromCharCode(c)).join('');

    const html = `
      <strong>Verantwortlich / Operator</strong>
      ${t(d[0])}<br>
      ${t(d[1])}<br>
      ${t(d[2])}<br>
      Germany

      <strong>Kontakt / Contact</strong>
      E-Mail: ${t(d[3])}
    `;

    document.querySelectorAll('[data-contact]').forEach(el => {
      el.innerHTML = html;
    });
  });
</script>
