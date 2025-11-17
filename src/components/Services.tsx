import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceCard } from './ServiceCard';
import { BotIcon, ShoppingCartIcon, BarChart3Icon, ShieldIcon } from 'lucide-react';

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const services = [
    {
      icon: BotIcon,
      title: 'AI Agent Development',
      description:
        'Build intelligent, autonomous agents that understand user intent and execute complex tasks across multiple platforms seamlessly.',
      link: '#contact',
    },
    {
      icon: ShoppingCartIcon,
      title: 'Cross-Platform Commerce',
      description:
        'Enable trustless shopping experiences across diverse marketplaces with unified AI-driven management and optimization.',
      link: '#contact',
    },
    {
      icon: BarChart3Icon,
      title: 'Intelligent Analytics',
      description:
        'Gain actionable insights from AI-powered analytics that predict trends, optimize operations, and drive business growth.',
      link: '#contact',
    },
    {
      icon: ShieldIcon,
      title: 'Secure AI Infrastructure',
      description:
        'Deploy enterprise-grade AI solutions with robust security, privacy controls, and compliance built into every layer.',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations and unlock new
            possibilities in autonomous commerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
