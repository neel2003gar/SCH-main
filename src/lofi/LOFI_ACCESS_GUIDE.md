# Santé Circle Health - Lo-Fi Design Access Guide

## Quick Start

The lo-fidelity (wireframe) version of the Santé Circle Health website has been created in the `/src/lofi/` directory.

### How to View the Lo-Fi Design

To integrate the lo-fi design into your application, you have two options:

#### Option 1: Separate Entry Point (Recommended for Comparison)
Update your main `App.tsx` to conditionally render the lo-fi version:

```tsx
// In /src/app/App.tsx
import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { lofiRouter } from '../lofi/lofi-routes';

function App() {
  const [showLofi, setShowLofi] = useState(false);
  
  return (
    <div>
      <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999 }}>
        <button 
          onClick={() => setShowLofi(!showLofi)}
          style={{ 
            padding: '10px 20px', 
            background: showLofi ? '#333' : '#6ABF4B',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {showLofi ? 'View Full Design' : 'View Lo-Fi'}
        </button>
      </div>
      <RouterProvider router={showLofi ? lofiRouter : router} />
    </div>
  );
}

export default App;
```

#### Option 2: Direct Routes
The lo-fi design is accessible via routes prefixed with `/lofi`:

- Home: `/lofi`
- Services: `/lofi/services/[service-name]`
- About: `/lofi/about-us`
- Contact: `/lofi/contact-us`
- Get Quote: `/lofi/get-quote`
- Join Us: `/lofi/join-us`
- Find Clinics: `/lofi/find-rehab-clinic` or `/lofi/find-occ-health-clinic`

## What's Included

### Complete Page Set (14 Pages)
✅ Home Page with all sections  
✅ 6 Service Pages (Accommodation, Early Intervention, OT, Ergonomics, Therapy, Disability Mgmt)  
✅ About Us Page  
✅ Contact Us Page  
✅ Get Quote Page  
✅ Join Us (Careers) Page  
✅ Find Rehab Clinic Page  
✅ Find Occ Health Clinic Page  
✅ 404 Not Found Page  

### Features
✅ Responsive layouts (mobile, tablet, desktop)  
✅ Bilingual structure (EN/FR toggle)  
✅ Navigation with dropdown placeholders  
✅ Footer with all sections  
✅ Form wireframes (contact, quote, job application)  
✅ Clinic locator layouts  
✅ Service page template  

## Design Characteristics

**Visual Style:**
- Grayscale only (no colors except black/gray/white)
- Bordered boxes for all elements
- Placeholder text in brackets `[LIKE THIS]`
- Simple icon placeholders (squares)
- Image areas shown as gray boxes with labels

**Layout:**
- Matches exact structure of full design
- Same sections and components
- Same information hierarchy
- Same navigation flow

**Typography:**
- All text uses system fonts
- Bold for headings
- Regular for body text
- Size variations preserved

## Comparison: Lo-Fi vs Full Design

| Element | Full Design | Lo-Fi Design |
|---------|------------|--------------|
| Colors | Navy #0F2A45, Green #6ABF4B, Blue #2B7DC8 | Grayscale only |
| Fonts | DM Serif Display, DM Sans | System fonts |
| Images | Real photos from Unsplash/Figma | Gray boxes with [IMAGE] text |
| Icons | Lucide icons | Square placeholders |
| Content | Full copy in EN/FR | Placeholder text |
| Styling | Gradients, shadows, rounded corners | Simple borders |
| Forms | Styled inputs | Bordered boxes |

## Use Cases

1. **Stakeholder Review** - Present layout and structure without design details
2. **User Testing** - Test navigation and information architecture
3. **Development Planning** - Reference for component structure
4. **Client Presentations** - Show wireframes before final design
5. **Documentation** - Blueprint for future updates

## Navigation Comparison

### Full Design Navigation
- Colored background
- Logo with actual image
- Styled dropdowns
- Colored buttons
- Smooth animations

### Lo-Fi Navigation
- White background with borders
- [LOGO] placeholder box
- Simple dropdown indicators
- Bordered buttons
- No animations

## Page-by-Page Guide

### Home Page (`/lofi`)
- Hero with image placeholder and content card
- 4-item quick action bar
- 6 service cards in grid
- "Why Choose Us" with 4 reasons
- Team section with 4 members
- 3 testimonials
- Final CTA

### Service Pages (`/lofi/services/*`)
- Hero with title/subtitle
- Content sections with borders
- Feature grids
- 3-column benefits
- CTA with 2 buttons

### Contact Page (`/lofi/contact-us`)
- 2-column layout: form + info
- Office location cards
- Business hours
- Map placeholder

### Quote Page (`/lofi/get-quote`)
- 5-question progressive form
- Various input types shown
- Submit button
- Trust indicators

### About Page (`/lofi/about-us`)
- Mission statement
- Company overview
- Values grid
- Team profiles

### Join Us Page (`/lofi/join-us`)
- Benefits grid
- Job listings
- Application form

### Clinic Locators (`/lofi/find-*-clinic`)
- Search bar
- Clinic cards with maps
- Service tags
- Get directions buttons
- Map view

## File Locations

```
📁 /src/lofi/
  📄 LofiApp.tsx - Entry point
  📄 lofi-routes.tsx - Route config
  📄 README.md - Detailed documentation
  📄 LOFI_ACCESS_GUIDE.md - This file
  
  📁 components/
    📄 LofiRootLayout.tsx
    📄 LofiGlobalNavigation.tsx
    📄 LofiGlobalFooter.tsx
    📄 LofiServicePageTemplate.tsx
  
  📁 pages/
    📄 LofiHomePage.tsx
    📄 LofiAboutUsPage.tsx
    📄 LofiContactUsPage.tsx
    📄 LofiGetQuotePage.tsx
    📄 LofiJoinUsPage.tsx
    📄 LofiFindRehabClinicPage.tsx
    📄 LofiFindOccHealthClinicPage.tsx
    📄 LofiNotFoundPage.tsx
    
    📁 services/
      📄 LofiAccommodationPage.tsx
      📄 LofiEarlyInterventionPage.tsx
      📄 LofiOccupationalTherapyPage.tsx
      📄 LofiErgonomicsPage.tsx
      📄 LofiTherapyPage.tsx
      📄 LofiDisabilityManagementPage.tsx
```

## Benefits of Lo-Fi Design

1. **Focus on Structure** - Layout without distraction
2. **Quick Iterations** - Easy to modify and test
3. **Cost Effective** - Changes are simpler before full design
4. **User Testing** - Test flows without design bias
5. **Stakeholder Alignment** - Get buy-in on structure first
6. **Developer Reference** - Clear component hierarchy

## Next Steps

1. Review the lo-fi design structure
2. Gather feedback on layout and organization
3. Test user flows through the wireframes
4. Make structural changes if needed
5. Use as reference for full design implementation

## Notes

- All functionality is visual only (forms don't submit)
- Language toggle switches state but doesn't translate content
- Links and buttons show destinations
- Mobile menu opens/closes
- All pages are responsive

---

**Questions or Issues?**  
Refer to `/src/lofi/README.md` for detailed documentation.
