import { Card } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  ctaLink: string;
}

export const CaseStudyCard = ({ image, title, description, ctaLink }: CaseStudyCardProps) => {
  const handleClick = () => {
    const element = document.querySelector(ctaLink);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card
      className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:border-border-hover cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-4">{title}</h3>
        <p className="text-base text-text-secondary leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-accent font-medium hover:underline">
          <span>View Case Study</span>
          <ArrowRightIcon className="ml-2 w-5 h-5" strokeWidth={2} />
        </div>
      </div>
    </Card>
  );
};
