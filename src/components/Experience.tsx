
import { BriefcaseBusiness, CalendarDays } from 'lucide-react'

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'GIMME Marketplace Ltd',
    period: 'September 2026 – Present',
    type: 'Full-stack Development',
    description:
      'Contributing to the development and improvement of a UK marketplace for buying and selling golf equipment.',
    responsibilities: [
      'Develop and maintain application features using React, Redux, TanStack Query, Node.js, and PostgreSQL.',
      'Build reusable and responsive UI components using React and Chakra UI.',
      'Collaborate with the team in Agile Scrum to deliver new features and product enhancements.',
      'Contribute to order management features and resolve defects to improve application reliability.',
    ],
    technologies: [
      'React',
      'Redux',
      'TanStack Query',
      'Node.js',
      'PostgreSQL',
      'Chakra UI',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'IQZ Systems',
    period: 'August 2024 – February 2026',
    type: 'Full-stack Development',
    description:
      'Developed and maintained web application features and contributed to frontend and backend functionality.',
    responsibilities: [
      'Developed full-stack application features using React, Redux, NestJS, and PostgreSQL.',
      'Designed and implemented RESTful APIs to support frontend integrations and business workflows.',
      'Built reusable and responsive UI components using React and Tailwind CSS.',
      'Collaborated with cross-functional teams, investigated software defects, and contributed to code reviews, sprint planning, and technical discussions.',
    ],
    technologies: [
      'React',
      'Redux',
      'NestJS',
      'PostgreSQL',
      'REST APIs',
      'Tailwind CSS',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'NutriTech Analytics Group — UCSC Research Laboratory',
    period: 'December 2023 – June 2024',
    type: 'Software Engineering Internship',
    description:
      'Contributed to web application development within a research project, working across different stages of the software development lifecycle.',
    responsibilities: [
      'Participated in requirements analysis, application design, feature development, and testing.',
      'Collaborated with stakeholders and clients to understand business requirements.',
      'Developed web application features using the MERN stack.',
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Requirements Analysis',
      'Testing',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-8 border-t border-zinc-200 bg-white px-5 py-8 dark:border-zinc-800 dark:bg-zinc-950 sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            Professional Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            My experience building and improving web applications,
            collaborating with teams, and delivering software features.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-zinc-200 dark:bg-zinc-800 sm:block"
          />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative grid gap-5 sm:grid-cols-[40px_1fr] sm:gap-6"
              >
                {/* Timeline marker */}
                <div className="relative z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-400 sm:flex">
                  <BriefcaseBusiness size={18} />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 transition duration-300 hover:border-orange-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-orange-900 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-medium text-orange-700 dark:text-orange-400">
                        {experience.company}
                      </p>

                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        {experience.type}
                      </p>
                    </div>

                    <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                      <CalendarDays
                        size={15}
                        className="text-orange-600 dark:text-orange-400"
                      />
                      {experience.period}
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
