---
layout: guide
locale: en
permalink: /en/admin-guide.html
---
# Consul Administration Guide

## Table of content

{% assign sorted = site.pages | where: "locale", "en" | sort: "subsequence" | sort: "sequence" %}
<ul class="toc">
{% for p in sorted %}
   {% if p.title %}
      {% if p.subsequence > 0 %}
      <li><span class="sub-toc-item">{{ p.sequence }}.{{ p.subsequence }}</span> <a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></li>
      {% else %}
      <li><span class="toc-item">{{ p.sequence }}</span> <b><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></b></li>
      {% endif %}
   {% endif %}
{% endfor %}
</ul>