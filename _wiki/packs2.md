---
layout: page
title: Packs2
icon: "fas fa-box-open"
description: "A reference guide to the abbreviations used for The Sims 4 Expansion, Gameplay, and Stuff Packs."
---

{% include table_styles.html %}

This list provides an overview of all official abbreviations and codes for <strong>The Sims 4</strong> Packs.
It is a helpful resource for modders and players to identify packs across different languages.

<strong>Contents</strong>
<ul>
  <li><a href="#expansion-packs">Expansion Packs</a></li>
  <li><a href="#game-packs">Game Packs</a></li>
  <li><a href="#stuff-packs">Stuff Packs</a></li>
  <li><a href="#kits">Kits</a></li>
</ul>

<hr class="section-divider">

{% capture table_header %}
<thead>
  <tr class="packs-header-row">
    <th class="packs-th-icon">Icon</th>
    <th class="packs-th-sort" onclick="inlineSort(1, this)">Code <i class="fas fa-sort packs-sort-icon"></i></th>
    <th class="packs-th-sort" onclick="inlineSort(2, this)">en <i class="fas fa-sort packs-sort-icon"></i></th>
    <th class="packs-th-sort" onclick="inlineSort(3, this)">de <i class="fas fa-sort packs-sort-icon"></i></th>
    <th class="packs-th-sort" onclick="inlineSort(4, this)">es <i class="fas fa-sort packs-sort-icon"></i></th>
  </tr>
</thead>
{% endcapture %}

<h2 id="expansion-packs">Expansion Packs</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableEP" class="custom-wiki-table packs-table">
      {{ table_header }}
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
          {% assign icon_id = code | downcase %}{% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
          {% assign icon_exists = false %}{% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
          <tr>
            <td class="packs-td-icon">
              <div class="packs-icon-box">
                {% if icon_exists %}
                  <img src="{{ site.baseurl }}{{ icon_path }}" alt="{{ code }}" class="packs-icon-img">
                {% else %}
                  <i class="fas fa-box packs-icon-fallback"></i>
                {% endif %}
              </div>
            </td>
            <td class="packs-td-code"><strong>{{ code }}</strong></td>
            <td class="packs-td-text">{{ info.en }}</td>
            <td class="packs-td-text packs-muted">{{ info.de }}</td>
            <td class="packs-td-text packs-muted">{{ info.es }}</td>
          </tr>
        {% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="game-packs">Game Packs</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableGP" class="custom-wiki-table packs-table">
      {{ table_header }}
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
          {% assign icon_id = code | downcase %}{% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
          {% assign icon_exists = false %}{% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
          <tr>
            <td class="packs-td-icon">
              <div class="packs-icon-box">
                {% if icon_exists %}
                  <img src="{{ site.baseurl }}{{ icon_path }}" alt="{{ code }}" class="packs-icon-img">
                {% else %}
                  <i class="fas fa-box packs-icon-fallback"></i>
                {% endif %}
              </div>
            </td>
            <td class="packs-td-code"><strong>{{ code }}</strong></td>
            <td class="packs-td-text">{{ info.en }}</td>
            <td class="packs-td-text packs-muted">{{ info.de }}</td>
            <td class="packs-td-text packs-muted">{{ info.es }}</td>
          </tr>
        {% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="stuff-packs">Stuff Packs</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableSP" class="custom-wiki-table packs-table">
      {{ table_header }}
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% if sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
          {% assign icon_id = code | downcase %}{% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
          {% assign icon_exists = false %}{% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
          <tr>
            <td class="packs-td-icon">
              <div class="packs-icon-box">
                {% if icon_exists %}
                  <img src="{{ site.baseurl }}{{ icon_path }}" alt="{{ code }}" class="packs-icon-img">
                {% else %}
                  <i class="fas fa-box packs-icon-fallback"></i>
                {% endif %}
              </div>
            </td>
            <td class="packs-td-code"><strong>{{ code }}</strong></td>
            <td class="packs-td-text">{{ info.en }}</td>
            <td class="packs-td-text packs-muted">{{ info.de }}</td>
            <td class="packs-td-text packs-muted">{{ info.es }}</td>
          </tr>
        {% endif %}{% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="kits">Kits</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableKits" class="custom-wiki-table packs-table">
      {{ table_header }}
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% unless sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
          {% assign icon_id = code | downcase %}{% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
          {% assign icon_exists = false %}{% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
          <tr>
            <td class="packs-td-icon">
              <div class="packs-icon-box">
                {% if icon_exists %}
                  <img src="{{ site.baseurl }}{{ icon_path }}" alt="{{ code }}" class="packs-icon-img">
                {% else %}
                  <i class="fas fa-box packs-icon-fallback"></i>
                {% endif %}
              </div>
            </td>
            <td class="packs-td-code"><strong>{{ code }}</strong></td>
            <td class="packs-td-text">{{ info.en }}</td>
            <td class="packs-td-text packs-muted">{{ info.de }}</td>
            <td class="packs-td-text packs-muted">{{ info.es }}</td>
          </tr>
        {% endunless %}{% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<style>
  /* kompaktere Überschriften */
  h2 { margin-top: 1.7rem; margin-bottom: 0.6rem; font-size: 1.6rem; }

  /* Table Layout (kompakt) */
  .packs-table { width: 100%; border-collapse: collapse; font-size: 0.98rem; background: var(--bg-primary); margin-bottom: 2.0rem; }
  .packs-header-row { border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary); }
  .packs-th-icon { padding: 8px; width: 62px; text-align: center; }
  .packs-th-sort { padding: 8px; cursor: pointer; user-select: none; }
  .packs-sort-icon { font-size: 0.8rem; opacity: 0.3; margin-left: 6px; }

  /* kompakte Zeilenhöhe + weniger Padding */
  .packs-table th, .packs-table td { line-height: 1.15; }
  .packs-td-icon { padding: 6px; text-align: center; }
  .packs-td-code { padding: 8px; }
  .packs-td-text { padding: 8px; }
  .packs-muted { color: var(--text-muted); }

  /* Icon Box kleiner */
  .packs-icon-box {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: var(--bg-secondary);
    border-radius: 10px;
    border: 1px solid var(--border-color);
    margin: 0 auto;
  }
  .packs-icon-img { width: 30px; height: 30px; object-fit: contain; }
  .packs-icon-fallback { opacity: 0.2; font-size: 1.1rem; }
</style>

<script>
/**
 * Sortiert eine Tabelle anhand einer Spalte.
 * Fix: kein Liquid-TableId mehr – wir nehmen die Tabelle direkt über das geklickte <th>.
 */
function inlineSort(colIndex, thEl) {
  const table = thEl.closest('table');
  if (!table) return;

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

  const rows = Array.from(tbody.rows);

  // pro Tabelle + pro Spalte Sortierzustand merken
  const lastCol = table.dataset.sortCol;
  const lastDir = table.dataset.sortDir || 'asc';

  let dir = 'asc';
  if (String(lastCol) === String(colIndex)) {
    dir = (lastDir === 'asc') ? 'desc' : 'asc';
  }

  rows.sort((a, b) => {
    const aText = (a.cells[colIndex]?.innerText || '').trim().toLowerCase();
    const bText = (b.cells[colIndex]?.innerText || '').trim().toLowerCase();

    // natürliche Sortierung (SP1, SP10 etc.)
    const cmp = aText.localeCompare(bText, undefined, { numeric: true, sensitivity: 'base' });
    return dir === 'asc' ? cmp : -cmp;
  });

  tbody.append(...rows);
  table.dataset.sortCol = String(colIndex);
  table.dataset.sortDir = dir;
}
</script>
