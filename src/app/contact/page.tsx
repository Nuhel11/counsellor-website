import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header for the dedicated page */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-medium text-therapy-charcoal">
            Book a Session
          </h1>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Ready to take the first step? Fill out the form below to request a 
            free 15-minute consultation or schedule your first telehealth appointment.
          </p>
        </div>
      </section>

      {/* Reuse your existing Contact Section */}
      <Contact />

      {/* Frequently Asked Questions (Optional extra for this page) */}
      <section className="pb-24 max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-serif text-center mb-8">Quick FAQ</h3>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <p className="font-bold text-therapy-charcoal">Is my information private?</p>
            <p className="text-sm text-stone-600">Yes. All communications are strictly confidential and HIPAA-compliant.</p>
          </div>
          <div className="border-b pb-4">
            <p className="font-bold text-therapy-charcoal">How soon will you respond?</p>
            <p className="text-sm text-stone-600">I typically respond to all inquiries within 24 to 48 business hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}