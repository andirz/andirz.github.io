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
</style>

<div class="lang-tabs">
  <button class="tab-btn active" id="tab-en" onclick="showLang('en')">English</button>
  <button class="tab-btn" id="tab-de" onclick="showLang('de')">Deutsch</button>
</div>

<div class="protection-wrapper" oncopy="return false" oncontextmenu="return false">

  <!-- ENGLISH -->
  <div id="content-en" class="lang-content active">
    <h2>Legal Notice (Impressum)</h2>
    <p>Information according to § 5 TMG:</p>

    <div class="contact-card" id="contact-en"></div>

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

    <div class="contact-card" id="contact-de"></div>

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
(() => {
  // Base64 → reverse → Klartext
  const decode = v => atob(v).split('').reverse().join('');

  // NUR Base64-Werte hier (kein reverse!)
  const data = {
    name:   "emFhUiBzYWVyZG5B",
    street: "MTcwIGVsbEEgcmV1bGF6bmVyUA==",
    city:   "bmlscmVCIDA5NDAx",
    mail:   "bW9jLmxpYW1nQHpyaWRuYTRzbWlz"
  };

  const html = `
    <strong>Operator</strong>
    ${decode(data.name)}<br>
    ${decode(data.street)}<br>
    ${decode(data.city)}<br>
    Germany

    <strong>Contact</strong>
    E-Mail: ${decode(data.mail)}
  `;

  document.getElementById("contact-en").innerHTML = html;
  document.getElementById("contact-de").innerHTML = html;
})();
</script>

<script>
  function showLang(lang) {
    document.querySelectorAll('.lang-content').forEach(e => e.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(e => e.classList.remove('active'));
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('tab-' + lang).classList.add('active');
  }

  // block common copy / inspect shortcuts
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['c','u','s','p','i','a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  });
</script>
