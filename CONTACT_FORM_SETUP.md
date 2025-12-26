# 📧 Free Contact Form Setup - Quick Guide

## ✅ Easiest Method: Formspree (Recommended)

### Step 1: Sign Up (2 minutes)
1. Go to **https://formspree.io/**
2. Click "Sign Up" (100% free!)
3. Use your email (where you want to receive messages)

### Step 2: Get Your Form ID (1 minute)
1. After signing in, click **"+ New Form"**
2. Name it: "Portfolio Contact"
3. **Copy your Form ID** (it looks like: `xkgjvwnz` or `1234567890`)

### Step 3: Update Your Website (30 seconds)
1. Open `index.html`
2. Find line 270 (the form tag):
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```html
   <form ... action="https://formspree.io/f/xkgjvwnz" ...>
   ```

### Step 4: Test It!
1. Open your website
2. Fill out and submit the contact form
3. Check your email - you'll receive the message! 🎉

---

## 🎯 What You Get (Free Plan)

- ✅ **50 submissions per month** (perfect for a portfolio!)
- ✅ Spam protection
- ✅ Email notifications
- ✅ No backend code needed
- ✅ Works instantly

---

## 🔄 Alternative: EmailJS (Also Free)

If you prefer EmailJS:

1. Sign up at **https://www.emailjs.com/**
2. Follow their quick start guide
3. Update `script.js` with your credentials

**Both work great - Formspree is simpler!**

---

## ❓ Troubleshooting

**Form not sending?**
- Check that you replaced `YOUR_FORM_ID` with your actual ID
- Verify your Formspree account is activated
- Check Formspree dashboard for any errors

**Not receiving emails?**
- Check spam folder
- Verify email in Formspree settings
- Check Formspree dashboard for submissions

---

**Need more help?** See detailed guide in `FORMRSPREE_SETUP.md`

