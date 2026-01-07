import { Mail, Video, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Telehealth Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-therapy-charcoal mb-6">
              Start Your Journey Online
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed">
              I provide specialized therapy through a **secure, HIPAA-compliant video platform**. This allows you to receive support from the comfort and privacy of your own home, anywhere in the state.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-therapy-stone rounded-lg text-therapy-sage">
                  <Video size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-therapy-charcoal">Online Sessions</h4>
                  <p className="text-stone-500 text-sm italic text-balance">Available via secure video link (No software download required)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-therapy-stone rounded-lg text-therapy-sage">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-therapy-charcoal">Privacy & Security</h4>
                  <p className="text-stone-500 text-sm">All sessions are encrypted and confidential.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-therapy-stone rounded-lg text-therapy-sage">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-therapy-charcoal">Flexible Scheduling</h4>
                  <p className="text-stone-500 text-sm">Evening and weekend appointments available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="bg-therapy-stone p-8 rounded-2xl shadow-sm border border-stone-100">
            <form className="space-y-4">
              {/* ... form fields stay the same as previous code ... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-therapy-sage outline-none" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-therapy-sage outline-none" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-therapy-sage outline-none bg-white">
                  <option>Individual Online Therapy</option>
                  <option>Free 15-Min Consultation</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-therapy-sage outline-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-therapy-sage text-white font-medium py-4 rounded-lg hover:brightness-95 transition-all shadow-md">
                Request Appointment
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;