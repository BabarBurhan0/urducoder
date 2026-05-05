import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Hum Se Raabta Karein",
  description:
    "UrduCoder se contact karein. Sawaal, suggestions, ya collaborate karne ke liye message bhejein.",
};

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    description: "Kisi bhi sawaal ke liye email karein",
    value: "urducoder.blog@gmail.com",
    href: "mailto:urducoder.blog@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            Get In Touch
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Hum Se Raabta Karein
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Sawaal hai? Suggestion hai? Ya kisi topic pe post chahiye? Hum sun rahe hain —
            kisi bhi tareeqe se message karein.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${method.color} text-2xl shadow-md`}
              >
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {method.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {method.description}
              </p>
              <p className="mt-3 text-sm font-medium text-indigo-600 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                {method.value} &rarr;
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Direct Message Bhejein
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Form bharein, hum 24-48 ghante mein jawab denge.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Common Questions
        </h2>
        <div className="mt-10 space-y-4">
          {[
            {
              q: "Kya UrduCoder ki content free hai?",
              a: "Haan, hamari saari content 100% free hai aur hamesha rahegi.",
            },
            {
              q: "Kya aap guest posts accept karte hain?",
              a: "Bilkul! Quality content welcome hai. Email karein topic + outline ke saath.",
            },
            {
              q: "Kitni jaldi naye posts publish hote hain?",
              a: "Hum har hafte 2-3 naye tutorials publish karne ki koshish karte hain.",
            },
            {
              q: "Kya aap collaborations karte hain?",
              a: "Haan, sponsored posts aur partnerships ke liye email karein.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white">
                {faq.q}
                <svg
                  className="h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
