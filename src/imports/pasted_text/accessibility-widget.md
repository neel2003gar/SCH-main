Add a fully functional Accessibility Widget to the existing Santé Circle Health 
website design. The widget should match the UserWay-style accessibility panel shown 
below. Do not change any existing design — only add this new accessibility layer on top.

---

## ACCESSIBILITY BUTTON (Trigger)

- Fixed position: bottom-left corner of the screen (24px from left, 24px from bottom)
- Round button, ~52px diameter, dark navy/black background (#1A2B4A)
- Icon: white universal accessibility figure (person with circle) — ♿ style
- Subtle drop shadow and a blue glow ring on hover
- Always visible on all pages and scroll positions (z-index: 9999)
- Tooltip on hover: "Accessibility Menu (CTRL+U)"
- Clicking it opens/closes the Accessibility Panel

---

## ACCESSIBILITY PANEL (Sidebar Overlay)

- Slides in from the LEFT side of the screen when the button is clicked
- Panel width: 220px, full viewport height, white background
- Scrollable if content overflows
- Has an X close button in the top-right corner of the panel
- Panel header: bold title "Accessibility Menu (CTRL+U)" with the accessibility icon

---

## SECTION 1 — LANGUAGE SELECTOR

- Dropdown at the top of the panel labeled with a flag icon + "English (USA) ▼"
- Opens a scrollable language search list:
    - Search bar with magnifier icon: "Search language"
    - Highlighted/selected: ✓ English (USA)
    - List items (with country flag icons):
        - Azerbaijani (Azeri)
        - Bahasa Indonesia (Indonesian)
        - Basque (Basque)
        - Català (Catalán)
        - French (Français)
        - Spanish (Español)
        - Arabic (العربية)
        - German (Deutsch)
        - (at least 8 languages total)
    - Selecting a language switches the website UI text to that language

---

## SECTION 2 — ACCESSIBILITY PROFILES

- Section label: "Accessibility Profiles ▼" with a small ℹ️ icon
- List of clickable profile buttons, each with an icon and label:
    1. 🦽 Motor Impaired
    2. 👁 Blind
    3. 🎨 Color Blind
    4. Df Dyslexia
    5. 👁 Low Vision
    6. 🧠 Cognitive & Learning
    7. ⚡ Seizure & Epileptic
    8. 🔄 ADHD
- Each profile, when clicked, activates a preset combination of accessibility 
  settings suited for that disability group
- Active profile shows a highlighted/filled state

---

## SECTION 3 — OVERSIZED WIDGET TOGGLE

- Row with label "XL Oversized Widget" and a blue ON/OFF toggle switch
- When ON: the accessibility button on screen becomes larger (72px)

---

## SECTION 4 — ACCESSIBILITY TOOLS GRID

2-column icon grid. Each tool is a white card with rounded corners, an outlined 
icon on top and a label below. Clicking each card toggles it ON (highlighted in 
blue) or OFF. Tools:

Row 1:
- [Screen Reader icon] "Screen Reader" → activates ARIA live region announcements 
  for all interactive elements
- [Half-circle contrast icon] "Contrast +" → increases contrast of all text and 
  backgrounds

Row 2:
- [Smart contrast icon] "Smart Contrast" → auto-adjusts contrast for readability
- [Link highlight icon] "Highlight Links" → underlines and highlights all 
  clickable links in yellow

Row 3:
- [Big T icon] "Bigger Text" → increases base font size by 20% each click 
  (up to 3 levels, resets on 4th)
- [Spacing arrows icon] "Text Spacing" → increases letter-spacing and line-height

Row 4:
- [Pause icon] "Pause Animations" → stops all CSS animations, transitions, 
  and GIF motion
- [Image with X icon] "Hide Images" → hides all decorative images, shows 
  alt text in gray boxes

Row 5:
- [Df icon] "Dyslexia Friendly" → switches body font to OpenDyslexic or similar 
  readable font
- [Cursor icon] "Cursor" → enlarges the mouse cursor to a large black arrow

Row 6:
- [Tooltip icon] "Tooltips" → shows descriptive tooltips on hover for all 
  buttons and links
- [Structure icon] "Page Structure" → highlights headings, landmarks, and 
  regions with colored outlines

Row 7:
- [Line height icon] "Line Height" → increases spacing between lines of text
- [Align icon] "Text Align" → switches body text to left-aligned for readability

Row 8:
- [Book icon] "Dictionary" → double-clicking any word opens a tooltip with 
  its definition
- [Droplet icon] "Saturation" → cycles through: normal → desaturated → 
  high saturation

---

## SECTION 5 — RESET BUTTON

- Full-width button at bottom of the tools grid
- Blue background (#1A6B9A), white text, rounded corners
- Icon: circular reset arrow + label: "Reset All Accessibility Settings"
- Clicking it turns off all active tools, restores default font/contrast/layout

---

## SECTION 6 — MOVE/HIDE WIDGET

- Small collapsible section at the very bottom of the panel
- Label: "Move/Hide Widget ▼"
- Three radio button options:
    - ◉ Left (currently selected)
    - ○ Right
    - ○ Hide
- Selecting "Right" moves the floating accessibility button to the bottom-right
- Selecting "Hide" hides the floating button (can only restore via CTRL+U keyboard 
  shortcut)

---

## PANEL FOOTER

- Small text at very bottom: "Manage" (link) and "USERWAY" logo style branding 
  (you can replace with "Santé Accessibility" or a generic label)

---

## KEYBOARD SHORTCUT

- CTRL + U (Windows) or CMD + U (Mac) toggles the panel open/closed from anywhere 
  on the page

---

## BEHAVIOR & INTERACTIONS

1. Panel opens with a smooth slide-in animation from the left (300ms ease)
2. Clicking outside the panel closes it
3. All tool toggles apply CSS changes live to the page in real time:
   - Contrast+: filter: contrast(150%) on body
   - Bigger Text: increases html font-size
   - Pause Animations: adds * { animation: none !important } to page
   - Hide Images: sets img { visibility: hidden }
   - Text Spacing: increases letter-spacing and line-height
   - Dyslexia Friendly: switches to a dyslexia-friendly font
   - Highlight Links: adds yellow background to all <a> tags
4. Active state for toggled tools: blue border + light blue background on card
5. Profile presets activate multiple tools simultaneously:
   - Blind: Screen Reader + Bigger Text + Highlight Links
   - Dyslexia: Dyslexia Friendly + Text Spacing + Line Height
   - Low Vision: Bigger Text + Contrast+ + Cursor
   - Seizure: Pause Animations + Reduce Saturation
   - ADHD: Pause Animations + Text Spacing + Hide Images
6. Language change re-renders all nav, hero, button, and section text
7. All settings persist while on the page (use component state)

---

## STYLING NOTES

- Panel background: white (#FFFFFF)
- Section dividers: light gray (#E8EEF3)
- Tool card default: white with #E8EEF3 border
- Tool card active: light blue (#E6F2FB) with #1A6B9A border
- Profile button active: filled dark navy background, white text
- All icons: outlined style, 24px, dark gray (#444)
- Fonts match the rest of the website (Inter)
- Do not cover or move any existing website content — panel overlays on top

Keep all existing Santé Circle Health design completely unchanged. 
Only add this accessibility layer.