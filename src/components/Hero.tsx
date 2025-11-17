import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUpIcon, ZapIcon, GlobeIcon } from 'lucide-react';

export const Hero = () => {
  const stats = [
    { icon: TrendingUpIcon, label: '95% Efficiency', value: '95%' },
    { icon: ZapIcon, label: '40% Faster Insights', value: '40%' },
    { icon: GlobeIcon, label: 'Global Reach', value: 'Global' },
  ];

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          alt="ai network"
          src="https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_1.mp4"
          poster="https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-32 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Businesses with Autonomous AI
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Enable user-owned AI agents to conduct trustless, cross-platform shopping and management
          for seamless experiences. Transform your business with intelligent automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-text-primary font-normal px-12 h-14 text-lg hover:opacity-90 transition-opacity duration-200"
            onClick={handleCTAClick}
          >
            Start Your AI Journey
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-3">
                <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
                <p className="text-base text-text-secondary">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
