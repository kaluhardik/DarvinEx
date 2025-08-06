# Animation Implementation Guide

## 🎬 Core Animation System

### 1. Globe Rotation System

#### Primary Globe Rotation
\`\`\`css
@keyframes globe3DRotate {
  0% { 
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); 
  }
  100% { 
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg); 
  }
}
\`\`\`
- **Duration**: 60 seconds
- **Easing**: `ease-in-out`
- **3D Perspective**: 1500px
- **Tilt**: -20 degrees on X-axis

#### Globe Pulse Effect
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
- **Duration**: 6 seconds
- **Effect**: Breathing glow with scale change
- **Shadow Intensity**: 60px to 80px blur

### 2. Satellite Orbital System

#### Orbital Motion
\`\`\`css
@keyframes satelliteOrbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
\`\`\`
- **Duration**: 60 seconds (synchronized with globe)
- **Motion**: Perfect circular orbit
- **Radius**: 200px from center

#### Counter-Rotation (Icon Stability)
\`\`\`css
@keyframes satelliteCounterRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
\`\`\`
- **Purpose**: Keeps icons upright during orbit
- **Duration**: 60 seconds (opposite direction)
- **Synchronization**: Same delay as orbital motion

#### Active Satellite Glow
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
- **Trigger**: When satellite becomes active service
- **Duration**: 4 seconds
- **Effect**: Pulsing glow with scale increase

### 3. Threat Simulation Animations

#### Asteroid Spin
\`\`\`css
@keyframes asteroidSpin {
  0% { 
    transform: rotate(0deg) scale(1); 
  }
  100% { 
    transform: rotate(360deg) scale(1.1); 
  }
}
\`\`\`
- **Duration**: 2-3 seconds (randomized)
- **Effect**: Rotation with slight scale increase

#### Asteroid Trail
\`\`\`css
@keyframes asteroidTrail {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
\`\`\`
- **Purpose**: Creates motion trail behind asteroids
- **Duration**: 0.5 seconds per trail particle
- **Stagger**: 0.1s delay between particles

#### Explosion Effect
\`\`\`css
@keyframes explosionBlast {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.8;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
\`\`\`
- **Trigger**: When asteroid is intercepted
- **Duration**: 0.8 seconds
- **Effect**: Expanding blast with fade

#### Defense Beam
\`\`\`css
@keyframes defenseBeam {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
\`\`\`
- **Trigger**: During asteroid interception
- **Duration**: 0.5 seconds
- **Effect**: Beam from satellite to explosion

### 4. Background Animation System

#### Network Node Pulse
\`\`\`css
@keyframes networkPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}
\`\`\`
- **Duration**: 3+ seconds (staggered)
- **Effect**: Pulsing network nodes
- **Stagger**: 0.2s delay per node

#### Network Flow Lines
\`\`\`css
@keyframes networkFlow {
  0%, 100% {
    stroke-dashoffset: 20;
    opacity: 0.2;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 0.8;
  }
}
\`\`\`
- **Duration**: 8+ seconds (varied)
- **Effect**: Flowing data through network lines
- **Pattern**: Dashed stroke animation

#### Floating Security Elements
\`\`\`css
@keyframes securityFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
    opacity: 0.15;
  }
}
\`\`\`
- **Duration**: 20+ seconds (varied)
- **Effect**: Slow floating with rotation
- **Elements**: Shield icons in background

### 5. Particle System Animations

#### Cosmic Particles
\`\`\`css
@keyframes particleFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  25% {
    transform: translate(20px, -15px) scale(1.2);
    opacity: 0.8;
  }
  50% {
    transform: translate(-10px, 20px) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translate(-15px, -10px) scale(1.1);
    opacity: 0.9;
  }
}
\`\`\`
- **Duration**: 4-7 seconds (randomized)
- **Effect**: Complex floating motion
- **Count**: 20 particles around globe

#### Data Stream Points
\`\`\`css
@keyframes dataStream {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) rotate(360deg);
  }
}
\`\`\`
- **Duration**: 3-5 seconds (randomized)
- **Effect**: Pulsing data points on globe surface
- **Count**: 12 points

### 6. Interactive Animations

#### Mouse Tracking Glow
\`\`\`javascript
// Real-time position update
const handleMouseMove = (e) => {
  setMousePosition({ x: e.clientX, y: e.clientY })
}

// CSS transition
.mouse-glow {
  transition: all 500ms ease-out;
  background: radial-gradient(
    circle, 
    rgba(59,130,246,0.15) 0%, 
    rgba(6,182,212,0.1) 40%, 
    transparent 70%
  );
}
\`\`\`
- **Update Rate**: Real-time on mousemove
- **Transition**: 500ms ease-out
- **Effect**: Following radial gradient

#### Service Rotation System
\`\`\`javascript
// Automatic service cycling
useEffect(() => {
  const interval = setInterval(() => {
    setActiveService((prev) => (prev + 1) % 10)
  }, 4000)
  return () => clearInterval(interval)
}, [])
\`\`\`
- **Interval**: 4 seconds
- **Effect**: Cycles through all 10 services
- **Visual Changes**: Scale, glow, beam activation

### 7. Performance Optimization

#### Animation Frame Management
\`\`\`javascript
// Asteroid movement optimization
useEffect(() => {
  const animationFrame = setInterval(() => {
    setAsteroids(prev => 
      prev.map(asteroid => {
        // Movement calculations
      }).filter(asteroid => {
        // Cleanup completed animations
      })
    )
  }, 50) // 20fps for smooth motion
  
  return () => clearInterval(animationFrame)
}, [])
\`\`\`

#### Memory Management
- **Asteroid Limit**: Maximum 9 active asteroids
- **Cleanup**: Remove completed animations
- **Interval Cleanup**: Clear all intervals on unmount

### 8. Responsive Animation Adjustments

#### Mobile Optimizations
\`\`\`css
@media (max-width: 768px) {
  .globe-container {
    width: 400px;
    height: 400px;
  }
  
  .satellite-body {
    width: 32px;
    height: 32px;
  }
  
  /* Reduce animation complexity */
  .cosmic-particle {
    display: none;
  }
}
\`\`\`

#### Performance Considerations
- **Reduced Particles**: Fewer on mobile devices
- **Simplified Animations**: Less complex motion on low-end devices
- **Frame Rate**: Adaptive based on device capabilities

This animation guide provides the complete framework for implementing all motion graphics and interactive effects in the Darvin Security website.
