[README.md](https://github.com/user-attachments/files/25065963/README.md)
# Agave Welding Website - How to Make Changes

## 📁 Your Files
- **index.html** - Homepage
- **about.html** - About Us page
- **portfolio.html** - Portfolio page  
- **contact.html** - Contact page
- **styles.css** - ALL styling (colors, fonts, spacing)
- **script.js** - Navigation menu code

---

## 🎨 Common Changes

### Change Colors
Open **styles.css** and edit the `:root` section (lines 7-16):

```css
:root {
    --primary: #2A6558;        /* Main green color */
    --accent: #DFB46A;         /* Gold/tan color */
    --bg-cream: #F6E0AE;       /* Cream background */
    --dark: #1A1F26;           /* Dark text */
}
```

### Change Fonts
The website uses **Helvetica/Arial** for body text and **Georgia** for headings.
To change, edit line 19 in **styles.css**:

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

---

## 📝 Update Footer on ALL Pages at Once

**IMPORTANT:** The footer appears in all 4 HTML files. To update it everywhere:

### Option 1: Find & Replace (Recommended)
1. Open your code editor (VS Code, Sublime, etc.)
2. Use "Find in Files" or "Find & Replace in Project"
3. Search for the text you want to change
4. Replace across all files at once

Example: To change phone number everywhere:
- Find: `(425) 446-1638`
- Replace: `YOUR NEW NUMBER`
- Replace in: All 4 HTML files

### Option 2: Manual Update
Edit the footer section in each file:
- index.html (lines 177-210)
- about.html (lines 169-202)
- portfolio.html (lines 95-128)
- contact.html (lines 130-163)

---

## 🔄 What to Update in the Footer

### Company Info
Search for: `<div class="footer-section">` with `<h3>Agave Welding</h3>`

### Contact Details
Search for: `Call: (425) 446-1638`
Search for: `Agavewelding@gmail.com`

### Service Areas
Search for: `Seattle • Everett • Tacoma`

### Copyright Year
Search for: `© 2026 Agave Welding`

### Contractor Arsenal Link
Already added! Shows: "Made by Contractor Arsenal" with link to contractorarsenal.com

---

## 📞 Update Phone Number Everywhere

Your phone number appears in multiple places:
1. **Footer** (all 4 pages) - See above
2. **Contact page** - Line ~37 in contact.html
3. **Hero buttons** - Line ~55 in index.html

Search for `4254461638` or `(425) 446-1638` to find all instances.

---

## 🖼️ Update Images

### Portfolio Images
Edit **portfolio.html** - Replace image URLs around lines 44-70

### Hero Image
Edit **index.html** - Replace image URL around line 54

---

## 💡 Pro Tips

1. **Always backup** files before making changes
2. **Test locally** before uploading to your hosting
3. **Use Find & Replace** for changes that appear multiple times
4. **Keep all 6 files together** - they work as a set
5. **The Contractor Arsenal link** is at the bottom of every page

---

## 🚀 Upload to Your Website

Once you've made changes:
1. Save all files
2. Upload all 6 files to your web hosting via FTP or file manager
3. Test the live site to make sure everything works

---

## ❓ Need Help?

Common issues:
- **Broken links?** Check that all files are in the same folder
- **Styles not working?** Make sure styles.css uploaded correctly  
- **Menu not working?** Make sure script.js uploaded correctly

For questions, contact Contractor Arsenal!
