# Public Assets

Drop your replacement assets here. After adding them, update the relevant
component files to reference the correct paths.

## App Icons

| File | Used in | Notes |
|---|---|---|
| `humanizer-icon.png` | `components/AppCards.tsx` | Replace the `.app-icon-placeholder` div with `<Image src="/humanizer-icon.png" ...>`. Ideal size: 256×256 or 512×512 px, PNG with transparency. |
| `voice-icon.png` | `components/AppCards.tsx` | Same as above. |

## Screenshots / Demo Images

| File | Used in | Notes |
|---|---|---|
| `humanizer-screenshot.png` | Add a screenshot section inside `AppCards.tsx` or a dedicated component | Ideal: 2x retina screenshot of the app in use |
| `voice-screenshot.png` | Same | — |

## OG / Social Image

| File | Used in | Notes |
|---|---|---|
| `og-image.png` | `app/layout.tsx` → openGraph.images | 1200×630 px, captures the hero visually |

## Demo Videos

The product cards currently show a "Demo video coming soon" placeholder. To embed:

1. Upload your screen-recorded `.mp4` to a hosting service (Cloudflare Stream,
   Vimeo, YouTube unlisted).
2. In `components/AppCards.tsx`, add a `<video>` or `<iframe>` element to each
   card using the hosted URL.

---

No binary assets are committed to this repository. Add files here locally;
do not commit large binaries to Git — use Git LFS or a CDN instead.
