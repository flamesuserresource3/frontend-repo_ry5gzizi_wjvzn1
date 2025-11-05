import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, BookCopy, FileQuestion, FileText, FlaskConical, Search } from 'lucide-react';

const allMaterials = [
  { id: 1, title: 'Signals & Systems Notes', branch: 'ECE', semester: '3', type: 'Notes' },
  { id: 2, title: 'Operating Systems PYQs', branch: 'CSE', semester: '4', type: 'PYQs' },
  { id: 3, title: 'Strength of Materials', branch: 'Civil', semester: '2', type: 'Book' },
  { id: 4, title: 'Analog Circuits Lab', branch: 'EEE', semester: '5', type: 'Labs' },
  { id: 5, title: 'Thermodynamics', branch: 'Mechanical', semester: '3', type: 'Notes' },
  { id: 6, title: 'Data Structures PYQs', branch: 'CSE', semester: '3', type: 'PYQs' },
  { id: 7, title: 'Fluid Mechanics Lab', branch: 'Civil', semester: '4', type: 'Labs' },
  { id: 8, title: 'Discrete Mathematics', branch: 'CSE', semester: '2', type: 'Book' },
];

const typeIcon = (t) => {
  switch (t) {
    case 'Notes':
      return <FileText className="h-4 w-4" />;
    case 'PYQs':
      return <FileQuestion className="h-4 w-4" />;
    case 'Book':
      return <BookCopy className="h-4 w-4" />;
    case 'Labs':
      return <FlaskConical className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

export default function LibraryPreview() {
  const [query, setQuery] = useState('');
  const [branch, setBranch] = useState('All');
  const [semester, setSemester] = useState('All');
  const [type, setType] = useState('All');

  const filtered = useMemo(() => {
    return allMaterials.filter((m) => {
      const byQuery = m.title.toLowerCase().includes(query.toLowerCase());
      const byBranch = branch === 'All' || m.branch === branch;
      const bySem = semester === 'All' || m.semester === semester;
      const byType = type === 'All' || m.type === type;
      return byQuery && byBranch && bySem && byType;
    });
  }, [query, branch, semester, type]);

  return (
    <section id="library" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Study Material Library</h2>
            <p className="text-slate-600">Filter by branch, semester, or type to quickly find what you need.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Interactive filters</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title"
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <select value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm">
              {['All','CSE','ECE','EEE','Civil','Mechanical'].map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select value={semester} onChange={(e) => setSemester(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm">
              {['All','1','2','3','4','5','6','7','8'].map((s) => (
                <option key={s} value={s}>{s === 'All' ? 'All Semesters' : `Semester ${s}`}</option>
              ))}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 text-sm">
              {['All','Notes','PYQs','Book','Labs'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-9">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filtered.map((m) => (
                  <motion.div
                    layout
                    key={m.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                        {typeIcon(m.type)}
                        {m.type}
                      </span>
                      <span className="text-xs text-slate-500">{m.branch} • Sem {m.semester}</span>
                    </div>
                    <h3 className="mt-3 font-semibold text-slate-900 line-clamp-2">{m.title}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Preview</button>
                      <button className="text-sm rounded-lg bg-slate-900 text-white px-3 py-1.5 group-hover:bg-blue-600 transition-colors">Download</button>
                    </div>
                  </motion.div>
                ))}
                {filtered.length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center text-slate-500 py-10">
                    No materials match your filters.
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
