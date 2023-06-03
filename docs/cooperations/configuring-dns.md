---
title: &title Configuring DNS & TLS
description: &description Based off the root DNS zone set in EE Site Configuration (for instance, `Qi X Lab.example.com`), set the following DNS `A` records to point at your instance's IP.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://qixlab.com/img/og/cooperations-configuring-dns-tls.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

Based off the root DNS zone set in EE Site Configuration (for instance, `Qi X Lab.example.com`), set the following DNS `A` records to point at your instance's IP (`172.16.4.20` in this example):

```
A Qi X Lab.example.com 172.16.4.20
A *.Qi X Lab.example.com 172.16.4.20
A *.preview.Qi X Lab.example.com 172.16.4.20
```

## TLS

For TLS, your certificate should have `Qi X Lab.example.com` as the Common Name (CN), and the following Subject Alternative Name (SAN's):

- `Qi X Lab.example.com`
- `*.Qi X Lab.example.com`
- `*.preview.Qi X Lab.example.com`
