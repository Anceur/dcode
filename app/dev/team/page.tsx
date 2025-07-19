"use client";
import React, { useState } from 'react';
import { Star, Award, Trophy, Crown, ExternalLink, Mail, Phone, Github, Linkedin, Code, Cpu, Smartphone, Globe, Calendar } from 'lucide-react';

type TierType = 'lead' | 'senior' | 'mid' | 'junior';

interface Developer {
  id: number;
  name: string;
  avatar: string;
  tier: TierType;
  role: string;
  portfolio: string;
  email: string;
  phone: string;
  skills: string[];
  since: string;
  github: string;
  linkedin: string;
}

const TeamPage = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const developers: Developer[] = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=center",
      tier: "lead",
      role: "Tech Lead - Full Stack Developer",
      portfolio: "https://alexjohnson.dev",
      email: "alex@devteam.com",
      phone: "+1 (555) 123-4567",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      since: "2018",
      github: "alexjohnson",
      linkedin: "alexjohnson"
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=center",
      tier: "senior",
      role: "Senior Mobile Developer",
      portfolio: "https://sarahwilliams.dev",
      email: "sarah@devteam.com",
      phone: "+1 (555) 234-5678",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      since: "2019",
      github: "sarahwilliams",
      linkedin: "sarahwilliams"
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=center",
      tier: "senior",
      role: "Senior Web Developer",
      portfolio: "https://michaelchen.dev",
      email: "michael@devteam.com",
      phone: "+1 (555) 345-6789",
      skills: ["Vue.js", "Nuxt", "Python", "Django"],
      since: "2019",
      github: "michaelchen",
      linkedin: "michaelchen"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=center",
      tier: "mid",
      role: "Frontend Developer",
      portfolio: "https://emmarodriguez.dev",
      email: "emma@devteam.com",
      phone: "+1 (555) 456-7890",
      skills: ["React", "Next.js", "GraphQL", "Tailwind"],
      since: "2021",
      github: "emmarodriguez",
      linkedin: "emmarodriguez"
    },
    {
      id: 5,
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center",
      tier: "mid",
      role: "Backend Developer",
      portfolio: "https://davidkim.dev",
      email: "david@devteam.com",
      phone: "+1 (555) 567-8901",
      skills: ["Node.js", "Express", "MongoDB", "Docker"],
      since: "2021",
      github: "davidkim",
      linkedin: "davidkim"
    },
    {
      id: 6,
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=center",
      tier: "junior",
      role: "Junior Mobile Developer",
      portfolio: "https://priyapatel.dev",
      email: "priya@devteam.com",
      phone: "+1 (555) 678-9012",
      skills: ["React Native", "JavaScript", "Firebase"],
      since: "2022",
      github: "priyapatel",
      linkedin: "priyapatel"
    },
    {
      id: 7,
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=center",
      tier: "junior",
      role: "Junior Web Developer",
      portfolio: "https://jameswilson.dev",
      email: "james@devteam.com",
      phone: "+1 (555) 789-0123",
      skills: ["HTML/CSS", "JavaScript", "React"],
      since: "2023",
      github: "jameswilson",
      linkedin: "jameswilson"
    }
  ];

  const tierConfig: Record<TierType, {
    icon: React.ReactElement;
    color: string;
    bgGradient: string;
    cardBg: string;
    borderColor: string;
    textColor: string;
    badgeGlow: string;
  }> = {
    lead: {
      icon: <Crown className="w-5 h-5" />,
      color: "from-purple-600 via-indigo-600 to-blue-600",
      bgGradient: "bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-800/90",
      borderColor: "border-purple-500/30 hover:border-purple-400/60",
      textColor: "text-purple-300",
      badgeGlow: "shadow-purple-500/50"
    },
    senior: {
      icon: <Trophy className="w-5 h-5" />,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-blue-900/10",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
      textColor: "text-cyan-300",
      badgeGlow: "shadow-cyan-500/50"
    },
    mid: {
      icon: <Award className="w-5 h-5" />,
      color: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "bg-gradient-to-br from-emerald-900/20 via-green-900/20 to-lime-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-green-900/10",
      borderColor: "border-green-500/30 hover:border-green-400/60",
      textColor: "text-green-300",
      badgeGlow: "shadow-green-500/50"
    },
    junior: {
      icon: <Star className="w-5 h-5" />,
      color: "from-amber-500 via-orange-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-pink-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-amber-900/10",
      borderColor: "border-orange-500/30 hover:border-orange-400/60",
      textColor: "text-amber-300",
      badgeGlow: "shadow-orange-500/50"
    }
  };

  const filteredDevelopers = selectedTier === 'all' 
    ? developers 
    : developers.filter(dev => dev.tier === selectedTier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-600/5 via-violet-600/5 to-transparent -rotate-12 animate-pulse delay-700"></div>
      </div>

      {/* Hero Header */}
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
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span>Mobile Specialists</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Web Developers</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span>Full Stack Engineers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Developer Levels</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our team members by their experience and specialization
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedTier('all')}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                selectedTier === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                  : 'bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 hover:scale-105'
              }`}
            >
              <span className="relative z-10">All Developers</span>
              {selectedTier === 'all' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
              )}
            </button>
            
            {Object.keys(tierConfig).map((tierKey) => {
              const tier = tierKey as TierType;
              const config = tierConfig[tier];
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
                    <span>{tier}</span>
                  </span>
                  {selectedTier === tier && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-xl blur-xl opacity-30 animate-pulse`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((dev) => {
            const config = tierConfig[dev.tier];
            return (
              <div
                key={dev.id}
                className={`group relative ${config.cardBg} backdrop-blur-xl rounded-2xl border-2 ${config.borderColor} p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 ${config.bgGradient}`}
              >
                {/* Tier Badge */}
                <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${config.color} text-white px-3 py-1 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-lg ${config.badgeGlow}`}>
                  {config.icon}
                  <span className="capitalize">{dev.tier}</span>
                </div>

                {/* Developer Avatar Section */}
                <div className="text-center mb-5">
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-20`}></div>
                    <img 
                      src={dev.avatar} 
                      alt={`${dev.name} developer avatar`}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
                    {dev.name}
                  </h3>
                  
                  <p className={`text-sm ${config.textColor} font-medium mb-3`}>
                    {dev.role}
                  </p>
                  
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

                {/* Developer Details */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg border border-slate-700/50 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400">Member Since</span>
                    </div>
                    <span className="font-medium text-white">{dev.since}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${dev.email}`}
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-blue-600 hover:to-blue-500 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Email</span>
                  </a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`https://github.com/${dev.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-gray-800 hover:to-gray-700 hover:border-gray-500 hover:shadow-md hover:shadow-gray-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>GitHub</span>
                    </a>
                    
                    <a
                      href={`https://linkedin.com/in/${dev.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-600 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium text-sm"
                    >
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Hiring CTA */}
        <div className="mt-16">
          <div className="relative bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
                backgroundSize: '60% 60%'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">We're Hiring</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
                Join Our Development Team
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                We're always looking for talented developers to join our growing team. 
                If you're passionate about building great mobile and web applications, we'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <span className="relative z-10">View Open Positions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
                
                <button className="group bg-transparent border-2 border-slate-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800/50 hover:border-slate-500 hover:scale-105 transition-all duration-300">
                  Submit Your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;