---
layout: page
title: Packs
icon: "fas fa-box-open"
description: "A reference guide to the abbreviations used for The Sims 4 Expansion, Gameplay, and Stuff Packs."
---

{% include table_styles.html %}

<div class="intro-container">
  <div class="intro-text">
    This list provides an overview of all official abbreviations and codes for <strong>The Sims 4</strong> Packs. 
    It is a helpful resource for modders and players to identify packs across different languages.
    Click on the table headers to sort or use <code>Ctrl + F</code> to find a specific pack.
  </div>
  <div class="intro-toc">
    <strong>Contents</strong>
    <ul>
      <li><a href="#expansion-packs">Expansion Packs</a></li>
      <li><a href="#game-packs">Game Packs</a></li>
      <li><a href="#stuff-packs">Stuff Packs</a></li>
      <li><a href="#kits">Kits</a></li>
    </ul>
  </div>
</div>

<hr class="section-divider">

<h2 id="expansion-packs">Expansion Packs</h2>
<div class="table-wrapper">
  <table id="tableEP" class="custom-wiki-table">
    <thead>
      <tr>
        <th style="width: 50px; text-align: center;">Logo</th>
        <th onclick="sortTable(1, 'tableEP')">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(2, 'tableEP')">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(3, 'tableEP')">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(4, 'tableEP')">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
      {% assign icon_id = code | downcase %}
      <tr>
        <td style="text-align: center;">
          <img src="{{ site.baseurl }}/assets/img/packs/{{ icon_id }}.png" alt="" style="height: 32px; width: auto;" onerror="this.style.display='none';">
        </td>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>

<h2 id="game-packs">Game Packs</h2>
<div class="table-wrapper">
  <table id="tableGP" class="custom-wiki-table">
    <thead>
      <tr>
        <th style="width: 50px; text-align: center;">Logo</th>
        <th onclick="sortTable(1, 'tableGP')">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(2, 'tableGP')">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(3, 'tableGP')">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(4, 'tableGP')">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
      {% assign icon_id = code | downcase %}
      <tr>
        <td style="text-align: center;">
          <img src="{{ site.baseurl }}/assets/img/packs/{{ icon_id }}.png" alt="" style="height: 32px; width: auto;" onerror="this.style.display='none';">
        </td>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>

<h2 id="stuff-packs">Stuff Packs</h2>
<div class="table-wrapper">
  <table id="tableSP" class="custom-wiki-table">
    <thead>
      <tr>
        <th onclick="sortTable(0, 'tableSP')">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(1, 'tableSP')">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(2, 'tableSP')">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(3, 'tableSP')">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% if sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
      <tr>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endif %}{% endfor %}
    </tbody>
  </table>
</div>

<h2 id="kits">Kits</h2>
<div class="table-wrapper">
  <table id="tableKits" class="custom-wiki-table">
    <thead>
      <tr>
        <th onclick="sortTable(0, 'tableKits')">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(1, 'tableKits')">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(2, 'tableKits')">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable(3, 'tableKits')">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% unless sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
      <tr>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endunless %}{% endif %}{% endfor %}
    </tbody>
  </table>
</div>

<style>
  .intro-container { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 1rem; }
  .intro-text { flex: 2; }
  .intro-toc { flex: 1; background: rgba(0,0,0,0.02); padding: 10px 15px; border-radius: 8px; border-left: 3px solid var(--border-color); font-size: 0.9rem; }
  .intro-toc ul { margin: 5px 0 0 0; padding-left: 20px; }
  .section-divider { margin: 1rem 0; opacity: 0.5; }
  h2 { margin-top: 0.8rem; margin-bottom: 0.2rem; font-size: 1.5rem; }
  th:hover { background: rgba(0,123,255,0.1) !important; }
  th i { font-size: 0.7rem; opacity: 0.4; float: right; margin-top: 4px; }
  .table-wrapper { overflow-x: auto; }
  @media (max-width: 600px) { .intro-container { flex-direction: column; } .intro-toc { width: 100%; } }
</style>

{% include table_sorting_script.html %}