---
layout: boxed
---
# List of Persons

(alphabetically)

{% for person in site.persons %}
  - [{{ person.name }}]({{ person.id }})
{% endfor %}
