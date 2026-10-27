import {ArrowUpRight, Mail, Phone} from 'lucide-react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const contactDetails = [
  {
    label: 'Email',
    value: 'maleeshamapalagama@gmail.com',
    href: 'mailto:maleeshamapalagama@gmail.com',
    description: 'For opportunities and professional inquiries',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/maleesha-madhuhansani',
    href: 'https://www.linkedin.com/in/maleesha-madhuhansani/',
    description: 'Connect with me professionally',
    icon: FaLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/MaleeshaMadhuhansani99',
    href: 'https://github.com/MaleeshaMadhuhansani99',
    description: 'Explore my code and personal projects',
    icon: FaGithub,
    external: true,
  },
  {
    label: 'Phone',
    value: '+94 75 453 0276',
    href: 'tel:+94754530276',
    description: 'Available for professional inquiries',
    icon: Phone,
    external: false,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200 bg-white px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            Get in Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Let&apos;s connect and create something meaningful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            I&apos;m open to discussing Software Engineer opportunities,
            interesting projects, and opportunities to collaborate. Feel free to
            reach out through any of the channels below.
          </p>

          {/* Email CTA */}

          <a
            href={`mailto:maleeshamapalagama@gmail.com?subject=${encodeURIComponent(
              'Software Engineer Opportunity',
            )}&body=${encodeURIComponent(
              'Hi Maleesha,\n\nI viewed your portfolio and would like to discuss an opportunity with you.\n\nBest regards,',
            )}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            <Mail size={18} />
            Send Me an Email
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Contact cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactDetails.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex min-w-0 items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-orange-900 dark:hover:bg-zinc-900 dark:hover:shadow-black/20 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-950 dark:text-orange-400 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-zinc-950 dark:text-white">
                    {item.label}
                  </h3>

                  <p className="mt-1 break-words text-sm font-medium text-orange-700 dark:text-orange-400">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                />
              </a>
            )
          })}
        </div>

        {/* Closing message */}
        <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Thank you for visiting my portfolio. I look forward to connecting
            with you.
          </p>
        </div>
      </div>
    </section>
  )
}
