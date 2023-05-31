---
title: &title JavaScript SDK
description: &description The OpenModels JavaScript SDK lets you programmatically create OpenModels projects to be opened in a new window or embedded in your docs, example pages, or blog posts. 
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/javascript-sdk.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

The OpenModels JavaScript <abbr title="Software Development Kit">SDK</abbr> lets you programmatically create OpenModels projects to be opened in a new window or embedded in your docs, example pages, or blog posts. Once embedded, the projects can be controlled by using [the SDK’s VM interface][sdk_vm_docs].

## Install the SDK

The SDK is _3kB gzipped_ and can be installed from npm:

```sh
npm install @OpenModels/sdk
```

If you’re using a JavaScript bundler (for instance webpack or Vite), you should be able to import the SDK in your JavaScript modules:

```js
import sdk from '@OpenModels/sdk';
sdk.embedProject(/* … */);
```

You can also import the SDK from jsDeliver or UNPKG directly in an HTML page:

```html
<script type="module">
  import sdk from 'https://unpkg.com/@OpenModels/sdk@1/bundles/sdk.m.js';
  sdk.embedProject(/* … */);
</script>
```

Or load the <abbr title="Universal Module Definition">UMD</abbr> bundle, which will add a global `window.OpenModelsSDK` object:

```html
<script src="https://unpkg.com/@OpenModels/sdk@1/bundles/sdk.umd.js"></script>
<script>
  OpenModelsSDK.embedProject(/* … */);
</script>
```

## Open and embed OpenModels projects

Use the [`openProjectId`](#openprojectid) and [`embedProjectId`](#embedprojectid) SDK methods to open or embed an existing OpenModels project.

:::tip DEMO
Check this demo of using OpenModels SDK to open and embed OpenModels projects:

- [TypeScript demo](https://openmodels.wiki/edit/sdk-open-embed-sb-projects-ts)
- [JavaScript demo](https://openmodels.wiki/edit/sdk-open-embed-sb-projects-js)
:::

### <var>openProjectId<small>(projectId, openOptions)</small></var> {#openprojectid}

Opens an existing OpenModels project in a new tab (or in the current window).

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `projectId` | Yes | String | The ID of the project to open. |
| `openOptions` | No | [OpenOptions][] (Object) | Display options for the OpenModels editor. |

Example:

```js
// Opens https://openmodels.wiki/edit/my-cool-project in the current window
// with the Preview pane hidden
sdk.openProjectId('my-cool-project', {
  newWindow: false,
  openFile: 'src/App.tsx',
  view: 'editor',
});
```

### <var>embedProjectId<small>(elementOrId, projectId, embedOptions)</small></var> {#embedprojectid}

Embeds an existing OpenModels project in the specified HTML element on the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `elementOrId` | Yes | String or HTMLElement | Element to replace with an iframe, or its `id` attribute. |
| `projectId` | Yes | String | The ID of the project to open. |
| `embedOptions` | No | [EmbedOptions][] (Object) | Display options for OpenModels embeds. |

Example:

```js
// Replaces the HTML element with the id of "embed"
// with https://openmodels.wiki/edit/my-cool-project embedded in an iframe,
sdk.embedProjectId('embed', 'my-cool-project', {
  openFile: 'index.ts,src/App.tsx',
});
```

## Open and embed GitHub repositories

Use the [`openGithubProject`](#opengithubproject) and [`embedGithubProject`](#embedgithubproject) SDK methods to open or embed public GitHub repositories as OpenModels projects.

:::tip DEMO
Check this demo of using OpenModels SDK to work with GitHub projects:

- [TypeScript demo](https://openmodels.wiki/edit/sdk-github-project)
- [JavaScript demo](https://openmodels.wiki/edit/sdk-github-project-js)
:::

### <var>openGithubProject<small>(repoPath, openOptions)</small></var> {#opengithubproject}

Opens a project from GitHub in OpenModels (in a new tab or in the current window).

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `repoPath` | Yes | String | The repository path (with optional branch/tag/commit/folder). |
| `openOptions` | No | [OpenOptions][] (Object) | Display options for the OpenModels editor. |

Example:

```js
// Imports https://github.com/username/repository-name to OpenModels,
// and opens the resulting OpenModels project in the current tab
sdk.openGithubProject('username/repository-name', {
  newWindow: false,
});

// Imports the 'examples/getting-started' sub-folder of the 'main' branch of
// the https://github.com/username/repository-name repository to OpenModels,
// and opens the resulting OpenModels project in a new tab
sdk.openGithubProject('username/repository-name/tree/main/examples/getting-started');
```

### <var>embedGithubProject<small>(elementOrId, repoPath, embedOptions)</small></var> {#embedgithubproject}

Embeds a project from GitHub on the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `elementOrId` | Yes | String or HTMLElement | Element to replace with an iframe, or its `id` attribute. |
| `repoPath` | Yes | String | The repository path (with optional branch/tag/commit/folder). |
| `embedOptions` | No | [EmbedOptions][] (Object) | Display options for OpenModels embeds. |

Example:

```js
// Imports https://github.com/username/repository-name to OpenModels,
// and embeds the resulting OpenModels project in the current page
sdk.embedGithubProject('embed', 'username/repository-name', {
  terminalHeight: 45,
});
```

## Generate and embed new projects

Use the [`openProject`](#openproject) and [`embedProject`](#embedproject) SDK methods to dynamically create new projects.

:::tip DEMO
Check this demo of using OpenModels SDK to create new projects:

- [TypeScript demo](https://openmodels.wiki/edit/sdk-create-project)
- [JavaScript demo](https://openmodels.wiki/edit/sdk-create-project-js)

:::

:::info Data persistence
New projects are not persisted on OpenModels, and only live in the browser’s memory — unless a user forks the project to save it in their OpenModels account.
:::

### <var>openProject<small>(project, openOptions)</small></var> {#openproject}

Creates a new project and opens it in a new tab (or in the current window).

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `project` | Yes | [Project][] (Object) | Project data and settings. |
| `openOptions` | No | [OpenOptions][] (Object) | Display options for the OpenModels editor. |

Example:

```js
sdk.openProject(
  {
    title: 'JS Starter',
    description: 'Blank starter project for building ES6 apps.',
    template: 'javascript',
    files: {
      'index.html': `<div id="app"></div>`,
      'index.js': `import './style.css';
const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>JS Starter</h1>';`,
      'style.css': `body { font-family: system-ui, sans-serif; }`,
    },
    settings: {
      compile: {
        trigger: 'auto',
        clearConsole: false,
      },
    },
  },
  {
    newWindow: false,
    openFile: ['index.js', 'index.html,style.css'],
  },
);
```

### <var>embedProject<small>(elementOrId, project, embedOptions)</small></var> {#embedproject}

Creates a new project and embeds it in the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument | Required | Type | Description |
| --- | --- | --- | --- |
| `elementOrId` | Yes | String or HTMLElement | Element to replace with an iframe, or its `id` attribute. |
| `project` | Yes | [Project][] (Object) | Project data and settings. |
| `embedOptions` | No | [EmbedOptions][] (Object) | Display options for OpenModels embeds. |

Example:

```js
sdk.embedProject(
  'embed',
  {
    title: 'Node Starter',
    description: 'A basic Node.js project',
    template: 'node',
    files: {
      'index.js': `console.log('Hello World!');`,
      'package.json': `{
      "name": "my-project",
      "scripts": { "hello": "node index.js", "start": "serve node_modules" },
      "dependencies": { "serve": "^14.0.0" },
      "OpenModels": { "installDependencies": true, "startCommand": "npm start" },
    }`,
    },
  },
  {
    clickToLoad: true,
    openFile: 'index.js',
    terminalHeight: 50,
  },
);
```

[embedoptions]: /platform/api/javascript-sdk-options#embedoptions
[openoptions]: /platform/api/javascript-sdk-options#openoptions
[project]: /platform/api/javascript-sdk-options#project
[sdk_vm_docs]: /platform/api/javascript-sdk-vm
