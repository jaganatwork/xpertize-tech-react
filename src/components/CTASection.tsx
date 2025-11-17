import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CTAForm } from './CTAForm';

export const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="contact" className="py-32 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan via-purple to-red" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Join the Future of AI
          </h2>
          <p className="text-lg text-text-primary/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Stay ahead of the curve. Subscribe to our newsletter for the latest insights, updates,
            and exclusive content on AI innovation.
          </p>
          <CTAForm
            headline="Get Started Today"
            body="Transform your business with autonomous AI solutions."
            buttonText="Subscribe"
          />
        </motion.div>
      </div>
    </section>
  );
};
