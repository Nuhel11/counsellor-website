import { LucideIcon } from 'lucide-react';

interface SpecialtyProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const SpecialtyCard = ({ title, description, Icon }: SpecialtyProps) => {
  return (
    <div className="group p-8 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-therapy-sage/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-therapy-sage transition-colors">
        <Icon className="w-6 h-6 text-therapy-sage group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-serif font-semibold text-therapy-charcoal mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};