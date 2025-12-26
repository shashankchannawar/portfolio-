# 📧 How to Set Up Free Email Contact Form with Formspree

Formspree is a free service that lets you receive form submissions directly to your email without any backend code!

## ✅ Quick Setup (5 minutes)

### Step 1: Sign Up (Free)
1. Go to https://formspree.io/
2. Click "Sign Up" (it's free!)
3. Sign up with your email (the one where you want to receive messages)

### Step 2: Create a Form
1. After signing in, click "New Form"
2. Give it a name like "Portfolio Contact Form"
3. Copy your **Form ID** (it looks like: `xkgjvwnz` or `1234567890`)

### Step 3: Update Your HTML
1. Open `index.html`
2. Find this line (around line 258):
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/xkgjvwnz" method="POST">
   ```

### Step 4: Test It!
1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email - you should receive the message!

## 🎯 What Happens

- User fills out the form on your website
- Formspree receives the submission
- You get an email with all the form details
- User sees a confirmation page (customizable)

## 🔒 Free Plan Limits

- **50 submissions per month** (plenty for a portfolio!)
- Spam protection included
- Email notifications
- Custom redirect page

## 💡 Pro Tips

### Customize the Redirect Page
After form submission, you can redirect users to a "Thank You" page:

1. In Formspree dashboard, go to your form settings
2. Set up a custom redirect URL:
   ```
   https://yourwebsite.com/#contact?submitted=true
   ```
3. Or use the hidden field in the form (already added):
   ```html
   <input type="hidden" name="_next" value="#contact">
   ```

### Change Email Subject
The form already includes:
```html
<input type="hidden" name="_subject" value="New Contact Form Message from Portfolio">
```

### Add reCAPTCHA (Optional)
If you get spam, you can add Google reCAPTCHA in Formspree settings.

## 🆚 Alternative: EmailJS (Also Free)

If you prefer EmailJS instead:

1. Sign up at https://www.emailjs.com/
2. Follow their setup guide
3. Update `script.js` with your EmailJS credentials

**Both are free and work great! Formspree is simpler to set up.**

---

**Need help?** Check Formspree documentation: https://help.formspree.io/

