import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
              Our Mission: Redefining Commerce Through AI
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              At MetaFyAI, we believe in a future where commerce is fully autonomous through
              AI-driven intelligence. Our mission is to enable user-owned AI agents that conduct
              trustless, cross-platform shopping and management for seamless experiences.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              We combine innovation, autonomy, and trust to deliver efficient, intelligent solutions
              that empower businesses to thrive in the digital age. Our commitment to excellence
              drives us to push the boundaries of what's possible with AI technology.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Innovation', 'Autonomy', 'Trust', 'Efficiency', 'Intelligence'].map((value) => (
                <span
                  key={value}
                  className="px-6 py-3 bg-card border border-border rounded-md text-text-primary font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <motion.img
              src="https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_2.png"
              alt="abstract mission visual"
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
