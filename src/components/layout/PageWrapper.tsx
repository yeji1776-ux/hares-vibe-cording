import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageWrapper({ title, subtitle, children }: Props) {
  return (
    <div className="animate-fade-in max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-8">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
