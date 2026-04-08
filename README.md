# Ravik Painting Ltd. — Website

Professional painting company website for Vancouver & Burnaby.
Contact form backend included.

## Deploy Steps

### 1. Install Node.js
- Go to https://nodejs.org → download LTS → install
- Close and reopen Command Prompt after installing

### 2. Install dependencies
```
cd ravik-painting-site
npm install
```

### 3. Test locally
```
npm run dev
```
Open http://localhost:3000

### 4. Install Git (if not installed)
- https://git-scm.com/downloads → install
- Close and reopen Command Prompt

### 5. Create GitHub repo
- Go to https://github.com → New repository → name it `ravik-painting-site`
- Keep public, don't check any boxes

### 6. Push code
```
git init
git add .
git commit -m "Ravik Painting site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ravik-painting-site.git
git push -u origin main
```

### 7. Deploy on Vercel
- https://vercel.com → Sign up with GitHub
- Add New → Project → Import repo → Deploy
- Live in 1-2 minutes!

### 8. Custom domain (optional)
- Buy domain from https://namecheap.com
- Vercel → Settings → Domains → Add → follow DNS instructions
