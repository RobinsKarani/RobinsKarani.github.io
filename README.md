# Robins Blog

Write blog posts in Markdown under `content/`. Hugo renders those Markdown files into the generated site output in `public/`.

Do not edit files in `public/` directly. They are build artifacts and are ignored by Git.

## Writing A Post

Create a Markdown file under `content/`, for example:

```text
content/2026/05/my-new-post.md
```

Use front matter at the top:

```md
---
title: "My New Post"
date: 2026-05-24
tags: ["blog"]
draft: false
description: "Short summary for the blog list"
---

Write the post here in Markdown.
```

Markdown supports headings, links, images, tables, lists, and code blocks. Raw HTML can also be used inside Markdown when needed.

## Local Preview

```sh
hugo server
```

## Build

```sh
hugo --gc --minify
```

GitHub Pages builds and deploys the site from the Markdown content when changes are pushed to `main`.
