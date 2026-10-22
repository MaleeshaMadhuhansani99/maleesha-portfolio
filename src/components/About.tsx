import {
  Code2,
  Database,
  Users,
} from 'lucide-react'

const highlights = [
//   {
//     icon: Code2,
//     title: 'Frontend Development',
//     description:
//       'Building reusable, responsive interfaces with a focus on usability and maintainability.',
//   },
//   {
//     icon: Code2,
//     title: 'Frontend Development',
//     description:
//       'Building reusable, responsive interfaces with a focus on usability and maintainability.',
//   },
  {
    icon: Database,
    title: 'Full-Stack Development',
    description:
      'Developing application features, RESTful APIs, and integrations with relational databases.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Working with cross-functional teams, stakeholders, and Agile Scrum processes to deliver features.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            A little about me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Turning ideas into{' '}
            <span className="text-orange-600 dark:text-orange-400">
              reliable software.
            </span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-300">
            <p>
              I&apos;m an Associate Software Engineer specializing in
              full-stack web development. I enjoy turning requirements
              into responsive, user-friendly application features while
              writing clean and maintainable code.
            </p>

            <p>
              At GIMME Marketplace and IQZ Systems, I&apos;ve contributed
              to application features, reusable UI components, API
              integrations, and software improvements. My experience
              includes working with React, state management tools,
              Node.js, NestJS, and PostgreSQL.
            </p>

            <p>
              Earlier, as a Software Engineer Intern at the NutriTech
              Analytics Group research laboratory at UCSC, I worked
              across requirements analysis, application design, feature
              development, and testing using the MERN stack.
            </p>

            <p>
              I value collaboration, thoughtful problem-solving, and
              continuous learning. I aim to create software that is
              maintainable, practical, and useful to the people who use it.
            </p>
          </div>

          {/* Professional highlights */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-orange-800 dark:hover:shadow-black/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100 dark:bg-orange-950/60 dark:text-orange-400 dark:group-hover:bg-orange-950">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white">
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