---
layout: page
title: Skills Overview
icon: "fas fa-graduation-cap"
description: "A complete reference guide for all skills in The Sims 4, updated for all packs including Royalty & Legacy."
order: 3
---

{% assign skills = "acting|Acting|Adult|EP06|Get Famous|Major_Acting|10,apothecary|Apothecary|Adult|EP19|Enchanted by Nature|Major_Apothecary|10,archaeology|Archaeology|Adult|GP06|Jungle Adventure|Major_Archaeology|10,archery|Archery|Adult|EP20|Adventure Awaits|Major_Archery|10,baking|Baking|Adult|EP01|Get to Work|Major_Baking|10,bowling|Bowling|Adult|SP10|Bowling Night|Skill_Bowling|5,charisma|Charisma|Adult|BG|Base Game|Major_Charisma|10,child_creativity|Creativity|Child|BG|Base Game|Skill_Child_Creativity|10,child_mental|Mental|Child|BG|Base Game|Skill_Child_Mental|10,child_motor|Motor|Child|BG|Base Game|Skill_Child_Motor|10,child_social|Social|Child|BG|Base Game|Skill_Child_Social|10,comedy|Comedy|Adult|BG|Base Game|Major_Comedy|10,cooking|Cooking|Adult|BG|Base Game|Major_HomestyleCooking|10,cross_stitch|Cross-stitch|Adult|EP11|Cottage Living|Skill_CrossStitch|10,dancing|Dancing|Adult|EP02|Get Together|Minor_Dancing|5,diving|Diving|Adult|EP20|Adventure Awaits|Major_Diving|10,dj_mixing|DJ Mixing|Adult|EP02|Get Together|Major_DJ|10,entomology|Entomology|Adult|EP20|Adventure Awaits|Major_Entomology|10,entrepreneur|Entrepreneur|Adult|EP12|High School Years|Major_Entrepreneur|5,equestrian_skill|Equestrian Skill|Adult|EP14|Horse Ranch|AdultMajor_EquestrianSkill|10,fabrication|Fabrication|Adult|EP09|Eco Lifestyle|AdultMajor_Fabrication|10,fishing|Fishing|Adult|BG|Base Game|Major_Fishing|10,fitness|Fitness|Adult|BG|Base Game|Skill_Fitness|10,flower_arranging|Flower Arranging|Adult|EP05|Seasons|AdultMajor_FlowerArranging|10,gardening|Gardening|Adult|BG|Base Game|Major_Gardening|10,gemology|Gemology|Adult|SP49|Crystal Creations|Major_Gemology|10,gourmet_cooking|Gourmet Cooking|Adult|BG|Base Game|Major_GourmetCooking|10,guitar|Guitar|Adult|BG|Base Game|Major_Guitar|10,handiness|Handiness|Adult|BG|Base Game|Major_Handiness|10,herbalism|Herbalism|Adult|GP01|Outdoor Retreat|Major_Herbalism|10,juice_fizzing|Juice Fizzing|Adult|EP09|Eco Lifestyle|AdultMinor_JuiceFizzing|5,knitting|Knitting|Adult|SP17|Nifty Knitting|Major_Knitting|10,local_culture|Selvadoradian Culture|Adult|GP06|Jungle Adventure|Minor_LocalCulture|5,logic|Logic|Adult|BG|Base Game|Major_Logic|10,media_production|Media Production|Adult|EP06|Get Famous|Minor_Mediaproduction|5,medium|Medium|Adult|SP18|Paranormal|Minor_Medium|5,mischief|Mischief|Adult|BG|Base Game|Major_Mischief|10,mixology|Mixology|Adult|BG|Base Game|Major_Bartending|10,natural_living|Natural Living|Adult|EP19|Enchanted by Nature|Major_NaturalLiving|10,nectar_making|Nectar Making|Adult|EP14|Horse Ranch|AdultMinor_RanchNectar|5,painting|Painting|Adult|BG|Base Game|Major_Painting|10,papercraft|Papercraft|Adult|EP20|Adventure Awaits|Major_Papercraft|10,parenting|Parenting|Adult|GP05|Parenthood|Major_Parenting|10,pet_training|Pet Training|Adult|EP04|Cats & Dogs|Skill_Dog|5,photography|Photography|Adult|BG|Base Game|Major_Photography|5,piano|Piano|Adult|BG|Base Game|Major_Piano|10,pipe_organ|Pipe Organ|Adult|GP04|Vampires|Major_PipeOrgan|10,pottery|Pottery|Adult|EP18|Businesses & Hobbies|Major_Pottery|10,programming|Programming|Adult|BG|Base Game|Major_Programming|10,research_debate|Research & Debate|Adult|EP08|Discover University|Major_Research|10,robotics|Robotics|Adult|EP08|Discover University|Major_Robotic|10,rock_climbing|Rock Climbing|Adult|EP10|Snowy Escape|Major_Rockclimbing|10,rocket_science|Rocket Science|Adult|BG|Base Game|Major_RocketScience|10,romance|Romance|Adult|EP16|Lovestruck|Major_Romance|10,singing|Singing|Adult|EP03|City Living|Major_Singing|10,skiing|Skiing|Adult|EP10|Snowy Escape|Major_Skiing|10,snowboarding|Snowboarding|Adult|EP10|Snowy Escape|Major_Snowboarding|10,swordsmanship|Swordsmanship|Adult|EP21|Royalty & Legacy|Major_Swordsmanship|10,tattooing|Tattooing|Adult|EP18|Businesses & Hobbies|Major_Tattooing|10,thanatology|Thanatology|Adult|EP17|Life & Death|Major_Thanatology|10,toddler_communication|Communication|Toddler|BG|Base Game|Toddler_Communication|5,toddler_imagination|Imagination|Toddler|BG|Base Game|Toddler_Imagination|5,toddler_movement|Movement|Toddler|BG|Base Game|Toddler_Movement|5,toddler_potty|Potty|Toddler|BG|Base Game|Toddler_Potty|3,toddler_thinking|Thinking|Toddler|BG|Base Game|Toddler_Thinking|5,vampire_lore|Vampire Lore|Adult|GP04|Vampires|VampireLore|15,veterinarian|Veterinarian|Adult|EP04|Cats & Dogs|Major_Vet|10,video_gaming|Video Gaming|Adult|BG|Base Game|Major_VideoGaming|10,violin|Violin|Adult|BG|Base Game|Major_Violin|10,wellness|Wellness|Adult|GP02|Spa Day|Major_Wellness|10,writing|Writing|Adult|BG|Base Game|Major_Writing|10" | split: "," %}

{% include table_styles.html %}

<div class="content-wrapper">
  <div class="status-table-container">
    <table id="skillTable" class="custom-wiki-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
      <thead>
        <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
          <th style="padding: 12px; width: 60px; text-align: center;">Icon</th>
          <th onclick="sortTable(1, 'skillTable')" style="padding: 12px; cursor: pointer;">Skill Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(2, 'skillTable')" style="padding: 12px; cursor: pointer; width: 100px;">Age <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(3, 'skillTable')" style="padding: 12px; cursor: pointer; width: 80px;">Pack Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(4, 'skillTable')" style="padding: 12px; cursor: pointer;">Pack Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(5, 'skillTable')" style="padding: 12px; cursor: pointer; width: 60px;">Max <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
          <th onclick="sortTable(6, 'skillTable')" style="padding: 12px; cursor: pointer;">Skill Code <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        </tr>
      </thead>
      <tbody>
        {% for skill_string in skills %}
          {% assign details = skill_string | split: "|" %}
          {% assign slug = details[0] %}
          {% assign name = details[1] %}
          {% assign age = details[2] %}
          {% assign pack_id = details[3] %}
          {% assign pack_name = details[4] %}
          {% assign internal_id = details[5] %}
          {% assign max_level = details[6] %}

          {% assign icon_path = "/assets/img/skills/" | append: slug | append: ".png" %}
          {% assign icon_exists = false %}
          {% for file in site.static_files %}
            {% if file.path == icon_path %}
              {% assign icon_exists = true %}
              {% break %}
            {% endif %}
          {% endfor %}

          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 8px; text-align: center;">
              <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color); margin: 0 auto;">
                {% if icon_exists %}
                  <img src="{{ icon_path }}" alt="{{ name }}" style="width: 32px; height: 32px; object-fit: contain;">
                {% else %}
                  <i class="fas fa-graduation-cap" style="opacity: 0.2;"></i>
                {% endif %}
              </div>
            </td>
            <td style="padding: 12px;"><span style="font-weight: 700; color: var(--text-color);">{{ name }}</span></td>
            <td style="padding: 12px;"><span class="age-badge">{{ age }}</span></td>
            <td style="padding: 12px; color: var(--text-muted);">{{ pack_id }}</td>
            <td style="padding: 12px; color: var(--text-muted);">{{ pack_name }}</td>
            <td style="padding: 12px; text-align: center; font-weight: 600;">{{ max_level }}</td>
            <td style="padding: 12px;"><code>{{ internal_id }}</code></td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>

{% include table_sorting_script.html %}