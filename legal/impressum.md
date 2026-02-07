---
layout: page
title: Legal Notice / Impressum
nav_exclude: true
noindex: true
sitemap: false
---

<style>
  .protection-wrapper { user-select:none; -webkit-user-select:none; cursor:default; }
  .crypt { unicode-bidi:bidi-override; direction:rtl; display:inline-block; }
  .noise { display:none; }

  /* Language Tabs */
  .lang-tabs{
    display:flex;
    gap:10px;
    padding:10px 12px;
    margin-bottom:2rem;
    border:1px solid var(--border-color);
    border-radius:14px;
    background:rgba(0,0,0,0.02);
    width:fit-content;
  }

  .tab-btn{
    border:1px solid transparent;
    background:transparent;
    cursor:pointer;
    padding:9px 14px;
    border-radius:999px;
    font-weight:700;
    font-size:0.95rem;
    display:inline-flex;
    align-items:center;
    gap:8px;
    opacity:.8;
    transition:all .15s ease;
  }

  .tab-btn:hover{
    background:rgba(0,123,255,.10);
    border-color:rgba(0,123,255,.2);
    opacity:1;
  }

  .tab-btn.active{
    background:rgba(0,123,255,.15);
    border-color:rgba(0,123,255,.3);
    color:#007bff;
    opacity:1;
  }

  .tab-pill{
    min-width:28px;
    height:22px;
    padding:0 8px;
    border-radius:999px;
    border:1px solid var(--border-color);
    font-size:.78rem;
    font-weight:800;
  }

  /* Layout */
  .legal-section{ margin-bottom:3rem; text-align:justify; }
  .legal-box{
    background:rgba(0,0,0,.02);
    border:1px solid var(--border-color);
    padding:25px;
    margin:20px 0;
    border-radius:6px;
    font-size:.9rem;
    line-height:1.7;
  }

  .contact-card{
    background:rgba(0,0,0,.02);
    border:1px solid var(--border-color);
    border-left:4px solid #007bff;
    padding:20px;
    border-radius:0 6px 6px 0;
    margin:20px 0;
    line-height:1.6;
  }

  .support-note{
    font-size:.85rem;
    color:#666;
    margin-top:15px;
    padding-top:10px;
    border-top:1px solid var(--border-color);
  }

  .lang-content{ display:none; animation:fade .18s ease; }
  .lang-content.active{ display:block; }

  @keyframes fade{
    from{opacity:0; transform:translateY(2px);}
    to{opacity:1; transform:translateY(0);}
  }
</style>

<div class="lang-tabs">
  <button class="tab-btn active" id="tab-en" onclick="showLang('en')">
    <span class="tab-pill">EN</span> English
  </button>
  <button class="tab-btn" id="tab-de" onclick="showLang('de')">
    <span class="tab-pill">DE</span> Deutsch
  </button>
</div>

<div class="protection-wrapper">

<!-- ================= EN ================= -->

<div id="content-en" class="lang-content active">
  <div class="legal-section">

    <h2>Legal Notice</h2>
    <p>The following information is provided in accordance with § 5 TMG.</p>

    <div class="contact-card">
      <strong>Website Provider</strong><br/>
      <span class="crypt">zaaR<span class="noise">_legal_</span> saerdnA</span><br>
      <span class="crypt">071<span class="noise">777</span> eellA reualznerP</span><br>
      <span class="crypt">nilreB 90401</span><br>
      Germany

      <strong style="margin-top:15px;display:block;">Official Contact</strong>
      E-Mail: <span class="crypt">moc.liamg@zridna4smis</span>

      <div class="support-note">
        <strong>Important Notice:</strong>
        These contact details are strictly for legal inquiries.
        Technical support or mod-related requests cannot be answered via this channel.
      </div>
    </div>

    <h3>Editorial Responsibility</h3>
    <p>Responsible for content according to § 55 Abs. 2 RStV:
      <span class="crypt">zaaR saerdnA</span>
    </p>

    <h2>Privacy & Cookies</h2>
    <div class="legal-box">
      Detailed information is provided in separate documents:
      <ul>
        <li><strong><a href="/privacy/">Privacy Policy</a></strong></li>
        <li><strong><a href="/cookies/">Cookie Policy</a></strong></li>
      </ul>
    </div>

    <h2>Disclaimer</h2>
    <p>
      As a service provider, I am responsible for my own content under § 7 para. 1 TMG.<br/>
      According to §§ 8–10 TMG, I am not obliged to monitor third-party information.
    </p>

  </div>
</div>

<!-- ================= DE ================= -->

<div id="content-de" class="lang-content">
  <div class="legal-section">

    <h2>Impressum</h2>
    <p>Angaben gemäß § 5 TMG.</p>

    <div class="contact-card">
      <strong>Dienstanbieter</strong><br/>
      <span class="crypt">zaaR saerdnA</span><br>
      <span class="crypt">071 eellA reualznerP</span><br>
      <span class="crypt">nilreB 90401</span><br>
      Deutschland

      <strong style="margin-top:15px;display:block;">Kontakt</strong>
      E-Mail: <span class="crypt">moc.liamg@zridna4smis</span>

      <div class="support-note">
        <strong>Hinweis:</strong>
        Diese Kontaktdaten dienen ausschließlich rechtlichen Anfragen.
      </div>
    </div>

    <h3>Verantwortlich für den Inhalt</h3>
    <p>Verantwortlich gemäß § 55 Abs. 2 RStV:
      <span class="crypt">zaaR saerdnA</span>
    </p>

    <h2>Datenschutz & Cookies</h2>
    <div class="legal-box">
      Weitere Informationen finden Sie hier:
      <ul>
        <li><strong><a href="/privacy/">Datenschutzerklärung</a></strong></li>
        <li><strong><a href="/cookies/">Cookie-Richtlinie</a></strong></li>
      </ul>
    </div>

    <h2>Haftungsausschluss</h2>
    <p>
      Gemäß § 7 Abs. 1 TMG bin ich für eigene Inhalte verantwortlich.<br/>
      Eine Haftung für fremde Inhalte besteht erst ab Kenntnis.
    </p>

  </div>
</div>

</div>

<script>
  function showLang(lang){
    document.querySelectorAll('.lang-content').forEach(e=>e.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(e=>e.classList.remove('active'));
    document.getElementById('content-'+lang).classList.add('active');
    document.getElementById('tab-'+lang).classList.add('active');
  }
</script>
