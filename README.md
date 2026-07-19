# Texas Tommy Poker — Website

The official site for **Texas Tommy** (Tommy Yau) — professional poker player,
content creator, coach, and **WPT Global Ambassador**. From Hong Kong to the
high-stakes tables.

It's a fast, dependency-free **static website** (plain HTML/CSS/JS) — no build
step, no framework. Open it, edit it, deploy it anywhere.

---

## 🗂 Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, who Tommy is, what he does, WPT Global, coaching teaser |
| `story.html` | The Story — Tommy's journey (Hong Kong → Toronto/US circuit → WPT Global Ambassador) |
| `content.html` | Vlog Hub — featured video + series (Cash Games, Tournaments, Challenges, Travel) |
| `coaching.html` | Coaching options, the Repeatable Thought Process, + application form (no payments) |
| `wpt-global.html` | Partner hub — sign up on WPT Global with bonus code **TOMMY** |
| `contact.html` | General contact form + ways to reach Tommy |

Shared assets live in `assets/` (`css/styles.css`, `js/main.js`, `img/`).

---

## ✅ Real details baked in

Pulled from Tommy's brand profile:

- **Name:** Tommy Yau (aka Texas Tommy) · **WPT Global Ambassador**
- **Journey:** Hong Kong → Toronto + US circuit (Seattle, Portland, Florida, Texas, Las Vegas, US Poker Cruise)
- **Games:** high-stakes cash ($2/$5+) and MTTs · English + a dedicated Cantonese channel
- **Coaching method:** the "Repeatable Thought Process" framework
- **WPT Global bonus code:** `TOMMY` (confirmed by the official banner asset)
- **Contact:** texastommypoker@gmail.com
- **Socials:** [YouTube @texas_tommy](https://youtube.com/@texas_tommy) · [Instagram @texas_tommyy](https://www.instagram.com/texas_tommyy)
- **Brand palette:** Texas Red `#D32F2F` · Felt Green `#2E7D32` · Charcoal `#121212` · Gold `#FFC107` (all live in `:root` in `assets/css/styles.css`)
- **Fonts:** Anton / Oswald (display) + Inter (body)

---

## ✍️ What still needs Tommy's input

Search the HTML for **`EDIT ME`** — 5 spots remain:

1. **WPT Global signup link** (`wpt-global.html`) — the buttons currently point at
   `https://www.wptglobal.com`. Swap in Tommy's real referral / affiliate URL.
2. **Welcome offer + freeroll details** (`wpt-global.html`) — drop in the exact
   current welcome offer and any freeroll schedule/passwords.
3. **YouTube embeds & playlists** (`content.html`) — paste a video ID into the
   featured `<iframe>` (commented out, ready to go), and point each series card at
   its real playlist URL.
4. **Hero stats** (`index.html`) — tweak to Tommy's preferred figures.
5. **Photos** — the hero/section images currently reuse Tommy's "What is their
   range" thumbnail (`assets/img/tommy-range.png`). Drop in real action/travel
   photos as you get them; a couple of spots have `Add a photo here` placeholders.

### WPT Global assets
The supplied banner (`assets/img/wpt-banner-250x400.jpg`) is used on the WPT
Global page. Add more WPT creatives to `assets/img/` and reference them as needed.

### Colors / branding
All design tokens live at the top of `assets/css/styles.css` under `:root`.
Change them once, everywhere updates.

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
1. Add `data-netlify="true"` and a `name` to each `<form>` tag.
2. Add a matching hidden input: `<input type="hidden" name="form-name" value="coaching" />`.
3. Deploy — submissions show up in your Netlify dashboard.

Both forms include a hidden `_gotcha` honeypot field for basic spam protection.

---

## 🚀 Deploying

No build step — just publish the folder.

- **Netlify / Vercel / Cloudflare Pages:** connect the repo, leave the build
  command empty, publish directory = project root. (`netlify.toml` is included.)
- **GitHub Pages:** enable Pages on the branch, root folder.
- **Any web host:** upload the files.

### Local preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## ⚖️ Note on responsibility

This site is **informational only** — no gambling, wagering, or payments happen
here. The WPT Global section is a promotional referral that sends people to WPT
Global to sign up, and coaching is arranged off-site. Responsible-gambling and
age (18+/21+) notices are included in the footer and on the WPT Global page.
