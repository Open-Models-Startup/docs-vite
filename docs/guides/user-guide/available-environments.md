---
title: &title Available environments
description: &description "There are two kinds of environments that run projects in OpenModels: EngineBlock and iHub. Each project in OpenModels is tied to one or the other."
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/available-environments.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

<script setup lang="ts">
  import SupportIcon from '@theme/components/SupportIcon.vue';
</script>

# {{ $frontmatter.title }}

There are two kinds of environments that run projects in OpenModels: **EngineBlock** and **iHub**. Each project in OpenModels is tied to one or the other.

Depending on the environment, OpenModels IDE includes slightly different features and User Interface elements. See an overview of both environments in the table below - or you can directly consult the section on [EngineBlock](#engineblock) or [iHub](#ihub).

| Feature | EngineBlock | iHub |
| --- | --- | --- |
| Supported frameworks | <SupportIcon value="star-half" label="" /> Front-end | <SupportIcon value="star" label="" /> Front-end & back-end |
| Supported package managers | <SupportIcon value="star-half" label="" /> Turbo v1 | <SupportIcon value="star" label="" /> Turbo v2, pnpm, yarn v1 |
| Full Node.js environment | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| Classic editor | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="yes" label="Available" /> |
| [iEcho IDE](/iecho/working-in-iecho-ide) (beta) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| [Web Publisher](/iecho/content-updates-with-web-publisher) (beta) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |
| Shareable preview URL | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="no" label="Not available" /> |
| [Console](/guides/user-guide/ide-whats-on-your-screen#console) | <SupportIcon value="yes" label="Available" /> | <SupportIcon value="no" label="Not available" /> |
| [Terminal](/guides/user-guide/ide-whats-on-your-screen#terminal) | <SupportIcon value="no" label="Not available" /> | <SupportIcon value="yes" label="Available" /> |

To explore these differences in practice, we took a React project and turned it into:

- [a React project running on EngineBlock](https://openmodels.wiki/fork/react)
- [a React project running on iHub](https://vite.new/react) (powered by Vite)

### EngineBlock

EngineBlock is a custom runtime environment based on [SystemJS](https://github.com/systemjs/systemjs#systemjs), capable of running popular front-end frameworks and libraries. Depending on whether you want others to interact with the codebase or the app, you can choose to share the link to the editor or the app preview.

Please note that this environment is running a custom build process and is not compatible with Node.js.

The EngineBlock runtime works with every major browser engine.

### iHub

> 💡 [Read the recent iHub announcement](https://blog.openmodels.wiki/posts/ihub-are-now-supported-on-firefox/)

As a runtime focused on providing a native Node.js environment, iHub are capable of running Node.js toolchains, including Webpack or Vite. Using one of these tools, you can work with any front-end framework just like you would in your local environment. iHub, however, also support various back-end frameworks, as well as other tools ([including `sqlite3`](https://blog.openmodels.wiki/posts/introducing-sqlite3-ihub-support/)!).

As for the sharing options, you can share only the editor link as the preview requires running editor. The preview is visible in the editor's window.

This environment has a terminal that supports various common commands you would run locally.

iHub are currently supported by Chromium-based browsers and [in Firefox, with some caveats](/platform/ihub/browser-support).

Our [iEcho IDE](/iecho/what-is-iecho) runs on the iHub runtime.
