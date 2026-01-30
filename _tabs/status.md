---
layout: page
title: Mod Status
icon: fas fa-tools
order: 2
---

{% assign latest_patch = site.data.globals.latest_patch %}
{% assign last_checked = site.data.globals.last_checked %}

<div class="status-info-box" style="background: rgba(0, 123, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 4px solid #007bff; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
  <i class="fas fa-info-circle" style="color: #007bff;"></i> 
  <span>
    All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong> as of <strong>{{ last_checked }}</strong>.
  </span>
</div>

<div class="status-table-container" style="overflow-x: auto;">
  <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; table-layout: fixed;">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: rgba(0,0,0,0.02);">
        <th style="padding: 12px; width: 50px; text-align: center;">Icon</th>
        <th onclick="sortTable(1)" style="padding: 12px; cursor: pointer; width: 25%;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(2)" style="padding: 12px; cursor: pointer; width: 12%;">Version <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(3)" style="padding: 12px; cursor: pointer; width: 15%;">Status <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th style="padding: 12px; width: 33%;">Requirements</th>
        <th onclick="sortTable(5)" style="padding: 12px; cursor: pointer; width: 15%;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
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
          <a href="{{ mod.curseforge | default: mod.github | default: '#' }}" style="text-decoration: none; color: var(--link-color); font-weight: bold;">
            {{ mod.name }}
          </a>
        </td>
        
        <td style="padding: 12px; font-family: monospace; font-size: 0.8rem; color: #666;">
          {{ mod.version }}
        </td>
        
        <td style="padding: 12px;">
          {% if mod.status == 'updated' %}
            <span style="color: #007bff; font-weight: bold;">Updated</span>
          {% elsif mod.status == 'compatible' %}
            <span style="color: #28a745; font-weight: bold;">Compatible</span>
          {% elsif mod.status == 'broken' %}
            <span style="color: #dc3545; font-weight: bold;">Broken</span>
          {% elsif mod.status == 'obsolete' %}
            <span style="color: #343a40; font-weight: bold; text-decoration: line-through;">Obsolete</span>
          {% else %}
            <span style="color: #6c757d; font-weight: bold;">Unknown</span>
          {% endif %}
        </td>
        
        <td style="padding: 12px;">
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            {% if mod.requirements and mod.requirements.size > 0 %}
              {% for req_id in mod.requirements %}
                {% assign pack = site.data.packs[req_id] %}
                <span title="{{ pack.en | default: req_id }}" style="font-size: 0.7rem; background: rgba(0,0,0,0.04); color: #555; padding: 1px 5px; border-radius: 3px; border: 1px solid #eee; font-weight: 600;">
                  {{ req_id }}
                </span>
              {% endfor %}
            {% else %}
              <span title="Base Game Required" style="font-size: 0.7rem; background: #e9ecef; color: #495057; padding: 1px 5px; border-radius: 3px; border: 1px solid #ced4da; font-weight: bold;">
                BG
              </span>
            {% endif %}

            {% if mod.dependencies %}
              {% for dep_id in mod.dependencies %}
                {% assign dep_mod = site.data.mods | where: "id", dep_id | first %}
                <span title="Required Mod" style="font-size: 0.7rem; background: rgba(0,123,255,0.05); color: #007bff; padding: 1px 5px; border-radius: 3px; font-weight: 600; border: 1px solid rgba(0,123,255,0.1);">
                  {{ dep_mod.name | default: dep_id }}
                </span>
              {% endfor %}
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
