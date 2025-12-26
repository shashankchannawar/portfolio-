# Portfolio Website

https://portfolio-shashank-liard.vercel.app/


A modern, responsive portfolio website showcasing projects, skills, and professional information.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. That's it! No build process required - it's pure HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
PORTFOLIO/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── projects-data.js    # Projects data (optional, for organization)
├── README.md           # This file
│
├── images/             # 📸 ADD YOUR PHOTOS HERE
│   └── profile-photo.jpg  # Your profile picture
│
└── projects/           # 🖼️ ADD PROJECT IMAGES HERE
    ├── rail-madad.jpg
    ├── tongue-disease.jpg
    └── (add more project images)
```

## 📸 Where to Add Photos

### Profile Photo
1. **Location**: `images/profile-photo.jpg`
2. **Format**: JPG or PNG
3. **Recommended Size**: 400x400px or larger (square format works best)
4. **Tips**: 
   - Use a professional headshot
   - Ensure good lighting
   - Keep background simple

### Project Images
1. **Location**: `projects/` folder
2. **Naming**: Use descriptive names like:
   - `rail-madad.jpg`
   - `tongue-disease.jpg`
   - `project-name.jpg`
3. **Recommended Size**: 800x600px or larger (landscape format)
4. **Tips**:
   - Use screenshots of your projects
   - Show the main interface/feature
   - Keep images clear and professional

## 🎨 How to Add Projects

### Method 1: Edit `script.js` (Recommended)

Open `script.js` and find the `projectsData` array. Add your projects like this:

```javascript
const projectsData = [
    {
        title: "Your Project Title",
        description: "A detailed description of what your project does and the technologies you used.",
        image: "projects/your-image.jpg",  // Image from projects folder
        liveLink: "https://your-live-project.com",  // Live demo URL (or "#" if none)
        githubLink: "https://github.com/yourusername/repo",  // GitHub URL (or "#" if private)
        tags: ["Python", "React", "MongoDB"]  // Technologies used
    },
    // Add more projects...
];
```

### Method 2: Use `projects-data.js`

1. Edit `projects-data.js` with your project information
2. In `script.js`, replace the `projectsData` array with:
   ```javascript
   // Import from projects-data.js (you'll need to modify script.js)
   ```

## ✏️ Customization Guide

### Update Personal Information

1. **Name & Title**: Edit the hero section in `index.html` (lines 40-48)
2. **About Section**: Update the about text in `index.html` (lines 76-85)
3. **Contact Info**: Update contact details in `index.html` (lines 186-206)
4. **Social Links**: Update LinkedIn, GitHub links in `index.html` (line 54-56)

### Update Skills

Edit the skills section in `index.html` (lines 109-143) to match your expertise.

### Change Colors

Edit the CSS variables in `styles.css` (lines 5-12):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #8b5cf6;    /* Secondary color */
    /* ... more colors */
}
```

### Update Statistics

Edit the stats in the About section of `index.html` (lines 86-98).

## 🔗 Adding Social Media Links

In `index.html`, find the social links section (around line 53) and update:

```html
<a href="https://www.linkedin.com/in/your-profile" target="_blank">...</a>
<a href="https://github.com/your-username" target="_blank">...</a>
```

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional, you can:

1. **Use EmailJS** (Free):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their setup guide
   - Update the form submission in `script.js`

2. **Use Formspree** (Free):
   - Sign up at [Formspree](https://formspree.io/)
   - Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form tag

3. **Backend Integration**:
   - Connect to your own backend API
   - Update the form submission handler in `script.js`

## 🎯 Current Projects Included

Based on your resume, the following projects are pre-configured:

1. **Enhancing Rail Madad with AI-Powered Complaint Management**
   - Image: `projects/rail-madad.png`
   - Tags: Python, MongoDB, AI, Chatbot, Machine Learning

2. **AI-powered Tongue Disease Detection using CNNs**
   - Image: `projects/tongue-disease.jpg`
   - Tags: Python, CNN, Deep Learning, TensorFlow, Medical AI

## 📝 To-Do Checklist

- [ ] Add your profile photo to `images/profile-photo.jpg`
- [ ] Add project images to `projects/` folder
- [ ] Update LinkedIn and GitHub links
- [ ] Add more projects if you have them
- [ ] Update project descriptions with more details
- [ ] Set up contact form (EmailJS/Formspree)
- [ ] Test on different devices (mobile, tablet, desktop)
- [ ] Deploy to GitHub Pages, Netlify, or Vercel

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live instantly!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Support

If you need help customizing your portfolio, feel free to:
- Check the code comments
- Review the structure in this README
- Modify the code to fit your needs

---

**Good luck with your portfolio! 🚀**

