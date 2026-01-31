---
layout: page
title: Sims Wiki
icon: "fas fa-book"
order: 3
---

<div class="wiki-container">
  <div class="tabs-nav" style="display: flex; gap: 10px; border-bottom: 2px solid var(--border-color); margin-bottom: 20px;">
    <button class="tab-btn active" onclick="openTab(event, 'general')">General Info</button>
    <button class="tab-btn" onclick="openTab(event, 'installation')">Installation</button>
    <button class="tab-btn" onclick="openTab(event, 'troubleshooting')">Troubleshooting</button>
  </div>

  <div id="general" class="tab-content" style="display: block;">
    <h3>General Information</h3>
    <p>Hier kommen allgemeine Informationen zu deinen Mods oder Spielmechaniken hin.</p>
  </div>

  <div id="installation" class="tab-content" style="display: none;">
    <h3>Installation Guide</h3>
    <p>Schritt-für-Schritt Anleitung, wie man deine Mods (wie den <strong>SimSim Online Store</strong>) installiert.</p>
  </div>

  <div id="troubleshooting" class="tab-content" style="display: none;">
    <h3>Troubleshooting</h3>
    <p>Lösungen für bekannte Probleme oder Konflikte mit anderen Mods.</p>
  </div>
</div>

<style>
  .tab-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    color: var(--text-muted);
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .tab-btn:hover {
    color: var(--accent-color);
  }

  .tab-btn.active {
    color: var(--accent-color);
    border-bottom: 3px solid var(--accent-color);
  }

  .tab-content {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Alle Inhalte ausblenden
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Alle Buttons deaktivieren
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Gewählten Tab anzeigen und Button aktivieren
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
