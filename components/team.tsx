"use client"
import type React from "react"
import { useState } from "react"
import { Star, Award, Trophy, Mail, Github, Linkedin, Code, Cpu, Smartphone, Globe, Calendar, Palette, Video } from "lucide-react"

type TierType = "fullstack" | "frontend" | "backend" | "uiux" | "filmmaker"

interface Developer {
  id: number
  name: string
  avatar: string
  tier: TierType
  role: string
  portfolio: string
  email: string
  phone: string
  skills: string[]
  github: string
  linkedin: string
}

interface TierConfigShape {
  icon: React.ReactElement
  color: string
  bgGradient: string
  cardBg: string
  borderColor: string
  textColor: string
  badgeGlow: string
}

const TeamPage = () => {
  const [selectedTier, setSelectedTier] = useState<string>("all")

  const developers: Developer[] = [
    {
      id: 2,
      name: "Anceur yassine",
      avatar: "yassine.png",
      tier: "fullstack",
      role: "Full Stack Developer",
      portfolio: "https://sarahwilliams.dev",
      email: "yassineanceur16@gmail.com",
      phone: "+213 55 9180536",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      github: "Anceur",
      linkedin: "Anceur",
    },
    {
      id: 3,
      name: "Aymen bkrb",
      avatar: "aymen.jpg",
      tier: "fullstack",
      role: "Full Stack Developer",
      portfolio: "https://michaelchen.dev",
      email: "michael@devteam.com",
      phone: "+1 (555) 345-6789",
      skills: ["Vue.js", "Python", "Django", "AWS"],
      github: "michaelchen",
      linkedin: "michaelchen",
    },
    {
      id: 4,
      name: "Fatima",
      avatar: "femme.jpeg",
      tier: "frontend",
      role: "Frontend Developer",
      portfolio: "https://emmarodriguez.dev",
      email: "emma@devteam.com",
      phone: "+1 (555) 456-7890",
      skills: ["React", "Next.js", "GraphQL", "Tailwind"],
      github: "emmarodriguez",
      linkedin: "emmarodriguez",
    },
    {
      id: 6,
      name: "Anceur Amar",
      avatar: "amar.jpg",
      tier: "backend",
      role: "Backend Developer",
      portfolio: "https://priyapatel.dev",
      email: "priya@devteam.com",
      phone: "+1 (555) 678-9012",
      skills: ["Node.js", "Express", "MongoDB", "Docker"],
      github: "priyapatel",
      linkedin: "priyapatel",
    },
    {
      id: 7,
      name: "Denideni Mohamed",
      avatar: "moh.jpg",
      tier: "backend",
      role: "Backend Developer",
      portfolio: "https://jameswilson.dev",
      email: "james@devteam.com",
      phone: "+1 (555) 789-0123",
      skills: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      github: "jameswilson",
      linkedin: "jameswilson",
    },
    {
      id: 8,
      name: "Youcef CHEKIRINE",
      avatar: "youcef.png",
      tier: "uiux",
      role: "UI/UX Designer",
      portfolio: "",
      email: "",
      phone: "",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      github: "",
      linkedin: "",
    },
    {
      id: 9,
      name: "Benamara Radouane",
      avatar: "redouan.png",
      tier: "filmmaker",
      role: "Filmmaker",
      portfolio: "",
      email: "",
      phone: "",
      skills: ["Videography", "Editing", "Color Grading", "Storytelling"],
      github: "",
      linkedin: "",
    },
  ]

  const tierConfig: Record<TierType, TierConfigShape> = {
    fullstack: {
      icon: <Trophy className="w-5 h-5" />,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-blue-900/10",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
      textColor: "text-cyan-300",
      badgeGlow: "shadow-cyan-500/50",
    },
    frontend: {
      icon: <Award className="w-5 h-5" />,
      color: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "bg-gradient-to-br from-emerald-900/20 via-green-900/20 to-lime-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-green-900/10",
      borderColor: "border-green-500/30 hover:border-green-400/60",
      textColor: "text-green-300",
      badgeGlow: "shadow-green-500/50",
    },
    backend: {
      icon: <Star className="w-5 h-5" />,
      color: "from-amber-500 via-orange-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-pink-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-amber-900/10",
      borderColor: "border-orange-500/30 hover:border-orange-400/60",
      textColor: "text-amber-300",
      badgeGlow: "shadow-orange-500/50",
    },
    uiux: {
      icon: <Palette className="w-5 h-5" />,
      color: "from-fuchsia-500 via-purple-500 to-violet-500",
      bgGradient: "bg-gradient-to-br from-fuchsia-900/20 via-purple-900/20 to-violet-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-purple-900/10",
      borderColor: "border-purple-500/30 hover:border-purple-400/60",
      textColor: "text-purple-300",
      badgeGlow: "shadow-purple-500/50",
    },
    filmmaker: {
      icon: <Video className="w-5 h-5" />,
      color: "from-red-500 via-rose-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-red-900/20 via-rose-900/20 to-pink-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-red-900/10",
      borderColor: "border-red-500/30 hover:border-red-400/60",
      textColor: "text-red-300",
      badgeGlow: "shadow-red-500/50",
    },
  }

  const tierDisplayNames: Record<TierType, string> = {
    fullstack: "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    uiux: "UI/UX",
    filmmaker: "Filmmaker",
  }

  const filteredDevelopers = selectedTier === "all" ? developers : developers.filter((dev) => dev.tier === selectedTier)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-600/5 via-violet-600/5 to-transparent -rotate-12 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Code className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300 font-semibold">Development Team</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Meet Our
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Tech Experts
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            The talented developers building innovative mobile and web solutions for our clients
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Frontend Specialists</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-orange-400" />
              <span>Backend Engineers</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span>Full Stack Developers</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-purple-400" />
              <span>UI/UX Designers</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-red-400" />
              <span>Filmmakers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Developer Specializations</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our team members by their technical specialization
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedTier("all")}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                selectedTier === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105"
                  : "bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 hover:scale-105"
              }`}
            >
              <span className="relative z-10">All Developers</span>
              {selectedTier === "all" && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
              )}
            </button>

            {Object.keys(tierConfig).map((tierKey) => {
              const tier = tierKey as TierType
              const config = tierConfig[tier]
              const displayName = tierDisplayNames[tier]
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`group relative px-6 py-3 rounded-xl font-medium capitalize transition-all duration-500 flex items-center space-x-2 ${
                    selectedTier === tier
                      ? `bg-gradient-to-r ${config.color} text-white shadow-xl ${config.badgeGlow} scale-105`
                      : `bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 hover:scale-105`
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {config.icon}
                    <span>{displayName}</span>
                  </span>
                  {selectedTier === tier && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-xl blur-xl opacity-30 animate-pulse`}
                    ></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((dev) => {
            const config = tierConfig[dev.tier]
            const displayTier = tierDisplayNames[dev.tier]
            return (
              <div
                key={dev.id}
                className={`group relative ${config.cardBg} backdrop-blur-xl rounded-2xl border-2 ${config.borderColor} p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 ${config.bgGradient}`}
              >
                <div
                  className={`absolute -top-3 -right-3 bg-gradient-to-r ${config.color} text-white px-3 py-1 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-lg ${config.badgeGlow}`}
                >
                  {config.icon}
                  <span>{displayTier}</span>
                </div>

                <div className="text-center mb-5">
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-20`}></div>
                    <img
                      src={dev.avatar || "/placeholder.svg"}
                      alt={`${dev.name} developer avatar`}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
                    {dev.name}
                  </h3>

                  <p className={`text-sm ${config.textColor} font-medium mb-3`}>{dev.role}</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {dev.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-800/50 text-gray-300 px-2 py-1 rounded-md border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {dev.email && (
                    <a
                      href={`mailto:${dev.email}`}
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-blue-600 hover:to-blue-500 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm"
                    >
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Email</span>
                    </a>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    {dev.github && (
                      <a
                        href={`https://github.com/${dev.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-gray-800 hover:to-gray-700 hover:border-gray-500 hover:shadow-md hover:shadow-gray-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm"
                      >
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {dev.linkedin && (
                      <a
                        href={`https://www.linkedin.com/in/${dev.linkedin}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-600 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm ${
                          !dev.github ? "col-span-2" : ""
                        }`}
                      >
                        <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeamPage