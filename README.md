# António do Forno — Memorial Website

A memorial website honouring the life and legacy of António Joaquim Pereira Alves do Forno (March 29, 1935 – October 12, 2025).

## Live Site
[antonio.doforno.com](https://antonio.doforno.com)

---

## Adding Content (No Coding Required)

All content is stored in simple data files in `src/data/`. To add content, edit these files:

### Add a Photo
1. Upload your image to [Cloudinary](https://cloudinary.com) (free account)
2. Copy the image URL
3. Open `src/data/photos.js`
4. Add a new object to the `photos` array:
```js
{
  id: 4,  // use the next number
  src: "https://res.cloudinary.com/your-account/image/upload/your-photo.jpg",
  caption: "Your caption here",
  subcaption: "Optional subtitle or date",
  category: "family",  // family | community | honors | military | faith | travel
  featured: false      // set true to make it larger in the grid
}
```

### Add a Timeline Event
Open `src/data/timeline.js` and add to the array:
```js
{
  year: 2001,
  title: "Event Title",
  description: "Description of the event.",
  category: "life"  // life | family | community | business | honors
}
```

### Add a Memory or Tribute
Open `src/data/memories.js` and add to the array:
```js
{
  id: 2,
  author: "Person's Name",
  relation: "Family friend",
  text: "Your memory or tribute here...",
  date: "November 2025"
}
```

### Add a Family Member Detail
Open `src/pages/Family.jsx` and update the `children` array at the top of the file.

---

## Development Setup

```bash
# Install dependencies
npm install

# Run locally (http://localhost:3000)
npm start

# Build for production
npm run build
```

---

## Deploying to GitHub Pages

### First-time setup
1. Update `homepage` in `package.json` to match your GitHub username:
   ```
   "homepage": "https://YOUR-GITHUB-USERNAME.github.io/antonio-doforno-website"
   ```
2. Install the deploy tool:
   ```bash
   npm install
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

### After making changes
```bash
npm run deploy
```
This builds the app and pushes it to the `gh-pages` branch automatically.

### Enabling GitHub Pages
In your repository: **Settings → Pages → Source → gh-pages branch → Save**

---

## Connecting antonio.doforno.com

In GoDaddy DNS, add a CNAME record:
- **Type:** CNAME
- **Name:** antonio
- **Value:** YOUR-GITHUB-USERNAME.github.io

Then create a `CNAME` file in the `public/` folder containing:
```
antonio.doforno.com
```

---

## Project Structure

```
src/
  data/
    photos.js        ← Add photos here
    timeline.js      ← Add timeline events here
    legacy.js        ← Community contributions & honors
    memories.js      ← Tributes & memories
  pages/
    Home.jsx         ← Landing page
    Story.jsx        ← Full biography
    Timeline.jsx     ← Interactive timeline
    Legacy.jsx       ← Community legacy & honors
    Family.jsx       ← Family page
    Gallery.jsx      ← Photo gallery
    Memories.jsx     ← Memories & tributes form
  components/
    Navigation.jsx   ← Site navigation
    Footer.jsx       ← Site footer
```
