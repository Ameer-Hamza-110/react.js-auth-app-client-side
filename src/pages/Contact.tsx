
import type { FormEvent } from "react";
import { Mail, Code2, BriefcaseBusiness, Send, MessageCircle } from "lucide-react";

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

    const mailtoUrl =
      `mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-zinc-50/70">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-medium text-lime-700">
              <MessageCircle size={16} />
              Let's talk
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Get in <span className="text-lime-500">Touch.</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-zinc-500 sm:text-lg">
              Have a project idea, a question, or an opportunity
              to discuss? I'd love to hear from you. Send me a message
              and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">

        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
            Contact Information
          </p>

          <h2 className="mt-3 text-2xl font-bold text-zinc-900">
            Let's connect and build something together.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Whether you want to discuss web development, collaborate
            on a project, or simply say hello, feel free to reach out.
          </p>

          <div className="mt-9 space-y-5">
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:border-lime-300 hover:bg-lime-50/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900">
                  Email
                </p>
                <p className="break-all text-sm text-zinc-500">
                  YOUR_EMAIL@example.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Ameer-Hamza-110"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:border-lime-300 hover:bg-lime-50/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                <Code2 size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  GitHub
                </p>
                <p className="text-sm text-zinc-500">
                  Explore my repositories
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ameer-hamza-jameel-556717332/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition hover:border-lime-300 hover:bg-lime-50/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  LinkedIn
                </p>
                <p className="text-sm text-zinc-500">
                  Connect with me
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-zinc-900">
            Send me a message
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Fill out the form below and I'll be happy to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
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
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
                />
              </div>
            </div>

            <div>
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
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
              />
            </div>

            <div>
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
                className="w-full resize-y rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
            >
              Send Message
              <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
