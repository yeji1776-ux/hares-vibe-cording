import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageWrapper({ title, subtitle, children }: Props) {
  return (
    <div className="animate-fade-in max-w-[520px] mx-auto px-4 pt-4 pb-24">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-[#E5E7EB]">{title}</h1>
        {subtitle && <p className="text-sm text-[#9CA3AF] mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
