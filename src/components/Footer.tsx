
import { ArrowUp, Mail } from 'lucide-react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-5 py-8 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Name and tagline */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white"
            >
              Maleesha
              <span className="text-orange-600 dark:text-orange-400">.</span>
            </a>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Software Engineer · Building thoughtful digital experiences.
            </p>
          </div>

          {/* Social and contact links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MaleeshaMadhuhansani99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-orange-400 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/maleesha-madhuhansani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-orange-400 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="mailto:maleeshamapalagama@gmail.com"
              aria-label="Send me an email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-orange-400 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              <Mail size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition hover:-translate-y-1 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 sm:text-left">
            © {currentYear} Maleesha Madhuhansani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
