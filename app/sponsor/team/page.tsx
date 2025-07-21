"use client";
import React, { useState } from 'react';
import { Star, Award, Trophy, Crown, ExternalLink, Mail, Phone, Building2, Calendar, DollarSign, Users } from 'lucide-react';
import Footer from '@/components/footer';

type TierType = 'platinum' | 'gold' | 'silver' | 'bronze';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: TierType;
  description: string;
  website: string;
  email: string;
  phone: string;
  contribution: string;
  since: string;
}

const SponsorsPage = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&crop=center",
      tier: "platinum",
      description: "Leading technology solutions provider driving digital transformation across industries",
      website: "https://techcorp.com",
      email: "partnership@techcorp.com",
      phone: "+1 (555) 123-4567",
      contribution: "$50,000",
      since: "2020"
    },
    {
      id: 2,
      name: "Global Industries",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&crop=center",
      tier: "gold",
      description: "Manufacturing excellence worldwide with sustainable innovation",
      website: "https://globalindustries.com",
      email: "sponsors@global.com",
      phone: "+1 (555) 234-5678",
      contribution: "$25,000",
      since: "2021"
    },
    {
      id: 3,
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&h=200&fit=crop&crop=center",
      tier: "gold",
      description: "Research and development pioneer creating tomorrow's technology",
      website: "https://innovatelab.com",
      email: "hello@innovatelab.com",
      phone: "+1 (555) 345-6789",
      contribution: "$30,000",
      since: "2019"
    },
    {
      id: 4,
      name: "FutureVision Media",
      logo: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=200&h=200&fit=crop&crop=center",
      tier: "silver",
      description: "Digital media and marketing solutions for modern businesses",
      website: "https://futurevision.com",
      email: "contact@futurevision.com",
      phone: "+1 (555) 456-7890",
      contribution: "$15,000",
      since: "2022"
    },
    {
      id: 5,
      name: "Quantum Systems",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&crop=center",
      tier: "silver",
      description: "Advanced computing solutions for enterprise excellence",
      website: "https://quantum.com",
      email: "info@quantum.com",
      phone: "+1 (555) 567-8901",
      contribution: "$12,000",
      since: "2021"
    },
    {
      id: 6,
      name: "EcoGreen Energy",
      logo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&h=200&fit=crop&crop=center",
      tier: "bronze",
      description: "Sustainable energy solutions for a greener tomorrow",
      website: "https://ecogreen.com",
      email: "partnerships@ecogreen.com",
      phone: "+1 (555) 678-9012",
      contribution: "$8,000",
      since: "2023"
    },
    {
      id: 7,
      name: "DataFlow Analytics",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center",
      tier: "bronze",
      description: "Big data and analytics solutions for business intelligence",
      website: "https://dataflow.com",
      email: "team@dataflow.com",
      phone: "+1 (555) 789-0123",
      contribution: "$5,000",
      since: "2022"
    },
    {
      id: 8,
      name: "CloudNet Services",
      logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=200&h=200&fit=crop&crop=center",
      tier: "bronze",
      description: "Cloud infrastructure provider enabling digital transformation",
      website: "https://cloudnet.com",
      email: "support@cloudnet.com",
      phone: "+1 (555) 890-1234",
      contribution: "$7,500",
      since: "2023"
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
    platinum: {
      icon: <Crown className="w-7 h-7" />,
      color: "from-violet-600 via-purple-600 to-indigo-600",
      bgGradient: "bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-indigo-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-slate-800/90",
      borderColor: "border-violet-500/30 hover:border-violet-400/60",
      textColor: "text-violet-300",
      badgeGlow: "shadow-violet-500/50"
    },
    gold: {
      icon: <Trophy className="w-7 h-7" />,
      color: "from-yellow-500 via-amber-500 to-orange-500",
      bgGradient: "bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-amber-900/10",
      borderColor: "border-amber-500/30 hover:border-amber-400/60",
      textColor: "text-amber-300",
      badgeGlow: "shadow-amber-500/50"
    },
    silver: {
      icon: <Award className="w-7 h-7" />,
      color: "from-slate-400 via-gray-400 to-zinc-500",
      bgGradient: "bg-gradient-to-br from-slate-800/20 via-gray-800/20 to-zinc-800/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-zinc-900/90",
      borderColor: "border-slate-500/30 hover:border-slate-400/60",
      textColor: "text-slate-300",
      badgeGlow: "shadow-slate-500/50"
    },
    bronze: {
      icon: <Star className="w-7 h-7" />,
      color: "from-amber-700 via-orange-600 to-red-600",
      bgGradient: "bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-red-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-orange-900/10",
      borderColor: "border-amber-600/30 hover:border-amber-500/60",
      textColor: "text-amber-400",
      badgeGlow: "shadow-amber-600/50"
    }
  };

  const filteredSponsors = selectedTier === 'all' 
    ? sponsors 
    : sponsors.filter(sponsor => sponsor.tier === selectedTier);

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
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#00C9D7]/20 to-[#00b8c2]/20 backdrop-blur-sm border border-[#00C9D7]/30 rounded-full px-6 py-3 mb-8">
          <Building2 className="w-6 h-6 text-[#00C9D7]" />
          <span className="text-[#00C9D7] font-semibold">Corporate Partnerships</span>
        </div>

          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Our Valued
                  <span className="block bg-gradient-to-r from-[#00C9D7] via-[#00b8c2] to-[#009dab] bg-clip-text text-transparent font-bold">
            Corporate Partners
          </span>

          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the exceptional companies that power our mission and drive innovation across industries
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>{sponsors.length}+ Partners</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span>$200k+ Contributions</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Since 2019</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Tiers</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our strategic partnership levels and discover the companies shaping our future
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedTier('all')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                selectedTier === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-105'
                  : 'bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 hover:scale-105'
              }`}
            >
              <span className="relative z-10">All Partners</span>
              {selectedTier === 'all' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              )}
            </button>
            
            {Object.keys(tierConfig).map((tierKey) => {
              const tier = tierKey as TierType;
              const config = tierConfig[tier];
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`group relative px-8 py-4 rounded-2xl font-bold text-lg capitalize transition-all duration-500 flex items-center space-x-3 ${
                    selectedTier === tier
                      ? `bg-gradient-to-r ${config.color} text-white shadow-2xl ${config.badgeGlow} scale-105`
                      : `bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 hover:scale-105`
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    {config.icon}
                    <span>{tier}</span>
                  </span>
                  {selectedTier === tier && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-2xl blur-xl opacity-30 animate-pulse`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSponsors.map((sponsor) => {
            const config = tierConfig[sponsor.tier];
            return (
              <div
                key={sponsor.id}
                className={`group relative ${config.cardBg} backdrop-blur-xl rounded-3xl border-2 ${config.borderColor} p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${config.bgGradient}`}
              >
                {/* Tier Badge */}
                <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${config.color} text-white px-4 py-2 rounded-2xl text-sm font-bold flex items-center space-x-2 shadow-2xl ${config.badgeGlow}`}>
                  {config.icon}
                  <span className="capitalize">{sponsor.tier}</span>
                </div>

                {/* Corporate Logo Section */}
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-20`}></div>
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} corporate logo`}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 h-12">
                    {sponsor.description}
                  </p>
                </div>

                {/* Corporate Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400 text-sm">Partner Since</span>
                    </div>
                    <span className="font-bold text-white">{sponsor.since}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400 text-sm">Investment</span>
                    </div>
                    <span className="font-bold text-green-400">{sponsor.contribution}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${sponsor.email}`}
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-3 group font-semibold"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Business Contact</span>
                  </a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${sponsor.phone}`}
                      className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-3 px-3 rounded-xl hover:from-green-600 hover:to-green-500 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group font-semibold"
                    >
                      <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Call</span>
                    </a>
                    
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600 text-white py-3 px-3 rounded-xl hover:from-purple-600 hover:to-purple-500 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>Visit</span>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Corporate Partnership CTA */}
        <div className="mt-24">
          <div className="relative bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)`,
                backgroundSize: '60% 60%'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
                <Building2 className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-semibold">Partnership Opportunities</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
                Become Our Strategic Partner
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join an elite network of industry leaders and innovative companies shaping the future of business. 
                Unlock exclusive opportunities for growth, collaboration, and market leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Explore Partnership Tiers</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
                
                <button className="group bg-transparent border-2 border-slate-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800/50 hover:border-slate-500 hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
           {/* Footer */}
      <Footer />
    </div>
   

      
  );
};

export default SponsorsPage;