# Ferdinand Milowa — Developer Portfolio

A dark, futuristic React portfolio built to showcase skills, projects, and experience.

---

## 🚀 Local Development

### Prerequisites
- Node.js v18+ installed ([download here](https://nodejs.org))
- A GitHub account

### Run locally
```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
```
The site opens at `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it `portfolio` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Connect your local project to GitHub
Open a terminal in the project folder and run:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/ferdinandmillowa/portfolio.git
git push -u origin main
```
> Replace `ferdinandmillowa` with your actual GitHub username if different.

### Step 3 — Deploy to GitHub Pages
```bash
npm run deploy
```
This builds the app and pushes it to a `gh-pages` branch automatically.

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Branch**, select `gh-pages` → `/ (root)`
4. Click **Save**

### Step 5 — Visit your live site!
After 1–2 minutes, your portfolio will be live at:
```
https://ferdinandmillowa.github.io/portfolio
```

---

## ✏️ Updating Your Portfolio

### Add a real project
Open `src/sections/Projects.jsx` and edit the `projects` array:
```js
{
  num: 'PROJECT_05',
  title: 'Your Project Name',
  desc: 'What it does and why it matters.',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  status: 'Personal Project',  // or 'Open Source', 'Freelance', etc.
}
```

### Update experience
Edit `src/sections/Experience.jsx` → the `experiences` array.

### Change contact details
Edit `src/sections/Contact.jsx` → the `contactLinks` array.

### Re-deploy after changes
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 📁 Project Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

Built by Ferdinand Raymond Milowa — Blantyre, Malawi 🇲🇼
