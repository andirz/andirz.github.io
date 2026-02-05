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
    border-bottom:1px solid var(--border-color, rgba(0,0,0,.15));
  }

  .tab-btn{
    padding:8px 22px;
    border:1px solid var(--border-color, rgba(0,0,0,.2));
    background:var(--main-bg, transparent);
    cursor:pointer;
    font-weight:600;
    color:inherit;
    border-radius:8px;
    transition:.2s;
    font-size:.9rem;
  }

  .tab-btn.active{
    background:#007bff;
    color:#fff;
    border-color:#0056b3;
  }

  .contact-card{
    border:1px solid var(--border-color, rgba(0,0,0,.15));
    border-left:4px solid #007bff;
    padding:24px;
    border-radius:10px;
    margin:20px 0;
    line-height:1.6;
    background:var(--card-bg, transparent);
    color:inherit;
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

<!-- DE -->
<div id="content-de" class="lang-content active">
  <h2>Impressum</h2>
  <p>Angaben gemäß § 5 TMG:</p>

  <div class="contact-card">
    <strong>Verantwortlich</strong>
    <span id="imprint-name"></span><br>
    <span id="imprint-street"></span><br>
    <span id="imprint-city"></span><br>
    Deutschland

    <strong>Kontakt</strong>
    E-Mail: <span id="imprint-mail"></span>
  </div>

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

<!-- EN -->
<div id="content-en" class="lang-content">
  <h2>Legal Notice (Impressum)</h2>
  <p>Information according to § 5 TMG:</p>

  <div class="contact-card">
    <strong>Operator</strong>
    <span id="imprint-name-en"></span><br>
    <span id="imprint-street-en"></span><br>
    <span id="imprint-city-en"></span><br>
    Germany

    <strong>Contact</strong>
    E-Mail: <span id="imprint-mail-en"></span>
  </div>

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
  // Sprachumschaltung
  function showLang(lang){
    document.querySelectorAll('.lang-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(e => e.classList.remove('active'));
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('tab-' + lang).classList.add('active');
  }

  // KEIN Klartext im HTML – nur CharCodes
  const NAME   = [65,110,100,114,101,97,115,32,82,97,97,122];
  const STREET = [80,114,101,110,122,108,97,117,101,114,32,65,108,108,101,101,32,49,55,48];
  const CITY   = [49,48,52,48,57,32,66,101,114,108,105,110];
  const MAIL   = [115,105,109,115,52,97,110,100,105,114,122,64,103,109,97,105,108,46,99,111,109];

  const T = a => String.fromCharCode(...a);

  document.getElementById("imprint-name").textContent     = T(NAME);
  document.getElementById("imprint-street").textContent   = T(STREET);
  document.getElementById("imprint-city").textContent     = T(CITY);
  document.getElementById("imprint-mail").textContent     = T(MAIL);

  document.getElementById("imprint-name-en").textContent  = T(NAME);
  document.getElementById("imprint-street-en").textContent= T(STREET);
  document.getElementById("imprint-city-en").textContent  = T(CITY);
  document.getElementById("imprint-mail-en").textContent  = T(MAIL);
</script>
