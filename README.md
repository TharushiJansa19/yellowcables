# 🚀 YellowCables – Official Company Website  

<p align="center">
  <img src="./assets/header.svg" alt="YellowCables Header" />
</p>

<p align="center">
  <b>Modern Engineering + Digital Solutions Platform</b><br/>
  Built with React, TypeScript & Tailwind CSS
</p>

---

## 🛡 Tech Stack

<p align="left">

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility--First-38bdf8?logo=tailwindcss)
![Lucide](https://img.shields.io/badge/Lucide-Icons-black)
![Formspree](https://img.shields.io/badge/Form-Formspree-orange)
![Static Hosting](https://img.shields.io/badge/Deployment-Static-green)

</p>

---

## 🌐 Live Preview

> Add your live domain here once deployed

```
https://yellowcables.com
```

---

## 📸 Website Preview

> Add a screenshot inside your repo:
> `/public/preview.png`

Then uncomment this line:

```markdown
![YellowCables Preview](./public/preview.png)
```

---

## 🎯 Project Overview

YellowCables is a technology-driven engineering company delivering:

- 🌍 Website Development  
- 🎨 Website Design  
- 🔄 Website Updates  
- 💻 Software Development (Web & Mobile)  
- ⚙️ Mechatronic Designs  
- 🧩 3D Printing Design & Production  

This repository contains the official company website built using a modern component-based architecture.

---

## ✨ Key Features

### 🔹 Services Section
- Data-driven service cards
- Clean technical UI
- Reusable components

### 🔹 Projects Portfolio
- Image-based project cards
- Technology tag system
- External case study links

### 🔹 Meet the Team
- Profile cards
- Skill tags
- Social links (LinkedIn / GitHub)

### 🔹 Booking System
- Service dropdown selection
- Email integration via Formspree
- Success & error state handling
- Fully static-host compatible

---

## 📂 Architecture

```
src/
 ├── components/
 │   ├── layout/
 │   └── ui/
 ├── sections/
 ├── pages/
 ├── data/
 ├── App.tsx
 └── main.tsx
```

✔ Modular  
✔ Reusable Components  
✔ Data-Driven Sections  
✔ Clean Separation of Concerns  

---

## 🎨 Design System

Custom Tailwind theme:

- Dark engineering base palette
- Yellow accent highlights `#ffd600`
- Glow shadow effects
- Technical minimal UI style

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build Production Version
```bash
npm run build
```

---

## 🌍 Deployment (Static Hosting)

Upload `/dist` folder to:

```
public_html/
```

### Apache Routing Fix (.htaccess)

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

---

## 📧 Booking Form Configuration

This project uses **Formspree**.

Update in:

```
src/sections/Booking.tsx
```

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

---

## 🔮 Roadmap

- Service auto-prefill logic
- Advanced animation (Framer Motion)
- Case study modal pages
- SEO optimization (meta + Open Graph)
- CMS integration (future phase)

---

## 👨‍💻 Author

**Tharushika Jansa**  
Software Engineer & Full-Stack Developer  

<!-- [LinkedIn](https://www.linkedin.com/) • [GitHub](https://github.com/) -->

---

## 📜 License

MIT License

---

<p align="center">
⭐ If you like this project, consider starring the repository.
</p>