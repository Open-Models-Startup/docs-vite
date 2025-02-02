---
title: &title POST API
description: &description Create new projects by POSTing the desired project data from a form. This method is useful when you don't or can't use our JavaScript SDK.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://openmodels.wiki/img/og/post-api.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# Creating a project with a POST request

Create new projects by POSTing the desired project data from a form. This method is useful when you don't or can't use our JavaScript SDK.

This page will guide you through the setup. You can also take a look at [the demo project](#demo) at the end.

## Required Form Fields

```
project[title] = Project title
project[description] = Project description
project[files][FILE_PATH] = Contents of file, specify file path as key
project[files][ANOTHER_FILE_PATH] = Contents of file, specify file path as key
project[dependencies] = JSON string of dependencies field from package.json
project[template] = Can be one of: typescript, angular-cli, create-react-app, javascript
```

:::warning
Binary files (such as archives or non-SVG images) are not supported for the dynamically created projects.
:::

## Example Payload

Below is an example HTML form that generates a project from the RxJS docs using the `typescript` template:

```html
<html lang="en">
<head></head>
<body>

<form id="mainForm" method="post" action="https://openmodels.wiki/run" target="_self">
<input type="hidden" name="project[files][index.ts]" value="import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';

var button = document.querySelector('button');
Observable.fromEvent(button, 'click')
  .scan((count: number) => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
">
<input type="hidden" name="project[files][index.html]" value="<button>Click Me</button>
">
<input type="hidden" name="project[description]" value="RxJS Example">
<input type="hidden" name="project[dependencies]" value="{&quot;rxjs&quot;:&quot;5.5.6&quot;}">
<input type="hidden" name="project[template]" value="typescript">
<input type="hidden" name="project[settings]" value="{&quot;compile&quot;:{&quot;clearConsole&quot;:false}}">
</form>
<script>document.getElementById("mainForm").submit();</script>

</body></html>
```

## Demo

:::tip DEMO
Check this [demo of using POST API to create a project](https://openmodels.wiki/edit/sdk-create-via-post-api).
:::
