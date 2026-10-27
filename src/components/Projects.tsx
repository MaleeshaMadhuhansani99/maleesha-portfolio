import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  ShoppingBag,
} from 'lucide-react'

import {FaGithub} from 'react-icons/fa'

const projects = [
  {
    title: 'MarketplaceApp',
    category: 'Personal Project',
    description:
      'A full-stack marketplace application where users can discover, search, filter, and manage product listings through a responsive interface.',
    contributions: [
      'Implemented user registration and login.',
      'Built listing search, category and price filters, sorting, and pagination.',
      'Implemented authorized listing creation with image uploads and deletion.',
      'Added form validation, protected routes, and consistent error handling.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'SQLite',
      'JWT',
    ],
    githubUrl:
      'https://github.com/MaleeshaMadhuhansani99/MarketplaceApp',
  },
  {
    title: 'GIMME Marketplace',
    category: 'Professional Contribution',
    description:
      'Contributed to the development and improvement of a UK marketplace for buying and selling golf equipment as a Full-Stack Developer.',
    contributions: [
      'Contributed to order management features.',
      'Developed and maintained application features using React, Redux, TanStack Query, Node.js, and PostgreSQL.',
      'Built reusable and responsive UI components using React and Chakra UI.',
      'Resolved defects and enhanced existing features to improve application reliability.',
    ],
    technologies: [
      'React',
      'Redux',
      'TanStack Query',
      'Node.js',
      'PostgreSQL',
      'Chakra UI',
    ],
    githubUrl: null,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Projects &amp; Contributions
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            A selection of personal development work and professional
            contributions showcasing my experience building web applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isProfessional = !project.githubUrl
            const ProjectIcon = isProfessional
              ? BriefcaseBusiness
              : ShoppingBag

            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-900 dark:hover:shadow-black/20"
              >
                {/* Card header */}
                <div className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 dark:border-zinc-800 dark:from-orange-950/40 dark:via-zinc-900 dark:to-zinc-950 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/10"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-700 shadow-sm dark:border-orange-900 dark:bg-zinc-900 dark:text-orange-400">
                      <ProjectIcon size={27} strokeWidth={1.7} />
                    </div>

                    <span className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {index === 0
                      ? 'Full-Stack Web Application'
                      : 'Marketplace Product Development'}
                  </p>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <h4 className="mb-3 mt-7 text-sm font-semibold text-zinc-900 dark:text-white">
                    {isProfessional
                      ? 'My Contributions'
                      : 'Key Features'}
                  </h4>

                  <ul className="space-y-3">
                    {project.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
                        />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology tags */}
                  <div className="mt-7">
                    <h4 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-white">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card action */}
                  <div className="mt-auto pt-8">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400"
                      >
                        <FaGithub size={18} />
                        View GitHub Repository
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <a
                        href="#experience"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-orange-400 dark:hover:text-orange-400"
                      >
                        <BriefcaseBusiness size={17} />
                        View Experience
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
