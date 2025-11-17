import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface TeamMemberProps {
  photo: string;
  name: string;
  role: string;
  bio: string;
}

export const TeamMember = ({ photo, name, role, bio }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-border-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="w-full h-80 object-cover"
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-accent opacity-20 transition-opacity duration-300" />
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-text-primary mb-2">{name}</h3>
        <p className="text-base text-accent font-medium mb-3">{role}</p>
        <p className="text-sm text-text-secondary leading-relaxed">{bio}</p>
      </div>
    </Card>
  );
};
