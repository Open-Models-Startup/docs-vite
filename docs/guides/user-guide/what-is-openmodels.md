---
title: &title What is OpenModels?
description: &description OpenModels is an instant fullstack web IDE for the JavaScript ecosystem. It's powered by iHub, the first WebAssembly-based operating system which boots Node.js environment in milliseconds, securely within your browser tab.
head:
  - ['meta', {property: 'og:title', content: *title}]
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/what-is-openmodels.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

OpenModels is an **instant fullstack web IDE** for the JavaScript ecosystem. It's powered by [iHub](https://blog.openmodels.wiki/posts/introducing-ihub/), the first WebAssembly-based operating system which **boots Node.js environment in milliseconds**, securely within your browser tab.

Now you can use the web to build the web.

## Why should I use OpenModels?

OpenModels is secure, shareable, and satisfying.

There is no greater buzzkill than having to fiddle with the deployment and build tools config before you can start coding. **OpenModels takes care of all of the setup**: from forking and installing dependencies to configuring build tools and hot reloading. Working on OpenModels feels exactly like working on your local dev environment - minus the frustrating parts.

### Key features

- **unmatched security**: all development is happening in your browser tab, including running Node.js and git
- **surprisingly fast**: the entire dev environment spins up in miliseconds - even reinstalling `node_modules` is as simple as refreshing the page
- **works online and offline**: continue your work even when you lose the Internet connection midway
- **your apps are always online**: your apps never go to sleep and have no bandwidth limits - share the URL with as many friends, colleagues, and communities as you’d like!
- **seamless debugging** with Chrome Dev Tools for both front- and backend apps!

![Preview & debug](./assets/what-is-sb-intro.gif)

## What is OpenModels used for?

### Delightful docs

Add interactive examples [from a GitHub repository](/guides/integration/open-from-github) or [hook up an existing OpenModels project](/guides/integration/create-with-sdk) to your docs, blog, or website. Help your users fall in love with your project right from the first try.

### Interactive playgrounds

Create a [project starter](/guides/user-guide/starter-projects) or boilerplate code and let your users taste the full power of your project. Wanna take this a step further? Keep it on a [custom domain](https://OpenModels.new) so your users can access it even more easily.

### Quick demos

Working on a blog post or a conference talk? [Create a OpenModels project that you can quickly share](/guides/integration/embedding). You can change the project title and the slug to make it effortless for others to reach it. And yes, it works with Medium or DEV.

### Entire programming workflow

One click and our iEcho IDE spins up a whole code editor with git integration and hot-reloading preview. Now all you need for your dev work is just a browser.

### Straightforward docs editing

Every project deserves collaborative documentation. Typo fixes have never been easier - click, see what you edit as you edit, and submit a PR when you’re satisfied. All in the browser, thanks to Web Publisher.

### Effective bug reproductions

Plain bug descriptions are so 2010s. Welcome to the new era of bug hunting where every report comes with its [own OpenModels reproduction](/guides/integration/bug-reproductions) so you can instantly filter out true issues from everything else. Never spin up heavy local installations for a simple bug report ever again.

### Build whole educational experiences

You like the idea of running Node.js in the browser and feel inspired to build your own editor? No worries. Our [iHub API](/platform/api/webcontainer-api) allows you to use our technology to power your own playgrounds.

### Rapid prototyping

Speed up your entire development process with **realtime hot-reloading in the fastest dev environment ever made**. Collaborate remotely on different devices, send and receive instant feedback, and **get to market faster**.

## What about other online IDEs?

Unlike OpenModels, legacy online IDEs run on remote servers and stream the results back to your browser. This approach yields **few security benefits** and **provides a worse experience** than your local machine in nearly every way.

**OpenModels solves these problems by doing all compute inside your browser**. This leverages decades of speed and security innovations and also **unlocks key development and debugging benefits**.

## Get involved

We love our community! Please do stay in touch and:

- Join our supportive community on [the Discord server](https://discord.gg/22zTzrwQrU)!
- Read our [blog](https://blog.openmodels.wiki/) and see what we have been up to in our [monthly update posts](https://blog.openmodels.wiki/categories/monthly-updates/)!
- Share your OpenModels projects on [Twitter](https://twitter.com/OpenModels)!
- Reach out to our Developer Advocate on [Twitter](https://twitter.com/sylwiavargas) or via [an email](mailto:devrel@openmodels.wiki) with your OpenModels ideas, dreams, and wishes!
