// Schutz der Daten durch Base64-Kodierung
(function() {
    const d = {
        n: "QW5kcmVhcyBSYWF6",             // Name
        a: "UHJlbnpsYXVlciBBbGxlZSAxNzc=", // Straße
        c: "MTA0MDkgQmVybGlu",             // Stadt
        e: "c2ltczRhbmRpcnpAZ21haWwuY29t"  // Mail
    };

    const target = document.getElementById('legal-content');
    if (!target) return;

    target.innerHTML = `
        <div class="contact-card">
            <strong>Website Provider</strong><br>
            ${atob(d.n)}<br>
            ${atob(d.a)}<br>
            ${atob(d.c)}<br>
            Germany<br><br>
            <strong>Official Contact</strong><br>
            E-Mail: <a href="mailto:${atob(d.e)}">${atob(d.e)}</a>
            <div class="support-note" style="margin-top:10px; font-size:0.8em; color:#666;">
                <strong>Note:</strong> Legal inquiries only. No mod support here.
            </div>
        </div>
        <h3>Editorial Responsibility</h3>
        <p>Responsible for content (§ 55 Abs. 2 RStV): ${atob(d.n)}</p>
    `;
})();