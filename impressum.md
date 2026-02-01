---
layout: page
title: Legal Notice / Impressum
permalink: /impressum/
nav_exclude: true
noindex: true
sitemap: false
---

<style>
  /* Schutz-Logik */
  .protection-wrapper { user-select: none; -webkit-user-select: none; cursor: default; }
  .crypt { unicode-bidi: bidi-override; direction: rtl; text-align: left; display: inline-block; }
  .noise { display: none; }

  /* Sprach-Umschalter Styles */
  .lang-switch { margin-bottom: 2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 10px; }
  .lang-btn { 
    background: rgba(0,123,255,0.1); border: 1px solid #007bff; color: #007bff;
    padding: 8px 16px; cursor: pointer; border-radius: 5px; font-weight: bold; margin-right: 10px;
  }
  .lang-btn.active { background: #007bff; color: white; }
  .lang-content { display: none; }
  .lang-content.active { display: block; }

  /* Disclaimer Boxen */
  .legal-box { 
    background: rgba(0,0,0,0.02); border-left: 4px solid #007bff; 
    padding: 15px; margin: 15px 0; font-size: 0.95rem;
  }
</style>

<div class="lang-switch">
  <button class="lang-btn active" onclick="showLang('en')">🇬🇧 English</button>
  <button class="lang-btn" onclick="showLang('de')">🇩🇪 Deutsch</button>
</div>

<div class="protection-wrapper" oncopy="return false" oncontextmenu="return false">

  <div id="content-en" class="lang-content active">
    <h2>Legal Notice</h2>
    
    <h3>Information according to § 5 TMG</h3>
    <p>
      <strong>Website Operator:</strong><br>
      <span class="crypt">zaaR<span class="noise">_mod_</span> saerdnA</span><br>
      <span class="crypt">071<span class="noise">sims</span> eellA reualznerP</span><br>
      <span class="crypt">nilreB 90401</span><br>
      Germany
    </p>

    <h3>Contact</h3>
    <p>
      E-Mail: <span class="crypt">moc.liamg@zridna4smis</span><br>
      Discord: andirz
    </p>

    <div class="legal-box">
      <strong>Privacy & Cookies:</strong> This website is hosted via GitHub Pages. I do not use analytical cookies or tracking scripts. However, GitHub may collect server log files (IP address, etc.) for security and hosting purposes. By using this site, you acknowledge this technical necessity.
    </div>

    <h3>Disclaimer</h3>
    <p><strong>Liability for Content:</strong> The contents of my pages were created with great care. However, I cannot guarantee the accuracy or completeness of the content.</p>
    <p><strong>Liability for Links:</strong> My site contains links to external websites (Patreon, CurseForge, etc.). I have no influence on their content and cannot assume any liability for them.</p>
    
    <p style="font-size: 0.8rem; font-style: italic;">
      The Sims and The Sims 4 are trademarks of Electronic Arts, Inc. This website is not affiliated with or endorsed by Electronic Arts, Inc.
    </p>
  </div>

  <div id="content-de" class="lang-content">
    <h2>Impressum</h2>
    
    <h3>Angaben gemäß § 5 TMG</h3>
    <p>
      <strong>Betreiber der Webseite:</strong><br>
      <span class="crypt">zaaR saerdnA</span><br>
      <span class="crypt">071 eellA reualznerP</span><br>
      <span class="crypt">nilreB 90401</span><br>
      Deutschland
    </p>

    <h3>Kontakt</h3>
    <p>
      E-Mail: <span class="crypt">moc.liamg@zridna4smis</span><br>
      Discord: andirz
    </p>

    <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
    <p><span class="crypt">zaaR saerdnA</span></p>

    <div class="legal-box">
      <strong>Datenschutz & Cookies:</strong> Diese Webseite wird über GitHub Pages gehostet. Ich verwende keine Analyse-Cookies oder Tracking-Tools. GitHub erhebt jedoch technisch notwendige Log-Daten (IP-Adresse), um den Betrieb der Seite zu gewährleisten.
    </div>

    <h3>Haftungsausschluss</h3>
    <p><strong>Haftung für Links:</strong> Mein Angebot enthält Links zu externen Webseiten Dritter (z.B. Patreon, CurseForge). Auf deren Inhalte habe ich keinen Einfluss und übernehme keine Gewähr.</p>
    <p><strong>Urheberrecht:</strong> Die durch mich erstellten Inhalte auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>

    <p style="font-size: 0.8rem; font-style: italic;">
      The Sims und The Sims 4 sind Marken von Electronic Arts, Inc. Diese Webseite steht in keiner Verbindung zu Electronic Arts, Inc.
    </p>
  </div>

</div>

<script>
  // Sprachumschaltung
  function showLang(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.lang-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById('content-' + lang).classList.add('active');
    event.currentTarget.classList.add('active');
  }

  // Kopierschutz Scripts
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
      e.preventDefault();
    }
  });
</script>
