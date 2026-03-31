Create a fully functional healthcare website called "Santé Circle Health" that matches 
this design exactly. Use a clean, professional medical aesthetic with the following 
color palette: primary blue (#1A6B9A), teal/green accent (#2BAE8E), dark navy footer 
(#1A2B4A), light blue-gray background (#EAF3F8), white cards, and green CTA buttons 
(#3DBE7A).

TYPOGRAPHY: Use Inter or similar sans-serif. Headings bold and dark. Body text in 
medium gray. Accent links in teal/blue.

---

## SECTION 1 — NAVIGATION BAR
- White background, subtle bottom border
- Left: circular teal/blue logo icon (two overlapping circles forming an "S") + 
  bold text "Santé Circle Health"
- Center nav links: Services | Our Team | Resources | Contact (in gray, hover 
  underline in teal)
- Right side: FR / EN language toggle switch (pill shape, blue toggle) + 
  "Book an Appointment" green rounded button with white text
- Sticky on scroll

---

## SECTION 2 — HERO SECTION
- Full-width section with a background photo of a smiling female doctor in white 
  coat consulting with a patient (warm, professional stock photo)
- Background has a blue-teal gradient overlay on the left third
- On the left, a semi-transparent white rounded card (frosted glass effect) 
  overlaid on the image containing:
    - Bold heading (large, dark): "Your Path to Integrated Wellness Starts Here."
    - Subtext (small, gray): "Expert cognitive, mental, and physical care, 
      streamlined for you."
    - Large green rounded CTA button with lock icon: "🔒 Book a Consultation"
    - Small caption below button: "Secure portal. No immediate payment required 
      to schedule."
- Section height: ~480px

---

## SECTION 3 — QUICK ACTION BAR (inside hero, bottom)
- White rounded card row, sitting at the bottom of the hero section
- Label above row (left-aligned, white text on blue background): "Quick Action"
- 4 equal columns, each with:
    1. Blue person/card icon + bold label "Existing Patient Portal"
    2. Blue map pin icon + bold label "Find a Clinic Location"
    3. Blue list icon + bold label "Explore Services"
    4. Blue document icon + bold label "New Patient Intake Form"
- Each column has a subtle right divider, centered icon and text
- Hover: slight blue background highlight

---

## SECTION 4 — COMPREHENSIVE SERVICES
- Light blue-gray background (#EAF3F8)
- Centered bold section heading: "Comprehensive Services"
- 2-column card grid (responsive, stacks to 1 column on mobile), with more cards 
  below (scroll or show all)
- Each service card:
    - White background, rounded corners, subtle shadow
    - Top: colored left border accent (blue for Cognitive, green for Physical)
    - Icon (line-style): brain icon for Cognitive/Mental, running figure for 
      Physical/Assessments, clipboard for assessments
    - Bold card title (e.g., "Cognitive/Mental", "Physical/Assessments", 
      "Physical Assessments", "New Patient Assessments")
    - 2-3 line gray description text
    - Teal "Learn More ›" link at bottom
- Show at least 4 cards in a 2x2 grid

---

## SECTION 5 — MEET OUR EXPERT TEAM
- White background section
- Centered bold heading: "Meet Our Expert Team"
- 3-column card row:
    - Each card: professional headshot photo (diverse doctors), name in bold 
      (e.g., "Dr. A. Sharma, MD"), specialty in teal link text 
      ("Clinical Psychologist")
    - Rounded photo, soft shadow on card
    - Cards equally spaced

---

## SECTION 6 — TRUST & TESTIMONIALS
- Light blue-gray background
- Centered bold heading: "Trust & Testimonials"
- Two-column layout:
    LEFT COLUMN — HIPAA badge:
      - Blue shield icon with medical cross/caduceus
      - Bold text: "HIPAA" with "SECURITY SECURE" badge styling
      - Subtext below: "Your Privacy is Paramount. HIPAA Compliant & Secure."
    RIGHT COLUMN — Testimonial card:
      - White rounded card with soft shadow
      - Large gray quotation mark at top
      - Italic testimonial text (2-3 lines): patient praising the care and privacy
      - Bottom: small circular avatar photo + name "Ryana Smith" + subtitle 
        "Patient" in gray

---

## SECTION 7 — FOOTER
- Dark navy background (#1A2B4A)
- 3-column layout:
    LEFT: "Santé Circle Health" logo + tagline
    CENTER: Nav links — Home | Our Team
    RIGHT: Resources | Contact
- Small copyright text at very bottom, white text throughout

---

## GLOBAL INTERACTIONS & FUNCTIONALITY

1. "Book an Appointment" (nav) and "Book a Consultation" (hero) buttons → open a 
   modal overlay with a booking form containing: Name, Email, Phone, Service 
   dropdown (Cognitive/Mental, Physical Assessment, New Patient), Preferred Date 
   picker, and a "Confirm Booking" green button. Modal has X close button.

2. "New Patient Intake Form" Quick Action → opens a multi-step form modal:
   Step 1: Personal Info (Name, DOB, Gender)
   Step 2: Medical History (checkboxes for conditions)
   Step 3: Insurance Info
   Step 4: Confirmation screen with checkmark

3. "Find a Clinic Location" Quick Action → opens a modal with a map placeholder 
   and a list of 3 clinic locations with addresses and "Get Directions" buttons.

4. "Existing Patient Portal" Quick Action → opens a login modal with Email, 
   Password fields and a "Sign In" button.

5. "Learn More ›" links on service cards → expand an accordion/drawer below each 
   card showing more details about that service.

6. FR / EN toggle → switches all visible text between English and French 
   (translate key UI strings).

7. Doctor cards → clickable, opens a bio modal with photo, credentials, 
   specialties, and a "Book with this Doctor" button.

8. "Explore Services" Quick Action → smooth scrolls to the Comprehensive Services 
   section.

9. Sticky navigation → stays at top on scroll with a slight drop shadow.

10. All buttons have hover states (darker shade), focus states, and smooth 
    transitions (0.2s ease).

---

## RESPONSIVE BEHAVIOR
- Desktop: full layout as described
- Tablet: 2-column service grid, stacked team cards
- Mobile: single column, hamburger menu in nav, full-width cards

---

## DESIGN DETAILS
- Border radius on cards: 12px
- Button border radius: 8px (pill for nav CTA: 24px)
- Card shadows: 0 2px 12px rgba(0,0,0,0.08)
- Section padding: 64px vertical, 80px horizontal (max-width 1200px container)
- All icons: outlined/line style in #1A6B9A blue
- Consistent 16px base font, 14px for captions, 28–36px for section headings