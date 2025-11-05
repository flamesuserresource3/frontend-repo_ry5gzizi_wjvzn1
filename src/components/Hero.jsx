import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[78vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8sK9s7yQ6G3x0m0m/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Empowering Engineering Students with
          <span className="text-blue-600"> Free Study Resources</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Access notes, PYQs, books, and lab manuals — beautifully organized with smooth animations for a delightful learning experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#library"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl transition-transform hover:-translate-y-0.5"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Explore Library
          </a>
          <a
            href="#featured"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-blue-600 font-medium border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <FileDown className="h-5 w-5" />
            Featured Resources
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3 text-slate-600"
        >
          {["Notes", "PYQs", "Books", "Labs", "PDFs", "Guides"].map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm shadow-sm">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
