import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const testimonials = [
    {
      quote:
        'MetaFyAI transformed our e-commerce operations. The AI agents handle everything seamlessly, and our efficiency has skyrocketed.',
      author: 'Jennifer Martinez',
      role: 'CEO, TechRetail Inc.',
    },
    {
      quote:
        'The level of automation and intelligence we achieved with MetaFyAI is unprecedented. Our customers love the personalized experience.',
      author: 'Robert Thompson',
      role: 'CTO, Global Commerce Solutions',
    },
    {
      quote:
        'Working with MetaFyAI has been a game-changer. Their AI solutions are robust, scalable, and deliver measurable results.',
      author: 'Lisa Anderson',
      role: 'VP Operations, Enterprise Logistics',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-slate-900 relative">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_5.png"
          alt="testimonial background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders to deliver exceptional AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
