import {useState} from 'react'
import {Menu, Moon, Sun, X} from 'lucide-react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {useTheme} from '../hooks/useTheme'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const {theme, toggleTheme} = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Maleesha Madhuhansani 
          <span className="text-orange-600 dark:text-orange-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop theme toggle and social links */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/MaleeshaMadhuhansani99"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my GitHub profile"
            className="rounded-full p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-orange-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://linkedin.com/in/maleeshamadhuhansani"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="rounded-full p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-orange-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
          >
            <FaLinkedin size={19} />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            className="rounded-full border border-zinc-200 p-2 text-zinc-700 transition hover:border-orange-300 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-orange-400 dark:hover:text-orange-400"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contact"
            className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile menu and theme controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-orange-50 hover:text-orange-700 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-orange-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
