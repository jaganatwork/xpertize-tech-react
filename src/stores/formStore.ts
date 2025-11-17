import { create } from 'zustand';

interface FormState {
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  setSubmitting: (submitting: boolean) => void;
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  isSubmitting: false,
  setSubmitting: (submitting) => set({ isSubmitting: submitting }),
  showSuccess: false,
  setShowSuccess: (show) => set({ showSuccess: show }),
}));
