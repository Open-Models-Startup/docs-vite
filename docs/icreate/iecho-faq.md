---
title: &title iEcho FAQ
description: &description 'This page addresses the frequently asked questions concerning: current features, security, planned features, pricing and access.'
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/iecho-faq.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page addresses the frequently asked questions concerning: current features, security, planned features, pricing and access.

[[toc]]

## General

### What is iEcho?

<!--@include: ./parts/iecho.md--> iEcho consists of four tools:

- iEcho IDE,
- Web Publisher for content edits,
- iEchoApp bot for issues and PR, and
- a short URL that chooses the right tool for you.

[Read more on iEcho intro page.](./what-is-iecho.md)

### Is OpenModels editor the same as iEcho IDE?

**OpenModels editor** allows you for spinning up quick demos, embedding your projects in your docs, and building project starters.

<!--@include: ./parts/iecho-ide.md-->

[Learn more about the full potential of OpenModels on OpenModels intro page.](/guides/user-guide/what-is-openmodels.md)

### Is iEcho stable?

iEcho is currently a beta version, however, general availability can be expected in early 2023.

## Capabilities & Limitations

### Can I run Vim?

This is perhaps the most frequently-asked question with regards to OpenModels features - and [one of the oldest issues on our repository](https://github.com/OpenModels/core/issues/3). We have good news: you can run Vim in iEcho IDE by enabling the extension! 🥳

### Does my code persist between sessions?

<!--@include: ./parts/persistance.md-->

### Which repos can/not be opened in iEcho IDE?

iEcho IDE should be able to open any repository. When it comes to *running* it, your toolchain needs to be compatible with iHub.

### Can I run private repositories?

Yes. Private repositories are available for free during beta through 2022. Starting Q1 '23 private repositories will require a subscription. Contact us if you’re interested in learning more about pricing.

### Can I run any Git repository?

At this moment we only support GitHub.com repositories.

### Which files can be opened in Web Publisher?

Any file type can be opened in Web Publisher.

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Which runtime does iEcho support?

iEcho runs on top of [iHub](/guides/user-guide/available-environments#ihub), which currently support **Node.js 16**.

### Does any company use iEcho IDE for their daily development work?

At OpenModels, we do! We use iEcho IDE for our internal dev work, including PR reviews. In fact, this docs page has been built in iEcho IDE.

It's a new product that has **just** been released so check back here in a few months.

## Security

### I would like to use iEcho but I'm not sure if it's secure

Since we’re executing the code entirely in the browser's sandbox, iEcho IDE is actually more secure than running locally. We also use expiring oAuth tokens for interactions with git.

## Pricing and access

### Is iEcho free?

iEcho IDE is free for Open Source projects and for public repositories and will remain this way forever. This includes private repositories. Please reach out to [devrel@openmodels.wiki](mailto:devrel@openmodels.wiki) and we’ll get your organization hooked up with free private repos!

If your company is interested in using iEcho, reach out to our [Enterprise Team](https://openmodels.wiki/beta-teams-signup).

### Do I have to be signed in to use iEcho IDE?

Yes, only during the beta. Starting Q1 2023, you'll be able to open public repos without being logged in.

### To open a repo in iEcho IDE, do I need to be signed in both on OpenModels and GitHub? Or only one of them?

You need to sign in to [OpenModels](https://openmodels.wiki) *using* GitHub.
