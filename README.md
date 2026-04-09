<div align="center">

# 🍔 Let's Eat Burger
### Local Burger Restaurant — React Web Application

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![MUI](https://img.shields.io/badge/MUI-Icons-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)

[Overview](#-overview) ·
[Features](#-features) ·
[Pages](#-pages) ·
[Technologies](#-technologies) ·
[Setup](#-setup) ·
[Project Structure](#-project-structure)

</div>

---

## 📌 Overview

**Let's Eat Burger** is a modern full-page burger restaurant web application built with React. Users can browse the menu, learn about the restaurant, and contact the restaurant through a contact form.

> 🎯 **Goal:** Practice multi-page navigation with React Router, component-based architecture, and dynamic menu rendering.

---

## ✨ Features

- 🧭 **React Router v6** for 4-page full SPA navigation  
- 🍔 **Dynamic Menu** — 12 burger types easily managed via `Data.js`  
- 📋 **Contact Form** — Name, email, and message fields  
- 📱 **Social Media Links** — Footer with Facebook, Instagram, and X (Twitter) icons (MUI)  
- 🖼️ **Hero Banner** — Fullscreen background images for homepage and pages  
- 🔗 **Order Redirect** — Homepage button redirects directly to the menu page  

---

## 📄 Pages

| Page | Route | Description |
|-------|-------|-------------|
| Homepage | `/` | Hero banner + "Order Now" button |
| Menu | `/menu` | 12 burger types displayed in dynamic cards |
| About | `/about` | Restaurant introduction banner and description |
| Contact | `/contact` | Contact form (name, email, message) |

---

## 🍔 Menu Items

12 burgers managed via `src/helpers/Data.js`:

| # | Burger | Price |
|---|--------|-------|
| 1 | Cheeseburger | 300 ₺ |
| 2 | Spicy Chicken | 270 ₺ |
| 3 | BBQ Burger | 350 ₺ |
| 4 | Mushroom Burger | 320 ₺ |
| 5 | Vegetarian Burger | 250 ₺ |
| 6 | Double Patty | 400 ₺ |
| 7 | Fish Burger | 280 ₺ |
| 8 | Greek Burger | 330 ₺ |
| 9 | Buffalo Burger | 290 ₺ |
| 10 | Teriyaki Burger | 310 ₺ |
| 11 | Classic Burger | 260 ₺ |
| 12 | Breakfast Burger | 340 ₺ |

> To add a new product, simply edit the `src/helpers/Data.js` file.

---

## 🛠 Technologies

| Category | Technology |
|----------|-----------|
| UI Framework | React 18 |
| Routing | React Router DOM v6 |
| Icons | MUI Icons (Facebook, Instagram, X) |
| Styling | CSS3 (component-based separate files) |
| Bootstrapping | Create React App |
| Performance | Web Vitals |

---

## 🚀 Setup

### Requirements
- Node.js 16 or higher  
- npm or yarn  

### 1 — Clone the repo

```bash
git clone https://github.com/MehmetErtass/Burger_Project.git
cd Burger_Project
```

### 2 — Install dependencies
 
```bash
npm install
```
 
### 3 — Start the application
 
```bash
npm start
```
 
> The app will open at **http://localhost:3000** .
 
### 4 — Create a production build
 
```bash
npm run build
```

---

 ## 📁 Project Structure
 
```
Burger_Project/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                  # Images (logo, banner, burger)
│   │   ├── burgerlogo.png
│   │   ├── banneryeni.jpg
│   │   ├── banner.png
│   │   └── burger.jpg
│   │
│   ├── components/              # Page and UI components
│   │   ├── Navbar.js            # Logo + navigation links
│   │   ├── Footer.js            # Social media icons + copyright
│   │   ├── Home.js              # Hero banner + order button
│   │   ├── Menu.js              # Menu list rendered from Data.js
│   │   ├── MenuItem.js          # Single menu card component
│   │   ├── About.js             # About page
│   │   └── Contact.js           # Contact form page
│   │
│   ├── helpers/
│   │   └── Data.js              # All burger data (name, ingredients, price)
│   │
│   ├── styles/                  # Component-based CSS files
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Menu.css
│   │   ├── About.css
│   │   └── Contact.css
│   │
│   ├── App.js                   # Route definitions
│   ├── App.css
│   ├── index.js                 # ReactDOM entry point
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🔮 Development Ideas
 
- [ ] Order form and payment step
- [ ] Search and filter (vegetarian, chicken, fish, etc.)
- [ ] Backend integration (Node.js / Firebase)
- [ ] Mobile-friendly hamburger menu (responsive Navbar)
- [ ] Deploy live on Vercel / Netlify
 
---
 
## 📄 License
 
This project is licensed under the MIT License. See LICENSE [LICENSE](LICENSE) .
 
---
 
<div align="center">
 
**Mehmet Ertaş**  
[![GitHub](https://img.shields.io/badge/GitHub-MehmetErtass-181717?style=flat-square&logo=github)](https://github.com/MehmetErtass)
 
*Made with ❤️ by Mehmet Ertaş*
 
</div>
