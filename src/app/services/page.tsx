import { CheckCircle2, Video, Clock, CreditCard } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Individual Therapy",
    duration: "50 Minutes",
    price: "£150",
    description: "One-on-one sessions tailored to your personal goals. We focus on developing coping skills and self-understanding.",
    features: ["Secure Video Link", "Weekly or Bi-weekly", "Personalized Growth Plan"]
  },
  {
    title: "Initial Consultation",
    duration: "15 Minutes",
    price: "Free",
    description: "A brief meeting to discuss your needs, answer questions about my approach, and see if we are a good fit.",
    features: ["Zero Commitment", "Q&A Session", "Goal Alignment"]
  },
  {
    title: "Couples Counseling",
    duration: "60 Minutes",
    price: "£185",
    description: "Joint sessions focused on improving communication, resolving conflict, and strengthening your partnership.",
    features: ["Collaborative Space", "Conflict Resolution", "Communication Tools"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-therapy-sage py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Services & Pricing</h1>
          <p className="text-lg opacity-90">Transparent care designed to fit your life. All sessions are conducted via secure telehealth.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col">
              <h3 className="text-2xl font-serif font-semibold text-therapy-charcoal">{service.title}</h3>
              <div className="flex items-baseline gap-2 mt-2 mb-6">
                <span className="text-3xl font-bold text-therapy-sage">{service.price}</span>
                <span className="text-stone-400 text-sm">/ {service.duration}</span>
              </div>
              <p className="text-stone-600 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-stone-700">
                    <CheckCircle2 size={16} className="text-therapy-sage" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="w-full py-3 text-center border border-therapy-sage text-therapy-sage rounded-lg font-medium hover:bg-therapy-sage hover:text-white transition-all"
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Telehealth Process Section */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-serif text-center text-therapy-charcoal mb-12">What to Expect</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-therapy-sage">
              <Video size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">1. Secure Online Sessions</h4>
              <p className="text-stone-600">I use a HIPAA-compliant platform. You will receive a private link via email before each session. Simply click the link on your computer or smartphone—no downloads required.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-therapy-sage">
              <CreditCard size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">2. Simple Payment</h4>
              <p className="text-stone-600">Payments are processed securely via an online portal after each session. I accept all major credit cards and HSA/FSA cards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}