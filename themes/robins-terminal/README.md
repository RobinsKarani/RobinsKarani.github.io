# robins-terminal

A nerd terminal-style Hugo theme. Dark, monospaced, fast.

```
robins-terminal/
├── archetypes/
│   └── default.md          ← template for new posts
├── layouts/
│   ├── _default/
│   │   ├── baseof.html     ← base HTML wrapper (every page)
│   │   ├── single.html     ← individual blog post
│   │   └── list.html       ← tag/archive listing
│   ├── partials/
│   │   ├── head.html       ← <head> meta + fonts + CSS
│   │   ├── nav.html        ← top navigation bar
│   │   ├── footer.html     ← bottom footer
│   │   └── post-meta.html  ← date + tags + read time
│   ├── tags/
│   │   └── list.html       ← tags cloud page
│   ├── 404.html            ← custom 404
│   └── index.html          ← home / blog list
├── static/
│   ├── css/style.css       ← all styles (edit here)
│   └── js/main.js          ← theme toggle + nav
└── theme.toml
```

---

## Install

```bash
# Inside your robins_blog folder:
cp -r robins-terminal/ themes/robins-terminal/

# Replace your hugo.toml with the example:
cp themes/robins-terminal/hugo.toml.example hugo.toml
```

---

## Write a post

```bash
hugo new content/posts/my-post-title.md
```

```markdown
---
title: "My Post Title"
date: 2026-03-02
tags: ["hardware", "asic"]
description: "One line summary shown on the blog list"
cover: "/images/my-post/cover.jpg"   # optional
draft: false
---

Your content here. Use normal Markdown.

## Section heading

![alt text](/images/my-post/my-image.png)
*Caption goes here as italic text*
```

Drop images in `static/images/your-post/` and reference as `/images/your-post/file.png`.

---

## Customise colours

Open `static/css/style.css` and edit the `:root` block at the top:

```css
:root {
  --accent:  #f78166;   /* orange-red  — post titles      */
  --accent2: #79c0ff;   /* blue        — section headings */
  --accent3: #56d364;   /* green       — code, keys       */
  --accent4: #d2a8ff;   /* purple      — language labels  */
}
```

---

## Deploy to GitHub Pages

```bash
# Build
hugo

# Push public/ to GitHub
cd public
git init
git add .
git commit -m "deploy"
git remote add origin https://github.com/robinskarani/robinskarani.github.io.git
git push --force origin main
```

Then: **GitHub → Settings → Pages → Deploy from branch → main → root → Save**
