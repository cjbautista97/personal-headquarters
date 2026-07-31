import { cn } from '@/lib/utils';

interface PlaceholderBlockProps {
  label: string;
  className?: string;
}

export function PlaceholderBlock({ label, className }: PlaceholderBlockProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-border/50 border border-border overflow-hidden',
        className,
      )}
    >
      <span className="text-3xl md:text-4xl font-mono font-semibold text-secondary/40 select-none">
        {label}
      </span>
    </div>
  );
}
