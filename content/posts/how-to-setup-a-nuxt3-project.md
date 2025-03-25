---
title: "How to setup a Nuxt3 project: A Beginner's Guide"
date: 20th March, 2025
duration: 15m
tags: [nuxt, setup]
---

Nuxt.js has revolutionized Vue.js development with server-side rendering, static site generation, and powerful tooling.
With Nuxt 3’s release, the framework is faster and more modular than ever. Follow this streamlined guide to launch your first project in minutes.

## 🛠️ Prerequisites
Before diving in, ensure your system has:

- Node.js v18 or newer

- A package manager (**npm**, **yarn**, or **pnpm**)

## 🚀 Getting Started

### 1. Create a New Project

Open the terminal and run

```bash
npx nuxi init <project-name>
```

Replace `project-name` with your preferred folder name (e.g., my-nuxt-app)
and follow the prompts.

The necessary dependencies will be installed and the project structure will be created.

### 2. Start the Development Server

Navigate to the project directory 

```bash
cd <project-name>
```

and run

```bash
npm run dev 

```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```


The development server will start, and you can open your browser to access the application.

![Nuxt Welcome Page](/postsImages/nuxt-welcome-page.png "Nuxt Welcome Page")

## 🚀 Next Steps

Now that you have a Nuxt 3 project up and running, you can begin your development journey.

### 1. Create your first page

Add `pages/index.vue` with:

```vue
<template>
    <div>
        <h1>Welcome to Nuxt 3</h1>
    </div>
</template>
```

### 2. Deploy your app

Build for production

```bash
npm run build
```

Host on platforms like Vercel or Netlify,


### 3. Explore Nuxt 3 Modules

Nuxt 3 comes with a wide range of modules to extend your project's functionality. You can find them in the [Nuxt 3 Module Directory](https://nuxt.com/modules).

With Nuxt 3, you’re equipped to build anything from blogs to full-stack apps. Happy coding! 🎉

Got stuck? Reach out to the vibrant [Nuxt community](https://nuxt.com/docs/community/getting-help)for support.