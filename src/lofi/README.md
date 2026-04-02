# Lo-Fidelity Design - Santé Circle Health Website

This folder contains a complete low-fidelity (wireframe) version of the Santé Circle Health healthcare website. The lo-fi design mirrors the exact structure and layout of the full-fidelity website but uses simplified, grayscale elements to focus on layout and information architecture.

## Overview

The lo-fi design is a wireframe-style representation that helps visualize the website's structure without the distraction of colors, detailed styling, or real content. It uses:

- **Grayscale colors only** (white, grays, black)
- **Placeholder text** in brackets like `[HEADING]`, `[Button Text]`, `[Description]`
- **Simple borders and boxes** instead of detailed styling
- **Icon placeholders** using simple square shapes
- **Image placeholders** with text labels like `[IMAGE]`, `[PHOTO]`, `[MAP]`
- **Form field wireframes** showing structure but not detailed styling

## Structure

### Pages (14 Total)

#### Home Page
- `/lofi` - Main landing page with hero, services, team, testimonials

#### Service Pages (6)
- `/lofi/services/accommodation-return-to-work` - Accommodation & Return to Work
- `/lofi/services/early-intervention` - Early Intervention / Workplace Wellness
- `/lofi/services/occupational-therapy` - Occupational Therapy
- `/lofi/services/ergonomics` - Ergonomics / Job Demands Analysis
- `/lofi/services/therapy` - Therapy (Physio, Chiro, Massage)
- `/lofi/services/disability-management` - Disability Case Management

#### Information Pages (7)
- `/lofi/about-us` - About Us page with mission, values, team
- `/lofi/contact-us` - Contact form and office locations
- `/lofi/get-quote` - Quote request form (5 questions)
- `/lofi/join-us` - Careers page with job listings and application form
- `/lofi/find-rehab-clinic` - Rehabilitation clinic locator
- `/lofi/find-occ-health-clinic` - Occupational health clinic locator
- `/lofi/*` (404) - Not found page

## Components

### Layout Components
- **LofiRootLayout** - Main layout wrapper with navigation and footer
- **LofiGlobalNavigation** - Top navigation bar with bilingual toggle
- **LofiGlobalFooter** - Footer with company info and links
- **LofiServicePageTemplate** - Reusable template for service pages

### Key Features

1. **Bilingual Support (EN/FR)**
   - Language toggle buttons in navigation
   - Structure supports both English and French content

2. **Responsive Layout**
   - Mobile-first design approach
   - Grid-based layouts that adapt to different screen sizes
   - Mobile menu for navigation

3. **Component Hierarchy**
   - Hero sections with CTAs
   - Quick action bars
   - Service cards in grid layouts
   - Team member profiles
   - Testimonial sections
   - Contact forms
   - Clinic locators with maps

## Design System

### Visual Elements

**Borders:**
- Heavy borders (2px) for primary containers
- Light borders (1px) for secondary elements
- Dashed borders for upload areas

**Spacing:**
- Consistent padding: p-4, p-6, p-8
- Grid gaps: gap-4, gap-6, gap-8
- Section spacing: py-12, py-16

**Typography:**
- Headings: font-bold, various text sizes (text-sm to text-4xl)
- Body text: text-sm, text-gray-600
- Labels: text-xs

**Colors:**
- Background: white, gray-50, gray-100, gray-200
- Borders: gray-300, gray-400, gray-500
- Text: black (default), gray-600 (body), gray-500 (muted)
- Primary action: gray-800 (black buttons)

**Interactive Elements:**
- Buttons with hover states
- Form inputs shown as bordered boxes
- Links with underlines
- Checkboxes/radio buttons as circles/squares

## Page Layouts

### Home Page Sections
1. Hero with background image placeholder and card overlay
2. Quick action bar (4 items)
3. Services section (6 service cards)
4. Why choose us (4 reasons)
5. Team section (4 team members)
6. Testimonials (3 testimonials)
7. Final CTA

### Service Pages Sections
1. Hero with title and subtitle
2. Main content (overview, what we do, process)
3. Benefits section (3 benefits)
4. CTA section with two buttons

### Contact Page Sections
1. Hero
2. Contact form + office information
3. Map placeholder

### Get Quote Page Sections
1. Hero
2. 5-question form with various input types
3. Trust indicators (3 items)

## Technical Details

### Routing
- Uses React Router with `createBrowserRouter`
- All routes prefixed with `/lofi`
- Nested routing with RootLayout as parent

### State Management
- Language state managed in RootLayout
- Passed down via React Router's outlet context
- Mobile menu state in navigation component

### Accessibility Considerations
- Semantic HTML structure
- Proper heading hierarchy
- Form labels (shown as placeholders)
- Button labels for actions

## Usage

This lo-fi design serves as:
- **Structural blueprint** for the final design
- **Discussion tool** for stakeholders
- **Development reference** for layout and organization
- **Testing framework** for user flows and navigation

## Key Differences from Full Design

The lo-fi version intentionally **excludes**:
- Color schemes (navy #0F2A45, light green #6ABF4B, blue #2B7DC8)
- Custom fonts (DM Serif Display, DM Sans)
- Real images from Unsplash or Figma assets
- Detailed animations and transitions
- Shadow effects and gradients
- Icon libraries (Lucide icons shown as squares)
- Actual form functionality
- Real content and copy

The lo-fi version **focuses on**:
- Layout structure and spacing
- Information hierarchy
- Component arrangement
- Navigation flow
- Content organization
- Responsive behavior
- User journey mapping

## File Structure

```
/src/lofi/
├── LofiApp.tsx                      # Main app entry point
├── lofi-routes.tsx                  # Route configuration
├── components/
│   ├── LofiRootLayout.tsx          # Root layout wrapper
│   ├── LofiGlobalNavigation.tsx    # Navigation component
│   ├── LofiGlobalFooter.tsx        # Footer component
│   └── LofiServicePageTemplate.tsx # Service page template
└── pages/
    ├── LofiHomePage.tsx            # Home page
    ├── LofiAboutUsPage.tsx         # About page
    ├── LofiContactUsPage.tsx       # Contact page
    ├── LofiGetQuotePage.tsx        # Quote form page
    ├── LofiJoinUsPage.tsx          # Careers page
    ├── LofiFindRehabClinicPage.tsx # Rehab locator
    ├── LofiFindOccHealthClinicPage.tsx # Occ health locator
    ├── LofiNotFoundPage.tsx        # 404 page
    └── services/
        ├── LofiAccommodationPage.tsx
        ├── LofiEarlyInterventionPage.tsx
        ├── LofiOccupationalTherapyPage.tsx
        ├── LofiErgonomicsPage.tsx
        ├── LofiTherapyPage.tsx
        └── LofiDisabilityManagementPage.tsx
```

## Development Notes

- All components are functional React components using hooks
- TypeScript types defined for props and contexts
- Tailwind CSS classes used for all styling
- No external dependencies beyond React Router and Lucide (for placeholder icons)
- Mobile-first responsive design approach
- Clean, readable code structure

---

**Created:** Thursday, April 2, 2026  
**Purpose:** Low-fidelity wireframe design for Santé Circle Health website  
**Based on:** Full-fidelity design in `/src/app/`
