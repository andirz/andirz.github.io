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
  .crypt { unicode-bidi: bidi-override; direction: rtl; text-align: left; display: inline-block; font-family: inherit; }
  .noise { display: none; }

  /* Professionelle Tabs für Sprachwechsel */
  .lang-tabs { 
    display: flex; 
    gap: 4px; 
    margin-bottom: 2rem; 
    border-bottom: 2px solid var(--border-color);
  }
  .tab-btn { 
    padding: 10px 25px; 
    border: none; 
    background: transparent; 
    cursor: pointer; 
    font-weight: 600; 
    color: var(--text-color);
    border-radius: 6px 6px 0 0;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    border-bottom: none;
    margin-bottom: -2px;
  }
  .tab-btn:hover { background: rgba(0, 123, 255, 0.05); }
  .tab-btn.active { 
    color: #007bff; 
    background: #fff; 
    border: 2px solid var(--border-color);
    border-bottom: 2px solid #fff; /* Verdeckt die Border-Linie unten */
  }

  /* Elegante Contact Card für geschützte Daten */
  .contact-card {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid var(--border-color);
    border-left: 4px solid #007bff;
    padding: 20px;
    border-radius: 0 6px 6px 0;
    margin: 20px 0;
    line-height: 1.6;
  }
  .contact-card strong { color: #333; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; }

  /* Rechtliche Sektionen & Boxen */
  .legal-section { margin-bottom: 3rem; text-align: justify; }
  .legal-box { 
    background: rgba(0, 0, 0, 0.02); 
    border: 1px solid var(--border-color);
    padding: 25px; 
    margin: 20px 0; 
    font-size: 0.88rem;
    line-height: 1.7;
    border-radius: 6px;
  }
  
  h2 { margin-top: 2rem; font-size: 1.6rem; }
  h3 { font-size: 1.15rem; margin-top: 1.5rem; color: #007bff; }
  .support-note { font-size: 0.85rem; color: #666; font-style: italic; margin-top: 15px; padding-top: 10px; border-top: 1px solid var(--border-color); }

  .lang-content { display: none; animation: fadeIn 0.3s ease; }
  .lang-content.active { display: block; }
  
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>

<div class="lang-tabs">
  <button class="tab-btn active" id="tab-en" onclick="showLang('en')">English</button>
  <button class="tab-btn" id="tab-de" onclick="showLang('de')">Deutsch</button>
</div>

<div class="protection-wrapper" oncopy="return false" oncontextmenu="return false">

  <div id="content-en" class="lang-content active">
    <div class="legal-section">
      <h2>Legal Notice</h2>
      <p>The following information is provided in accordance with the requirements of § 5 TMG.</p>
      
      <div class="contact-card">
        <strong>Website Provider</strong>
        <span class="crypt">zaaR<span class="noise">_legal_</span> saerdnA</span><br>
        <span class="crypt">071<span class="noise">777</span> eellA reualznerP</span><br>
        <span class="crypt">nilreB 90401</span><br>
        Germany
        
        <strong style="margin-top: 15px;">Official Contact</strong>
        E-Mail: <span class="crypt">moc.liamg@zridna4smis</span>
        
        <div class="support-note">
          <strong>Important Notice:</strong> These contact details are strictly for legal inquiries. Technical support or mod-related requests cannot be answered via this channel.
        </div>
      </div>

      <h3>Editorial Responsibility</h3>
      <p>Responsible for content according to § 55 Abs. 2 RStV: <span class="crypt">zaaR saerdnA</span></p>

      <h2>Privacy Policy</h2>
      <div class="legal-box">
        <strong>1. Data Protection Overview:</strong> I treat your personal data as confidential and in accordance with the statutory data protection regulations. Use of this website is generally possible without providing personal data.<br><br>
        <strong>2. Hosting & DNS Infrastructure:</strong> This website is hosted via <strong>GitHub Pages</strong> (GitHub Inc., USA). The domain is managed by <strong>Hostinger</strong>. To ensure the security and stability of the service, the hosting provider automatically collects server log files (IP address, browser type, referrer URL, and timestamps). This is done based on Art. 6 Para. 1 lit. f GDPR.<br><br>
        <strong>3. Rights:</strong> You have the right to request information about your stored personal data at any time free of charge, as well as the right to correction, blocking, or deletion.
      </div>

      <h2>Disclaimer</h2>
      <p>As a service provider, I am responsible for my own content on these pages under § 7 Para. 1 TMG. According to §§ 8 to 10 TMG, I am not obligated to monitor transmitted or stored third-party information. Liability for such information arises only upon knowledge of a concrete violation of the law.</p>
    </div>
  </div>

  <div id="content-de" class="lang-content">
    <div class="legal-section">
      <h2>Impressum</h2>
      <p>Angaben gemäß § 5 TMG.</p>
      
      <div class="contact-card">
        <strong>Dienstanbieter</strong>
        <span class="crypt">zaaR saerdnA</span><br>
        <span class="crypt">071 eellA reualznerP</span><br>
        <span class="crypt">nilreB 90401</span><br>
        Deutschland
        
        <strong style="margin-top: 15px;">Kontakt</strong>
        E-Mail: <span class="crypt">moc.liamg@zridna4smis</span>

        <div class="support-note">
          <strong>Hinweis:</strong> Diese Kontaktdaten dienen ausschließlich rechtlichen Anfragen. Technischer Support oder Mod-Anfragen können über diese E-Mail-Adresse nicht bearbeitet werden.
        </div>
      </div>

      <h3>Verantwortlich für den Inhalt</h3>
      <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: <span class="crypt">zaaR saerdnA</span></p>

      <h2>Datenschutzerklärung</h2>
      <div class="legal-box">
        <strong>1. Datenschutz:</strong> Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften.<br><br>
        <strong>2. Hosting & Infrastruktur:</strong> Diese Webseite wird über <strong>GitHub Pages</strong> bereitgestellt; die Domain-Verwaltung erfolgt über <strong>Hostinger</strong>. Dabei werden technisch notwendige Server-Log-Dateien (u.a. IP-Adresse) erhoben, um den sicheren Betrieb der Seite zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).<br><br>
        <strong>3. Ihre Rechte:</strong> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
      </div>

      <h2>Haftungsausschluss</h2>
      <p>Gemäß § 7 Abs.1 TMG bin ich für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.</p>
    </div>
  </div>

</div>

<script>
  function showLang(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('tab-' + lang).classList.add('active');
  }

  // Schutz gegen Kopieren/Markieren
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && ['c', 'u', 's', 'p', 'i', 'a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      return false;
    }
  });
</script>