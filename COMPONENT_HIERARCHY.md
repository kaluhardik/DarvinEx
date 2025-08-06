# Component Hierarchy & Structure

## 🏗️ Application Structure

\`\`\`
App.jsx
├── Header
│   ├── Logo Section
│   │   ├── Logo Image (48x48px)
│   │   ├── Company Name ("Darvin")
│   │   └── Tagline ("CYBER DEFENSE")
│   ├── Navigation Menu
│   │   ├── Platform Link
│   │   ├── Solutions Link
│   │   ├── Resources Link
│   │   └── Company Link
│   └── CTA Button ("Book a Demo")
│
├── Hero Section
│   ├── Text Content (Left Column)
│   │   ├── Badge ("Enterprise Cyber Defense")
│   │   ├── Main Heading
│   │   │   ├── "AI-Powered Security"
│   │   │   └── "Your Team Can Trust" (gradient)
│   │   ├── Description Paragraph
│   │   ├── Button Group
│   │   │   ├── Primary Button ("Book a Demo")
│   │   │   └── Secondary Button ("How Darvin Works")
│   │   └── Trust Indicators
│   │       ├── "SOC 2 Compliant"
│   │       ├── "99.9% Uptime"
│   │       └── "24/7 Support"
│   │
│   └── 3D Globe Visualization (Right Column)
│       ├── Background Effects
│       │   ├── Network Grid Pattern
│       │   ├── Network Nodes (20 nodes)
│       │   ├── Connection Lines (15 lines)
│       │   ├── Floating Shield Icons (8 icons)
│       │   └── Mouse Interaction Glow
│       │
│       ├── Central 3D Globe
│       │   ├── Globe Core (160x160px)
│       │   ├── Network Grid Overlay
│       │   │   ├── Latitude Lines (8 lines)
│       │   │   └── Longitude Lines (12 lines)
│       │   ├── Central Shield Icon (64x64px)
│       │   ├── Holographic Scan Lines (3 rings)
│       │   ├── Globe Highlight Effect
│       │   └── Data Points (12 points)
│       │
│       ├── Orbital Ring System
│       │   ├── Ring 1 (320px diameter)
│       │   ├── Ring 2 (400px diameter)
│       │   └── Ring 3 (480px diameter)
│       │
│       ├── Satellite System (10 satellites)
│       │   ├── Threat Intelligence Satellite
│       │   ├── Endpoint Security Satellite
│       │   ├── Network Security Satellite
│       │   ├── Data Protection Satellite
│       │   ├── AI Security Operations Satellite
│       │   ├── Cloud Security Satellite
│       │   ├── Behavioral Analytics Satellite
│       │   ├── Zero Trust Architecture Satellite
│       │   ├── Identity Management Satellite
│       │   └── Incident Response Satellite
│       │
│       ├── Threat Simulation System
│       │   ├── Asteroid Generation
│       │   ├── Asteroid Movement
│       │   ├── Interception System
│       │   ├── Explosion Effects
│       │   └── Defense Beams
│       │
│       ├── Energy Beam System
│       │   └── Globe-to-Active-Satellite Beams
│       │
│       ├── Cosmic Particles (20 particles)
│       │
│       └── Status Panel
│           ├── Status Indicator (pulsing dot)
│           ├── Active Service Title
│           ├── Service Description
│           └── Threat Counter
│
├── Trust Section
│   ├── Section Header
│   │   ├── Main Title
│   │   └── Description
│   ├── Company Logos Grid (5 logos)
│   │   ├── Microsoft
│   │   ├── Amazon
│   │   ├── Google
│   │   ├── IBM
│   │   └── Oracle
│   └── Statistics Grid (3 stats)
│       ├── "500+ Enterprise Customers"
│       ├── "99.9% Threat Detection Rate"
│       └── "24/7 Security Operations"
│
├── Platform Section
│   ├── Section Header
│   │   ├── Badge ("AI-Powered Platform")
│   │   ├── Main Title
│   │   └── Description
│   └── Services Grid (10 service cards)
│       └── Service Card (repeated)
│           ├── Icon Container
│           ├── Card Title
│           ├── Card Description
│           └── Learn More Link
│
├── Why Choose Darvin Section
│   ├── Text Content (Left Column)
│   │   ├── Badge ("Industry Leading")
│   │   ├── Section Title
│   │   ├── Description
│   │   └── Feature List (3 features)
│   │       ├── Expert Security Team
│   │       ├── Proven ROI
│   │       └── Enterprise Grade
│   │
│   └── Dashboard Preview (Right Column)
│       ├── Dashboard Header
│       │   ├── Shield Icon
│       │   ├── Dashboard Title
│       │   └── Description
│       └── Metrics Display (3 metrics)
│           ├── Threats Blocked Today
│           ├── Active Monitoring
│           └── Response Time
│
├── CTA Section
│   ├── Main Heading
│   ├── Description
│   └── Button Group
│       ├── Primary Button ("Schedule a Demo")
│       └── Secondary Button ("Contact Sales")
│
└── Footer
    ├── Logo Section
    │   ├── Logo Image
    │   ├── Company Name
    │   └── Tagline
    └── Copyright Information
        ├── Copyright Text
        └── Tagline
\`\`\`

## 📊 Data Structures

### Service Configuration
\`\`\`javascript
const services = [
  {
    icon: Shield,
    title: "Threat Intelligence",
    description: "Advanced threat detection and analysis",
    planetColor: "from-red-400 via-orange-500 to-red-600",
    glowColor: "rgba(239, 68, 68, 0.8)",
    orbitRadius: 10000,
    orbitSpeed: 80,
    planetSize: 32,
    stationType: "scanner"
  },
  // ... 9 more services
]
\`\`\`

### Asteroid Configuration
\`\`\`javascript
const asteroid = {
  id: "unique-timestamp-id",
  x: -50, // or 650 (spawn position)
  y: "random-0-500",
  targetX: 300,
  targetY: 250,
  speed: "0.5-2.0",
  size: "8-20",
  type: "malware|phishing|ddos|ransomware|breach",
  intercepted: false,
  progress: 0,
  interceptorPlanet: "optional-index"
}
\`\`\`

### Threat Types
\`\`\`javascript
const threatTypes = {
  malware: { color: "#ef4444", name: "Malware" },
  phishing: { color: "#f97316", name: "Phishing" },
  ddos: { color: "#eab308", name: "DDoS" },
  ransomware: { color: "#dc2626", name: "Ransomware" },
  breach: { color: "#7c3aed", name: "Data Breach" }
}
\`\`\`

## 🎮 State Management

### Application State
\`\`\`javascript
const [isLoaded, setIsLoaded] = useState(false)
const [activeService, setActiveService] = useState(0)
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
const [asteroids, setAsteroids] = useState([])
const [threatsBlocked, setThreatsBlocked] = useState(1247)
\`\`\`

### Animation Intervals
- **Service Rotation**: 4000ms interval
- **Asteroid Generation**: 3000-7000ms random interval
- **Asteroid Movement**: 50ms animation frame
- **Mouse Tracking**: Real-time on mousemove

## 🎨 Styling Architecture

### CSS Organization
1. **Base Styles**: Reset, typography, layout utilities
2. **Component Styles**: Button, Card, Badge components
3. **Animation Keyframes**: All animation definitions
4. **Responsive Utilities**: Breakpoint-specific styles
5. **Custom Properties**: CSS variables for dynamic values

### Style Methodology
- **Utility-First**: Tailwind-inspired utility classes
- **Component-Scoped**: Specific styles for complex components
- **Animation-Driven**: Keyframe animations for all motion
- **Responsive-Mobile-First**: Mobile-first responsive design

This hierarchy provides a complete blueprint for recreating the Darvin Security website structure and functionality.
