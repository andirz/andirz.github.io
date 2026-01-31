---
layout: page
title: Mods Overview
icon: "fas fa-layer-group"
order: 2
---

{% assign latest_patch = site.data.globals.latest_patch %}
{% assign last_checked = site.data.globals.last_checked %}

<div class="content-wrapper">
  <p>All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong> as of <strong>{{ last_checked }}</strong>.</p>

  <div class="status-table-container" style="overflow-x: auto; margin-top: 25px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 15px; width: 45px; text-align: center;">#</th>
          <th onclick="sortTable(1)" style="padding: 15px; cursor: pointer; width: 45%;">Mod Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2)" title="Version" style="padding: 15px; cursor: pointer; width: 100px;">Version <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3)" title="Mod Compatibility Status" style="padding: 15px; cursor: pointer; width: 60px; text-align: center;">Status <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4)" title="Last Update Date" style="padding: 15px; cursor: pointer; width: 120px;">Updated <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th style="padding: 15px; width: 20%;">Requirements</th>
          <th onclick="sortTable(6)" style="padding: 15px; cursor: pointer; width: 15%;">Category <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for mod_entry in site.data.mods %}
          {% assign mod_page = site.mods | where: "mod_id", mod_entry.id | first %}
          
          {% assign display_name = mod_page.title | default: mod_entry.name | default: mod_entry.id %}
          {% assign display_icon = mod_page.icon | default: mod_entry.icon | default: 'fas fa-box' %}
          {% assign current_version = mod_page.version | default: mod_entry.version %}
          {% assign final_reqs = mod_page.requirements | default: mod_entry.requirements %}
          {% assign final_packs = mod_page.packs | default: mod_entry.packs %}
          {% assign update_date = mod_page.last_update | default: mod_entry.updated %}
          {% assign primary_category = mod_page.categories | first | default: "General" %}

          <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--bg-secondary)'" onmouseout="this.style.backgroundColor='transparent'">
            
            <td style="padding: 15px; text-align: center;">
              <div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; color: var(--accent-color);">
                <i class="{{ display_icon }}"></i>
              </div>
            </td>
            
            <td style="padding: 15px;">
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                {% comment %} Titel {% endcomment %}
                {% if mod_page %}
                  <a href="{{ mod_page.url | relative_url | default: '#' }}" style="text-decoration: none; color: var(--link-color); font-weight: 600; font-size: 1rem; white-space: nowrap;">{{ display_name }}</a>
                {% else %}
                  <span style="font-weight: 600; opacity: 0.7; font-size: 1rem; white-space: nowrap;">{{ display_name }}</span>
                {% endif %}

                {% comment %} File-Icons {% endcomment %}
                <span style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 6px; align-items: center; opacity: 0.6;">
                  {% if mod_page.files contains 'ts4script' %}<i class="fas fa-code" title="Script Mod"></i>{% endif %}
                  {% if mod_page.files contains 'package' or mod_page.files == nil %}<i class="fas fa-box" title="Package File"></i>{% endif %}
                  {% if mod_page.files contains 'bat' %}<i class="fas fa-terminal" title="Batch Tool"></i>{% endif %}
                </span>

                {% comment %} Pack-Badges (selbe Zeile) {% endcomment %}
                {% if final_packs.size > 0 %}
                  <div style="display: flex; gap: 4px; align-items: center;">
                    {% for pack_id in final_packs %}
                      {% if pack_id != "BG" %}
                        {% assign pack_info = site.data.packs[pack_id] %}
                        <span title="{{ pack_info.en | default: pack_id }}" style="cursor: help; font-size: 0.65rem; background: var(--accent-color-transparent); color: var(--accent-color); padding: 1px 5px; border-radius: 4px; font-weight: 700; border: 1px solid var(--accent-color-transparent); line-height: 1.4;">{{ pack_id }}</span>
                      {% endif %}
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </td>
            
            <td style="padding: 15px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text-muted);">{{ current_version }}</td>
            
            <td style="padding: 15px; text-align: center;">
              {% assign status = mod_entry.status | downcase %}
              <div style="cursor: help; display: inline-block;">
                {% if status == 'updated' %}<i class="fas fa-arrow-alt-circle-up" title="Updated" style="color: #007bff; font-size: 1.2rem;"></i>
                {% elsif status == 'compatible' %}<i class="fas fa-check-circle" title="Compatible" style="color: #28a745; font-size: 1.2rem;"></i>
                {% elsif status == 'broken' %}<i class="fas fa-times-circle" title="Broken" style="color: #dc3545; font-size: 1.2rem;"></i>
                {% else %}<i class="fas fa-question-circle" title="Unknown / Check Details" style="color: #ffc107; font-size: 1.2rem;"></i>{% endif %}
              </div>
            </td>

            <td style="padding: 15px; white-space: nowrap; color: var(--text-muted); font-size: 0.85rem;">
              <span style="display:none;">{{ update_date | date: "%Y%m%d" }}</span>
              {{ update_date | date: "%b %d, %Y" }}
            </td>
            
            <td style="padding: 15px;">
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                {% assign has_mod_req = false %}
                {% if final_reqs.size > 0 %}
                  {% for req_id in final_reqs %}
                    {% assign dep_info = site.data.dependencies[req_id] %}
                    {% if dep_info %}
                      {% assign req_url = dep_info.url | default: "#" %}
                      {% assign req_label = dep_info.short_name | default: req_id %}
                      {% assign req_full_name = dep_info.name | default: req_id %}
                    {% else %}
                      {% assign req_page = site.mods | where: "mod_id", req_id | first %}
                      {% assign req_label = req_id %}
                      {% assign req_full_name = req_page.title | default: req_id %}
                      {% assign req_url = req_page.url | relative_url | default: "#" %}
                    {% endif %}
                    <a href="{{ req_url }}" title="{{ req_full_name }}" style="text-decoration: none; font-size: 0.7rem; background: rgba(0,123,255,0.1); color: #007bff; padding: 3px 8px; border-radius: 6px; font-weight: 600; border: 1px solid rgba(0,123,255,0.2);">{{ req_label }}</a>
                    {% assign has_mod_req = true %}
                  {% endfor %}
                {% endif %}
                {% if has_mod_req == false %}<span style="color: #ccc;">—</span>{% endif %}
              </div>
            </td>

            <td style="padding: 15px; color: var(--text-muted); font-size: 0.85rem; font-weight: 500;">
              <span style="background: var(--bg-secondary); padding: 4px 8px; border-radius: 6px;">{{ primary_category }}</span>
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
