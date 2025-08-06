# Darvin Security Website - Complete Design Specifications

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Primary Blue**: `#3b82f6` (rgb(59, 130, 246))
- **Primary Blue Dark**: `#1d4ed8` (rgb(29, 78, 216))
- **Primary Blue Light**: `#60a5fa` (rgb(96, 165, 250))

#### Background Colors
- **Slate 900**: `#0f172a` (rgb(15, 23, 42)) - Main background
- **Slate 800**: `#1e293b` (rgb(30, 41, 59)) - Card backgrounds
- **Slate 700**: `#334155` (rgb(51, 65, 85)) - Borders

#### Text Colors
- **White**: `#ffffff` - Primary text
- **Slate 300**: `#cbd5e1` - Secondary text
- **Slate 400**: `#94a3b8` - Muted text
- **Slate 500**: `#64748b` - Disabled text

#### Accent Colors
- **Cyan 400**: `#22d3ee` - Highlights and accents
- **Green 400**: `#4ade80` - Success states
- **Green 500**: `#22c55e` - Active indicators
- **Red 400**: `#f87171` - Error states
- **Orange 400**: `#fb923c` - Warning states

#### Service Planet Colors
1. **Threat Intelligence**: `linear-gradient(135deg, #ef4444, #f97316, #dc2626)`
2. **Endpoint Security**: `linear-gradient(135deg, #fb923c, #fbbf24, #f59e0b)`
3. **Network Security**: `linear-gradient(135deg, #4ade80, #10b981, #059669)`
4. **Data Protection**: `linear-gradient(135deg, #14b8a6, #06b6d4, #0891b2)`
5. **AI Security**: `linear-gradient(135deg, #60a5fa, #0ea5e9, #0284c7)`
6. **Cloud Security**: `linear-gradient(135deg, #6366f1, #3b82f6, #2563eb)`
7. **Behavioral Analytics**: `linear-gradient(135deg, #a855f7, #8b5cf6, #7c3aed)`
8. **Zero Trust**: `linear-gradient(135deg, #ec4899, #f43f5e, #e11d48)`
9. **Identity Management**: `linear-gradient(135deg, #22d3ee, #3b82f6, #06b6d4)`
10. **Incident Response**: `linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)`

### Typography

#### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`

#### Font Sizes
- **Hero Title**: `3.75rem` (60px) on desktop, `3rem` (48px) on mobile
- **Section Titles**: `2.25rem` (36px)
- **Card Titles**: `1.25rem` (20px)
- **Body Text**: `1.125rem` (18px)
- **Small Text**: `0.875rem` (14px)
- **Micro Text**: `0.75rem` (12px)

#### Font Weights
- **Bold**: `700` - Headings and emphasis
- **Semibold**: `600` - Subheadings
- **Medium**: `500` - Buttons and labels
- **Regular**: `400` - Body text

#### Line Heights
- **Tight**: `1.25` - Large headings
- **Normal**: `1.5` - Body text
- **Relaxed**: `1.625` - Descriptive text

### Spacing System

#### Base Unit: 4px

#### Spacing Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)
- **4xl**: `5rem` (80px)

#### Component Spacing
- **Button Padding**: `0.5rem 1rem` (8px 16px) - default
- **Button Padding Large**: `0.75rem 2rem` (12px 32px)
- **Card Padding**: `1.5rem` (24px)
- **Section Padding**: `5rem 0` (80px 0)
- **Container Max Width**: `1280px`
- **Container Padding**: `1rem` (16px)

### Shadows

#### Shadow Levels
- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Extra Large**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

#### Glow Effects
- **Blue Glow**: `0 0 20px rgba(59, 130, 246, 0.5)`
- **Cyan Glow**: `0 0 15px rgba(34, 211, 238, 0.6)`
- **Button Glow**: `0 4px 14px 0 rgba(37, 99, 235, 0.25)`

### Border Radius

- **Small**: `0.375rem` (6px)
- **Medium**: `0.5rem` (8px)
- **Large**: `0.75rem` (12px)
- **Extra Large**: `1rem` (16px)
- **Full**: `9999px` (circular)

## 📐 Layout Specifications

### Grid System

#### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `≥ 1024px`
- **Large Desktop**: `≥ 1280px`

#### Container
- **Max Width**: `1280px`
- **Padding**: `1rem` (16px) on mobile, `2rem` (32px) on desktop
- **Margin**: `0 auto` (centered)

#### Grid Columns
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns (services), 2 columns (features)

### Header Specifications

#### Dimensions
- **Height**: `80px`
- **Background**: `rgba(15, 23, 42, 0.9)` with backdrop blur
- **Border**: `1px solid rgba(51, 65, 85, 0.5)` bottom border

#### Logo Section
- **Logo Size**: `48px × 48px`
- **Logo Spacing**: `12px` right margin
- **Company Name**: `2xl` font size, `bold` weight
- **Tagline**: `xs` font size, `0.1em` letter spacing

#### Navigation
- **Item Spacing**: `2rem` (32px) between items
- **Font Size**: `0.875rem` (14px)
- **Font Weight**: `500` (medium)
- **Hover Transition**: `150ms ease-in-out`

#### CTA Button
- **Size**: Large (`44px` height)
- **Padding**: `12px 32px`
- **Shadow**: `0 4px 14px 0 rgba(37, 99, 235, 0.25)`

### Hero Section Specifications

#### Layout
- **Section Padding**: `5rem 0` (80px) mobile, `8rem 0` (128px) desktop
- **Grid**: 2 columns on desktop (50/50 split)
- **Gap**: `4rem` (64px) between columns

#### Text Content
- **Badge Margin**: `1.5rem` (24px) bottom
- **Title Margin**: `1.5rem` (24px) bottom
- **Description Margin**: `2rem` (32px) bottom
- **Button Group Margin**: `3rem` (48px) bottom

#### 3D Globe Container
- **Dimensions**: `500px × 500px`
- **Perspective**: `1500px`
- **Position**: Centered in container

### 3D Globe Specifications

#### Central Globe
- **Size**: `160px × 160px`
- **Background**: Radial gradient from `#3b82f6` to `#0f172a`
- **Animation**: 60s continuous rotation
- **Glow Effect**: Pulsing shadow with 6s cycle

#### Globe Network Grid
- **Latitude Lines**: 8 lines, 12.5% spacing
- **Longitude Lines**: 12 lines, 30° rotation each
- **Line Color**: `rgba(34, 211, 238, 0.3)`
- **Line Width**: `1px`

#### Central Shield Icon
- **Size**: `64px × 64px`
- **Color**: `#22d3ee` (cyan-300)
- **Glow**: `0 0 20px rgba(6, 182, 212, 0.8)`
- **Animation**: 8s floating motion

#### Orbital Rings
- **Ring 1**: `320px` diameter
- **Ring 2**: `400px` diameter  
- **Ring 3**: `480px` diameter
- **Border**: `1px solid rgba(59, 130, 246, 0.25)`
- **Animation**: 15s+ rotation with staggered delays

### Satellite System Specifications

#### Satellite Dimensions
- **Base Size**: `32px - 40px` (varies by service)
- **Orbit Radius**: `200px` from center
- **Orbit Duration**: `60s` complete rotation
- **Counter-rotation**: `-60s` to keep icons upright

#### Satellite Design
- **Border**: `4px solid rgba(255, 255, 255, 0.2)`
- **Inner Padding**: `8px`
- **Icon Size**: `16px - 20px` (50% of satellite size)
- **Glow Effect**: Service-specific color with opacity variations

#### Active State
- **Scale**: `1.25x` (25% larger)
- **Glow Intensity**: Increased to `0 0 40px` with service color
- **Pulse Ring**: Additional animated ring at `1.2x` scale
- **Label Opacity**: `1.0` (fully visible)

#### Service Distribution
- **Total Services**: 10
- **Angular Spacing**: `36°` between each satellite
- **Starting Positions**: Evenly distributed around 360°

### Animation Specifications

#### Globe Rotation
\`\`\`css
@keyframes globe3DRotate {
  0% { transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); }
}
\`\`\`
- **Duration**: `60s`
- **Easing**: `ease-in-out`
- **Iteration**: `infinite`

#### Globe Pulse
\`\`\`css
@keyframes globePulse {
  0%, 100% { 
    box-shadow: 0 0 60px rgba(59, 130, 246, 0.8);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 80px rgba(59, 130, 246, 1);
    transform: scale(1.05);
  }
}
\`\`\`
- **Duration**: `6s`
- **Easing**: `ease-in-out`
- **Iteration**: `infinite`

#### Satellite Orbit
\`\`\`css
@keyframes satelliteOrbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
\`\`\`
- **Duration**: `60s`
- **Easing**: `linear`
- **Iteration**: `infinite`

#### Satellite Counter-Rotation
\`\`\`css
@keyframes satelliteCounterRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
\`\`\`
- **Duration**: `60s`
- **Easing**: `linear`
- **Iteration**: `infinite`

#### Station Glow (Active State)
\`\`\`css
@keyframes stationGlow {
  0%, 100% {
    box-shadow: 0 0 30px var(--glow-color);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 60px var(--glow-color);
    transform: scale(1.08);
  }
}
\`\`\`
- **Duration**: `4s`
- **Easing**: `cubic-bezier(0.4, 0, 0.6, 1)`
- **Iteration**: `infinite`

### Threat Simulation Specifications

#### Asteroid Generation
- **Spawn Rate**: Every 3-7 seconds (randomized)
- **Spawn Positions**: Left edge (-50px) or right edge (650px)
- **Target**: Center of globe (300px, 250px)
- **Speed**: `0.5 - 2.0` pixels per frame
- **Size**: `8px - 20px` diameter

#### Asteroid Types
1. **Malware**: `#ef4444` (red)
2. **Phishing**: `#f97316` (orange)
3. **DDoS**: `#eab308` (yellow)
4. **Ransomware**: `#dc2626` (dark red)
5. **Data Breach**: `#7c3aed` (purple)

#### Asteroid Animation
\`\`\`css
@keyframes asteroidSpin {
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(360deg) scale(1.1); }
}
\`\`\`
- **Duration**: `2-3s` (randomized)
- **Easing**: `linear`
- **Iteration**: `infinite`

#### Interception System
- **Detection Range**: `80-120px` from center (randomized)
- **Interception Rate**: ~80% of asteroids
- **Explosion Duration**: `0.8s`
- **Particle Count**: 6 particles per explosion

#### Defense Beam
- **Width**: `8px`
- **Length**: Variable (to interceptor satellite)
- **Color**: `linear-gradient(to right, transparent, #3b82f6, transparent)`
- **Duration**: `0.5s`
- **Glow**: `0 0 15px #3b82f6`

### Background Effects Specifications

#### Network Grid
- **Grid Size**: `100px × 100px`
- **Line Color**: `rgba(59, 130, 246, 0.1)`
- **Line Width**: `1px`
- **Pattern**: Perpendicular lines

#### Network Nodes
- **Count**: 20 nodes
- **Size**: `12px × 12px`
- **Color**: `rgba(59, 130, 246, 0.6)`
- **Glow**: `0 0 10px rgba(59, 130, 246, 0.3)`
- **Animation**: Pulsing with staggered delays

#### Connection Lines
- **Count**: 15 lines
- **Stroke**: `url(#networkGradient)`
- **Width**: `1px`
- **Pattern**: `5px, 5px` dashed
- **Animation**: Flowing effect with 8s+ duration

#### Floating Security Elements
- **Count**: 8 shield icons
- **Size**: `64px × 64px`
- **Opacity**: `0.1`
- **Color**: `#93c5fd` (blue-300)
- **Animation**: 20s+ floating motion with rotation

#### Mouse Interaction Glow
- **Size**: `384px × 384px` (96 × 4)
- **Background**: `radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)`
- **Transition**: `500ms ease-out`
- **Inner Ring**: `160px × 160px` with pulsing border

## 🎛️ Component Specifications

### Button Component

#### Variants
1. **Default**
   - Background: `#2563eb`
   - Text: `#ffffff`
   - Hover: `#1d4ed8`
   - Focus Ring: `#3b82f6`

2. **Outline**
   - Background: `transparent`
   - Border: `1px solid #475569`
   - Text: `#cbd5e1`
   - Hover: `rgba(30, 41, 59, 0.5)`

3. **Ghost**
   - Background: `transparent`
   - Text: `#cbd5e1`
   - Hover: `rgba(30, 41, 59, 0.5)`

#### Sizes
1. **Default**: `40px` height, `16px` padding
2. **Small**: `36px` height, `12px` padding
3. **Large**: `44px` height, `32px` padding

#### States
- **Default**: Base styling
- **Hover**: Color transition `150ms`
- **Focus**: Ring with `2px` offset
- **Disabled**: `50%` opacity, no pointer events

### Card Component

#### Structure
- **Container**: Rounded corners `8px`, border `1px`
- **Header**: `24px` padding
- **Content**: `24px` padding, `0` top padding
- **Background**: `rgba(30, 41, 59, 0.5)`
- **Border**: `rgba(51, 65, 85, 0.5)`

#### Hover State
- **Background**: `rgba(30, 41, 59, 0.7)`
- **Transition**: `300ms ease-in-out`
- **Transform**: Subtle lift effect

### Badge Component

#### Default Style
- **Padding**: `2.5px 10px`
- **Border Radius**: `9999px` (fully rounded)
- **Font Size**: `12px`
- **Font Weight**: `500`
- **Display**: `inline-flex`
- **Align Items**: `center`

#### Variants
1. **Default**: Blue background with white text
2. **Secondary**: Slate background with light text
3. **Outline**: Transparent with border

### Status Panel Specifications

#### Dimensions
- **Width**: Auto (content-based)
- **Padding**: `16px`
- **Background**: `rgba(30, 41, 59, 0.95)`
- **Border Radius**: `8px`
- **Backdrop Filter**: `blur(24px)`

#### Content Layout
- **Status Indicator**: `12px` cyan dot with pulse animation
- **Title**: `14px` medium weight white text
- **Description**: `12px` slate-400 text
- **Counter**: `12px` green-400 semibold text

#### Position
- **Bottom**: `32px` below globe container
- **Horizontal**: Centered with transform

## 📱 Responsive Design Specifications

### Mobile (< 768px)

#### Layout Changes
- **Hero**: Single column layout
- **Globe Size**: Reduced to `400px × 400px`
- **Satellite Size**: Reduced by 20%
- **Text Sizes**: Reduced by 1 step
- **Padding**: Reduced to `16px`

#### Navigation
- **Hidden**: Desktop navigation hidden
- **Mobile Menu**: Hamburger menu (to be implemented)

### Tablet (768px - 1023px)

#### Layout Changes
- **Services Grid**: 2 columns
- **Globe Size**: `450px × 450px`
- **Container Padding**: `24px`

### Desktop (≥ 1024px)

#### Layout Changes
- **Services Grid**: 3 columns
- **Full Globe Size**: `500px × 500px`
- **Container Padding**: `32px`

## 🎯 Interactive Behavior Specifications

### Service Rotation System
- **Interval**: `4000ms` (4 seconds)
- **Active Service**: Cycles through all 10 services
- **Visual Changes**: Scale, glow, and label opacity
- **Energy Beam**: Connects globe to active satellite

### Mouse Tracking
- **Update Rate**: On `mousemove` event
- **Glow Position**: Follows cursor with `500ms` transition
- **Effect Radius**: `192px` from cursor center

### Threat Counter
- **Initial Value**: `1247`
- **Increment**: +1 per intercepted asteroid
- **Format**: Comma-separated thousands
- **Update**: Real-time with interceptions

### Performance Considerations
- **Animation Frame Rate**: 60fps target
- **Asteroid Limit**: Maximum 9 active asteroids
- **Cleanup**: Remove completed animations
- **Memory Management**: Clear intervals on unmount

## 🎨 Asset Requirements

### Logo Specifications
- **Format**: PNG with transparency
- **Size**: `48px × 48px` minimum
- **Usage**: Header and footer
- **Fallback**: Text-based logo if image unavailable

### Icon Requirements
- **Format**: SVG components
- **Size**: `24px × 24px` default
- **Stroke Width**: `2px`
- **Style**: Outline style, consistent with Lucide icons

### Image Placeholders
- **Globe Textures**: Not required (CSS gradients used)
- **Background Patterns**: CSS-generated grid patterns
- **Particle Effects**: CSS-generated elements

This comprehensive specification document provides all the measurements, colors, animations, and behavioral details needed to recreate the Darvin Security website pixel-perfectly in any design tool or development framework.
