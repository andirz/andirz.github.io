---
layout: page
title: Mods Overview
icon: "fas fa-layer-group"
order: 2
---

{% assign latest_patch = site.data.globals.latest_patch %}
{% assign last_checked = site.data.globals.last_checked %}

<style>
  /* Zebra-Look: Jede zweite Zeile ganz leicht abgesetzt */
  #modTable tbody tr:nth-child(even) {
    background-color: rgba(128, 128, 128, 0.03);
  }

  /* Aggressiver Hover im Stil der Webseite (Neutral) */
  #modTable tbody tr:hover {
    background-color: rgba(128, 128, 128, 0.08) !important;
    /* Ein deutlicher Rahmen oben und unten erzeugt den "Rechteck-Look" */
    outline: 1.5px solid var(--text-muted);
    outline-offset: -1.5px;
    cursor: pointer;
  }

  /* Pack-Buttons Design (Graue Rechtecke) */
  .pack-badge {
    font-size: 0.65rem;
    background: rgba(128, 128, 128, 0.1);
    color: var(--text-muted);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    border: 1px solid rgba(128, 128, 128, 0.2);
    text-transform: uppercase;
    cursor: help;
    line-height: 1.2;
    display: inline-block;
  }
</style>

<div class="content-wrapper">
  <p>All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong> as of <strong>{{ last_checked }}</strong>.</p>

  <div class="status-table-container" style="overflow-x: auto; margin-top: 25px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">#</th>
          <th onclick="sortTable(1)" style="padding: 12px; cursor: pointer; width: 1%; white-space: nowrap;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2)" title="Version" style="padding: 12px; cursor: pointer; width: 90px;">Version <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3)" title="Status" style="padding: 12px; cursor: pointer; width: 60px; text-align: center;">Status <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4)" title="Last Update" style="padding: 12px; cursor: pointer; width: 110px;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th style="padding: 12px; width: 130px;">Requirements</th>
          <th onclick="sortTable(6)" style="padding: 12px; cursor: pointer; width: 120px;">Category <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for mod_entry in site.data.mods %}
          {% assign mod_page = site.mods | where: "mod_id", mod_entry.id | first %}
          {% assign display_name = mod_page.title | default: mod_entry.name | default: mod_entry.id %}
          {% assign display_icon = mod_page.icon | default: mod_entry.icon | default: 'fas fa-file-archive' %}
          {% assign current_version = mod_page.version | default: mod_entry.version %}
          {% assign final_reqs = mod_page.requirements | default: mod_entry.requirements %}
          {% assign final_packs = mod_page.packs | default: mod_entry.packs %}
          {% assign update_date = mod_page.last_update | default: mod_entry.updated %}
          {% assign primary_category = mod_page.categories | first | default: "General" %}

          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 8px; text-align: center;">
              <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; color: var(--accent-color); border: 1px solid var(--border-color); margin: 0 auto;">
                <i class="{{ display_icon }}" style="font-size: 1.25rem;"></i>
              </div>
            </td>
            
            <td style="padding: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                {% if mod_page %}
                  <a href="{{ mod_page.url | relative_url }}" style="text-decoration: none; color: var(--link-color); font-weight: 700; font-size: 1.05rem; white-space: nowrap;">{{ display_name }}</a>
                {% else %}
                  <span style="font-weight: 700; opacity: 0.7; font-size: 1.05rem; white-space: nowrap;">{{ display_name }}</span>
                {% endif %}

                <span style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 5px; opacity: 0.4;">
                  {% if mod_page.files contains 'ts4script' %}<i class="fas fa-file-code" title="Script Mod"></i>{% endif %}
                  {% if mod_page.files contains 'package' or mod_page.files == nil %}<i class="fas fa-file-archive" title="Package File"></i>{% endif %}
                </span>

                {% if final_packs.size > 0 %}
                  <div style="display: flex; gap: 4px;">
                    {% for pack_id in final_packs %}
                      {% if pack_id != "BG" %}
                        <span class="pack-badge" title="Requires {{ pack_id }}">
                          {{ pack_id }}
                        </span>
                      {% endif %}
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </td>
            
            <td style="padding: 12px; font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 700; color: var(--text-color);">
              {{ current_version }}
            </td>
            
            <td style="padding: 12px; text-align: center;">
              {% assign status = mod_entry.status | downcase %}
              <div style="cursor: help;">
                {% if status == 'updated' %}<i class="fas fa-arrow-alt-circle-up" style="color: #007bff; font-size: 1.3rem;"></i>
                {% elsif status == 'compatible' %}<i class="fas fa-check-circle" style="color: #28a745; font-size: 1.3rem;"></i>
                {% elsif status == 'broken' %}<i class="fas fa-times-circle" style="color: #dc3545; font-size: 1.3rem;"></i>
                {% else %}<i class="fas fa-question-circle" style="color: #ffc107; font-size: 1.3rem;"></i>{% endif %}
              </div>
            </td>

            <td style="padding: 12px; white-space: nowrap; color: var(--text-muted); font-size: 0.85rem;">
              {{ update_date | date: "%b %d, %Y" }}
            </td>
            
            <td style="padding: 12px;">
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                {% assign has_mod_req = false %}
                {% if final_reqs.size > 0 %}
                  {% for req_id in final_reqs %}
                    {% assign dep_info = site.data.dependencies[req_id] %}
                    {% assign req_label = dep_info.short_name | default: req_id %}
                    <a href="{{ dep_info.url | default: '#' }}" style="text-decoration: none; font-size: 0.65rem; background: rgba(0,123,255,0.08); color: #007bff; padding: 2px 6px; border-radius: 4px; font-weight: 700; border: 1px solid rgba(0,123,255,0.15); line-height: 1.4;">{{ req_label }}</a>
                    {% assign has_mod_req = true %}
                  {% endfor %}
                {% endif %}
                {% if has_mod_req == false %}<span style="color: #ddd;">—</span>{% endif %}
              </div>
            </td>

            <td style="padding: 12px; color: var(--text-muted); font-size: 0.85rem;">
              <span style="background: var(--bg-secondary); padding: 3px 8px; border-radius: 6px; border: 1px solid var(--border-color); font-weight: 500;">{{ primary_category }}</span>
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
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
      if (dir == "asc") { if (xValue > yValue) { shouldSwitch = true; break; } } 
      else if (dir == "desc") { if (xValue < yValue) { shouldSwitch = true; break; } }
    }
    if (shouldSwitch) { 
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
      switching = true; 
      switchcount ++; 
    } else { 
      if (switchcount == 0 && dir == "asc") { dir = "desc"; switching = true; } 
    }
  }
}
</script>
