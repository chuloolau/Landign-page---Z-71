import type { ReactNode } from 'react';

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export default function CTAButton({
  children,
  href = '#contacto',
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  if (variant === 'ghost') {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-full border border-white/30 text-white font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm hover:bg-white/10 transition-colors ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm transition-transform hover:scale-[1.02] ${className}`}
      style={{
        background: '#FFD400',
        color: '#0A0A0A',
        boxShadow: '0 8px 28px rgba(255, 212, 0, 0.35)',
      }}
    >
      {children}
    </a>
  );
}
