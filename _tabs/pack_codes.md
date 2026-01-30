---
layout: page
title: Pack Codes
icon: fas fa-box-open
order: 3
toc: true
---

This list provides an overview of all official abbreviations for **The Sims 4** Packs. Click on the headers to sort the columns.

## <i class="fas fa-expand-arrows-alt"></i> Expansion Packs
<div class="table-wrapper">
  <table id="tableEP">
    <thead>
      <tr>
        <th onclick="sortTable('tableEP', 0)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 1)">EN <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 2)">DE <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 3)">ES <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
      <tr>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>

## <i class="fas fa-gamepad"></i> Game Packs
<div class="table-wrapper">
  <table id="tableGP">
    <thead>
      <tr>
        <th onclick="sortTable('tableGP', 0)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 1)">EN <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 2)">DE <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 3)">ES <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
      <tr>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>

## <i class="fas fa-tshirt"></i> Stuff Packs
<div class="table-wrapper">
  <table id="tableSP">
    <thead>
      <tr>
        <th onclick="sortTable('tableSP', 0)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableSP', 1)">EN <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableSP', 2)">DE <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableSP', 3)">ES <i class="fas fa-sort"></i></th>
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

## <i class="fas fa-puzzle-piece"></i> Kits
<div class="table-wrapper">
  <table id="tableKits">
    <thead>
      <tr>
        <th onclick="sortTable('tableKits', 0)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableKits', 1)">EN <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableKits', 2)">DE <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableKits', 3)">ES <i class="fas fa-sort"></i></th>
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
  table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; table-layout: fixed; }
  th { background: rgba(0,0,0,0.03); padding: 12px; border-bottom: 2px solid var(--border-color); cursor: pointer; text-align: left; }
  th:hover { background: rgba(0,123,255,0.1); }
  th i { font-size: 0.7rem; opacity: 0.4; margin-left: 5px; }
  td { padding: 10px; border-bottom: 1px solid var(--border-color); }
  tr:hover { background: rgba(0,123,255,0.05); }
  .table-wrapper { overflow-x: auto; }
</style>

<script>
function sortTable(tableId, n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tableId);
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
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
