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
- **Peers / network:** plays competitive line-ups like Champions Club Texas alongside Outlaw, Ham, Thai, The Commish (noted on the Story page)
- **Community:** a premium forum (hand histories, node reviews, study habits) is teased as "coming soon" on Home + Coaching
- **Content formats:** long-form vlogs, hand analysis, bankroll challenges, and Shorts/reels
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
3. ~~YouTube embeds & playlists~~ ✅ **Done.** `content.html` is generated from
   the real channel: a live embed of the latest episode, all episodes with real
   YouTube thumbnails/durations/views, and every Short. Re-run
   `scratchpad/gen_content.py` (or ask me) to refresh when new videos drop.
4. **Hero stats** (`index.html`) — tweak to Tommy's preferred figures.
5. **Photos** — section images now use the supplied brand photos (table shots,
   cruise/travel, Toronto community, the 30-Day Bankroll Challenge graphic, and
   table portraits). These were cropped from the supplied mood board so they're
   fairly small — swap in **higher-resolution originals** when available,
   especially for the large hero (which still uses `tommy-range.png`).

### Image assets in `assets/img/` (high-res brand photos)
- `hero-poker.jpg` — moody premium-table shot (home hero, coaching, WPT, content)
- `toronto-coffee.jpg` — Toronto skyline / coffee (home "Who is Tommy")
- `studying-range.jpg` — studying a range chart at the table (coaching, content)
- `community-meetup.jpg` — "Poker Community Meetup" crowd (Community sections)
- `cruise-chips.jpg` — cruise + chips (story intro, Travel series)
- `bankroll-30days.jpg` — 30-Day Bankroll Challenge graphic (Challenges series)
- `rtp-diagram.jpg` — Repeatable Thought Process diagram (coaching framework)
- `handshake.jpg` — blazer / handshake, Toronto lounge (contact)
- `short-river.jpg` — vertical Short thumbnail (content Shorts section)
- `tommy-range.png` — original "What is their range" thumbnail (content featured)
- `wpt-banner-250x400.jpg` — official WPT Global creative (WPT page)

Some supplied images were intentionally **not** used because their likeness or
text was too off for a live site: the AI "Texas Tommy Poker Training" course box,
the HUD-face illustration, and the cartoon bankroll illustration (all had garbled
text). Swap in clean finals if you want those concepts on the site.

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
