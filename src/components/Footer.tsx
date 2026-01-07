import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand/Bio Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-medium text-white tracking-tight">
              Dr. Ambra<span className="text-therapy-sage">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Providing compassionate, evidence-based online therapy for individuals seeking growth and healing in a modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-therapy-sage transition-colors">About Me</Link></li>
              <li><Link href="/services" className="hover:text-therapy-sage transition-colors">Services & Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-therapy-sage transition-colors">Book a Session</Link></li>
              <li><Link href="/privacy" className="hover:text-therapy-sage transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Telehealth Sessions Only</li>
              <li><a href="mailto:hello@drambra.com" className="hover:text-therapy-sage transition-colors">hello@drambra.com</a></li>
              <li className="pt-4 text-xs text-stone-500 italic">
                Response time: 24-48 hours
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-stone-800" />

        {/* Bottom Bar & Crisis Disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 font-bold">Crisis Disclaimer</p>
            <p className="text-xs leading-relaxed text-stone-500">
              If you are experiencing a mental health emergency or are in immediate danger, please call emergency services or go to the nearest emergency room. This website is not intended for crisis intervention.
            </p>
          </div>
          <div className="text-xs text-stone-500 whitespace-nowrap">
            © {currentYear} Dr. Ambra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;