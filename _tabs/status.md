---
layout: page
title: Mod Status
permalink: /status/
icon: fas fa-check-circle
order: 2
---

<p>Current status of all mods for <strong>The Sims 4</strong>. This list is updated after every game patch.</p>

<div class="status-table-container" style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
        <th style="padding: 12px;">Mod Name</th>
        <th style="padding: 12px;">Version</th>
        <th style="padding: 12px;">Status</th>
        <th style="padding: 12px;">Last Tested Patch</th>
        <th style="padding: 12px;">Last Update</th>
      </tr>
    </thead>
    <tbody>
      {% for mod in site.data.mods %}
      <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.background='rgba(0,0,0,0.02)'" onmouseout="this.style.background='transparent'">
        <td style="padding: 12px;">
          <a href="{{ mod.curseforge | default: mod.github | default: '#' }}" style="font-weight: bold; text-decoration: none; color: var(--link-color);">
            {{ mod.name }}
          </a>
        </td>
        <td style="padding: 12px;"><code style="font-size: 0.85rem;">v{{ mod.version }}</code></td>
        <td style="padding: 12px;">
          {% if mod.status == 'updated' %}
            <span style="color: #007bff; font-weight: bold;">● Updated</span>
          {% elsif mod.status == 'compatible' %}
            <span style="color: #28a745; font-weight: bold;">● Compatible</span>
          {% elsif mod.status == 'broken' %}
            <span style="color: #dc3545; font-weight: bold;">● Broken</span>
          {% elsif mod.status == 'unknown' %}
            <span style="color: #6c757d; font-weight: bold;">● Unknown</span>
          {% elsif mod.status == 'obsolete' %}
            <span style="color: #343a40; font-weight: bold; text-decoration: line-through;">● Obsolete</span>
          {% endif %}
        </td>
        <td style="padding: 12px; font-family: monospace;">{{ mod.patch }}</td>
        <td style="padding: 12px; white-space: nowrap;">{{ mod.updated }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<div style="margin-top: 30px; padding: 15px; background: rgba(0,0,0,0.02); border-radius: 8px; font-size: 0.85rem;">
  <strong>Note:</strong> If a mod is marked as <em>Broken</em>, please remove it from your Mods folder immediately and wait for an update.
</div>
