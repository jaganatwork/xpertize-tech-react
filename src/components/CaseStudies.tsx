import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CaseStudyCard } from './CaseStudyCard';

export const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const caseStudies = [
    {
      image: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_3.png',
      title: 'E-Commerce Automation',
      description:
        'Increased conversion rates by 45% through intelligent product recommendations and automated customer service.',
      ctaLink: '#contact',
    },
    {
      image: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_2.png',
      title: 'Supply Chain Optimization',
      description:
        'Reduced operational costs by 30% with AI-driven inventory management and predictive analytics.',
      ctaLink: '#contact',
    },
    {
      image: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_3.png',
      title: 'Customer Experience Platform',
      description:
        'Achieved 95% customer satisfaction through personalized AI agents handling multi-channel support.',
      ctaLink: '#contact',
    },
    {
      image: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_2.png',
      title: 'Financial Services AI',
      description:
        'Processed 1M+ transactions daily with 99.9% accuracy using autonomous AI decision-making systems.',
      ctaLink: '#contact',
    },
  ];

  return (
    <section id="case-studies" className="py-32 bg-gradient-to-b from-slate-900 to-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Case Studies
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real-world results from businesses that transformed their operations with our AI
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
