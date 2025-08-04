"use client"

import { useState, useEffect } from "react"
import "./App.css"

// Simple UI Components
const Button = ({ children, className = "", size = "default", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
  }
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)

const Badge = ({ children, className = "", ...props }) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </div>
)

// Simple Icons (replacing Lucide React)
const Shield = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const Eye = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const Lock = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth={2} />
    <circle cx="12" cy="16" r="1" strokeWidth={2} />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth={2} />
  </svg>
)

const Globe = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      strokeWidth={2}
    />
  </svg>
)

const Cpu = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
    <rect x="9" y="9" width="6" height="6" strokeWidth={2} />
    <line x1="9" y1="1" x2="9" y2="4" strokeWidth={2} />
    <line x1="15" y1="1" x2="15" y2="4" strokeWidth={2} />
    <line x1="9" y1="20" x2="9" y2="23" strokeWidth={2} />
    <line x1="15" y1="20" x2="15" y2="23" strokeWidth={2} />
    <line x1="20" y1="9" x2="23" y2="9" strokeWidth={2} />
    <line x1="20" y1="14" x2="23" y2="14" strokeWidth={2} />
    <line x1="1" y1="9" x2="4" y2="9" strokeWidth={2} />
    <line x1="1" y1="14" x2="4" y2="14" strokeWidth={2} />
  </svg>
)

const Database = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeWidth={2} />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth={2} />
  </svg>
)

const Wifi = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M1.42 9a16 16 0 0 1 21.16 0" strokeWidth={2} />
    <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeWidth={2} />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" strokeWidth={2} />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth={2} />
  </svg>
)

const Brain = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 2a3 3 0 0 0-3 3c0 1.5-2 2.5-2 5 0 3.5 2 5 2 5s2-1.5 2-5c0-2.5-2-3.5-2-5a3 3 0 0 0 3-3z"
      strokeWidth={2}
    />
    <path
      d="M12 2a3 3 0 0 1 3 3c0 1.5 2 2.5 2 5 0 3.5-2 5-2 5s-2-1.5-2-5c0-2.5 2-3.5 2-5a3 3 0 0 1-3-3z"
      strokeWidth={2}
    />
    <path d="M12 22s-8-4.5-8-11.8A4.2 4.2 0 0 1 8.2 6h7.6a4.2 4.2 0 0 1 4.2 4.2c0 7.3-8 11.8-8 11.8z" strokeWidth={2} />
  </svg>
)

const Network = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <rect x="16" y="16" width="6" height="6" rx="1" strokeWidth={2} />
    <rect x="2" y="16" width="6" height="6" rx="1" strokeWidth={2} />
    <rect x="9" y="2" width="6" height="6" rx="1" strokeWidth={2} />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" strokeWidth={2} />
    <path d="M12 12V8" strokeWidth={2} />
  </svg>
)

const Zap = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" strokeWidth={2} />
  </svg>
)

const CheckCircle = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth={2} />
    <polyline points="22,4 12,14.01 9,11.01" strokeWidth={2} />
  </svg>
)

const ArrowRight = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2} />
    <polyline points="12,5 19,12 12,19" strokeWidth={2} />
  </svg>
)

const Play = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polygon points="5,3 19,12 5,21 5,3" strokeWidth={2} />
  </svg>
)

const Users = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth={2} />
    <circle cx="9" cy="7" r="4" strokeWidth={2} />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth={2} />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth={2} />
  </svg>
)

const Award = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="8" r="7" strokeWidth={2} />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" strokeWidth={2} />
  </svg>
)

const TrendingUp = ({ className = "", ...props }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
    <polyline points="17,6 23,6 23,12" strokeWidth={2} />
  </svg>
)

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [asteroids, setAsteroids] = useState([])
  const [threatsBlocked, setThreatsBlocked] = useState(1247)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 10)
    }, 4000)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Asteroid generation system
    const asteroidInterval = setInterval(
      () => {
        const newAsteroid = {
          id: Date.now() + Math.random(),
          x: Math.random() < 0.5 ? -50 : 650,
          y: Math.random() * 500,
          targetX: 300,
          targetY: 250,
          speed: 0.5 + Math.random() * 1.5,
          size: 8 + Math.random() * 12,
          type: ["malware", "phishing", "ddos", "ransomware", "breach"][Math.floor(Math.random() * 5)],
          intercepted: false,
          progress: 0,
        }

        setAsteroids((prev) => [...prev.slice(-8), newAsteroid])
      },
      3000 + Math.random() * 4000,
    )

    return () => {
      clearInterval(interval)
      clearInterval(asteroidInterval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Asteroid movement and interception logic
  useEffect(() => {
    const animationFrame = setInterval(() => {
      setAsteroids((prev) =>
        prev
          .map((asteroid) => {
            if (asteroid.intercepted) {
              return { ...asteroid, progress: Math.min(asteroid.progress + 0.05, 1) }
            }

            const dx = asteroid.targetX - asteroid.x
            const dy = asteroid.targetY - asteroid.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Check if asteroid is close enough to be intercepted by any planet
            const interceptorDistance = 80 + Math.random() * 40
            if (distance < interceptorDistance && !asteroid.intercepted) {
              const interceptorPlanet = Math.floor(Math.random() * services.length)
              setThreatsBlocked((prev) => prev + 1)
              return {
                ...asteroid,
                intercepted: true,
                interceptorPlanet,
                progress: 0,
              }
            }

            // Move asteroid towards center
            const moveX = (dx / distance) * asteroid.speed
            const moveY = (dy / distance) * asteroid.speed

            return {
              ...asteroid,
              x: asteroid.x + moveX,
              y: asteroid.y + moveY,
            }
          })
          .filter((asteroid) => {
            // Remove asteroids that are fully intercepted or reached the center
            if (asteroid.intercepted && asteroid.progress >= 1) return false
            const distance = Math.sqrt((asteroid.targetX - asteroid.x) ** 2 + (asteroid.targetY - asteroid.y) ** 2)
            return distance > 20
          }),
      )
    }, 50)

    return () => clearInterval(animationFrame)
  }, [])

  const services = [
    {
      icon: Shield,
      title: "Threat Intelligence",
      description: "Advanced threat detection and analysis",
      planetColor: "from-red-400 via-orange-500 to-red-600",
      glowColor: "rgba(239, 68, 68, 0.8)",
      orbitRadius: 200,
      orbitSpeed: 80,
      planetSize: 32,
      stationType: "scanner",
    },
    {
      icon: Database,
      title: "Endpoint Security",
      description: "Comprehensive device protection",
      planetColor: "from-orange-400 via-yellow-500 to-orange-600",
      glowColor: "rgba(251, 146, 60, 0.8)",
      orbitRadius: 180,
      orbitSpeed: 85,
      planetSize: 36,
      stationType: "fortress",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Perimeter and internal network defense",
      planetColor: "from-green-400 via-emerald-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.8)",
      orbitRadius: 200,
      orbitSpeed: 90,
      planetSize: 40,
      stationType: "gateway",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise data security and compliance",
      planetColor: "from-teal-400 via-cyan-500 to-teal-600",
      glowColor: "rgba(20, 184, 166, 0.8)",
      orbitRadius: 220,
      orbitSpeed: 95,
      planetSize: 34,
      stationType: "vault",
    },
    {
      icon: Brain,
      title: "AI Security Operations",
      description: "Automated security operations center",
      planetColor: "from-blue-400 via-sky-500 to-blue-600",
      glowColor: "rgba(59, 130, 246, 0.8)",
      orbitRadius: 240,
      orbitSpeed: 100,
      planetSize: 38,
      stationType: "processor",
    },
    {
      icon: Globe,
      title: "Cloud Security",
      description: "Multi-cloud security management",
      planetColor: "from-indigo-400 via-blue-500 to-indigo-600",
      glowColor: "rgba(99, 102, 241, 0.8)",
      orbitRadius: 170,
      orbitSpeed: 82,
      planetSize: 30,
      stationType: "cloud",
    },
    {
      icon: Eye,
      title: "Behavioral Analytics",
      description: "User and entity behavior analysis",
      planetColor: "from-purple-400 via-violet-500 to-purple-600",
      glowColor: "rgba(147, 51, 234, 0.8)",
      orbitRadius: 190,
      orbitSpeed: 87,
      planetSize: 33,
      stationType: "neural",
    },
    {
      icon: Wifi,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify approach",
      planetColor: "from-pink-400 via-rose-500 to-pink-600",
      glowColor: "rgba(236, 72, 153, 0.8)",
      orbitRadius: 210,
      orbitSpeed: 92,
      planetSize: 35,
      stationType: "mesh",
    },
    {
      icon: Users,
      title: "Identity Management",
      description: "Advanced identity and access control",
      planetColor: "from-cyan-400 via-blue-500 to-cyan-600",
      glowColor: "rgba(6, 182, 212, 0.8)",
      orbitRadius: 230,
      orbitSpeed: 97,
      planetSize: 37,
      stationType: "guardian",
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid threat response and remediation",
      planetColor: "from-yellow-400 via-amber-500 to-yellow-600",
      glowColor: "rgba(245, 158, 11, 0.8)",
      orbitRadius: 250,
      orbitSpeed: 102,
      planetSize: 39,
      stationType: "reactor",
    },
  ]

  const threatTypes = {
    malware: { color: "#ef4444", name: "Malware" },
    phishing: { color: "#f97316", name: "Phishing" },
    ddos: { color: "#eab308", name: "DDoS" },
    ransomware: { color: "#dc2626", name: "Ransomware" },
    breach: { color: "#7c3aed", name: "Data Breach" },
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Unified Cyber Security Network Background */}
      <div className="fixed inset-0 z-0">
        {/* Base professional gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

        {/* Network grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-10" />

        {/* Security Network Nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`network-node-${i}`}
            className="absolute w-3 h-3 bg-blue-400/60 rounded-full shadow-lg shadow-blue-400/30 animate-pulse"
            style={{
              left: `${10 + ((i * 7) % 80)}%`,
              top: `${15 + ((i * 11) % 70)}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" />
          </div>
        ))}

        {/* Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(15)].map((_, i) => {
            const x1 = 10 + ((i * 7) % 80)
            const y1 = 15 + ((i * 11) % 70)
            const x2 = 10 + (((i + 1) * 7) % 80)
            const y2 = 15 + (((i + 1) * 11) % 70)
            return (
              <line
                key={`network-line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#networkGradient)"
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray="5,5"
                className="animate-flow"
                style={{
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            )
          })}
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Security Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`security-element-${i}`}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${20 + ((i * 15) % 60)}%`,
              top: `${10 + ((i * 20) % 80)}%`,
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <Shield className="w-16 h-16 text-blue-300" />
          </div>
        ))}

        {/* Interactive Mouse Glow */}
        <div
          className="absolute w-96 h-96 pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)",
          }}
        >
          <div className="absolute inset-20 border border-blue-400/20 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Darvin</span>
              <div className="text-xs text-cyan-400 tracking-wide">CYBER DEFENSE</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {["Platform", "Solutions", "Resources", "Company"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 shadow-lg shadow-blue-600/25">
            Book a Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-40 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-500/30 hover:bg-blue-600/30 backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Cyber Defense
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI-Powered Security
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Team Can Trust
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Extend your security team's capacity with AI-driven threat detection and response that investigates and
                triages every alert with exceptional accuracy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 shadow-lg shadow-blue-600/25"
                >
                  Book a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 font-medium bg-transparent backdrop-blur-sm"
                >
                  <Play className="mr-2 w-4 h-4" />
                  How Darvin Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  SOC 2 Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  99.9% Uptime
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>

            {/* Advanced 3D Security Command Center */}
            <div className="relative flex justify-center items-center h-[500px]">
              <div className="relative" style={{ perspective: "1500px" }}>
                {/* Central 3D Security Globe */}
                <div className="relative w-40 h-40 mx-auto animate-globe-rotate">
                  {/* 3D Globe Core */}
                  <div className="absolute inset-0 rounded-full shadow-2xl animate-globe-pulse bg-gradient-radial from-blue-500 to-slate-900">
                    {/* Globe Surface Network Pattern */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/30 to-transparent">
                      {/* 3D Network Grid on Globe */}
                      <div className="absolute inset-0 rounded-full">
                        {/* Latitude lines */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={`lat-${i}`}
                            className="absolute border-t border-cyan-400/30"
                            style={{
                              top: `${12.5 + i * 12.5}%`,
                              left: "10%",
                              right: "10%",
                              transform: `rotateX(${i * 22.5}deg)`,
                            }}
                          />
                        ))}

                        {/* Longitude lines */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={`lng-${i}`}
                            className="absolute border-l border-cyan-400/30 rounded-full"
                            style={{
                              left: "50%",
                              top: "10%",
                              bottom: "10%",
                              transform: `rotateY(${i * 30}deg) translateX(-50%)`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Central Command Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative animate-float">
                          <Shield
                            className="w-16 h-16 text-cyan-300 drop-shadow-2xl"
                            style={{
                              filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))",
                            }}
                          />

                          {/* Holographic Scan Lines */}
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={`scan-${i}`}
                              className="absolute inset-0 border border-cyan-400/40 rounded-full animate-scan"
                              style={{
                                animationDelay: `${i * 0.3}s`,
                                transform: `scale(${1 + i * 0.3})`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Globe Highlight */}
                      <div className="absolute top-6 left-6 w-12 h-12 bg-white/30 rounded-full blur-lg" />

                      {/* Data Points on Globe */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={`data-point-${i}`}
                          className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-data-stream"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Advanced Orbital Rings */}
                {[160, 200, 240].map((radius, ringIndex) => (
                  <div
                    key={`orbit-ring-${ringIndex}`}
                    className="absolute left-1/2 top-1/2 border border-blue-400/25 rounded-full animate-orbit-ring"
                    style={{
                      width: `${radius * 2}px`,
                      height: `${radius * 2}px`,
                      marginLeft: `-${radius}px`,
                      marginTop: `-${radius}px`,
                      animationDelay: `${ringIndex * 1}s`,
                      boxShadow: `inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)`,
                    }}
                  />
                ))}

                {/* Advanced Security Stations - Individual Orbiting Satellites */}
                {services.map((service, index) => {
                  // Calculate starting position for each satellite
                  const startAngle = (index * 360) / services.length // Evenly distribute around circle
                  const radius = 200 // Fixed radius for all satellites

                  return (
                    <div
                      key={`station-${index}`}
                      className="absolute left-1/2 top-1/2 animate-satellite-orbit"
                      style={{
                        width: "400px",
                        height: "400px",
                        marginLeft: "-200px",
                        marginTop: "-200px",
                        animationDelay: `${-(startAngle / 360) * 60}s`, // Offset each satellite's starting position
                      }}
                    >
                      <div
                        className="absolute left-1/2 top-1/2 animate-satellite-counter-rotate"
                        style={{
                          transform: `translate(${radius - (service.planetSize + 8) / 2}px, ${-(service.planetSize + 8) / 2}px)`,
                          animationDelay: `${-(startAngle / 360) * 60}s`, // Same offset for counter-rotation
                        }}
                      >
                        <div
                          className={`relative transition-all duration-700 ${
                            activeService === index ? "scale-125" : "scale-100"
                          }`}
                          style={{
                            width: `${service.planetSize + 8}px`,
                            height: `${service.planetSize + 8}px`,
                          }}
                        >
                          {/* Simple Circular Satellite */}
                          <div
                            className={`absolute inset-0 transition-all duration-500 rounded-full border-4 border-white/20 ${
                              activeService === index ? "animate-station-glow" : ""
                            }`}
                            style={{
                              "--glow-color": service.glowColor,
                            }}
                          >
                            {/* Main Circle Body */}
                            <div
                              className="absolute inset-2 rounded-full shadow-2xl flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, ${service.planetColor.replace("from-", "").replace("via-", "").replace("to-", "").split(" ").join(", ")})`,
                                boxShadow:
                                  activeService === index
                                    ? `0 0 40px ${service.glowColor}, inset 0 0 30px rgba(255,255,255,0.3)`
                                    : `0 0 20px ${service.glowColor}, inset 0 0 15px rgba(255,255,255,0.2)`,
                              }}
                            >
                              {/* Service Icon */}
                              <service.icon
                                className={`transition-all duration-500 drop-shadow-2xl ${
                                  activeService === index ? "text-white" : "text-white/90"
                                }`}
                                style={{
                                  width: `${Math.max(16, service.planetSize * 0.5)}px`,
                                  height: `${Math.max(16, service.planetSize * 0.5)}px`,
                                  filter:
                                    activeService === index
                                      ? "drop-shadow(0 0 12px rgba(255, 255, 255, 1))"
                                      : "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))",
                                }}
                              />
                            </div>

                            {/* Outer Ring Indicator */}
                            <div
                              className="absolute inset-0 rounded-full border-2"
                              style={{
                                borderColor: service.glowColor,
                                opacity: activeService === index ? 0.8 : 0.4,
                              }}
                            />

                            {/* Active Service Pulse Ring */}
                            {activeService === index && (
                              <div
                                className="absolute rounded-full border-2 animate-ping"
                                style={{
                                  inset: `-${service.planetSize * 0.2}px`,
                                  borderColor: service.glowColor,
                                  opacity: 0.6,
                                }}
                              />
                            )}

                            {/* Service Label */}
                            <div
                              className="absolute text-xs font-bold text-white bg-black/70 px-2 py-1 rounded whitespace-nowrap"
                              style={{
                                top: `${service.planetSize + 15}px`,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: "10px",
                                opacity: activeService === index ? 1 : 0.7,
                              }}
                            >
                              {service.title}
                            </div>

                            {/* Connection Indicator Dot */}
                            <div
                              className="absolute w-2 h-2 rounded-full animate-pulse"
                              style={{
                                backgroundColor: service.glowColor,
                                top: "-4px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                boxShadow: `0 0 8px ${service.glowColor}`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Incoming Threat Asteroids */}
                {asteroids.map((asteroid) => (
                  <div key={asteroid.id}>
                    {!asteroid.intercepted ? (
                      // Active Asteroid
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          left: `${asteroid.x}px`,
                          top: `${asteroid.y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Asteroid Body */}
                        <div
                          className="rounded-full shadow-lg animate-asteroid-spin"
                          style={{
                            width: `${asteroid.size}px`,
                            height: `${asteroid.size}px`,
                            backgroundColor: threatTypes[asteroid.type].color,
                            background: `radial-gradient(circle at 30% 30%, ${threatTypes[asteroid.type].color}, ${threatTypes[asteroid.type].color}dd, ${threatTypes[asteroid.type].color}88)`,
                            boxShadow: `0 0 ${asteroid.size}px ${threatTypes[asteroid.type].color}66`,
                          }}
                        />

                        {/* Asteroid Trail */}
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full animate-asteroid-trail"
                            style={{
                              width: `${asteroid.size * (0.8 - i * 0.2)}px`,
                              height: `${asteroid.size * (0.8 - i * 0.2)}px`,
                              backgroundColor: `${threatTypes[asteroid.type].color}${Math.floor((0.6 - i * 0.2) * 255)
                                .toString(16)
                                .padStart(2, "0")}`,
                              left: `${-i * 8}px`,
                              top: "50%",
                              transform: "translateY(-50%)",
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}

                        {/* Threat Label */}
                        <div
                          className="absolute text-xs font-bold text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap"
                          style={{
                            top: `${asteroid.size + 5}px`,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "10px",
                          }}
                        >
                          {threatTypes[asteroid.type].name}
                        </div>
                      </div>
                    ) : (
                      // Intercepted Asteroid - Explosion Effect
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          left: `${asteroid.x}px`,
                          top: `${asteroid.y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Explosion Blast */}
                        <div
                          className="absolute rounded-full animate-explosion"
                          style={{
                            width: `${asteroid.size * 3}px`,
                            height: `${asteroid.size * 3}px`,
                            background: `radial-gradient(circle, #3b82f6, #06b6d4, transparent)`,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />

                        {/* Explosion Particles */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-particle-float"
                            style={{
                              left: "50%",
                              top: "50%",
                              transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${20 + Math.random() * 20}px)`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}

                        {/* "THREAT NEUTRALIZED" Text */}
                        <div
                          className="absolute text-xs font-bold text-green-400 bg-black/70 px-2 py-1 rounded whitespace-nowrap animate-shield-flash"
                          style={{
                            top: `${asteroid.size + 10}px`,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "10px",
                          }}
                        >
                          THREAT NEUTRALIZED
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Advanced Cosmic Particles */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`cosmic-particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-300/80 rounded-full shadow-lg shadow-cyan-300/50 animate-particle-float"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${30 + Math.random() * 40}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}

                {/* Energy Beams from Globe to Active Station */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ width: "600px", height: "600px", left: "-300px", top: "-300px" }}
                >
                  {services.map((service, i) => {
                    if (activeService !== i) return null

                    // Calculate beam position for circular arrangement
                    const angle = (i * 360) / services.length
                    const radius = 200
                    const x1 = 300 // Center
                    const y1 = 300 // Center
                    const x2 = 300 + Math.cos((angle * Math.PI) / 180) * radius
                    const y2 = 300 + Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <line
                        key={`energy-beam-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#energyGradient)"
                        strokeWidth="4"
                        strokeDasharray="12,6"
                        opacity="0.9"
                        className="animate-flow"
                        style={{
                          filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))",
                        }}
                      />
                    )
                  })}
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Advanced Security Status Panel */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <Card className="bg-slate-800/95 backdrop-blur-xl border-slate-700/50 shadow-2xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" />
                      <span className="text-sm font-medium text-white">Advanced Defense Grid Active</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-400">
                      {services[activeService].title} - {services[activeService].description}
                    </div>
                    <div className="mt-1 text-xs text-green-400 font-semibold">
                      Threats Neutralized: {threatsBlocked.toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-40 py-16 bg-slate-800/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprises and MSSPs Rely on Darvin</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Trusted by security teams at leading organizations worldwide
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              { name: "Microsoft", logo: "M" },
              { name: "Amazon", logo: "A" },
              { name: "Google", logo: "G" },
              { name: "IBM", logo: "IBM" },
              { name: "Oracle", logo: "O" },
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-2 backdrop-blur-sm border border-slate-600/30">
                  <span className="text-xl font-bold text-slate-300">{company.logo}</span>
                </div>
                <span className="text-sm text-slate-400">{company.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-400">Enterprise Customers</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Threat Detection Rate</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Security Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="relative z-40 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-500/30 backdrop-blur-sm">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered Platform
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Complete Cyber Defense Platform</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our integrated platform combines advanced AI, threat intelligence, and automated response to provide
              comprehensive protection for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group backdrop-blur-xl"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-blue-400 hover:text-blue-300 font-medium hover:bg-transparent flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Darvin */}
      <section className="relative z-40 py-20 bg-slate-800/30 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-500/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Industry Leading
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Why Security Leaders Choose Darvin</h2>
              <p className="text-lg text-slate-300 mb-8">
                Built for enterprise security teams who need reliable, scalable, and intelligent cyber defense solutions
                that integrate seamlessly with existing infrastructure.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Security Team",
                    description:
                      "24/7 monitoring by certified security professionals with deep threat intelligence expertise",
                  },
                  {
                    icon: TrendingUp,
                    title: "Proven ROI",
                    description:
                      "Average 300% ROI within 12 months through reduced false positives and faster response times",
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Grade",
                    description:
                      "SOC 2 Type II certified with enterprise-grade security, compliance, and data protection",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/80 rounded-2xl shadow-2xl border border-slate-700/50 p-8 backdrop-blur-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/25">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Security Operations Dashboard</h3>
                  <p className="text-slate-400">Real-time threat monitoring and response</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-600/20 rounded-lg backdrop-blur-sm border border-green-500/20">
                    <span className="text-sm font-medium text-white">Threats Blocked Today</span>
                    <span className="text-lg font-bold text-green-400">{threatsBlocked.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/20">
                    <span className="text-sm font-medium text-white">Active Monitoring</span>
                    <span className="text-lg font-bold text-blue-400">24/7</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg backdrop-blur-sm border border-slate-600/30">
                    <span className="text-sm font-medium text-white">Response Time</span>
                    <span className="text-lg font-bold text-white">&lt; 1 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Strengthen Your Cyber Defense?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises who trust Darvin to protect their most critical assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 shadow-lg shadow-blue-600/25"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 font-medium bg-transparent backdrop-blur-sm"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 bg-slate-900/80 border-t border-slate-700/50 py-12 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Darvin</span>
                <div className="text-xs text-cyan-400">CYBER DEFENSE</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">&copy; 2024 Darvin Cyber Defense. All rights reserved.</p>
              <p className="text-sm text-slate-500 mt-1">Protecting enterprises worldwide since 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
