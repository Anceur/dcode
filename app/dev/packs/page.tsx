"use client";
import React, { useState } from 'react';
import { Code, Smartphone, Globe, Zap, Check, X, ArrowRight } from 'lucide-react';

type PackType = 'starter' | 'pro' | 'enterprise' | 'custom';

interface Pack {
  id: number;
  name: string;
  type: PackType;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
  deliveryTime: string;
  mostPopular?: boolean;
}

const PacksPage = () => {
  const [selectedPack, setSelectedPack] = useState<string>('all');

  const packs: Pack[] = [
    {
      id: 1,
      name: "Starter Pack",
      type: "starter",
      price: "$1,499",
      description: "Perfect for small businesses or startups looking to establish an online presence",
      features: [
        "Responsive Website (5 pages)",
        "Basic SEO Setup",
        "Contact Form",
        "1 Design Revision",
        "Basic Analytics",
        "1 Month Support"
      ],
      bestFor: "Small businesses, personal portfolios",
      deliveryTime: "2-3 weeks",
    },
    {
      id: 2,
      name: "Pro Pack",
      type: "pro",
      price: "$3,999",
      description: "Comprehensive solution for growing businesses with advanced features",
      features: [
        "Responsive Website (10 pages)",
        "Advanced SEO",
        "CMS Integration",
        "3 Design Revisions",
        "E-commerce Functionality (Basic)",
        "3 Months Support",
        "Mobile Responsive",
        "Performance Optimization"
      ],
      bestFor: "Medium businesses, e-commerce startups",
      deliveryTime: "4-5 weeks",
      mostPopular: true
    },
    {
      id: 3,
      name: "Enterprise Pack",
      type: "enterprise",
      price: "$8,999+",
      description: "Custom solutions for large scale businesses with complex requirements",
      features: [
        "Custom Web Application",
        "Advanced E-commerce",
        "API Integrations",
        "Unlimited Revisions",
        "Priority Support (6 months)",
        "Dedicated Project Manager",
        "Enterprise-grade Security",
        "Scalable Architecture",
        "Multi-language Support"
      ],
      bestFor: "Large businesses, SaaS products",
      deliveryTime: "8+ weeks",
    },
    {
      id: 4,
      name: "Mobile App Pack",
      type: "pro",
      price: "$5,999",
      description: "Cross-platform mobile application development for iOS and Android",
      features: [
        "React Native App",
        "UI/UX Design",
        "Backend API Integration",
        "App Store Deployment",
        "Push Notifications",
        "3 Months Support",
        "Performance Optimization",
        "Analytics Integration"
      ],
      bestFor: "Startups needing mobile presence",
      deliveryTime: "6-8 weeks",
    },
    {
      id: 5,
      name: "Custom Solution",
      type: "custom",
      price: "Custom",
      description: "Tailored development solution for your specific business needs",
      features: [
        "Fully Custom Requirements",
        "Dedicated Development Team",
        "Ongoing Maintenance",
        "Scalable Architecture",
        "Premium Support",
        "Regular Updates",
        "Quality Assurance"
      ],
      bestFor: "Businesses with unique needs",
      deliveryTime: "Varies",
    }
  ];

  const packConfig: Record<PackType, {
    icon: React.ReactElement;
    color: string;
    bgGradient: string;
    cardBg: string;
    borderColor: string;
    textColor: string;
    badgeGlow: string;
  }> = {
    starter: {
      icon: <Zap className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-blue-900/10",
      borderColor: "border-blue-500/30 hover:border-blue-400/60",
      textColor: "text-blue-300",
      badgeGlow: "shadow-blue-500/50"
    },
    pro: {
      icon: <Globe className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      bgGradient: "bg-gradient-to-br from-purple-900/20 to-indigo-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-purple-900/10",
      borderColor: "border-purple-500/30 hover:border-purple-400/60",
      textColor: "text-purple-300",
      badgeGlow: "shadow-purple-500/50"
    },
    enterprise: {
      icon: <Code className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
      bgGradient: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-emerald-900/10",
      borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
      textColor: "text-emerald-300",
      badgeGlow: "shadow-emerald-500/50"
    },
    custom: {
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
      bgGradient: "bg-gradient-to-br from-amber-900/20 to-orange-900/20",
      cardBg: "bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-amber-900/10",
      borderColor: "border-orange-500/30 hover:border-orange-400/60",
      textColor: "text-amber-300",
      badgeGlow: "shadow-orange-500/50"
    }
  };

  const filteredPacks = selectedPack === 'all' 
    ? packs 
    : packs.filter(pack => pack.type === selectedPack);

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
            <span className="text-blue-300 font-semibold">Development Packages</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Development Pack
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Flexible packages tailored to meet your website or mobile app development needs
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span>Mobile App Development</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Website Development</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Package Options</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Select the package that best fits your project requirements and budget
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedPack('all')}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                selectedPack === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                  : 'bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 hover:scale-105'
              }`}
            >
              <span className="relative z-10">All Packages</span>
              {selectedPack === 'all' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
              )}
            </button>
            
            {Object.keys(packConfig).map((packKey) => {
              const pack = packKey as PackType;
              const config = packConfig[pack];
              return (
                <button
                  key={pack}
                  onClick={() => setSelectedPack(pack)}
                  className={`group relative px-6 py-3 rounded-xl font-medium capitalize transition-all duration-500 flex items-center space-x-2 ${
                    selectedPack === pack
                      ? `bg-gradient-to-r ${config.color} text-white shadow-xl ${config.badgeGlow} scale-105`
                      : `bg-slate-800/50 backdrop-blur-sm text-gray-300 border border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 hover:scale-105`
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {config.icon}
                    <span>{pack}</span>
                  </span>
                  {selectedPack === pack && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${config.color} rounded-xl blur-xl opacity-30 animate-pulse`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPacks.map((pack) => {
            const config = packConfig[pack.type];
            return (
              <div
                key={pack.id}
                className={`group relative ${config.cardBg} backdrop-blur-xl rounded-2xl border-2 ${config.borderColor} p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 ${config.bgGradient}`}
              >
                {/* Most Popular Badge */}
                {pack.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg shadow-purple-500/50">
                    Most Popular
                  </div>
                )}

                {/* Pack Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl ${config.bgGradient} shadow-lg`}>
                    {config.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {pack.name}
                  </h3>
                  
                  <div className={`text-4xl font-bold ${config.textColor} mb-3`}>
                    {pack.price}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {pack.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-6">
                    <span>Delivery: {pack.deliveryTime}</span>
                    <span>•</span>
                    <span>Best for: {pack.bestFor}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    {pack.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button
                    className={`w-full bg-gradient-to-r ${config.color} text-white py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group font-medium`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution CTA */}
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
                <span className="text-blue-300 font-medium">Need Something Special?</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
                Custom Development Solutions
              </h3>
              
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Have unique requirements? Our team can create a tailored solution that perfectly fits your business needs, whether it's a complex web application or a custom mobile solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <span className="relative z-10">Request Custom Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
                
                <button className="group bg-transparent border-2 border-slate-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800/50 hover:border-slate-500 hover:scale-105 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacksPage;