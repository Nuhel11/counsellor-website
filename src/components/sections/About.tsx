import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/Ambra.jpeg" 
                alt="Dr. Ambra in her consultation room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative organic shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-therapy-sage/10 rounded-full -z-10 blur-3xl"></div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-therapy-charcoal mb-6">
              Hi, I&apos;m Dr. Ambra.
            </h2>
            <p className="text-therapy-sage font-medium mb-4 uppercase tracking-wider text-sm">
              Licensed Clinical Psychologist
            </p>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                With over X years of experience, I specialize in helping individuals navigate the complexities of modern life. My approach is rooted in empathy, evidence-based practices, and the belief that every person has the innate capacity for growth.
              </p>
              <p>
                I hold a Doctorate in Clinical Psychology and have dedicated my career to creating a non-judgmental space where clients feel seen and heard. Whether you are dealing with a major life transition or seeking to understand yourself better, I am here to walk that path with you.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
              <div>
                <h4 className="font-serif font-bold text-therapy-charcoal">Education</h4>
                <p className="text-sm text-stone-500">X in Clinical Psychology, [X] institution</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-therapy-charcoal">License</h4>
                <p className="text-sm text-stone-500">Licensed Professional Counselor (LPC) #12345</p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/about" className="text-therapy-sage font-semibold hover:underline flex items-center gap-2">
                Learn more about my approach
                <span>→</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;