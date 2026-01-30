---
layout: page
title: Mod Status
icon: fas fa-tools
order: 2
---

{% assign latest_patch = site.data.globals.latest_patch %}
{% assign last_checked = site.data.globals.last_checked %}

All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong> as of <strong>{{ last_checked }}</strong>.

<div class="status-table-container" style="overflow-x: auto;">
  <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: rgba(0,0,0,0.02);">
        <th style="padding: 12px; width: 45px; text-align: center;">#</th>
        <th onclick="sortTable(1)" style="padding: 12px; cursor: pointer; width: 45%;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(2)" title="Version" style="padding: 12px; cursor: pointer; width: 80px;">V. <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(3)" title="Mod Compatibility Status" style="padding: 12px; cursor: pointer; width: 60px; text-align: center;">St. <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th title="Required DLCs & Packs" style="padding: 12px; width: 20%;">Req.</th>
        <th onclick="sortTable(5)" title="Last Update Date" style="padding: 12px; cursor: pointer; width: 100px;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for mod in site.data.mods %}
      <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.backgroundColor='rgba(0,123,255,0.05)'" onmouseout="this.style.backgroundColor='transparent'">
        <td style="padding: 12px; text-align: center;">
          <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.04); border-radius: 8px; color: #555;">
            <i class="{{ mod.icon | default: 'fas fa-box' }}"></i>
          </div>
        </td>
        
        <td style="padding: 12px;">
          <a href="{{ mod.curseforge | default: mod.github | default: '#' }}" style="text-decoration: none; color: var(--link-color); font-weight: bold; display: block;">
            {{ mod.name }}
          </a>
        </td>
        
        <td style="padding: 12px; font-family: monospace; font-size: 0.8rem; color: #777;">
          {{ mod.version }}
        </td>
        
        <td style="padding: 12px; text-align: center; width: 60px;">
          {% if mod.status == 'updated' %}
            <i class="fas fa-arrow-alt-circle-up" title="Updated" style="color: #007bff; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Updated</span> {% elsif mod.status == 'compatible' %}
            <i class="fas fa-check-circle" title="Compatible" style="color: #28a745; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Compatible</span>
          {% elsif mod.status == 'broken' %}
            <i class="fas fa-times-circle" title="Broken" style="color: #dc3545; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Broken</span>
          {% elsif mod.status == 'obsolete' %}
            <i class="fas fa-minus-circle" title="Obsolete" style="color: #6c757d; font-size: 1.1rem; opacity: 0.5; cursor: help;"></i>
            <span style="display:none;">Obsolete</span>
          {% else %}
            <i class="fas fa-question-circle" title="Unknown" style="color: #ffc107; font-size: 1.1rem; cursor: help;"></i>
            <span style="display:none;">Unknown</span>
          {% endif %}
        </td>
        
        <td style="padding: 12px;">
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            {% if mod.requirements and mod.requirements.size > 0 %}
              {% for req_id in mod.requirements %}
                {% if req_id != "BG" %}
                  {% assign pack = site.data.packs[req_id] %}
                  <span title="{{ pack.en | default: req_id }}" style="font-size: 0.7rem; background: rgba(0,0,0,0.04); color: #555; padding: 1px 5px; border-radius: 3px; border: 1px solid #eee; font-weight: 600;">
                    {{ req_id }}
                  </span>
                {% endif %}
              {% endfor %}
            {% endif %}

            {% if mod.dependencies %}
              {% for dep_id in mod.dependencies %}
                {% assign dep_mod = site.data.mods | where: "id", dep_id | first %}
                <span title="Required Mod" style="font-size: 0.7rem; background: rgba(0,123,255,0.05); color: #007bff; padding: 1px 5px; border-radius: 3px; font-weight: 600; border: 1px solid rgba(0,123,255,0.1);">
                  {{ dep_mod.name | default: dep_id }}
                </span>
              {% endfor %}
            {% endif %}

            {% comment %} Wenn nach dem Filtern von BG und Mods nichts übrig ist, zeige einen Strich {% endcomment %}
            {% if mod.requirements == nil and mod.dependencies == nil %}
              <span style="color: #ccc;">—</span>
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
