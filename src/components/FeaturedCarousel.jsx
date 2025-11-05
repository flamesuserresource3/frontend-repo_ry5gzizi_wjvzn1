import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Star } from 'lucide-react';

const demoItems = [
  { id: 1, title: 'Thermodynamics Notes', type: 'Notes', branch: 'Mechanical', downloads: 1320 },
  { id: 2, title: 'Digital Logic PYQs', type: 'PYQs', branch: 'ECE', downloads: 980 },
  { id: 3, title: 'Data Structures Book', type: 'Book', branch: 'CSE', downloads: 2150 },
  { id: 4, title: 'Analog Lab Manual', type: 'Lab', branch: 'EEE', downloads: 740 },
  { id: 5, title: 'Fluid Mechanics Notes', type: 'Notes', branch: 'Civil', downloads: 860 },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => demoItems, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section id="featured" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Resources</h2>
            <p className="text-slate-600">Hand-picked materials students love the most.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-500">
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={items[index].id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">{items[index].type}</span>
                  <h3 className="text-2xl font-semibold tracking-tight">{items[index].title}</h3>
                  <p className="text-slate-600">Branch: {items[index].branch}</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">{items[index].downloads.toLocaleString()} downloads</span>
                  </div>
                  <button className="mt-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                    <FileText className="h-4 w-4" />
                    View Resource
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative min-h-[260px] md:min-h-[320px]">
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="h-full w-full grid place-items-center">
                  <div className="relative h-40 w-64 sm:h-48 sm:w-80 md:h-56 md:w-[420px]">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 shadow-xl" />
                    <div className="absolute inset-0 rounded-xl bg-white/10" />
                    <div className="absolute inset-0 rounded-xl border border-white/20" />
                    <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-blue-100" />
                    <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-blue-200" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
