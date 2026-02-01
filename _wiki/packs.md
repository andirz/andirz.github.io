<h2 id="expansion-packs">Expansion Packs</h2>
<div class="table-wrapper">
  <table id="tableEP">
    <thead>
      <tr>
        <th>Icon</th>
        <th onclick="sortTable('tableEP', 1)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 2)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 3)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableEP', 4)">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
      {% assign icon_name = code | downcase %}
      <tr>
        <td style="text-align: center;"><img src="{{ site.baseurl }}/assets/img/packs/{{ icon_name }}.png" alt="{{ code }}" style="height: 30px; width: auto;"></td>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>

<h2 id="game-packs">Game Packs</h2>
<div class="table-wrapper">
  <table id="tableGP">
    <thead>
      <tr>
        <th>Icon</th>
        <th onclick="sortTable('tableGP', 1)">Code <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 2)">en <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 3)">de <i class="fas fa-sort"></i></th>
        <th onclick="sortTable('tableGP', 4)">es <i class="fas fa-sort"></i></th>
      </tr>
    </thead>
    <tbody>
      {% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
      {% assign icon_name = code | downcase %}
      <tr>
        <td style="text-align: center;"><img src="{{ site.baseurl }}/assets/img/packs/{{ icon_name }}.png" alt="{{ code }}" style="height: 30px; width: auto;"></td>
        <td><strong>{{ code }}</strong></td>
        <td>{{ info.en }}</td>
        <td>{{ info.de }}</td>
        <td>{{ info.es }}</td>
      </tr>
      {% endif %}{% endfor %}
    </tbody>
  </table>
</div>