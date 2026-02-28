# Academic Personal Website

A clean, professional one-page site inspired by faculty and PhD academic websites. Easy to customize and host (GitHub Pages, Netlify, or your university server).

## Deploy to GitHub Pages (this repo)

This branch (`static-personal-site`) contains the static site. To deploy:

1. **Push the branch** (if you haven’t already):
   ```bash
   git add .
   git commit -m "Replace with static academic site"
   git push -u origin static-personal-site
   ```

2. **Turn on GitHub Pages** for this branch:
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**
   - **Branch**: `static-personal-site`, folder **/ (root)** → Save

3. The site will be live at **https://nikhilreddybilla28.github.io/** (may take a few minutes).

To make this the default site, you can merge into `master` and set Pages to deploy from `master`, or keep deploying from `static-personal-site`.

## What’s included

- **About** — Name, title, affiliation, short bio, **CV download**, **Google Scholar** link
- **Research** — Research areas with short descriptions
- **Teaching** — Current and past courses
- **Publications** — Selected papers with PDF/Code links; link to full list on Scholar
- **Contact** — Email, office, and external links

Design follows common academic-site advice: minimal layout, readable typography (Cormorant Garamond + Source Sans 3), limited color, and clear navigation.

## Quick setup

### 1. Add your resume (CV)

- Save your CV as a PDF named `cv.pdf`.
- Put it in the `assets` folder: `assets/cv.pdf`.
- The “Download CV” button in the About section already points to `assets/cv.pdf`.

### 2. Add your Google Scholar link

In `index.html`, replace every instance of:

```text
https://scholar.google.com/citations?user=YOUR_ID
```

with your real Scholar URL. To find your ID:

1. Open your Google Scholar profile.
2. The URL looks like: `https://scholar.google.com/citations?user=XXXXXXXX&hl=...`
3. Copy the part after `user=` (e.g. `XXXXXXXX`) and use:  
   `https://scholar.google.com/citations?user=XXXXXXXX`

Search the file for `YOUR_ID` to find all places to update.

### 3. Add your photo (optional)

- Add a headshot as `assets/photo.jpg` (or `.png`).
- In `index.html`, change the hero image from:
  - `assets/photo-placeholder.svg`  
  to  
  - `assets/photo.jpg` (or your filename).

### 4. Edit your content

In `index.html`:

- **About:** Update “Your Name”, “Your Title”, “Institution Name · Department”, and the short bio.
- **Research:** Edit the three research cards (titles and descriptions); add or remove cards as needed.
- **Teaching:** Replace the two sample courses with your courses (name, code, semester, role, link to syllabus if you have one).
- **Publications:** Replace the sample entries with your papers; add PDF/Code links where you have them.
- **Contact:** Set your email, office, office hours, and links (Scholar, GitHub, LinkedIn, etc.).

## Running locally

Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Deploying

- **GitHub Pages:** Push this folder to a repo, enable Pages in Settings → Pages, and choose the branch (e.g. `main`) and folder (e.g. root or `docs` if you put the site in `docs`).
- **Netlify:** Drag and drop the project folder to [Netlify](https://app.netlify.com/drop), or connect the repo for automatic deploys.
- **University host:** Upload the files via FTP/SFTP to your department or personal web space.

## File structure

```text
personal-website/
├── index.html          # All content; edit here
├── styles.css          # Styling (colors, fonts in :root)
├── script.js           # Year in footer, nav highlight
├── assets/
│   ├── photo-placeholder.svg   # Placeholder until you add a photo
│   ├── photo.jpg       # Add your headshot (optional)
│   └── cv.pdf          # Add your resume
└── README.md           # This file
```

## References

- [Personal Academic Webpages: How-To's and Tips](https://townsendcenter.berkeley.edu/blog/personal-academic-webpages-how-tos-and-tips-better-site) — Berkeley Townsend Center
- [How to Create an Impactful Faculty Website](https://theopenscholar.com/blog/how-create-impactful-faculty-website) — OpenScholar

These emphasize: clear goals and audience, simple navigation (5–6 items), CV and contact, research and teaching, and a clean, minimal design.
