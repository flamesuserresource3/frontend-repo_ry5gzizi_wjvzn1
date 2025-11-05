import { useState } from 'react';
import { BookOpen, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center shadow-lg shadow-blue-600/30 animate-pulse">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">EngiNotes</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#library" className="text-slate-600 hover:text-slate-900 transition-colors">Library</a>
            <a href="#featured" className="text-slate-600 hover:text-slate-900 transition-colors">Featured</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search materials"
                className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <a href="#upload" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:shadow-lg transition-all">Upload</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a href="#library" className="px-3 py-2 rounded-md hover:bg-slate-100">Library</a>
              <a href="#featured" className="px-3 py-2 rounded-md hover:bg-slate-100">Featured</a>
              <a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-100">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-100">Contact</a>
              <div className="px-3 pt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search materials"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              </div>
              <a href="#upload" className="mx-3 mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:shadow-lg transition-all text-center">Upload</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
