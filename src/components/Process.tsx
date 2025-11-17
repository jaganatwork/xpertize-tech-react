import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProcessStep } from './ProcessSteps';
import { SearchIcon, CpuIcon, RocketIcon, TrendingUpIcon } from 'lucide-react';

export const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const steps = [
    {
      stepNumber: 1,
      icon: SearchIcon,
      title: 'Discovery & Analysis',
      description:
        'We analyze your business needs, identify opportunities, and design a tailored AI strategy.',
    },
    {
      stepNumber: 2,
      icon: CpuIcon,
      title: 'AI Development',
      description:
        'Our team builds intelligent agents using cutting-edge machine learning and automation technologies.',
    },
    {
      stepNumber: 3,
      icon: RocketIcon,
      title: 'Deployment & Integration',
      description:
        'Seamlessly integrate AI solutions into your existing infrastructure with minimal disruption.',
    },
    {
      stepNumber: 4,
      icon: TrendingUpIcon,
      title: 'Optimization & Growth',
      description:
        'Continuously monitor, optimize, and scale your AI systems to maximize business impact.',
    },
  ];

  return (
    <section id="process" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures successful AI implementation from concept to continuous
            optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              <ProcessStep {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-accent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
