

# Implementation Plan: All 5 Client Change Requests

## Overview

Five changes from the QA tracker, implemented end-to-end.

---

## CR-002: Remove Contact Us Popup from Homepage (Medium Priority)

**What changes:**
- In `src/pages/Index.tsx`: Change `useState(true)` to `useState(false)` so the modal no longer auto-opens on page load
- The modal still exists and can be triggered manually via "Contact Us" button in navbar — preserving that functionality

---

## CR-001: Recreate/Enhance the AA Innovations Logo (Medium Priority)

**What changes:**
- Replace the current `logo.png` with a new SVG-based logo component (`src/components/Logo.tsx`) that renders a clean, modern "AA" monogram using SVG paths with the brand's horizon blue color
- The logo will scale crisply at any size and blend with the dark Prussian Blue navbar/footer backgrounds
- Update `Navbar.tsx`, `Footer.tsx`, and `ContactFormModal.tsx` to use the new Logo component instead of the PNG

---

## CR-003: Add FAQ Page + Footer Link (Low Priority)

**What changes:**
- Create `src/pages/FAQ.tsx` — a dedicated FAQ page with common questions about AA Innovations' services, process, pricing, timelines, etc.
- Uses accordion-style expandable questions (leveraging existing `accordion.tsx` UI component)
- Styled consistently with the site's dark theme and galaxy background
- Add route `/faq` in `App.tsx`
- Add "FAQ" link in the Footer's "Company" column and Navigation column

---

## CR-004: Add Login/Register UI Pages (Low Priority)

**What changes:**
- Create `src/pages/Login.tsx` — clean login form with email + password fields, "Forgot password?" link, and a link to Register
- Create `src/pages/Register.tsx` — registration form with name, email, password, confirm password fields, and link to Login
- Both pages styled with the glassmorphism aesthetic matching the contact form modal
- Add routes `/login` and `/register` in `App.tsx`
- No backend wiring — forms show a toast on submit saying "Coming soon" or similar

---

## CR-005: Add Hamburger Menu with Profile, FAQ, Contact Us (Low Priority)

**What changes:**
- Redesign the Navbar to include a hamburger menu icon (visible on all screen sizes, right side)
- Clicking it opens a slide-out panel (using the existing `Sheet` component) containing:
  - **Profile** — links to `/login` (since auth is UI-only for now)
  - **FAQ** — links to `/faq`
  - **Contact Us** — opens the contact form modal
- The main nav links (Home, About Us, Services, Industries) remain visible on desktop; the hamburger menu is an additional element with these three specific links
- On mobile, the existing mobile menu merges with this hamburger menu

---

## Technical Details

| File | Action |
|---|---|
| `src/pages/Index.tsx` | Change modal default state to `false` |
| `src/components/Logo.tsx` | New SVG logo component |
| `src/components/Navbar.tsx` | Add hamburger menu with Sheet panel; update logo |
| `src/components/Footer.tsx` | Add FAQ link; update logo |
| `src/components/ContactFormModal.tsx` | Update logo reference |
| `src/pages/FAQ.tsx` | New FAQ page with accordions |
| `src/pages/Login.tsx` | New login UI page |
| `src/pages/Register.tsx` | New register UI page |
| `src/App.tsx` | Add routes for `/faq`, `/login`, `/register` |

