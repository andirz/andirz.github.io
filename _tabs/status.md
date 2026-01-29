---
layout: page
title: Mod Status
permalink: /status/
icon: fas fa-check-circle
order: 2
panel: false
---

<style>
  #modTable {
    font-family: 'Montserrat', sans-serif;
  }
  #modTable thead th {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    color: var(--main-color);
  }
  #modTable tbody tr:hover {
    background: rgba(0, 123, 255, 0.03) !important;
  }
  .status-table-container {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: white;
  }
</style>

{% assign latest_patch = site.data.mods | map: "patch" | compact | first %}
<div style="background: rgba(0,123,255,0.05); padding: 18px; border-radius: 12px; border-left: 5px solid #007bff; margin-bottom: 30px;">
  <i class="fas fa-info-circle" style="color: #007bff;"></i> 
  All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong>.
</div>

<div class="status-table-container" style="overflow-x: auto;">
  <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; cursor: pointer; background: rgba(0,0,0,0.02);">
        <th style="padding: 15px; width: 45px;">Icon</th>
        <th onclick="sortTable(1)" style="padding: 15px;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.5;"></i></th>
        <th onclick="sortTable(2)" style="padding: 15px;">Version <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.5;"></i></th>
        <th onclick="sortTable(3)" style="padding: 15px;">Status <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.5;"></i></th>
        <th style="padding: 15px;">Required Script / Packs</th>
        <th onclick="sortTable(5)" style="padding: 15px;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.5;"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for mod in site.data.mods %}
      <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">
        <td style="padding: 15px; text-align: center;">
          <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.04); border-radius: 8px; color: #555;">
            <i class="{{ mod.icon | default: 'fas fa-box' }}"></i>
          </div>
        </td>
        <td style="padding: 15px;">
          <a href="{{ mod.curseforge | default: mod.github | default: '#' }}" style="text-decoration: none; color: var(--link-color); font-weight: bold;">
            {{ mod.name }}
          </a>
        </td>
        <td style="padding: 15px; font-family: monospace;">{{ mod.version }}</td>
        <td style="padding: 15px;">
          {% if mod.status == 'updated' %}
            <span style="color: #007bff; font-weight: bold;">Updated</span>
          {% elsif mod.status == 'compatible' %}
            <span style="color: #28a745; font-weight: bold;">Compatible</span>
          {% elsif mod.status == 'broken' %}
            <span style="color: #dc3545; font-weight: bold;">Broken</span>
          {% elsif mod.status == 'unknown' %}
            <span style="color: #6c757d; font-weight: bold;">Unknown</span>
          {% elsif mod.status == 'obsolete' %}
            <span style="color: #343a40; font-weight: bold; text-decoration: line-through;">Obsolete</span>
          {% endif %}
        </td>
        <td style="padding: 15px;">
          {% if mod.dependencies %}
            {% for dep_id in mod.dependencies %}
              {% assign pack = site.data.packs[dep_id] %}
              {% assign dep_mod = site.data.dependencies[dep_id] %}
              {% if pack %}
                <span title="EN: {{ pack.en }} | DE: {{ pack.de }} | ES: {{ pack.es }}" style="font-size: 0.75rem; background: rgba(0,0,0,0.05); color: #555; padding: 3px 8px; border-radius: 4px; cursor: help; margin-right: 4px; border-bottom: 1px dotted #ccc;">{{ dep_id }}</span>
              {% elsif dep_mod %}
                <span style="font-size: 0.75rem; background: rgba(0,123,255,0.08); color: #007bff; padding: 3px 8px; border-radius: 4px; font-weight: 600; margin-right: 4px;">{{ dep_mod.name }}</span>
              {% else %}
                <span style="font-size: 0.75rem; background: #eee; padding: 3px 8px; border-radius: 4px; margin-right: 4px;">{{ dep_id }}</span>
              {% endif %}
            {% endfor %}
          {% else %}
            <span style="color: #ccc;">—</span>
          {% endif %}
        </td>
        <td style="padding: 15px; white-space: nowrap; color: #666;">{{ mod.updated }}</td>
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
