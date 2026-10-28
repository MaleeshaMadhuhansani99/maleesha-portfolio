import {Award, GraduationCap, Star, ExternalLink} from 'lucide-react'
import {FaLinkedin} from 'react-icons/fa'

// Replace this placeholder with the URL of your actual LinkedIn post.
const LINKEDIN_POST_URL = 'https://lnkd.in/p/gmZ_YfUB'

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-8 border-t border-zinc-200 bg-zinc-50 px-5 py-8 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            Achievements &amp; Recognition
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            A little recognition along the way.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            Recognizing the dedication and effort behind my academic journey.
          </p>
        </div>

        {/* Achievement card */}
        <article className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/5 dark:border-orange-900/60 dark:bg-zinc-950 sm:p-9">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-orange-100/70 blur-2xl dark:bg-orange-500/10"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Award icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400">
              <Award size={34} strokeWidth={1.7} />
            </div>

            {/* Achievement details */}
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                <Star size={14} />
                Academic Recognition
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                Director&apos;s List
              </h3>

              <div className="mt-3 flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                <GraduationCap
                  size={20}
                  className="mt-0.5 shrink-0 text-orange-600 dark:text-orange-400"
                />

                <p className="font-medium">
                  University of Colombo School of Computing (UCSC)
                </p>
              </div>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                Recognized on the Director&apos;s List for academic performance
                during my Bachelor of Science in Computer Science studies at the
                University of Colombo.
              </p>

              {/* Achievement tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  Academic Excellence
                </span>

                <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  Computer Science
                </span>

                {/* LinkedIn post button */}
                <a
                  href={LINKEDIN_POST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my Director's List recognition post on LinkedIn"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-1.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#004182] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                >
                  <FaLinkedin size={18} />
                  View LinkedIn Post
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
