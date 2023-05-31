---
title: &title Configuring DNS & TLS
description: &description Based off the root DNS zone set in EE Site Configuration (for instance, `OpenModels.example.com`), set the following DNS `A` records to point at your instance's IP.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/enterprise-configuring-dns-tls.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

Based off the root DNS zone set in EE Site Configuration (for instance, `OpenModels.example.com`), set the following DNS `A` records to point at your instance's IP (`172.16.4.20` in this example):

```
A OpenModels.example.com 172.16.4.20
A *.OpenModels.example.com 172.16.4.20
A *.preview.OpenModels.example.com 172.16.4.20
```

## TLS

For TLS, your certificate should have `OpenModels.example.com` as the Common Name (CN), and the following Subject Alternative Name (SAN's):

- `OpenModels.example.com`
- `*.OpenModels.example.com`
- `*.preview.OpenModels.example.com`
