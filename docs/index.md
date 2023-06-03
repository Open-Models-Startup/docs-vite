---
layout: page
head:
  - ['meta', {property: 'og:title', content: 'Qi X LAB'}]
  - ['meta', {property: 'og:image', content: 'https://qixlab.com/img/theme/docs-social.png'}]
---

<script setup lang="ts">
import Home from '@theme/components/Home.vue';

import { homeTopLinks, homeExternalLinks, footerSections } from './links';
</script>

<Home
  :topLinks="homeTopLinks"
  :externalLinks="homeExternalLinks"
  :footerSections="footerSections"
/>
