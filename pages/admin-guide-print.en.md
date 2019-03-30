---
layout: guide
locale: en
permalink: /en/admin-guide-print.html
---

# Consul Administration Guide

<div class="page-break"></div>

## Table of content

{% assign sorted = site.pages | where: "locale", "en" | sort: "subsequence" | sort: "sequence" %}
<ul class="toc">
{% for p in sorted %}
   {% if p.title %}
      {% assign slug = p.sequence | append: p.subsequence | append: " " | append: p.title %}
      {% if p.subsequence > 0 %}
      <li><span class="sub-toc-item">{{ p.sequence }}.{{ p.subsequence }}</span> <a href="#{{ slug | slugify }}">{{ p.title }}</a></li>
      {% else %}
      <li><span class="toc-item">{{ p.sequence }}</span> <b><a href="#{{ slug | slugify }}">{{ p.title }}</a></b></li>
      {% endif %}
   {% endif %}
{% endfor %}
</ul>


{% for p in sorted %}
{% if p.title %}
{% if p.subsequence > 0 %}
## {{ p.sequence }}.{{ p.subsequence }} {{ p.title }}
{% else %}
## {{ p.sequence }} {{ p.title }}
{% endif %}
{{ p.content }}
<div class="page-break"></div>
{% endif %}
{% endfor %}
