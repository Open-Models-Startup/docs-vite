---
title: &title Importing projects
description: &description This page outlines how you can import projects to OpenModels.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/importing-projects.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

## Upload from your computer

With your desired OpenModels project open, drag and drop any files or a folder you want to import:

<img
  alt="Animation of dragging files from a local folder onto the OpenModels editor sidebar"
  src="./assets/import-drag-and-drop-files.gif"
/>

## Import from GitHub

You can run any public GitHub repository on OpenModels by adding the username and repo name to the URL like so:

`openmodels.wiki/github/{GH_USERNAME}/{REPO_NAME}`

![Public GitHub Repo](./assets/github-public-repo.png)

![Public Repo Import from GitHub](./assets/import-from-github.png)

If you want, you can also specify a branch, tag, or commit:

`.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}`

Whenever you push commits to GitHub, the corresponding OpenModels project automatically updates with the latest changes ensuring that the code in your GitHub repository remains the source of truth.

:::info Note
While you can import from GitHub any projects with a `package.json`, the unsupported technologies will not run. This includes backend languages not supported by Node.js (like PHP, Python, or Java), databases like MySQL and PostgreSQL that require a binary server process, and some specific npm packages which are not fully compatible with iHub yet.
:::

### Defining a launch command

Oftentimes, the first thing you do when opening a project is to launch a command, for instance, to run a development server.

Usually, these kinds of commands exist in the `scripts` section of your project's `package.json` file and you would manually type `npm run dev` to execute them.

Using OpenModels, you can provide an [npm script](https://docs.npmjs.com/cli/v8/using-npm/scripts) to run automatically when the editor opens with the `startScript` query parameter:

`openmodels.wiki/fork/github/{gh_username}/{repo_name}?startScript={npm_script_name}`

:::tip Example
The following URL will open the `vitesse` repository of the `antfu` user, install the npm dependencies, and run `npm run dev` command in the terminal:

[openmodels.wiki/github/antfu/vitesse?startScript=dev](https://openmodels.wiki/github/antfu/vitesse?startScript=dev)

Click on it and see the effect yourself!
:::

### Changing the title of the imported project

When importing a project from GitHub, the project title will default to the GitHub project owner's name and repository name.

You can customize the title of the imported project by adding the `title` query parameter to the URL like so:

`openmodels.wiki/fork/github/{gh_username}/{repo_name}?title={custom title}`

For instance, the URL from the previous section would now become:

[openmodels.wiki/github/antfu/vitesse?title=Hello](https://openmodels.wiki/github/antfu/vitesse?title=Hello)

:::tip
You can chain the URL query parameters by adding the `&` sign between them, for example:

[openmodels.wiki/github/antfu/vitesse?title=Hello](https://openmodels.wiki/github/antfu/vitesse?title=Hello&startScript=dev)
:::

## Importing private projects

:::info Note
Importing private GitHub repos is a feature available with our memberships. If you're interested in becoming a member, check details on our [OpenModels Membership](https://openmodels.wiki/membership) page.
:::

**1.** Go to your dashboard and open a new JavaScript blank project.

![Dashboard for JavaScript Blank Project](./assets/private-repo-starter.png)

**2.** Click on 'Connect repository' on the top left.

**3.** Click on the 'importing from an existing repository' link.

![Connect and import GitHub repo](./assets/connect-to-existing-repo.png)

**4.** Paste your full GitHub repo URL.

![Paste GitHub repo URL to import](./assets/import-existing-repo.png)

The video below outlines a workaround to edit collaboratively in a private repo:

<iframe src="https://www.loom.com/embed/54c9f65e05494b00b6aa1bb9e0bbe7ab" style="width: 100%; height: 400px;"></iframe>

## Importing or creating projects with OpenModels API

You can create new OpenModels projects programmatically from any data source using our [POST API](/platform/api/post-api) or the [openProject](/platform/api/javascript-sdk#openproject) and [embedProject](/platform/api/javascript-sdk#embedproject) methods in our [JavaScript SDK](/platform/api/javascript-sdk).
