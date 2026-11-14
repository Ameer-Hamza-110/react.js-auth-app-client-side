import type { FormEvent } from "react";
import {
  Mail,
  Code2,
  BriefcaseBusiness,
  Send,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  {
    href: "mailto:YOUR_EMAIL@example.com",
    icon: Mail,
    label: "Email",
    description: "YOUR_EMAIL@example.com",
    external: false,
  },
  {
    href: "https://github.com/Ameer-Hamza-110",
    icon: Code2,
    label: "GitHub",
    description: "Explore my repositories",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ameer-hamza-jameel-556717332/",
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    description: "Connect with me",
    external: true,
  },
];

const inputClasses =
  "w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-100";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const subject = String(formData.get("subject"));
    const message = String(formData.get("message"));

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoUrl = `mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-lime-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-1.5 text-xs font-medium text-lime-700 shadow-sm">
            <MessageCircle size={14} aria-hidden="true" />
            Let's talk
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Get in <span className="text-lime-500">Touch.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Have a project idea, a question, or an opportunity to discuss? I'd
            love to hear from you. Send me a message and let's start a
            conversation.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO ===== */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
            Contact Information
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Let's connect and build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
            Whether you want to discuss web development, collaborate on a
            project, or simply say hello, feel free to reach out.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          {contactLinks.map(
            ({ href, icon: Icon, label, description, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-lime-50 text-lime-600 transition-colors group-hover:bg-lime-100">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-zinc-900">{label}</p>
                <p className="mt-1 break-all text-xs leading-5 text-zinc-500">
                  {description}
                </p>
              </a>
            )
          )}
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
              Send a Message
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Let's get in touch
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Fill out the form below and I'll be happy to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-9 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-zinc-800"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
                className={inputClasses}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              Send Message
              <Send
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;