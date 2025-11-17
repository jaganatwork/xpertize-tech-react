import { Card } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <Card className="bg-card border border-accent/30 rounded-lg p-8 h-full flex flex-col">
      <QuoteIcon className="w-12 h-12 text-accent mb-6" strokeWidth={1.5} />
      <p className="text-base text-text-secondary leading-relaxed mb-8 flex-grow italic">
        "{quote}"
      </p>
      <div>
        <p className="text-lg font-semibold text-text-primary">{author}</p>
        <p className="text-sm text-text-tertiary">{role}</p>
      </div>
    </Card>
  );
};
