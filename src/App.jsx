import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import LibraryPreview from './components/LibraryPreview';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCarousel />
        <LibraryPreview />

        <section id="about" className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[{
                label: 'Total Resources', value: 1248
              },{
                label: 'Downloads', value: 58320
              },{
                label: 'Contributors', value: 86
              }].map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm"
                >
                  <div className="text-4xl font-extrabold text-blue-600">{s.value.toLocaleString()}</div>
                  <div className="mt-1 text-slate-600">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold tracking-tight">About EngiNotes</h3>
                <p className="text-slate-600">A community-driven hub where engineering students upload, share, and access high-quality study resources across branches and semesters.</p>
                <p className="text-slate-600">Built with a modern, minimalist aesthetic and motion-first interactions for a smooth, delightful experience.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> Instant search and smart filters</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> Smooth page transitions and hover effects</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-600" /> Responsive across phones, tablets, laptops</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Get in touch</h3>
            <p className="text-slate-600 mt-2">Have requests or want to contribute? We’d love to hear from you.</p>
            <form className="mt-6 grid grid-cols-1 gap-4 text-left">
              <input className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Your name" />
              <input type="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Email address" />
              <textarea rows={4} className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Message" />
              <button className="rounded-xl bg-blue-600 text-white px-6 py-3 font-medium shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} EngiNotes. Built for students, by students.</p>
          <div className="text-sm text-slate-500">Blue • White • Light Gray — Modern academic theme</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
