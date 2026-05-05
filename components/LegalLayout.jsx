export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 border-b border-gray-200 pb-8 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Last updated: <time>{lastUpdated}</time>
        </p>
      </div>
      <div className="space-y-8 text-gray-700 leading-7 dark:text-gray-300 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_p]:my-4 [&_ul]:my-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_a]:text-indigo-600 [&_a]:underline [&_a]:dark:text-indigo-400 [&_strong]:text-gray-900 [&_strong]:dark:text-white">
        {children}
      </div>
    </div>
  );
}
