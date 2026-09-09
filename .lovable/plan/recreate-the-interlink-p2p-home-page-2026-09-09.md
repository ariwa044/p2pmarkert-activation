# Recreate the InterLink P2P home page

A pixel-faithful rebuild of p2pinterlink.com/p2/home/ as the site's front page, with sharper visuals and continuous, living motion.

## What you'll get

A single long home page with these sections, in the same order as the original:

1. **Top bar** — logo, About, Ecosystem (with dropdown: Interlink App, ITLX Wallet, InterlinkChain), Blog, Community, Resource, and a purple "Get the app" pill.
2. **Hero** — full-bleed cinematic background of people in a marketplace, dark overlay, the big headline "Activating Marketplace on your Interlink Wallet allows you to securely trade your ITG assets with other, using Interlink Escrow services", a "Download" button, a floating white "$ITL Activate Marketplace" pill with a spinning gold coin, and a location chip that cycles through cities (Lagos, Montreal, Neu-Isenburg…) like the live site.
3. **Institutional Credibility** — heading, subtext, and a "TRUSTED BY" logo row (New to the Street, AWS Startups, Google for Startups, NIST, NYSE) that drifts continuously.
4. **Four showcase cards** — free mining, backed by builders, recognized where it matters, cash out through payment rails; each with image, heading, blurb, "See more".
5. **Interlink App** — "Digital assets for everyone." with the four bullets and an app visual.
6. **ITLX Wallet** — "Crypto made simple, secure, and seamless.", four bullets, a video/demo card, and the wallet screenshot panel.
7. **InterlinkChain** — "Building the infrastructure for the next billion users." with its four bullets and visual.
8. **Get started** — "Start earning digital asset for free today." with App Store / Google Play / APK Pure buttons and the phone image.
9. **Blog** — "Latest releases." with the featured HOT post card.
10. **Footer** — link columns and legal line matching the original.

## Motion (the "live" feel)

- Hero background slowly pushes in (gentle zoom drift) so it reads like footage, not a still.
- Coin pill floats and the coin spins; location chip swaps every few seconds with a fade.
- Sections and cards rise into view as you scroll; partner logos scroll in a continuous marquee.
- Buttons and cards lift on hover; the gradient accents shimmer subtly.
- All motion respects reduced-motion settings so it never feels nauseating.

## Imagery

The original site's photos are its own property, so I'll generate fresh high-resolution images matching each one's subject and mood (marketplace crowd hero, phone-mining shot, wallet screen, chain/infrastructure visual, blog thumbnail). Partner logos will be rendered as clean text-marks rather than copied brand files. If you'd rather ship the real photos and logos, send them and I'll swap them in.

## Notes

- Purple brand accent, near-black text, white surfaces, rounded pill buttons and large soft-cornered cards — all set as reusable theme values.
- The "Interlink" wordmark will be recreated as text plus a small mark, not the original logo file.
- Fully responsive: stacked layout and a slide-in menu on phones.
- Every button links to the matching in-page section; external app links point where the original does.
- Page title/description and social preview tags set for search.

## Technical

- Rebuild `src/routes/index.tsx` as the home page, composed of section components under `src/components/home/`.
- Tokens (purple primary, radii, shadows, font stack) added to `src/styles.css`; no hardcoded colors in components.
- Animation via CSS keyframes plus a small intersection-observer reveal hook; marquee and Ken-Burns done in pure CSS for smoothness.
- Generated images stored as CDN asset pointers so the repo stays light and images serve at full resolution.
- No backend needed — the page is static content.
