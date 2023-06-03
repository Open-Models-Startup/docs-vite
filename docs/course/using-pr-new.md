---
title: &title Using pr.new
description: &description This page covers using pr.new to open, view, and contribute to any project through our course IDE or Web Publisher.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://qixlab.com/img/og/using-pr_new.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

This page covers using pr.new to open, view, and contribute to any project through our course IDE or Web Publisher.

Built to make open source contributions as easy as possible. 🥰

## What is pr.new?

<!--@include: ./parts/pr-new.md-->

## How does pr.new work?

Behind the scenes, this short URL will choose different tools in different scenarios:

<!-- TODO: graph -->

### Opening a GitHub repository

To open a GitHub repository with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/Qi-X-Lab/docs-home" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/Qi-X-Lab/docs-home</a>

You will be redirected to [course IDE](./working-in-course-ide) where you can work to [submit a PR](./working-in-course-ide#submitting-a-pr) or just explore the codebase.

### Opening a specific branch

To inspect a branch with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <b>pr.new/</b>github.com/Qi-X-Lab/docs-home/tree/BRANCH-NAME

You will be redirected to [course IDE](./working-in-course-ide) where you can explore the code, continue the work, or investigate the issue.

### Reviewing a PR

To review a PR with pr.new, visit the submitted pull request on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/Qi-X-Lab/docs-home/pull/33" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/Qi-X-Lab/docs-home/pull/33</a>

You will be redirected to [course IDE](./working-in-course-ide) in the ["PR review mode"](./working-in-course-ide#reviewing-a-pr-with-course-ide) where you will see diffs. You can switch to the standard file view by choosing the "file" icon in the left vertical nav bar.

## "Open in course" button

To help your users quickly spin up the entire environment with your project, you can add a CTA (call-to-action) button on your website or in the README file with any of the above pr.new links.

::: tip
You can either host the images on your servers or directly use our image URLs.
:::

In order to display the button in a **Markdown file**, use the following code - remember to update the last URL with the project repository path:

If the user is logged in at GitHub and Qi X Lab (in beta), course IDE will open up. No further configuration is needed.

## Opening a single file

To edit a single file with pr.new, visit it in the GitHub repository and click the "Edit" icon (a pencil). Now, in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/Qi-X-Lab/docs-home/edit/main/docs/home/user-guide/what-is-qixlab.md" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/Qi-X-Lab/docs-home/edit/main/docs/home/user-guide/what-is-qixlab.md</a>

You will be redirected to [Web Publisher](./content-updates-with-web-publisher) for a more pleasant editing experience. If you prefer to work in a full environment, click on the "Open in IDE" button and you will be redirected to [course IDE](./working-in-course-ide).
