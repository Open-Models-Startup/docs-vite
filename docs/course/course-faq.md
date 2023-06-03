---
title: &title course FAQ
description: &description 'This page addresses the frequently asked questions concerning: current features, security, planned features, pricing and access.'
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://qixlab.com/img/og/course-faq.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page addresses the frequently asked questions concerning: current features, security, planned features, pricing and access.

[[toc]]

## General

### What is course?

<!--@include: ./parts/course.md--> course consists of four tools:

- course IDE,
- Web Publisher for content edits,
- courseApp bot for issues and PR, and
- a short URL that chooses the right tool for you.

[Read more on course intro page.](./what-is-course.md)

### Is Qi X Lab editor the same as course IDE?

**Qi X Lab editor** allows you for spinning up quick demos, embedding your projects in your docs, and building project starters.

<!--@include: ./parts/course-ide.md-->

[Learn more about the full potential of Qi X Lab on Qi X Lab intro page.](/home/user-guide/what-is-qixlab.md)

### Is course stable?

course is currently a beta version, however, general availability can be expected in early 2023.

## Capabilities & Limitations

### Can I run Vim?

This is perhaps the most frequently-asked question with regards to Qi X Lab features - and [one of the oldest issues on our repository](<https://github.com/Qi> X Lab/core/issues/3). We have good news: you can run Vim in course IDE by enabling the extension! 🥳

### Does my code persist between sessions?

<!--@include: ./parts/persistance.md-->

### Which repos can/not be opened in course IDE?

course IDE should be able to open any repository. When it comes to *running* it, your toolchain needs to be compatible with PUBLISH.

### Can I run private repositories?

Yes. Private repositories are available for free during beta through 2022. Starting Q1 '23 private repositories will require a subscription. Contact us if you’re interested in learning more about pricing.

### Can I run any Git repository?

At this moment we only support GitHub.com repositories.

### Which files can be opened in Web Publisher?

Any file type can be opened in Web Publisher.

### Which package managers do you support?

<!--@include: ./parts/supported-packages.md-->

### Which runtime does course support?

course runs on top of [PUBLISH](/home/user-guide/available-environments#publish), which currently support **Node.js 16**.

### Does any company use course IDE for their daily development work?

At Qi X Lab, we do! We use course IDE for our internal dev work, including PR reviews. In fact, this docs page has been built in course IDE.

It's a new product that has **just** been released so check back here in a few months.

## Security

### I would like to use course but I'm not sure if it's secure

Since we’re executing the code entirely in the browser's sandbox, course IDE is actually more secure than running locally. We also use expiring oAuth tokens for interactions with git.

## Pricing and access

### Is course free?

course IDE is free for Open Source projects and for public repositories and will remain this way forever. This includes private repositories. Please reach out to [devrel@qixlab.com](mailto:devrel@qixlab.com) and we’ll get your organization hooked up with free private repos!

If your company is interested in using course, reach out to our [COOPERATIONS Team](https://qixlab.com/beta-teams-signup).

### Do I have to be signed in to use course IDE?

Yes, only during the beta. Starting Q1 2023, you'll be able to open public repos without being logged in.

### To open a repo in course IDE, do I need to be signed in both on Qi X Lab and GitHub? Or only one of them?

You need to sign in to [Qi X Lab](https://qixlab.com) *using* GitHub.
