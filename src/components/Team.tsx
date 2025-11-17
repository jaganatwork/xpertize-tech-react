import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TeamMember } from './TeamMember';

export const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const teamMembers = [
    {
      photo: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_4.png',
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI research with 15+ years in machine learning and autonomous systems.',
    },
    {
      photo: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_4.png',
      name: 'Michael Rodriguez',
      role: 'VP of Engineering',
      bio: 'Expert in scalable AI infrastructure and distributed computing architectures.',
    },
    {
      photo: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_4.png',
      name: 'Emily Watson',
      role: 'Head of Product',
      bio: 'Driving product innovation with a focus on user-centric AI experiences.',
    },
    {
      photo: 'https://c.animaapp.com/mi3j6fvpiHMy6F/img/ai_4.png',
      name: 'David Kim',
      role: 'Lead Data Scientist',
      bio: 'Specializing in predictive analytics and AI model optimization.',
    },
  ];

  return (
    <section id="team" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            World-class experts dedicated to pushing the boundaries of AI innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
