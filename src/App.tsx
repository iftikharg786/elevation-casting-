/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Play, Plus, Minus, Star, ArrowRight, Video, Camera, Film } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-oscar-black/80 backdrop-blur-md border-b border-oscar-gold/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center gap-2">
          <img src="https://f2z.3fb.myftpupload.com/wp-content/uploads/2026/03/ELEVATION-CASTING-Logo-Gold.png" alt="Elevation Casting Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-oscar-body hover:text-oscar-softgold transition-colors text-sm uppercase tracking-wider font-medium">Home</a>
          <a href="#" className="text-oscar-body hover:text-oscar-softgold transition-colors text-sm uppercase tracking-wider font-medium">About</a>
          <a href="#" className="text-oscar-body hover:text-oscar-softgold transition-colors text-sm uppercase tracking-wider font-medium">FAQ</a>
          <a href="#" className="text-oscar-body hover:text-oscar-softgold transition-colors text-sm uppercase tracking-wider font-medium">Contact</a>
        </div>
        <div>
          <button className="btn-primary text-sm py-2 px-6">Sign Up Free</button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-glow-top-right">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Your Big Break <br />
            <span className="text-gradient-gold">Opportunity Is Here.</span>
          </h1>
          <p className="text-lg text-oscar-body mb-8 max-w-xl leading-relaxed">
            Break Preparation Courses trains your craft, upgrades your materials, and positions you for real auditions—so you stop getting overlooked and start getting booked.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="btn-primary flex items-center justify-center gap-2">
              Apply + Submit Headshot & Reel <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Watch the 2-Minute VSL
            </button>
          </div>

          <ul className="space-y-4">
            {[
              "Craft Upgrades: eliminate weak points with targeted training",
              "Package Polish: build a stronger, bookable presentation",
              "Opportunity Positioning: get aligned with higher-quality roles",
              "Guaranteed Auditions: our partner production companies are waiting for you"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-oscar-gold shrink-0 mt-0.5" />
                <span className="text-sm text-oscar-headline/80">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-oscar-gold/20 shadow-[0_0_50px_rgba(219,149,30,0.15)] relative">
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80" 
              alt="Actor preparing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oscar-black via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 bg-oscar-espresso border border-oscar-gold/30 p-4 rounded-xl shadow-2xl backdrop-blur-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-oscar-gold/20 rounded-full flex items-center justify-center">
              <Video className="w-6 h-6 text-oscar-gold" />
            </div>
            <div>
              <p className="text-xs text-oscar-body uppercase tracking-wider">Next Step</p>
              <p className="font-display font-bold text-oscar-headline">Perfect Audition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Section2 = () => (
  <section className="py-24 bg-oscar-black relative border-t border-oscar-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            This is the entry point into superstardom—<br />
            <span className="text-oscar-gold italic">built on preparation.</span>
          </h2>
          <p className="text-oscar-body text-lg mb-8 leading-relaxed">
            Talent matters. But casting responds to readiness: clear choices, strong delivery, and materials that show your value fast. Break Preparation Courses is the system that turns ambition into a polished finished product - and puts you in position to win.
          </p>
          <button className="btn-secondary">Apply + Submit Headshot & Reel</button>
        </div>
        <div className="relative flex justify-center">
           {/* Abstract Phone Mockup */}
           <div className="w-64 h-[500px] bg-gradient-to-b from-oscar-cocoa to-oscar-espresso rounded-[3rem] p-2 border border-oscar-gold/30 shadow-[0_0_40px_rgba(112,52,11,0.5)] relative">
              <div className="w-full h-full bg-oscar-black rounded-[2.5rem] overflow-hidden relative border border-oscar-black">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Profile" className="w-full h-3/5 object-cover opacity-80" referrerPolicy="no-referrer" />
                <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-oscar-espresso to-transparent flex flex-col justify-end p-6">
                  <div className="w-12 h-1 bg-oscar-gold/50 rounded-full mb-4 mx-auto"></div>
                  <h3 className="font-display text-xl font-bold text-oscar-headline mb-1">Riley Smith</h3>
                  <p className="text-xs text-oscar-softgold uppercase tracking-widest mb-4">Lead Role Match</p>
                  <button className="w-full bg-oscar-gold text-oscar-black py-2 rounded-full text-sm font-bold">Cast Now</button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Section3 = () => (
  <section className="py-24 bg-glow-center border-t border-oscar-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px]">
          {/* Grid of images */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-2xl overflow-hidden border-2 border-oscar-gold/20 shadow-xl z-10">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Actor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute top-20 right-10 w-56 h-40 rounded-2xl overflow-hidden border-2 border-oscar-gold/20 shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Actor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute bottom-0 left-20 w-64 h-48 rounded-2xl overflow-hidden border-2 border-oscar-gold/20 shadow-xl z-30 bg-oscar-espresso p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-oscar-gold" />
              <span className="font-display font-bold text-lg">Self-Tape Pro</span>
            </div>
            <div className="h-2 w-full bg-oscar-black rounded-full overflow-hidden">
              <div className="h-full bg-oscar-gold w-3/4"></div>
            </div>
            <p className="text-xs text-oscar-body mt-2 text-right">75% Complete</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold mb-8">By the end, you'll have:</h2>
          <ul className="space-y-6">
            {[
              "A clearer, more confident on-camera presence",
              "Stronger scene choices that read fast in auditions",
              "A tighter reel direction (even if you start with phone footage)",
              "A more professional \"casting-ready\" presentation",
              "A real plan to pursue higher-quality roles with consistency"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-oscar-gold/10 flex items-center justify-center shrink-0 border border-oscar-gold/30">
                  <Star className="w-4 h-4 text-oscar-gold" />
                </div>
                <span className="text-lg text-oscar-headline/90 pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Section4 = () => (
  <section className="py-20 bg-oscar-black border-y border-oscar-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-display font-bold mb-12 text-oscar-headline">Trusted by Industry Leaders</h2>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <h3 className="text-4xl font-bold font-sans tracking-tighter">HBO</h3>
        <h3 className="text-4xl font-bold font-display italic">NETFLIX</h3>
        <h3 className="text-4xl font-bold font-sans tracking-widest">HULU</h3>
        <h3 className="text-4xl font-bold font-display">A24</h3>
        <h3 className="text-4xl font-bold font-sans">PARAMOUNT</h3>
      </div>
    </div>
  </section>
);

const Section5 = () => (
  <section className="py-24 bg-glow-bottom-left">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">What's inside Break Preparation Courses</h2>
          <ul className="space-y-6">
            {[
              { title: "Break Readiness Framework", desc: "what casting looks for immediately" },
              { title: "Weak Point Elimination", desc: "precision practice that moves the needle" },
              { title: "Scene Work & On-Camera Confidence", desc: "deliver with control and truth" },
              { title: "Reel & Self-Tape Upgrades", desc: "phone-to-pro standards" },
              { title: "Submission-Ready Packaging", desc: "present the right \"you\" for the right roles" }
            ].map((item, i) => (
              <li key={i} className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-oscar-gold"></div>
                  <span className="text-lg font-bold text-oscar-headline">{item.title}</span>
                </div>
                <span className="text-oscar-body pl-5 italic">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80" alt="Movie set" className="w-full h-48 object-cover rounded-xl border border-oscar-gold/20" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80" alt="Camera" className="w-full h-64 object-cover rounded-xl border border-oscar-gold/20" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-8">
            <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80" alt="Clapperboard" className="w-full h-64 object-cover rounded-xl border border-oscar-gold/20" referrerPolicy="no-referrer" />
            <div className="w-full h-48 bg-gradient-to-br from-oscar-cocoa to-oscar-espresso rounded-xl border border-oscar-gold/20 flex items-center justify-center flex-col p-6 text-center">
              <Film className="w-10 h-10 text-oscar-gold mb-3" />
              <p className="font-display font-bold text-oscar-headline">Pro Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-oscar-black border-t border-oscar-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Actors use this to stop guessing and start moving.</h2>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { quote: "I finally understood what my reel was missing. My callbacks changed instantly.", name: "Emil", loc: "Florida" },
          { quote: "This gave me structure. I wasn't lost anymore.", name: "Sarah", loc: "New York" },
          { quote: "My materials looked and felt more professional within weeks.", name: "Marcus", loc: "Los Angeles" }
        ].map((t, i) => (
          <div key={i} className="bg-oscar-espresso border border-oscar-gold/20 p-8 rounded-2xl relative">
            <Star className="w-8 h-8 text-oscar-gold/20 absolute top-6 right-6" />
            <p className="text-lg text-oscar-headline mb-8 italic">"{t.quote}"</p>
            <div>
              <p className="font-bold text-oscar-gold">{t.name}</p>
              <p className="text-sm text-oscar-body">{t.loc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-oscar-cocoa via-oscar-bronze to-oscar-cocoa p-1 rounded-xl">
        <div className="bg-oscar-black py-4 px-8 rounded-lg text-center">
          <p className="text-oscar-softgold font-medium tracking-widest uppercase text-sm">Real results vary. Your effort + our structure = momentum.</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Do I need a professional reel?", a: "Not to start. We'll show you how to optimize what you have, even if it's just self-tapes shot on your phone, to look as professional as possible." },
    { q: "My headshot isn't perfect.", a: "That's okay. We teach you how to select the best options and when it's actually time to invest in new ones based on industry standards." },
    { q: "Is this for beginners or experienced actors?", a: "Both. Beginners get a roadmap to avoid years of mistakes. Experienced actors get the polish needed to break through plateaus and land bigger rooms." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-glow-center border-t border-oscar-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Questions? Answered</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-oscar-gold/30 rounded-xl overflow-hidden bg-oscar-espresso/50 backdrop-blur-sm">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-bold text-xl text-oscar-headline">{faq.q}</span>
                {open === i ? <Minus className="text-oscar-gold" /> : <Plus className="text-oscar-gold" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-oscar-body">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterForm = () => (
  <section className="py-24 bg-oscar-black border-t border-oscar-gold/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors" />
              <input type="text" placeholder="Phone" className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors" />
              <input type="text" placeholder="Video or Reel Link" className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors appearance-none">
                <option>Upload Your Video</option>
              </select>
              <select className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors appearance-none">
                <option>Purpose</option>
              </select>
            </div>
            <textarea placeholder="Comments" rows={4} className="w-full bg-oscar-espresso border border-oscar-gold/20 rounded-lg px-4 py-3 text-oscar-headline focus:outline-none focus:border-oscar-gold transition-colors resize-none"></textarea>
            <div className="text-center pt-4">
              <button type="button" className="btn-primary w-full sm:w-auto">Submit Button</button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-10">How you go from <br/> <span className="text-oscar-gold italic">"aspiring" to "bookable."</span></h2>
          <div className="space-y-8 mb-10">
            {[
              "Submit your headshot + reel (best you have today - no pressure)",
              "Train and sharpen with structured lessons and weak-point elimination",
              "Elevate your package so you're ready for submissions, auditions, and bookings"
            ].map((text, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-oscar-gold/20 border border-oscar-gold flex items-center justify-center shrink-0 font-display font-bold text-oscar-gold text-xl">
                  {i + 1}
                </div>
                <p className="text-lg text-oscar-headline pt-1">{text}</p>
              </div>
            ))}
          </div>
          <div>
            <button className="btn-primary">Apply + Submit Headshot & Reel</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-oscar-espresso py-12 border-t border-oscar-gold/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="flex space-x-6 text-sm text-oscar-body">
          <a href="#" className="hover:text-oscar-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-oscar-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-oscar-gold transition-colors">Accessibility</a>
        </div>
        <div className="text-sm text-oscar-body">
          2026 © Elevation Casting. All rights reserved.
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 opacity-50">
        <img src="https://f2z.3fb.myftpupload.com/wp-content/uploads/2026/03/ELEVATION-CASTING-Logo-Gold.png" alt="Elevation Casting Logo" className="h-16 w-auto" referrerPolicy="no-referrer" />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-oscar-black selection:bg-oscar-gold selection:text-oscar-black">
      <Navbar />
      <main>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonials />
        <FAQ />
        <FooterForm />
      </main>
      <Footer />
    </div>
  );
}
