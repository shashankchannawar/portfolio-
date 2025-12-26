# 🎨 Company Logos Setup

The certification section uses logos from reliable CDN sources. If logos don't load, you have options:

## Current Setup

Logos are loaded from:
- **Oracle**: Wikipedia Commons CDN
- **Intel**: Wikipedia Commons CDN  
- **Accenture**: Wikipedia Commons CDN

Fallback sources are also included if the primary source fails.

## Option 1: Use Local Logo Files (Recommended)

For best performance and reliability:

1. **Download logos** from official brand guidelines:
   - Oracle: https://www.oracle.com/legal/brand-guidelines/
   - Intel: https://www.intel.com/content/www/us/en/company-overview/brand.html
   - Accenture: https://www.accenture.com/us-en/about/brand

2. **Save them** to `images/` folder:
   - `images/oracle-logo.png`
   - `images/intel-logo.png`
   - `images/accenture-logo.png`

3. **Update HTML** (around line 183, 190, 197):
   ```html
   <img src="images/oracle-logo.png" alt="Oracle Logo">
   <img src="images/intel-logo.png" alt="Intel Logo">
   <img src="images/accenture-logo.png" alt="Accenture Logo">
   ```

## Option 2: Keep Current CDN Sources

The current setup uses reliable CDN sources with fallbacks. If logos don't show:
- Check your internet connection
- Try refreshing the page
- Check browser console for errors

## Option 3: Use Text Placeholders

If logos continue to have issues, you can use company names as text (already included as fallback in the code).

---

**Current Status**: Logos should load from Wikipedia Commons CDN (very reliable source).

