# Texas Tommy Poker — Website

The official site for **Texas Tommy** — professional poker player, content
creator, coach, and WPT Global sponsored pro.

It's a fast, dependency-free **static website** (plain HTML/CSS/JS) — no build
step, no framework. Open it, edit it, deploy it anywhere.

---

## 🗂 Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, who Tommy is, what he does, WPT Global, coaching teaser |
| `story.html` | The Story — Tommy's journey as a timeline (where he came from → what's next) |
| `coaching.html` | Coaching options + a **contact/application form** (no payments) |
| `wpt-global.html` | Sponsor page — sign up on WPT Global with Tommy's code |
| `contact.html` | General **contact form** + ways to reach Tommy |

Shared assets live in `assets/` (`css/styles.css`, `js/main.js`, `img/`).

---

## ✍️ Editing the content

The copy is written to be edited. Search the HTML for **`EDIT ME`** comments —
they mark every spot that needs Tommy's real details. The big ones:

1. **WPT Global code** — placeholder is `TOMMY`. Replace it everywhere it
   appears (it's in the nav, the sponsor band, and the footer of every page).
   Quick find-and-replace across the repo: search for `TOMMY`.
2. **WPT Global signup link** — in `wpt-global.html`, point the buttons at
   Tommy's real referral/affiliate URL (currently `https://www.wptglobal.com`).
3. **Tommy's story** — `story.html` has the timeline. The structure is real;
   fill in the specifics (hometown, first game, milestones, stats).
4. **Hero stats** — `index.html` has placeholder numbers (years, volume,
   community). Swap in real figures or remove.
5. **Emails** — replace `hello@texastommypoker.com` / `coaching@texastommypoker.com`
   with Tommy's real addresses.
6. **Photos** — the hero currently reuses Tommy's "What is their range" thumbnail
   (`assets/img/tommy-range.png`). Drop in real photos as you get them; a few
   spots have `Add a photo here` placeholders.

### Colors / branding
All design tokens live at the top of `assets/css/styles.css` under `:root`
(`--crimson`, `--gold`, `--black`, fonts, etc.). Change them once, everywhere
updates.

---

## 📬 Wiring up the forms

The coaching and contact forms **work immediately in demo mode** — they
validate and show a success message, but don't send anywhere yet. To receive
real submissions, pick one:

### Option A — Formspree (easiest, works on any host)
1. Create a free form at [formspree.io](https://formspree.io).
2. Copy your form ID (looks like `xdorwkpl`).
3. In `coaching.html` and `contact.html`, replace `YOUR_FORM_ID` in the form's
   `action="https://formspree.io/f/YOUR_FORM_ID"`.

That's it — the JS auto-detects a real endpoint and posts to it.

### Option B — Netlify Forms (if hosting on Netlify)
1. Add `netlify` and a `name` to each `<form>` tag, e.g.
   `<form data-form name="coaching" method="POST" data-netlify="true" ...>`.
2. Add a matching hidden input: `<input type="hidden" name="form-name" value="coaching" />`.
3. Deploy — submissions show up in your Netlify dashboard.

Both forms include a hidden `_gotcha` honeypot field for basic spam protection.

---

## 🚀 Deploying

No build step — just publish the folder.

- **Netlify / Vercel / Cloudflare Pages:** connect the repo, leave the build
  command empty, set the publish directory to the project root. (`netlify.toml`
  is already included.)
- **GitHub Pages:** enable Pages on the branch, root folder.
- **Any web host:** upload the files.

### Local preview
```bash
# from the project root — any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## ⚖️ Note on responsibility

This site is **informational only** — no gambling, wagering, or payments happen
here. The WPT Global section is a promotional referral that sends people to WPT
Global to sign up, and coaching is arranged off-site. Responsible-gambling and
age (18+/21+) notices are included in the footer and on the WPT Global page.
