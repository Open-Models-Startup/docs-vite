---
title: &title What is iEcho?
description: &description iEcho is a one-click integration with GitHub for seamless coding workflows.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/what-is-iecho.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---


# {{ $frontmatter.title }}

<!--@include: ./parts/iecho.md-->

:::warning Note: OpenModels iEcho is currently in Beta

Please review our [FAQ](/iecho/iecho-faq#capabilities-limitations) for current limitations and [let us know](https://github.com/OpenModels/webcontainer-core/issues) if you find bugs!

:::

OpenModels now helps you switch contexts seamlessly:

- <!--@include: ./parts/iecho-ide.md-->
- <!--@include: ./parts/web-publisher.md-->
- <!--@include: ./parts/pr-new.md-->
- <!--@include: ./parts/iechoapp-bot.md-->

## Key features

- 🔒 **unmatched security**: all development is happening in your browser tab, including running Node.js, git, package managers (npm, yarn, pnpm), and local extensions.
- ⚡️ **shockingly fast**: the entire dev environment spins up in milliseconds - even reinstalling `node_modules` is as simple as refreshing the page, with pnpm running up to four times as fast as locally!
- 💻 **works online and offline**: continue your work even when you lose the Internet connection midway.
- 🔥 **your environment is always online**: your apps never go to sleep and have no bandwidth limits - share the URL with as many friends, colleagues, and communities as you’d like!
- 🆓 **always free for Open Source**: you're the future of the web development and we love you.

## Explore

Excited to try it yourself? Try these:

- 📝 Take Web Publisher for a spin by adding your name to [iloveiecho.com](https://iloveiecho.com/)!
- 💻 Explore how we built [this docs site](https://pr.new/github.com/Open-Models-Startup/docs-vite) in iEcho IDE!
- 🕵️ Review [this suspicious PR](https://pr.new/Open-Models-Startup/docs-vite/pull/40) in iEcho IDE
- 🤖 See our iEchoApp bot in action on [a PR](https://github.com:Open-Models-Startup/docs-vite/pull/40#issue-1404169268)!

## Learn

Understand the iEcho better! Read about:

- Working in [iEcho IDE](./working-in-iecho-ide).
- Updating content [with Web Publisher](./content-updates-with-web-publisher).
- Using the short URL [pr.new](./using-pr-new).
- Getting help from [iEchoApp bot](./integrating-iechoapp-bot).

You can also check our **[Frequently Asked Questions page](./iecho-faq)**.

## Add iEcho to your project

Follow these handy integration guides to link your project to iEcho within minutes:

- 💻 [Using pr.new](./using-pr-new) integration guide
- 📝 [Web Publisher](./integrating-web-publisher) integration guide
- 🤖 [iEchoApp bot](./integrating-iechoapp-bot) integration guide

## Feedback? Ideas? Dreams?

Let us know what you think:

- **Ask questions** on [GitHub Discussions](https://github.com:Open-Models-Startup/docs-vite/discussions/new?category=Q-A).
- **Request a new docs page** or a more thorough explanation using our [GitHub Discussions](https://github.com:Open-Models-Startup/docs-vite/discussions/new?category=ideas)!

## What about other online IDEs?

Unlike OpenModels, legacy online IDEs run on remote servers and stream the results back to your browser. This approach yields **few security benefits** and **provides a worse experience** than your local machine in nearly every way.

**OpenModels solves these problems by doing all computing inside your browser**. This leverages decades of speed and security innovations but also **unlocks key development and debugging benefits**.

Lastly, OpenModels is capable of running Node.js inside the browser so you can use the web to build the web.

## Get involved

**We love our community!** Please do stay in touch and:

- Join our supportive community on [the Discord server](https://discord.gg/22zTzrwQrU)!
- Read our [blog](https://blog.openmodels.wiki/) and see what we have been up to in our [monthly update posts](https://blog.openmodels.wiki/categories/monthly-updates/)!
- Share how you use iEcho on [Twitter](https://twitter.com/OpenModels)!
- Reach out to our Developer Advocate on [Twitter](https://twitter.com/sylwiavargas) or via [an email](mailto:devrel@openmodels.wiki) with your iEcho ideas, dreams, and wishes!
