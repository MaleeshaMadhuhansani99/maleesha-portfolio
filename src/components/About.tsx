import {Code2, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Building responsive web interfaces, application features, and API integrations.',
  },

  {
    icon: Rocket,
    title: 'Self-Motivated & Quick to Learn',
    description:
      'Eager to learn new technologies, adapt to changing requirements, and continuously improve my skills to build better software.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-8 border-t border-zinc-200 bg-zinc-50 px-5 py-8 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Building meaningful digital experiences.
          </h2>
        </div>

        {/* Introduction and highlights */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">
            <p>
              I&apos;m an Associate Software Engineer with{' '}
              <span className="font-semibold text-zinc-950 dark:text-white">
                2+ years of software development experience
              </span>
              , including professional roles and an internship. I specialize in
              full-stack web development and enjoy building responsive,
              maintainable, and user-friendly applications.
            </p>

            <p>
              My experience includes developing application features, creating
              reusable UI components, integrating RESTful APIs, and improving
              existing software. I enjoy collaborating with teams to turn
              requirements into practical software solutions.
            </p>

            {/* <p>
              I hold a{' '}
              <span className="font-semibold text-zinc-950 dark:text-white">
                Bachelor of Science (BSc) in Computer Science
              </span>{' '}
              from the University of Colombo, completed in 2024. I&apos;m
              passionate about continuous learning, thoughtful problem-solving,
              and writing clean, maintainable code.
            </p> */}

            {/* Experience and degree highlights */}
            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Software Development
                </p>

                <p className="mt-1 text-2xl font-bold text-orange-600 dark:text-orange-400">
                  2+ Years
                </p>

                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Professional roles and internship experience
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Education
                </p>

                <p className="mt-1 text-lg font-bold text-zinc-950 dark:text-white">
                  BSc in Computer Science
                </p>

                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  University of Colombo · 2021–2024
                </p>
              </div>
            </div>
          </div>

          {/* Key strengths */}
          <div className="grid content-start gap-4">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-800 dark:hover:shadow-black/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
