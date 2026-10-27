import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Braces,
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      'React',
      'Next.js',
      'Redux',
      'TanStack Query',
      'Tailwind CSS',
      'Chakra UI',
      'SCSS',
      'HTML',
    ],
  },
  {
    title: 'Backend Development',
    icon: Layers3,
    skills: [
      'Node.js',
      'NestJS',
      'REST API Development',
      'Prisma ORM',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Azure',
      'Docker',
      'n8n',
      'Visual Studio Code',
      'Swagger / OpenAPI',
      'Apidog',
    ],
  },
  {
    title: 'Engineering Practices',
    icon: GitBranch,
    skills: [
      'Agile Scrum',
      'Unit Testing',
      'API Integration',
      'Responsive Web Design',
      'Version Control',
      'SEO Basics',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-zinc-200 bg-white px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            Technical expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            Technologies and engineering practices I&apos;ve worked with
            while building and maintaining web applications.
          </p>
        </div>

        {/* Technical skill groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-orange-800 dark:hover:shadow-black/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* Soft skills */}
        {/* <div className="mt-10 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
          <h3 className="mb-4 font-semibold text-zinc-900 dark:text-white">
            Beyond the code
          </h3>

          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}