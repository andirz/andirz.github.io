---
layout: page
title: Packs NEW
icon: "fas fa-box-open"
description: "A reference guide to the abbreviations used for The Sims 4 Expansion, Gameplay, and Stuff Packs."
---

{% include table_styles.html %}

<div class="intro-container">
  <div class="intro-text">
    This list provides an overview of all official abbreviations and codes for <strong>The Sims 4</strong> Packs. 
    It is a helpful resource for modders and players to identify packs across different languages.
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
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableEP" class="custom-wiki-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary); margin-bottom: 2rem;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">Icon</th>
          <th onclick="sortTable(1, 'tableEP')" style="padding: 12px; cursor: pointer; width: 80px;">Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2, 'tableEP')" style="padding: 12px; cursor: pointer;">en <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3, 'tableEP')" style="padding: 12px; cursor: pointer;">de <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4, 'tableEP')" style="padding: 12px; cursor: pointer;">es <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
        {% assign icon_id = code | downcase %}
        {% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
        {% assign icon_exists = false %}
        {% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px; text-align: center;">
            <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); margin: 0 auto;">
              {% if icon_exists %}<img src="{{ site.baseurl }}{{ icon_path }}" alt="" style="width: 32px; height: 32px; object-fit: contain;">
              {% else %}<i class="fas fa-box" style="opacity: 0.2;"></i>{% endif %}
            </div>
          </td>
          <td style="padding: 12px;"><strong>{{ code }}</strong></td>
          <td style="padding: 12px;">{{ info.en }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.de }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.es }}</td>
        </tr>
        {% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="game-packs">Game Packs</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableGP" class="custom-wiki-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary); margin-bottom: 2rem;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">Icon</th>
          <th onclick="sortTable(1, 'tableGP')" style="padding: 12px; cursor: pointer; width: 80px;">Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2, 'tableGP')" style="padding: 12px; cursor: pointer;">en <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3, 'tableGP')" style="padding: 12px; cursor: pointer;">de <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4, 'tableGP')" style="padding: 12px; cursor: pointer;">es <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
        {% assign icon_id = code | downcase %}
        {% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
        {% assign icon_exists = false %}
        {% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px; text-align: center;">
            <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); margin: 0 auto;">
              {% if icon_exists %}<img src="{{ site.baseurl }}{{ icon_path }}" alt="" style="width: 32px; height: 32px; object-fit: contain;">
              {% else %}<i class="fas fa-box" style="opacity: 0.2;"></i>{% endif %}
            </div>
          </td>
          <td style="padding: 12px;"><strong>{{ code }}</strong></td>
          <td style="padding: 12px;">{{ info.en }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.de }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.es }}</td>
        </tr>
        {% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="stuff-packs">Stuff Packs</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableSP" class="custom-wiki-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary); margin-bottom: 2rem;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">Icon</th>
          <th onclick="sortTable(1, 'tableSP')" style="padding: 12px; cursor: pointer; width: 80px;">Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2, 'tableSP')" style="padding: 12px; cursor: pointer;">en <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3, 'tableSP')" style="padding: 12px; cursor: pointer;">de <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4, 'tableSP')" style="padding: 12px; cursor: pointer;">es <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% if sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
        {% assign icon_id = code | downcase %}
        {% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
        {% assign icon_exists = false %}
        {% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px; text-align: center;">
            <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); margin: 0 auto;">
              {% if icon_exists %}<img src="{{ site.baseurl }}{{ icon_path }}" alt="" style="width: 32px; height: 32px; object-fit: contain;">
              {% else %}<i class="fas fa-box" style="opacity: 0.2;"></i>{% endif %}
            </div>
          </td>
          <td style="padding: 12px;"><strong>{{ code }}</strong></td>
          <td style="padding: 12px;">{{ info.en }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.de }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.es }}</td>
        </tr>
        {% endif %}{% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<h2 id="kits">Kits</h2>
<div class="content-wrapper">
  <div class="status-table-container">
    <table id="tableKits" class="custom-wiki-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">Icon</th>
          <th onclick="sortTable(1, 'tableKits')" style="padding: 12px; cursor: pointer; width: 80px;">Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2, 'tableKits')" style="padding: 12px; cursor: pointer;">en <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3, 'tableKits')" style="padding: 12px; cursor: pointer;">de <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4, 'tableKits')" style="padding: 12px; cursor: pointer;">es <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% unless sp_num <= 18 or sp_num == 46 or sp_num == 49 %}
        {% assign icon_id = code | downcase %}
        {% assign icon_path = "/assets/img/packs/" | append: icon_id | append: ".png" %}
        {% assign icon_exists = false %}
        {% for file in site.static_files %}{% if file.path == icon_path %}{% assign icon_exists = true %}{% break %}{% endif %}{% endfor %}
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px; text-align: center;">
            <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); margin: 0 auto;">
              {% if icon_exists %}<img src="{{ site.baseurl }}{{ icon_path }}" alt="" style="width: 32px; height: 32px; object-fit: contain;">
              {% else %}<i class="fas fa-shapes" style="opacity: 0.2;"></i>{% endif %}
            </div>
          </td>
          <td style="padding: 12px;"><strong>{{ code }}</strong></td>
          <td style="padding: 12px;">{{ info.en }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.de }}</td>
          <td style="padding: 12px; color: var(--text-muted);">{{ info.es }}</td>
        </tr>
        {% endunless %}{% endif %}{% endfor %}
      </tbody>
    </table>
  </div>
</div>

<style>
  .intro-container { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 1rem; }
  .intro-text { flex: 2; }
  .intro-toc { flex: 1; background: var(--bg-secondary); padding: 10px 15px; border-radius: 8px; border-left: 3px solid var(--border-color); font-size: 0.9rem; }
  .intro-toc ul { margin: 5px 0 0 0; padding-left: 20px; }
  .section-divider { margin: 1rem 0; opacity: 0.5; }
  h2 { margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.5rem; }
  @media (max-width: 600px) { .intro-container { flex-direction: column; } .intro-toc { width: 100%; } }
</style>

{% include table_sorting_script.html %}