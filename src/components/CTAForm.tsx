import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormStore } from '@/stores/formStore';
import { CheckCircleIcon } from 'lucide-react';

interface CTAFormProps {
  headline: string;
  body: string;
  buttonText: string;
}

export const CTAForm = ({ headline, body, buttonText }: CTAFormProps) => {
  const { email, setEmail, isSubmitting, setSubmitting, showSuccess, setShowSuccess } =
    useFormStore();
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setEmail('');

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-background/20 border-text-primary/30 text-text-primary placeholder:text-text-primary/60 focus:ring-text-primary h-12"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-background text-text-primary font-normal px-8 h-12 hover:bg-background/90 transition-colors duration-200"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </Button>
        </div>
        {error && <p className="text-error text-sm text-left">{error}</p>}
      </form>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 right-8 bg-success text-text-primary px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50">
          <CheckCircleIcon className="w-6 h-6" strokeWidth={2} />
          <span className="font-medium">Successfully subscribed!</span>
        </div>
      )}
    </div>
  );
};
