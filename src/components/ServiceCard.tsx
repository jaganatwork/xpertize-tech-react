import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const handleClick = () => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card
      className="bg-card border border-border rounded-lg p-8 transition-all duration-300 ease-in-out hover:scale-105 hover:border-border-hover cursor-pointer h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
          <Icon className="w-8 h-8 text-text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-4">{title}</h3>
      <p className="text-base text-text-secondary leading-relaxed mb-6 flex-grow">{description}</p>
      <span className="text-accent font-medium hover:underline">Learn More →</span>
    </Card>
  );
};
