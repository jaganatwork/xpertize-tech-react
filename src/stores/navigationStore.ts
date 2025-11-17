import { create } from 'zustand';

interface NavigationState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));
