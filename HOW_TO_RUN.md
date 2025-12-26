# 🚀 How to Run Your Portfolio Website

## Method 1: Direct Open (Easiest) ⭐

1. Navigate to your `PORTFOLIO` folder
2. **Double-click** `index.html`
3. It will open in your default web browser!

**That's it!** No installation needed.

---

## Method 2: Using a Local Server (Recommended for Development)

### Option A: Python Server (You have Python installed!)

**Windows PowerShell:**
```powershell
python -m http.server 8000
```

**Or use the provided script:**
- Double-click `start-server.ps1` (PowerShell)
- Or double-click `start-server.bat` (Command Prompt)

Then open: **http://localhost:8000**

### Option B: Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option C: Using Node.js (if installed)

```bash
npx http-server -p 8000
```

Then open: **http://localhost:8000**

---

## Method 3: Quick Test

Just **right-click** on `index.html` → **Open with** → Choose your browser (Chrome, Firefox, Edge, etc.)

---

## 🌐 Deploy Online (Make it Live)

### GitHub Pages (Free & Easy)

1. Create a new repository on GitHub
2. Upload all your files
3. Go to Settings → Pages
4. Select your branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify (Drag & Drop)

1. Go to https://app.netlify.com/drop
2. Drag your entire `PORTFOLIO` folder
3. Done! Your site is live instantly!

### Vercel

```bash
npm i -g vercel
vercel
```

---

## ✅ Quick Checklist

- [ ] Open `index.html` in browser
- [ ] Check all sections load correctly
- [ ] Test on mobile (resize browser window)
- [ ] Verify all links work
- [ ] Add your photos to `images/` and `projects/` folders
- [ ] Deploy when ready!

---

## 🐛 Troubleshooting

**Images not showing?**
- Make sure images are in the correct folders:
  - Profile photo: `images/profile-photo.jpg`
  - Projects: `projects/rail-madad.jpg`, etc.

**Links not working?**
- Check that URLs are correct in `index.html`
- Make sure you're using `http://localhost:8000` if using a server

**Styling looks off?**
- Make sure `styles.css` is in the same folder as `index.html`
- Check browser console for errors (F12)

---

**Need help?** Check `README.md` for more details!

