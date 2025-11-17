import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#contact' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#contact' },
        { label: 'Documentation', href: '#contact' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Support', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Development', href: '#services' },
        { label: 'Commerce Solutions', href: '#services' },
        { label: 'Analytics', href: '#services' },
        { label: 'Infrastructure', href: '#services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#contact' },
        { label: 'Terms of Service', href: '#contact' },
        { label: 'Cookie Policy', href: '#contact' },
        { label: 'GDPR', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: GithubIcon, href: '#', label: 'GitHub' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-text-primary mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-base text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-2xl font-extrabold text-text-primary mb-2">MetaFyAI</p>
              <p className="text-sm text-text-tertiary">
                © {new Date().getFullYear()} MetaFyAI. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
