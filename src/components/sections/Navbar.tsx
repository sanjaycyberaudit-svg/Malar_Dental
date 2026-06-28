import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { ToothIcon } from "../ui/ToothIcon";
import { site } from "../../lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="flex items-center justify-between px-6 py-[22px] md:px-[60px]">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-white/25 bg-white/15">
            <ToothIcon className="h-4 w-4 text-white" />
          </span>
          <span className="text-[0.95rem] font-bold tracking-[-0.01em] text-white">
            {site.brand}
          </span>
        </a>

        {/* Center nav (desktop) */}
        <div className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.72rem] font-normal text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-[0.72rem] font-medium text-white/60 transition-colors hover:text-white md:block"
          >
            {site.phone}
          </a>
          <Button href="#contact" className="hidden h-9 px-5 text-[0.72rem] md:inline-flex">
            Book a Call
          </Button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[hsl(var(--background))]/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-[22px]">
              <span className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-white/25 bg-white/15">
                  <ToothIcon className="h-4 w-4 text-white" />
                </span>
                <span className="text-[0.95rem] font-bold tracking-[-0.01em] text-white">
                  {site.brand}
                </span>
              </span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-2xl font-semibold tracking-[-0.02em] text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 px-6 pb-12">
              <Button href={`tel:${site.phoneTel}`} variant="ghost" className="h-12 w-full">
                <Phone className="h-4 w-4" /> {site.phone}
              </Button>
              <Button href="#contact" onClick={() => setOpen(false)} className="h-12 w-full">
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
