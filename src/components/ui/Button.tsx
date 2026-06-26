import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-md font-medium transition-all duration-300 focus-ring inline-block';

  const variants = {
    primary: 'bg-dark text-white hover:bg-dark/90 active:bg-dark/95',
    secondary:
      'bg-white border-subtle text-dark hover:bg-beige active:bg-border',
    ghost: 'text-dark hover:text-accent underline underline-offset-4',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (as === 'a') {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
