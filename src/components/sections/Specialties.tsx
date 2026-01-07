import { Heart, Users, Brain, Sparkles } from 'lucide-react';
import { SpecialtyCard } from '../SpecialtyCard';

const specialties = [
  {
    title: "Anxiety & Stress",
    description: "Navigate daily overwhelm and regain a sense of calm through evidence-based coping strategies and mindfulness.",
    Icon: Brain
  },
  {
    title: "Relationship Counseling",
    description: "Strengthen connections and improve communication with partners, family members, or colleagues.",
    Icon: Heart
  },
  {
    title: "Trauma Recovery",
    description: "Heal from past experiences in a safe, supportive environment designed to help you reclaim your narrative.",
    Icon: Sparkles
  },
  {
    title: "Personal Growth",
    description: "Identify your values and overcome internal barriers to reach your full potential and find deeper meaning.",
    Icon: Users
  }
];

const Specialties = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-therapy-charcoal mb-4">
            How I Can Help You
          </h2>
          <div className="w-20 h-1 bg-therapy-sage mx-auto mb-6"></div>
          <p className="text-stone-600 text-lg">
            Every journey is unique. I offer a variety of therapeutic approaches tailored to your specific goals and circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <SpecialtyCard 
              key={index}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;