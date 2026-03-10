'use client';

interface SectionTitleProps {
  title: string;
  className?: string; // allow additional classes for sizing or spacing
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <div className={`w-full ${className}`.trim()}>
      <h2 className="text-primary-txt font-bold text-2xl md:text-3xl leading-tight">
        {title}
      </h2>
      <div className="h-0.5 w-16 bg-secondary mx-auto md:ml-0"></div>
    </div>
  );
}
