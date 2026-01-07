# Personal Website

A clean, minimal personal website ready for GitHub Pages deployment.

## Quick Setup

1. **Add your profile photo**: Replace `profile.jpg` with your photo (recommended: square, at least 320x320px)

2. **Add your CV**: Add your CV as `cv.pdf` in the root folder

3. **Edit `index.html`**: Update the following:
   - Your name (title and h1)
   - Your title/tagline
   - Your affiliation
   - Your email
   - Update social links (GitHub, LinkedIn)
   - About me section
   - Research interests
   - News items

4. **Enable Google Scholar** (when ready): In `index.html`, find the Google Scholar link and remove the `hidden` class:
   ```html
   <!-- Change this: -->
   <a href="..." class="link-item hidden" ...>
   <!-- To this: -->
   <a href="..." class="link-item" ...>
   ```

## Customizing Colors

Edit the CSS variables at the top of `style.css`:

```css
:root {
    --color-bg: #faf8f5;           /* Background color */
    --color-accent: #c45c3e;        /* Accent color (buttons, highlights) */
    --color-text: #2c3e50;          /* Main text color */
    --color-link: #2a6b96;          /* Link color */
    /* ... etc */
}
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub named `yourusername.github.io`
2. Push these files to the repository
3. Go to Settings → Pages → Source → Deploy from branch (main)
4. Your site will be live at `https://yourusername.github.io`

## Files

- `index.html` - Main page content
- `style.css` - All styling (easily customizable via CSS variables)
- `profile.jpg` - Your profile photo (add this)
- `cv.pdf` - Your CV (add this)
- `.nojekyll` - Tells GitHub Pages not to use Jekyll processing

## Optional: Enable Dark Mode

The CSS includes a dark mode theme (commented out). To enable it, uncomment the `@media (prefers-color-scheme: dark)` section at the bottom of `style.css`.

