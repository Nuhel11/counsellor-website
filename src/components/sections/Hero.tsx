import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-therapy-stone py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-therapy-charcoal leading-tight">
              A safe space to <br />
              <span className="text-therapy-sage italic">heal and grow.</span>
            </h1>
            <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional, compassionate counseling for individuals and couples navigating life's challenges.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
  href="/contact" 
  className="bg-therapy-sage text-white px-8 py-4 rounded-full font-medium hover:brightness-95 transition-all shadow-lg text-center"
>
  Schedule a Consultation
</Link>
            </div>
          </div>

          {/* Right Column: Your New Image */}
<div className="relative w-full">
  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
    <Image 
      src="/Ambra.jpeg" 
      alt="Dr. Ambra - Professional Counselor"
      width={800} // Add the actual width of your photo
      height={1000} // Add the actual height of your photo
      priority 
      className="w-full h-auto" // This ensures it scales while showing the full height
    />
    <div className="absolute inset-0 bg-therapy-sage/5 mix-blend-multiply pointer-events-none"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;