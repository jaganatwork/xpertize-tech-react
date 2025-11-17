import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ProcessStep = ({ stepNumber, icon: Icon, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center">
          <Icon className="w-12 h-12 text-text-primary" strokeWidth={1.5} />
        </div>
        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-text-primary font-bold text-lg">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <p className="text-base text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
};
