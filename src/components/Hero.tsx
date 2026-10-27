import {/*ArrowDown,*/ ArrowUpRight, Code2, Eye} from 'lucide-react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const GITHUB_URL = 'https://github.com/MaleeshaMadhuhansani99'

// Replace this with your actual LinkedIn profile URL.
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-linkedin-username/'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-5 py-4 dark:bg-zinc-950 sm:px-8 sm:py-24 lg:py-4"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: Introduction */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-300">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Software Engineer
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-orange-600 dark:text-orange-400">
              Maleesha.
            </span>
            <br />I build thoughtful digital experiences.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            I&apos;m a Computer Science graduate with professional experience
            developing web applications across frontend and backend. I enjoy
            turning requirements into responsive, maintainable, and
            user-friendly software.
          </p>

          {/* Main actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </a>

            {/* <a
              href={`${import.meta.env.BASE_URL}Maleesha-Madhuhansani-CV.pdf`}
              download="Maleesha-Madhuhansani-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-orange-500 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              Download CV
              <ArrowDown size={17} />
            </a> */}

            <a
              href={`${import.meta.env.BASE_URL}Maleesha-Madhuhansani-CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-orange-500 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-orange-400 dark:hover:text-orange-400"
            >
              View CV
              <Eye size={17} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-5">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Find me on
            </span>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-600 transition hover:-translate-y-0.5 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
            >
              <FaGithub size={23} />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-zinc-600 transition hover:-translate-y-0.5 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
            >
              <FaLinkedin size={23} />
            </a>
          </div>
        </div>

        {/* Right: Code-inspired visual */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-orange-300/40 blur-2xl dark:bg-orange-500/20"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-amber-200/50 blur-2xl dark:bg-amber-500/10"
          />

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
            {/* Code card header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Code2 size={16} />
                maleesha.ts
              </div>
            </div>

            {/* Illustrative code */}
            <div className="overflow-x-auto p-6 sm:p-8">
              <div className="min-w-max font-mono text-sm leading-8 sm:text-base">
                <p>
                  <span className="text-violet-600 dark:text-violet-400">
                    const
                  </span>{' '}
                  <span className="text-blue-700 dark:text-blue-300">
                    developer
                  </span>{' '}
                  = {'{'}
                </p>

                <p className="pl-5">
                  <span className="text-sky-700 dark:text-sky-300">name</span>:{' '}
                  <span className="text-emerald-700 dark:text-emerald-300">
                    &apos;Maleesha&apos;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-sky-700 dark:text-sky-300">role</span>:{' '}
                  <span className="text-emerald-700 dark:text-emerald-300">
                    &apos;Software Engineer&apos;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-sky-700 dark:text-sky-300">focus</span>:
                  [
                </p>

                <p className="pl-10 text-emerald-700 dark:text-emerald-300">
                  &apos;Clean code&apos;,
                </p>

                <p className="pl-10 text-emerald-700 dark:text-emerald-300">
                  &apos;Great user experiences&apos;,
                </p>

                <p className="pl-10 text-emerald-700 dark:text-emerald-300">
                  &apos;Continuous learning&apos;,
                </p>

                <p className="pl-5">],</p>
                <p>{'}'}</p>
              </div>
            </div>

            {/* Technology labels */}
            {/* <div className="border-t border-zinc-200 bg-zinc-50 px-5 py-5 dark:border-zinc-800 dark:bg-zinc-950/60 sm:px-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Working with
              </p>

              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mx-auto mt-4 flex max-w-6xl items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 sm:mt-20">
        <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
        Scroll to explore
      </div>
    </section>
  )
}
