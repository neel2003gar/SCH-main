# Lo-Fi Design - Complete Page Index

## All Pages Overview

This document provides a complete index of all 14 pages in the lo-fidelity design with their routes, purpose, and key sections.

---

## 1. HOME PAGE
**Route:** `/lofi`  
**File:** `LofiHomePage.tsx`

**Purpose:** Main landing page showcasing services and building trust

**Sections:**
- Hero Section (with image background placeholder and content card)
  - Tag line
  - Main heading
  - Description
  - CTA button
  - Pricing note
- Quick Action Bar (4 items)
  - Client Portal
  - Find Clinic
  - Explore Services
  - Get Quote
- Comprehensive Services (6 service cards)
  - Alternating border colors (visual pattern)
  - Service icons
  - Learn more links
  - CTA strip
- Why Choose Us (4 reasons)
  - Icon + title + description
- Team Section (4 team member cards)
  - Image placeholder
  - Name
  - Specialization
- Testimonials (3 client testimonials)
  - Quote
  - Author name
  - Role
- Final CTA
  - Heading
  - Description
  - Contact button

---

## SERVICE PAGES (6 Total)

### 2. ACCOMMODATION, STAY AT WORK & RETURN TO WORK
**Route:** `/lofi/services/accommodation-return-to-work`  
**File:** `services/LofiAccommodationPage.tsx`

**Sections:**
- Hero (title + subtitle)
- Overview (3 paragraphs)
- What We Do (4 service items in grid)
- Our Process (4 steps with numbers)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

### 3. EARLY INTERVENTION / WORKPLACE WELLNESS
**Route:** `/lofi/services/early-intervention`  
**File:** `services/LofiEarlyInterventionPage.tsx`

**Sections:**
- Hero (title + subtitle)
- Service Description
- Features (2 feature cards)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

### 4. OCCUPATIONAL THERAPY
**Route:** `/lofi/services/occupational-therapy`  
**File:** `services/LofiOccupationalTherapyPage.tsx`

**Sections:**
- Hero (title + subtitle)
- About Our OT Services
- Specializations (3 specialization cards)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

### 5. ERGONOMICS / JOB DEMANDS ANALYSIS
**Route:** `/lofi/services/ergonomics`  
**File:** `services/LofiErgonomicsPage.tsx`

**Sections:**
- Hero (title + subtitle)
- Ergonomics Services (2 paragraphs)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

### 6. THERAPY – PHYSIOTHERAPY, CHIROPRACTIC & MASSAGE
**Route:** `/lofi/services/therapy`  
**File:** `services/LofiTherapyPage.tsx`

**Sections:**
- Hero (title + subtitle)
- Therapy Services (3 therapy types)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

### 7. DISABILITY CASE MANAGEMENT
**Route:** `/lofi/services/disability-management`  
**File:** `services/LofiDisabilityManagementPage.tsx`

**Sections:**
- Hero (title + subtitle)
- Case Management Approach
- Components (2 component cards)
- Key Benefits (3 benefits)
- CTA Section (2 buttons)

---

## INFORMATION PAGES (7 Total)

### 8. ABOUT US
**Route:** `/lofi/about-us`  
**File:** `LofiAboutUsPage.tsx`

**Sections:**
- Hero
- Mission Statement (centered, prominent)
- Company Overview
  - Text content + image placeholder
- Our Values (3 value cards with icons)
- Our Team (4 team member profiles)

---

### 9. CONTACT US
**Route:** `/lofi/contact-us`  
**File:** `LofiContactUsPage.tsx`

**Sections:**
- Hero
- Two-column layout:
  - Left: Contact Form
    - Name field
    - Email field
    - Phone field
    - Message textarea
    - Submit button
  - Right: Contact Information
    - Corporate Office card
    - Regional Office card
    - Business Hours card
- Map Section (full-width map placeholder)

---

### 10. GET A QUOTE
**Route:** `/lofi/get-quote`  
**File:** `LofiGetQuotePage.tsx`

**Sections:**
- Hero
- Quote Form (5 questions)
  - Question 1: Service type (radio options)
  - Question 2: Number of employees (input)
  - Question 3: Industry (dropdown)
  - Question 4: Timeline (radio options)
  - Question 5: Contact information (4 inputs)
  - Submit button
- Info Section (3 trust indicators)
  - No obligation
  - Fast response
  - Custom solutions

---

### 11. JOIN US (CAREERS)
**Route:** `/lofi/join-us`  
**File:** `LofiJoinUsPage.tsx`

**Sections:**
- Hero
- Why Join Us? (4 benefit cards)
- Current Openings (3 job postings)
  - Job title
  - Location, type, department tags
  - View details button
- Application Form
  - Personal info (first name, last name)
  - Contact (email, phone)
  - Position dropdown
  - Resume upload
  - Cover letter textarea
  - Submit button

---

### 12. FIND A REHABILITATION CLINIC
**Route:** `/lofi/find-rehab-clinic`  
**File:** `LofiFindRehabClinicPage.tsx`

**Sections:**
- Hero
- Search Section
  - City/postal code input
  - Province dropdown
  - Search button
- Clinic Results (3 clinic cards)
  - Clinic name
  - Address
  - Phone
  - Email
  - Services offered tags
  - Map placeholder
  - Get directions button
- All Locations Map (full-width map placeholder)

---

### 13. FIND AN OCCUPATIONAL HEALTH CLINIC
**Route:** `/lofi/find-occ-health-clinic`  
**File:** `LofiFindOccHealthClinicPage.tsx`

**Sections:**
- Hero
- Search Section
  - City/postal code input
  - Province dropdown
  - Search button
- Clinic Results (2 clinic cards)
  - Clinic name
  - Address
  - Phone
  - Email
  - Services offered tags (Ergonomics, Job Analysis, Wellness)
  - Map placeholder
  - Get directions button
- All Locations Map (full-width map placeholder)

---

### 14. NOT FOUND (404)
**Route:** `/lofi/*` (catch-all)  
**File:** `LofiNotFoundPage.tsx`

**Sections:**
- Centered layout
- 404 error code (large)
- Page Not Found heading
- Error message
- Two buttons:
  - Go to Home
  - Contact Us

---

## GLOBAL COMPONENTS

### Navigation (All Pages)
**Component:** `LofiGlobalNavigation.tsx`

**Elements:**
- Top Contact Bar
  - Phone placeholder
  - Email placeholder
  - EN/FR language toggle
- Main Navigation
  - Logo placeholder
  - Services dropdown placeholder
  - Locations dropdown placeholder
  - About Us link
  - Contact dropdown placeholder
  - Log In button
  - Get Quote button (primary)
- Mobile Menu
  - Hamburger icon
  - Slide-out menu (when open)
  - All navigation items stacked

---

### Footer (All Pages)
**Component:** `LofiGlobalFooter.tsx`

**Sections:**
- 4-column grid:
  1. Logo + Description
  2. Services (6 links)
  3. Company (6 links)
  4. Contact Info (2 offices)
- Bottom bar:
  - Copyright text
  - Legal links (Privacy, Security, Accessibility)

---

## REUSABLE TEMPLATES

### Service Page Template
**Component:** `LofiServicePageTemplate.tsx`

**Provides:**
- Hero section structure
- Main content container
- Benefits section (3-column grid)
- CTA section (2 buttons)

**Used by:** All 6 service pages

---

## LAYOUT PATTERNS

### Common Layout Elements

**Hero Sections:**
- Full-width background (gray)
- Centered content
- Title in bordered box
- Subtitle in bordered box
- Consistent spacing

**Grid Layouts:**
- 1 column (mobile)
- 2 columns (tablet)
- 3-4 columns (desktop)
- Consistent gaps

**Cards:**
- Border (1-2px)
- Padding (p-6 or p-8)
- White or gray background
- Hover effects (shadow)

**Forms:**
- Labels above inputs
- Input fields as bordered boxes
- Primary button (black background)
- Validation indicators (placeholders)

**CTAs:**
- Centered or right-aligned
- Primary + secondary button options
- Clear visual hierarchy

---

## RESPONSIVE BREAKPOINTS

**Mobile (< 640px):**
- Single column layouts
- Stacked navigation
- Full-width buttons
- Reduced padding

**Tablet (640px - 1024px):**
- 2-column grids
- Sidebar layouts
- Medium padding

**Desktop (> 1024px):**
- 3-4 column grids
- Horizontal navigation
- Maximum width containers (1000-1200px)
- Generous spacing

---

## INTERACTIVE ELEMENTS

**Clickable:**
- All navigation links
- All buttons
- Service cards (Learn More)
- Team member cards
- Job postings
- Clinic cards

**Stateful:**
- Language toggle (EN/FR)
- Mobile menu (open/close)
- Form inputs (focus states)
- Hover effects on buttons/cards

---

## CONTENT PLACEHOLDERS

**Text Patterns:**
- `[HEADING]` - Page/section titles
- `[Description]` - Body text paragraphs
- `[Button Text]` - Call-to-action labels
- `[Label: Field Name]` - Form labels
- `[Input Field]` - Form inputs
- `"Actual Text"` - Quoted examples from real content

**Visual Patterns:**
- `[IMAGE]` - Photo placeholders
- `[LOGO]` - Logo placeholder
- `[ICON]` - Icon placeholders
- `[MAP]` - Map placeholders
- Square shapes - Icon representations

---

## COMPARISON TO FULL DESIGN

| Aspect | Full Design Location | Lo-Fi Location |
|--------|---------------------|----------------|
| Home Page | `/src/app/pages/HomePage.tsx` | `/src/lofi/pages/LofiHomePage.tsx` |
| Navigation | `/src/app/components/GlobalNavigation.tsx` | `/src/lofi/components/LofiGlobalNavigation.tsx` |
| Footer | `/src/app/components/GlobalFooter.tsx` | `/src/lofi/components/LofiGlobalFooter.tsx` |
| Routes | `/src/app/routes.tsx` | `/src/lofi/lofi-routes.tsx` |

**Key Differences:**
- Full design: Colors, fonts, images, animations
- Lo-fi: Structure, layout, hierarchy, content organization

**Preserved:**
- Page structure
- Section order
- Content hierarchy
- Navigation patterns
- Responsive behavior

---

## USAGE NOTES

1. **Viewing:** Access via `/lofi` routes or toggle in main app
2. **Testing:** Use for user flow and navigation testing
3. **Documentation:** Reference for layout and structure
4. **Development:** Blueprint for component implementation
5. **Stakeholder Review:** Present structure before detailed design

---

**Total Pages:** 14  
**Total Components:** 4 layout components + 1 template  
**Total Routes:** 14 routes + catch-all  
**Languages:** Structure for EN/FR (toggle functional)  

**Created:** Thursday, April 2, 2026  
**Version:** Lo-Fi Wireframe v1.0
