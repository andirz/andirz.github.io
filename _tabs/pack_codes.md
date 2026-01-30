---
layout: page
title: Pack Codes
icon: fas fa-box-open
order: 3
toc: true
---

This list provides an overview of all official abbreviations and codes for **The Sims 4** Packs. It is a helpful resource for modders and players to identify packs across different languages. 

Click on the table headers to sort the columns or use `Ctrl + F` to find a specific pack.

## <i class="fas fa-expand-arrows-alt"></i> Expansion Packs
<div class="table-wrapper">
  <table id="tableEP">
    <thead>
      <tr>
        <th onclick="sortTable('tableEP', 0)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 1)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 2)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 3)">es <i class="fas fa-sort"></i></th>
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
        <th onclick="sortTable('tableGP', 1)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 2)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 3)">es <i class="fas fa-sort"></i></th>
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
        <th onclick="sortTable('tableSP', 1)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableSP', 2)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableSP', 3)">es <i class="fas fa-sort"></i></th>
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
        <th onclick="sortTable('tableKits', 1)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableKits', 2)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableKits', 3)">es <i class="fas fa-sort"></i></th>
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
  table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-bottom: 2rem; 
  }

  /* --- Spalte 1: Minimale Breite --- */
  th:nth-child(1), td:nth-child(1) { 
    width: 12%;          
    white-space: nowrap; 
    text-align: center;
    padding-right: 20px; 
    font-family: monospace;
  }

  /* --- Sprachen: Gleichmäßige Verteilung des Rests --- */
  th:nth-child(2), th:nth-child(3), th:nth-child(4) { 
    width: auto; 
  }

  /* --- Design & Hover --- */
  th { 
    background: rgba(0,0,0,0.03); 
    padding: 12px 8px; 
    border-bottom: 2px solid var(--border-color); 
    cursor: pointer; 
    text-align: left;
  }

  th:hover { background: rgba(0,123,255,0.1) !important; }

  /* Zeilen-Hover für die ganze Zeile */
  tbody tr { transition: background-color 0.15s ease; }
  tbody tr:hover { background-color: rgba(0, 123, 255, 0.08) !important; }
  td { padding: 10px 8px; border-bottom: 1px solid var(--border-color); }
  th i { font-size: 0.7rem; opacity: 0.4; float: right; margin-top: 4px; }
  
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
