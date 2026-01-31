---
layout: page
title: Mod Status
icon: fas fa-tools
order: 2
---

{% assign latest_patch = site.data.globals.latest_patch %}
{% assign last_checked = site.data.globals.last_checked %}

<p>All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong> as of <strong>{{ last_checked }}</strong>.</p>

<div class="status-table-container" style="overflow-x: auto; margin-top: 20px; border-radius: 8px; border: 1px solid var(--border-color);">
  <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: rgba(0,0,0,0.02);">
        <th style="padding: 12px; width: 45px; text-align: center;">#</th>
        <th onclick="sortTable(1)" style="padding: 12px; cursor: pointer; width: 40%;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(2)" title="Version" style="padding: 12px; cursor: pointer; width: 100px;">Version <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(3)" title="Mod Compatibility Status" style="padding: 12px; cursor: pointer; width: 60px; text-align: center;">Status <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th style="padding: 12px; width: 25%;">Requirements</th>
        <th onclick="sortTable(5)" title="Last Update Date" style="padding: 12px; cursor: pointer; width: 120px;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for mod in site.data.mods %}
      <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.backgroundColor='rgba(0,123,255,0.05)'" onmouseout="this.style.backgroundColor='transparent'">
        
        <td style="padding: 12px; text-align: center;">
          <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.04); border-radius: 8px; color: var(--accent-color);">
            <i class="{{ mod.icon | default: 'fas fa-box' }}"></i>
          </div>
        </td>
        
        <td style="padding: 12px;">
          {% assign mod_page = site.mods | where: "mod_id", mod.id | first %}        
          {% if mod_page %}
            {% assign target_link = mod_page.url | relative_url %}
          {% else %}
            {% assign target_link = "#" %}
          {% endif %}
          <a href="{{ target_link }}" 
             style="text-decoration: none; color: var(--link-color); font-weight: bold; display: block; {% if target_link == '#' %} cursor: default; opacity: 0.7; {% endif %}">
            {{ mod.name }}
          </a>
        </td>
        
        <td style="padding: 12px; font-family: monospace; font-size: 0.85rem; color: #666;">
          {{ mod.version }}
        </td>
        
        <td style="padding: 12px; text-align: center;">
          {% assign status = mod.status | downcase %}
          {% if status == 'updated' %}
            <i class="fas fa-arrow-alt-circle-up" title="Updated" style="color: #007bff; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Updated</span>
          {% elsif status == 'compatible' %}
            <i class="fas fa-check-circle" title="Compatible" style="color: #28a745; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Compatible</span>
          {% elsif status == 'broken' %}
            <i class="fas fa-times-circle" title="Broken" style="color: #dc3545; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Broken</span>
          {% elsif status == 'obsolete' %}
            <i class="fas fa-minus-circle" title="Obsolete" style="color: #6c757d; font-size: 1.1rem; opacity: 0.5; cursor: help;"></i>
            <span style="display:none;">Obsolete</span>
          {% else %}
            <i class="fas fa-question-circle" title="Unknown" style="color: #ffc107; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Unknown</span>
          {% endif %}
        </td>
        
        <td style="padding: 12px;">
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            {% assign has_content = false %}
        
            {% if mod.packs.size > 0 %}
              {% for pack_id in mod.packs %}
                {% if pack_id != "BG" %}
                  {% assign pack = site.data.packs[pack_id] %}
                  <span title="{{ pack.en | default: pack_id }}" style="font-size: 0.7rem; background: rgba(0,0,0,0.04); color: #555; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.05); font-weight: 600;">
                    {{ pack_id }}
                  </span>
                  {% assign has_content = true %}
                {% endif %}
              {% endfor %}
            {% endif %}
        
            {% if mod.requirements.size > 0 %}
              {% for req_id in mod.requirements %}
                {% assign req_mod = site.data.mods | where: "id", req_id | first %}
                <span title="Required Mod" style="font-size: 0.7rem; background: rgba(0,123,255,0.08); color: #007bff; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid rgba(0,123,255,0.15);">
                  {{ req_mod.name | default: req_id }}
                </span>
                {% assign has_content = true %}
              {% endfor %}
            {% endif %}
        
            {% if has_content == false %}
              <span style="color: #ccc; font-weight: bold;">—</span>
            {% endif %}
          </div>
        </td>

        <td style="padding: 12px; white-space: nowrap; color: #888; font-size: 0.85rem;">
          {{ mod.updated }}
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<script>
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("modTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      var xValue = x.innerText.toLowerCase();
      var yValue = y.innerText.toLowerCase();
      
      if (dir == "asc") {
        if (xValue > yValue) { shouldSwitch = true; break; }
      } else if (dir == "desc") {
        if (xValue < yValue) { shouldSwitch = true; break; }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
