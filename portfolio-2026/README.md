# Peter Idinga / Gregztech

A static, multipage portfolio. No runtime database, accounts, contact-form service or paid dependency is required. Email actions use the supplied mailto address.

## Structure
- `projects.json`: editable project descriptions, contribution labels, links and confirmed technologies.
- `build.py`: generates the homepage, case studies, 404 and metadata using Python's standard library.
- `dist/styles.css`: responsive design and reduced-motion rules.
- `dist/app.js`: session introduction, native dialog menu and progressive section reveals.
- `dist/assets/`: optimised real project screenshots, social preview and favicon.

Run `python3 build.py` after editing project content. Static output is `dist/`.

## Content boundaries
User-confirmed contributions: CEAVOX, HearIntel and QPrep full-stack; Safe Nest frontend. No invented metrics, testimonials or employment history. Public QPrep HTML identifies an academic past-question repository; signed-in flows were not exercised. All images are supplied public screens, cropped to remove phone/browser chrome. HearIntel imagery uses only the public landing page.

## Before a public launch
The current Site is owner-private and deliberately uses `noindex,nofollow` and a disallow-all robots file. Approve public access separately and update indexing/canonical metadata if the domain changes.

Peter's supplied portrait is used unaltered in the full-height homepage composition and social preview. The design was revised to a monochrome portrait-led direction, with alternating lead-project layouts and plain-language copy.

QPrep and Safe Nest technology stacks are omitted until confirmed. The confirmed stacks for CEAVOX and HearIntel reflect the user's provided project context.

## Checks
`node --check dist/app.js`
`node checks/motion.cjs`
`python3 checks/links.py`

Browser review: desktop and 390px iframe viewport; navigation, native menu, Escape/focus return, project links, loaded images, contact links. Reduced-motion and session logic are additionally exercised with deterministic mocked browser preferences in the motion check. Device-specific hardware testing is not claimed.

## Public project captures (27 October 2026)
Fresh captures replace the supplied phone screenshots in the rendered portfolio.
- CEAVOX: public homepage and `/explore`.
- HearIntel: public homepage, platform/clinical overview and registry introduction. No private module was accessed.
- QPrep: empty public sign-in and registration forms at `/login.html`. No credentials entered or account created.
- Safe Nest: public homepage hero and co-living section. The property listing area returned a loading error during collection and is not included.
Capture crops preserve the actual site UI. `projects.json` stores image dimensions and captions. Scroll reveals and gentle preview drift respect reduced motion; native scrolling is preserved.
