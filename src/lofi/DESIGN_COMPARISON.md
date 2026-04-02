# Visual Comparison: Full Design vs Lo-Fi Design

This document provides a side-by-side comparison of design elements between the full-fidelity design and the lo-fidelity wireframe version.

---

## COLOR PALETTE

### Full Design
```
Primary Navy:    #0F2A45 / #1A3A5C
Light Green:     #6ABF4B
Accent Blue:     #2B7DC8
Backgrounds:     #EAF4FB, #F4F4F2, #F0F7F0
Text:            #333333, #777777
Borders:         #EEEDE8
```

### Lo-Fi Design
```
Primary:         #000000 (black)
Secondary:       #1F2937 (gray-800)
Borders:         #9CA3AF (gray-400), #6B7280 (gray-500)
Backgrounds:     #FFFFFF (white), #F9FAFB (gray-50), #F3F4F6 (gray-100), #E5E7EB (gray-200)
Text:            #000000 (black), #4B5563 (gray-600)
Placeholders:    #6B7280 (gray-500)
```

---

## TYPOGRAPHY

### Full Design
```
Headings:        DM Serif Display
  - H1: 2xl-4xl (32px-56px)
  - H2: xl-3xl (24px-40px)
  - H3: lg-xl (18px-24px)

Body:            DM Sans
  - Regular: 14px-16px
  - Small: 12px-14px

Line Height:     1.2 (headings), 1.6 (body)
Font Weight:     Bold (headings), Regular (body), Semibold (buttons)
```

### Lo-Fi Design
```
Headings:        System Sans-Serif (default)
  - H1: text-3xl-4xl (30px-36px)
  - H2: text-xl-2xl (20px-24px)
  - H3: text-sm-lg (14px-18px)

Body:            System Sans-Serif (default)
  - Regular: text-sm (14px)
  - Small: text-xs (12px)

Line Height:     Default (1.5)
Font Weight:     font-bold (headings), default (body)
```

---

## BUTTONS

### Full Design - Primary Button
```css
Background:      #6ABF4B (light green)
Text:            White
Padding:         px-5 py-2.5
Border Radius:   rounded-lg (8px)
Hover:           #5aaa3d (darker green)
Shadow:          hover:shadow-lg
Icon:            Lucide icons (16-18px)
```

### Lo-Fi Design - Primary Button
```css
Background:      gray-800 (black)
Text:            White
Padding:         px-4 py-2 / px-6 py-3
Border Radius:   none (sharp corners)
Hover:           none (static)
Shadow:          none
Border:          border-2 border-gray-800
Icon:            Square placeholder (16px)
```

### Full Design - Secondary Button
```css
Background:      Transparent
Text:            #1A3A5C (navy) or #6ABF4B (green)
Border:          2px solid current color
Padding:         px-5 py-2.5
Hover:           Background fill with color
```

### Lo-Fi Design - Secondary Button
```css
Background:      Transparent or white
Text:            Black
Border:          border-2 border-gray-400
Padding:         px-6 py-3
Hover:           bg-gray-800 text-white
```

---

## CARDS

### Full Design - Service Card
```css
Background:      White
Border:          1px solid #EEEDE8
Border Left:     4px solid (alternating #6ABF4B / #2B7DC8)
Border Radius:   rounded-2xl (16px)
Padding:         p-6 / p-8
Shadow:          0 4px 16px rgba(0,0,0,0.06)
Hover:           shadow-lg

Icon Container:
  Background:    rgba(106, 191, 75, 0.12) or rgba(43, 125, 200, 0.12)
  Size:          w-12 h-12
  Border Radius: rounded-xl
```

### Lo-Fi Design - Service Card
```css
Background:      White
Border:          border-2 border-gray-400
Border Left:     (same 2px as all borders)
Border Radius:   none (sharp corners)
Padding:         p-6
Shadow:          none
Hover:           hover:shadow-lg

Icon Container:
  Background:    none
  Border:        border-2 border-gray-400
  Size:          w-12 h-12
  Border Radius: none (square)
```

---

## NAVIGATION

### Full Design - Top Bar
```css
Background:      #1A3A5C (navy)
Text:            White
Height:          auto (py-2)
Padding:         px-4 py-2

Elements:
  - Phone with icon (white)
  - Email with icon (white)
  - Language toggle (styled buttons)
  - Text: "Contact us today!"
```

### Lo-Fi Design - Top Bar
```css
Background:      gray-100
Border:          border-b border-gray-300
Text:            Black
Height:          auto (py-2)
Padding:         px-4 py-2

Elements:
  - [Phone Icon] [Phone] (bordered box)
  - [Email Icon] [Email] (bordered box)
  - EN/FR buttons (bordered, active state)
```

### Full Design - Main Nav
```css
Background:      White
Border:          none
Shadow:          When scrolled: shadow-md
Sticky:          Yes (top-0)

Logo:
  - Actual logo image
  - Size: height auto

Dropdowns:
  - Animated slide-down
  - Colored hover states
  - Icons with ChevronDown
```

### Lo-Fi Design - Main Nav
```css
Background:      White
Border:          border-b-2 border-gray-400
Shadow:          shadow-sm (always)
Sticky:          Yes (top-0)

Logo:
  - [LOGO] in bordered box
  - Size: w-32 h-10

Dropdowns:
  - Static [Services ▼] text
  - No animation
  - Border on hover
```

---

## FORMS

### Full Design - Input Field
```css
Background:      White
Border:          1px solid #EEEDE8
Border Radius:   rounded-lg
Padding:         px-4 py-2.5
Focus:           border-color: #6ABF4B, ring-2 ring-#6ABF4B/20

Label:
  Font:          DM Sans, semibold
  Color:         #1A3A5C
  Size:          text-sm
```

### Lo-Fi Design - Input Field
```css
Background:      White or gray-100
Border:          border-2 border-gray-400
Border Radius:   none
Padding:         p-3
Focus:           none (static appearance)

Label:
  Font:          System sans
  Color:         Black
  Size:          text-xs
  Display:       Bordered box above input
```

### Full Design - Textarea
```css
Same as input but:
  Min Height:    h-32
  Resize:        resize-vertical
```

### Lo-Fi Design - Textarea
```css
Background:      White or gray-100
Border:          border-2 border-gray-400
Height:          h-32 (fixed)
Resize:          none
Content:         [Textarea Field] placeholder
```

---

## HERO SECTION

### Full Design
```css
Background:      Gradient overlay on hero image
  - Image: Actual photo from Figma assets
  - Overlay: bg-gradient-to-r from-[#1A3A5C]/40 via-[#1A3A5C]/20 to-transparent
Height:          min-h-[500px-700px] (responsive)

Content Card:
  Background:    White
  Border Radius: rounded-2xl
  Padding:       p-5 to p-7
  Shadow:        shadow-2xl
  Max Width:     max-w-md

Tag:
  Background:    rgba(106, 191, 75, 0.20)
  Color:         #6ABF4B
  Border:        1px solid #6ABF4B
  Border Radius: rounded-full
```

### Lo-Fi Design
```css
Background:      gray-200 solid color
  - Image:       "[HERO IMAGE]" text at 20% opacity
  - Overlay:     none
Height:          py-16 to py-24

Content Card:
  Background:    White
  Border:        border-2 border-gray-500
  Border Radius: none
  Padding:       p-6
  Shadow:        shadow-lg
  Max Width:     max-w-md

Tag:
  Background:    none
  Color:         Black
  Border:        border border-gray-400
  Border Radius: none
```

---

## ICONS

### Full Design
```
Library:         Lucide React
Size:            16px (small), 20-24px (medium), 28-32px (large)
Color:           Contextual (#6ABF4B, #2B7DC8, #1A3A5C, white)
Stroke Width:    2px (default)

Examples:
  - Lock (for secure features)
  - LogIn (for portal access)
  - MapPin (for locations)
  - Briefcase (for services)
  - Shield (for protection)
  - Users (for team)
```

### Lo-Fi Design
```
Library:         Lucide React (Square only)
Size:            16px, 20px, 24px
Color:           Black/gray
Stroke Width:    default

Display:
  - All icons shown as <Square /> component
  - Represents placeholder for any icon
  - Consistent sizing in bordered containers
```

---

## IMAGES

### Full Design
```
Sources:
  - Figma assets (imported via figma:asset)
  - Unsplash (via unsplash_tool)

Display:
  - Full resolution
  - Object-fit: cover
  - Border radius: rounded-2xl or rounded-xl
  - Aspect ratios maintained

Examples:
  - Hero: 1200x700px+
  - Team: 400x300px
  - Testimonials: Often without images
```

### Lo-Fi Design
```
Sources:
  - None (all placeholders)

Display:
  - Gray boxes (bg-gray-300 or bg-gray-200)
  - Text labels: [IMAGE], [PHOTO], [MAP]
  - Border: border-2 border-gray-400
  - Fixed aspect ratios (h-48, h-64, etc.)
  - No border radius

Examples:
  - Hero: "[HERO IMAGE]" in large text
  - Team: "[PHOTO]" in 192px height box
  - Maps: "[MAP PLACEHOLDER]" text
```

---

## SECTIONS

### Full Design - Services Grid
```css
Background:      #EAF4FB (light blue)
Padding:         py-12 to py-20
Grid:            grid-cols-1 md:grid-cols-2
Gap:             gap-4 to gap-6

Title:
  Font:          DM Serif Display
  Size:          text-2xl to text-4xl
  Color:         #1A3A5C
  Alignment:     Center
  Margin:        mb-12 to mb-16
```

### Lo-Fi Design - Services Grid
```css
Background:      gray-100
Padding:         py-16
Grid:            grid-cols-1 md:grid-cols-2
Gap:             gap-6

Title:
  Font:          System sans
  Size:          text-2xl to text-3xl
  Color:         Black
  Display:       Bordered box (border-2 border-gray-400)
  Alignment:     Center
  Margin:        mb-12
```

---

## SPACING SYSTEM

### Full Design
```
Component Padding:  p-4, p-6, p-8 (16px, 24px, 32px)
Section Padding:    py-12, py-16, py-20 (48px, 64px, 80px)
Grid Gaps:          gap-4, gap-6, gap-8 (16px, 24px, 32px)
Element Margins:    mb-3, mb-4, mb-6, mb-12 (12px, 16px, 24px, 48px)
Max Widths:         1000px, 1100px, 1200px
```

### Lo-Fi Design
```
Component Padding:  p-4, p-6, p-8 (same as full)
Section Padding:    py-12, py-16 (48px, 64px)
Grid Gaps:          gap-4, gap-6, gap-8 (same as full)
Element Margins:    mb-3, mb-4, mb-6, mb-8, mb-12 (same as full)
Max Widths:         800px, 900px, 1000px, 1200px
```

**Note:** Spacing system is largely preserved between full and lo-fi designs.

---

## SHADOWS

### Full Design
```css
Cards:           shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl
Hover:           hover:shadow-xl
Custom:          0 4px 16px rgba(0, 0, 0, 0.06)
Nav Scroll:      shadow-md
```

### Lo-Fi Design
```css
Cards:           none (except on hover)
Hover:           hover:shadow-lg
Nav:             shadow-sm (always)
Custom:          shadow-lg (8px blur)
```

---

## BORDERS & CORNERS

### Full Design
```css
Border Radius:
  - rounded-lg (8px) - buttons, inputs
  - rounded-xl (12px) - icon containers
  - rounded-2xl (16px) - cards
  - rounded-full - tags, avatars

Border Width:
  - 1px (standard)
  - 2px (emphasis)
  - 4px (colored left border on cards)

Border Colors:
  - #EEEDE8 (standard)
  - #6ABF4B (green)
  - #2B7DC8 (blue)
```

### Lo-Fi Design
```css
Border Radius:
  - none (0px) - everything
  - rounded-full - only for numbered circles

Border Width:
  - border (1px) - secondary elements
  - border-2 (2px) - primary containers

Border Colors:
  - gray-300 (#D1D5DB) - light borders
  - gray-400 (#9CA3AF) - standard borders
  - gray-500 (#6B7280) - emphasis borders
  - dashed - upload areas only
```

---

## HOVER STATES

### Full Design
```css
Buttons:
  - Background color change
  - Shadow increase
  - Scale: scale-105
  - Smooth transition

Cards:
  - Shadow increase
  - Border color change
  - Smooth transition

Links:
  - Color change
  - Underline animation
```

### Lo-Fi Design
```css
Buttons:
  - Color inversion (secondary buttons)
  - No animation
  - Static appearance

Cards:
  - Shadow appearance: hover:shadow-lg
  - No other changes

Links:
  - Underline (static)
  - No animation
```

---

## RESPONSIVE BEHAVIOR

### Full Design & Lo-Fi Design
**Both use the same breakpoint system:**

```css
Mobile:          < 640px
  - Stack all grids
  - Full-width buttons
  - Mobile menu
  - Reduced padding

Tablet:          640px - 1024px
  - 2-column grids
  - Side-by-side buttons
  - Visible navigation

Desktop:         > 1024px
  - 3-4 column grids
  - Full navigation
  - Maximum padding
  - Centered containers
```

---

## CONTENT PLACEHOLDERS

### Full Design
```
Real content in English and French:
  - Actual headings
  - Full paragraphs
  - Real company information
  - Specific service descriptions
  - Client testimonials
```

### Lo-Fi Design
```
Placeholder patterns:
  - [HEADING] for titles
  - [Description] for body text
  - [Button Text] for CTAs
  - [Label: Field] for forms
  - [Icon] for icons
  - [IMAGE] for photos
  - "Quoted example" for reference
```

---

## ACCESSIBILITY

### Full Design
```
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators (colored rings)
- Alt text on images
- Color contrast: WCAG AA compliant
- Screen reader support
```

### Lo-Fi Design
```
- Semantic HTML (preserved)
- No ARIA labels (structure only)
- Keyboard navigation (functional)
- Basic focus indicators
- Placeholder alt text
- High contrast (black/white/gray)
- Structure supports screen readers
```

---

## ANIMATION & TRANSITIONS

### Full Design
```css
Transitions:
  - duration-200, duration-300
  - ease-in-out
  - Properties: all, transform, shadow, colors

Animations:
  - Fade in (opacity)
  - Slide up (translateY)
  - Scale (hover)
  - Dropdown slide
```

### Lo-Fi Design
```css
Transitions:
  - Minimal to none
  - Only hover states (shadow)
  - No timing functions
  - Static appearance

Animations:
  - None
  - Instant state changes
```

---

## SUMMARY TABLE

| Element | Full Design | Lo-Fi Design |
|---------|------------|--------------|
| **Colors** | 5+ colors with variations | Grayscale only |
| **Fonts** | Custom (DM Serif, DM Sans) | System default |
| **Images** | Real photos | Gray placeholders |
| **Icons** | Full Lucide library | Square shapes only |
| **Borders** | Rounded corners | Sharp corners |
| **Shadows** | Extensive use | Minimal use |
| **Animations** | Smooth transitions | None |
| **Content** | Real copy (EN/FR) | Placeholders in brackets |
| **Buttons** | Styled with hover | Simple with borders |
| **Forms** | Styled inputs | Bordered boxes |
| **Layout** | ✓ Identical | ✓ Identical |
| **Structure** | ✓ Identical | ✓ Identical |
| **Spacing** | ✓ Same system | ✓ Same system |
| **Responsive** | ✓ Identical | ✓ Identical |

---

## WHEN TO USE EACH

### Use Full Design For:
- Final production website
- Marketing and sales
- User-facing application
- Brand presentation
- Demo to clients
- A/B testing with real content

### Use Lo-Fi Design For:
- Early-stage planning
- Stakeholder alignment on structure
- User flow testing
- Information architecture review
- Developer reference (layout)
- Quick iterations on structure
- Documentation of page organization

---

## TRANSITION PATH

**From Lo-Fi to Full Design:**

1. Structure ✓ (Already defined in lo-fi)
2. Add color palette
3. Apply custom fonts
4. Insert real images
5. Add proper icons
6. Apply rounded corners
7. Add shadows and depth
8. Implement animations
9. Add real content
10. Polish interactions

**Time Saved:** Lo-fi structure means layout is already solved, focus full design effort on visual polish and content.

---

**Document Version:** 1.0  
**Last Updated:** Thursday, April 2, 2026  
**Purpose:** Visual reference for design comparison
