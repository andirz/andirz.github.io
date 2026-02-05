(function() {
  const d = {
    n: "QW5kcmVhcyBSYWF6",
    a: "UHJlbnpsYXVlciBBbGxlZSAxNzA=",
    c: "MTA0MDkgQmVybGlu",
    e: "c2ltczRhbmRpcnpAZ21haWwuY29t"
  };

  const target = document.getElementById('legal-content');
  if (!target) return;

  target.innerHTML = `
    <div id="protected-box" style="border: 1px solid #e1e4e8; border-radius: 12px; overflow: hidden; font-family: sans-serif; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;">
      <div style="background: #f6f8fa; padding: 10px; display: flex; gap: 10px; border-bottom: 1px solid #e1e4e8;">
        <button onclick="switchLegal('de')" id="btn-de" style="flex: 1; padding: 8px 16px; border: 1px solid #d1d5da; border-radius: 20px; cursor: pointer; background: #fff; font-weight: 600;">DE</button>
        <button onclick="switchLegal('en')" id="btn-en" style="flex: 1; padding: 8px 16px; border: 1px solid transparent; border-radius: 20px; cursor: pointer; background: transparent; font-weight: 500; color: #586069;">EN</button>
      </div>

      <div id="content-de" style="padding: 20px; display: block;">
        <h4 style="margin-top: 0;">Anbieter & Kontakt</h4>
        ${atob(d.n)}<br>${atob(d.a)}<br>${atob(d.c)}<br>Deutschland<br>
        E-Mail: <span style="color: #0366d6;">${atob(d.e)}</span>

        <h4 style="margin-top: 20px;">Haftungsausschluss</h4>
        <p style="font-size: 1em; color: #24292e; font-weight: 500; line-height: 1.6; margin: 0;">
          Verantwortlich im Sinne von § 55 RStV ist ${atob(d.n)}.<br>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
      </div>

      <div id="content-en" style="padding: 20px; display: none;">
        <h4 style="margin-top: 0;">Provider & Contact</h4>
        ${atob(d.n)}<br>${atob(d.a)}<br>${atob(d.c)}<br>Germany<br>
        E-mail: <span style="color: #0366d6;">${atob(d.e)}</span>

        <h4 style="margin-top: 20px;">Disclaimer</h4>
        <p style="font-size: 1em; color: #24292e; font-weight: 500; line-height: 1.6; margin: 0;">
          Responsible for the content according to § 55 RStV is ${atob(d.n)}.<br>
          As a service provider, I am responsible for my own content on these pages in accordance with § 7 (1) TMG.
          However, no guarantee can be given for the accuracy, completeness or timeliness of the information provided.
        </p>
      </div>
    </div>
  `;

  const box = document.getElementById('protected-box');

  box.oncontextmenu = function(e) { e.preventDefault(); return false; };

  window.addEventListener('keydown', function(e) {
    if (
      (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 73 || e.keyCode === 74)) ||
      e.keyCode === 123
    ) {
      e.preventDefault();
      return false;
    }
  });

  window.switchLegal = function(lang) {
    const de = document.getElementById('content-de'), en = document.getElementById('content-en');
    const bDe = document.getElementById('btn-de'), bEn = document.getElementById('btn-en');
    if (lang === 'de') {
      de.style.display = 'block'; en.style.display = 'none';
      bDe.style.background = '#fff'; bDe.style.border = '1px solid #d1d5da';
      bEn.style.background = 'transparent'; bEn.style.border = '1px solid transparent';
    } else {
      de.style.display = 'none'; en.style.display = 'block';
      bEn.style.background = '#fff'; bEn.style.border = '1px solid #d1d5da';
      bDe.style.background = 'transparent'; bDe.style.border = '1px solid transparent';
    }
  };
})();
