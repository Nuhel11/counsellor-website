import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Heart, ShieldCheck, Video } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-therapy-charcoal mb-4">
            Meet Dr. Ambra
          </h1>
          <p className="text-therapy-sage font-medium uppercase tracking-widest text-sm">
            Compassionate Care for the Modern World
          </p>
        </div>
      </section>

      {/* Main Content: Bio & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Detailed Bio */}
          <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
            <h2 className="text-3xl font-serif text-therapy-charcoal italic">My Approach</h2>
            <p>
              Healing isn&apos;t a linear path, and therapy shouldn&apos;t be a one-size-fits-all solution. As a recent graduate, my practice is built on the most current, evidence-based research in clinical psychology.
            </p>
            <p>
              I believe in a <strong>collaborative approach</strong>. You are the expert on your own life; I am here to provide the tools, perspective, and safe environment needed to help you navigate it. My style is warm, direct, and deeply rooted in empathy.
            </p>
            <p>
              Starting therapy can feel overwhelming, especially if it&apos;s your first time. That&apos;s why I focus on creating a non-judgmental digital space where you can feel truly seen and heard from your very first session.
            </p>
          </div>

          {/* Right: Qualifications/Credentials */}
          <div className="bg-therapy-stone p-8 rounded-3xl border border-stone-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-therapy-charcoal mb-6 border-b border-stone-200 pb-4">
              Education & Training
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-therapy-sage"><BookOpen size={24} /></div>
                <div>
                  <p className="font-bold text-stone-800">Degree of Clinical Psychology</p>
                  <p className="text-sm">X University, 2025</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-therapy-sage"><Award size={24} /></div>
                <div>
                  <p className="font-bold text-stone-800">Licensed Professional Counselor (Associate)</p>
                  <p className="text-sm">License #98765-TEMP</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-therapy-sage"><ShieldCheck size={24} /></div>
                <div>
                  <p className="font-bold text-stone-800">Specialized Training</p>
                  <p className="text-sm">Cognitive Behavioral Therapy (CBT), Mindfulness-Based Stress Reduction (MBSR)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Icons Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-therapy-sage">
                <Heart size={32} />
              </div>
              <h4 className="font-serif font-bold text-therapy-charcoal mb-3">Empathy First</h4>
              <p className="text-sm text-stone-600 italic leading-relaxed">I prioritize building a genuine human connection before diving into clinical techniques.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-therapy-sage">
                <Video size={32} />
              </div>
              <h4 className="font-serif font-bold text-therapy-charcoal mb-3">Modern Access</h4>
              <p className="text-sm text-stone-600 italic leading-relaxed">Telehealth makes support accessible, removing the barriers of travel and office wait times.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-therapy-sage">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-serif font-bold text-therapy-charcoal mb-3">Evidence-Based</h4>
              <p className="text-sm text-stone-600 italic leading-relaxed">My methods are grounded in the latest psychological research and clinical best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-serif text-therapy-charcoal mb-8">Ready to start?</h2>
        <Link 
          href="/contact" 
          className="bg-therapy-sage text-white px-10 py-4 rounded-full font-medium hover:brightness-95 transition-all shadow-lg"
        >
          Book Your Consultation
        </Link>
      </section>
    </div>
  );
}