---
title: The Blarg
description: Thoughts, rants and musings on all of the things.
---

<ol>
  {% for p in site.posts %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}</ol>
