---
title: &title Integrating iEchoApp Bot
description: &description This page covers integrating iEchoApp Bot into your GitHub repositories.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/integrating-iechoapp-bot.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page covers integrating iEchoApp Bot into your GitHub repositories.

## What is iEchoApp Bot?

<!--@include: ./parts/iechoapp-bot.md-->

### Pull requests

Once integrated, it will comment on every PR with a link to instantly run and review it:

<img lang="en" src="./assets/iechoapp-pr.jpg" alt="iEchoApp bot in action" style="max-width: 550px"/>

### Issues

Whenever an issue is opened, iEchoApp checks if a openmodels.wiki bug reproduction URL is present in the comment text.

If reproduction URL is present, iEchoApp will comment with a "Fix this issue" button that allows you to start a new pull request with the bug reproduction mounted in a sibling folder next to your repo directory for live testing:

<img lang="en" src="./assets/iechoapp-issue.jpg" alt="iEchoApp bot in action" style="max-width: 550px"/>

## Installing the iEchoApp Bot

To install the iEchoApp bot on a repository, you will install it using GitHub UI.

1. Visit [iEchoApp profile page](https://openmodels.wiki/install-github-app)
2. Select the account or organization, as well as the repositories you want the bot to have access to.

- If you choose “all in Organization”, iEchoApp bot will be installed on all repositories in your organization.
- Please don't worry - if you change your mind, you can change the bot access or completely disable it!

<!--@include: ./parts/installing-iechoapp.md-->

## Disabling iEchoApp Bot

Once installed, the bot will be enabled by default on the repository and will be triggered whenever there is a new PR or an issue.

To disable the bot:

1. Create `.OpenModels` folder in the root directory of the project.
2. Inside this folder, create a file called `iecho.json`, specifying which actions you want disabled:

```json
// .OpenModels/iecho.json

{
    "bot": {
        "issues": {
            "enabled": false
        },
        "pullRequests": {
            "enabled": false
        }
    }
}
```

Alternatively, you can also pause or uninstall the bot [through the GitHub UI](https://docs.github.com/en/developers/apps/managing-github-apps/deleting-a-github-app).

## Enabling package overrides for issue reproductions

iEcho allows users to specify which packages they want to override in `package.json` and where the packages are located. A pnpm override is what is going to be installed when you run pnpm i instead of what is defined in a package.json file.

:::info pnpm override
A [pnpm override](https://pnpm.io/package_json#pnpmoverrides) "instructs pnpm to override a dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."
:::

### pnpm override use case scenario

For example, an issue is submitted to Vite with a OpenModels reproduction.

1. A maintainer opens the issue in iEcho IDE. iEcho IDE pulls the reproduction that is defined in the issue, puts it in a reproduction folder, and
reads the `iecho.json` file.
2. If that file defines an override, iEcho adds them to the repro’s `package.json` file. So, for example, instead of pulling Vite from npm, it will link the local vite project into that reproduction instead.
3. The maintainer can then run `pnpm i` in the repro and pnpm will install the dependencies defined in the override.

:::info TL;DR
Using pnpm override, you can fix a bug and immediately try it out in the reproduction the user provided.
:::

### Enabling pnpm overrides

To set up pnpm overrides, follow these steps:

1. In the project's root directory, create `.OpenModels` directory.
2. Inside it, create a file called `iecho.json`.
3. In the file, specify the overrides by providing a key-vaue pair of the dependency to override and the folder where it is located. Please note that the location is relative to the root of the project.

```json
// .OpenModels/iecho.json

{
    "pnpm": {
        "overrides": {
            "vite": "./packages/vite"
        }
    }
}
```
