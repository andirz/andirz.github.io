(function() {
    const d = {
        n: "QW5kcmVhcyBSYWF6",             
        a: "UHJlbnpsYXVlciBBbGxlZSAxNzc=", 
        c: "MTA0MDkgQmVybGlu",             
        e: "c2ltczRhbmRpcnpAZ21haWwuY29t"  
    };

    const target = document.getElementById('legal-content');
    if (!target) return;

    // HTML Struktur mit Tabs
    target.innerHTML = `
        <div class="legal-tabs-container" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; font-family: sans-serif;">
            <div class="tab-buttons" style="background: #f1f1f1; display: flex; border-bottom: 1px solid #ddd;">
                <button onclick="switchLegal('de')" id="btn-de" style="flex: 1; padding: 10px; border: none; cursor: pointer; background: #fff; font-weight: bold;">Deutsch</button>
                <button onclick="switchLegal('en')" id="btn-en" style="flex: 1; padding: 10px; border: none; cursor: pointer; background: #f1f1f1;">English</button>
            </div>
            
            <div id="content-de" style="padding: 20px; display: block;">
                <strong>Anbieter:</strong><br> ${atob(d.n)}<br>${atob(d.a)}<br>${atob(d.c)}<br>Deutschland<br><br>
                <strong>Kontakt:</strong><br> E-Mail: <a href="mailto:${atob(d.e)}">${atob(d.e)}</a>
                <p style="font-size: 0.8em; color: #666; margin-top: 15px;">Nur für rechtliche Anfragen. Kein Mod-Support.</p>
            </div>

            <div id="content-en" style="padding: 20px; display: none;">
                <strong>Provider:</strong><br> ${atob(d.n)}<br>${atob(d.a)}<br>${atob(d.c)}<br>Germany<br><br>
                <strong>Contact:</strong><br> E-mail: <a href="mailto:${atob(d.e)}">${atob(d.e)}</a>
                <p style="font-size: 0.8em; color: #666; margin-top: 15px;">Legal inquiries only. No technical support.</p>
            </div>
        </div>
    `;

    // Funktion zum Umschalten
    window.switchLegal = function(lang) {
        const de = document.getElementById('content-de');
        const en = document.getElementById('content-en');
        const btnDe = document.getElementById('btn-de');
        const btnEn = document.getElementById('btn-en');

        if (lang === 'de') {
            de.style.display = 'block';
            en.style.display = 'none';
            btnDe.style.background = '#fff';
            btnDe.style.fontWeight = 'bold';
            btnEn.style.background = '#f1f1f1';
            btnEn.style.fontWeight = 'normal';
        } else {
            de.style.display = 'none';
            en.style.display = 'block';
            btnEn.style.background = '#fff';
            btnEn.style.fontWeight = 'bold';
            btnDe.style.background = '#f1f1f1';
            btnDe.style.fontWeight = 'normal';
        }
    };
})();