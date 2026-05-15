import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const mdxComponents = {
  h1: (props) => (
    <h1
      className="mt-12 mb-6 scroll-mt-20 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 scroll-mt-20 border-b border-gray-200 pb-2 text-3xl font-bold tracking-tight text-gray-900 dark:border-gray-800 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 mb-2 scroll-mt-20 text-xl font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-5 text-base leading-7 text-gray-700 dark:text-gray-300" {...props} />
  ),
  a: ({ href = "", ...props }) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-700 hover:decoration-indigo-500 dark:text-indigo-400 dark:decoration-indigo-700 dark:hover:text-indigo-300"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href}
        className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-700 dark:text-indigo-400 dark:decoration-indigo-700"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul className="my-5 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-indigo-500 bg-indigo-50 px-5 py-3 italic text-gray-800 dark:bg-indigo-950/30 dark:text-gray-200"
      {...props}
    />
  ),
  code: (props) => {
    if (typeof props.children === "string" && !props.className) {
      return (
        <code
          className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-pink-600 dark:bg-gray-800 dark:text-pink-400"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 dark:border-gray-800 dark:bg-gray-900"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-gray-200 dark:border-gray-800" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="min-w-full divide-y divide-gray-200 border border-gray-200 text-left text-sm dark:divide-gray-800 dark:border-gray-800"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="bg-gray-50 px-4 py-3 font-semibold text-gray-900 dark:bg-gray-900 dark:text-white"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-t border-gray-200 px-4 py-3 text-gray-700 dark:border-gray-800 dark:text-gray-300" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-6 rounded-xl border border-gray-200 dark:border-gray-800"
      alt={props.alt || ""}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
  ),
  ToolCard: ({ icon = "🔧", name, tagline, price, link, badge, gradient = "from-indigo-500 to-purple-500" }) => (
    <div className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-3xl shadow-md`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {name}
              </h3>
              {tagline && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{tagline}</p>
              )}
            </div>
          </div>
          {badge && (
            <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              {badge}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          {price && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
              💰 {price}
            </span>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1 font-semibold text-white hover:bg-indigo-700"
            >
              Visit Site →
            </a>
          )}
        </div>
      </div>
    </div>
  ),
  ProTip: ({ children, title = "💡 Pro Tip" }) => (
    <div className="my-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5 dark:bg-amber-950/30">
      <p className="mb-1 font-bold text-amber-900 dark:text-amber-200">{title}</p>
      <div className="text-amber-900 dark:text-amber-100 [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  ),
  Callout: ({ children, type = "info", title }) => {
    const styles = {
      info: { border: "border-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-900 dark:text-blue-100", titleColor: "text-blue-900 dark:text-blue-200", icon: "ℹ️" },
      success: { border: "border-green-500", bg: "bg-green-50 dark:bg-green-950/30", text: "text-green-900 dark:text-green-100", titleColor: "text-green-900 dark:text-green-200", icon: "✅" },
      warning: { border: "border-orange-500", bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-900 dark:text-orange-100", titleColor: "text-orange-900 dark:text-orange-200", icon: "⚠️" },
      danger: { border: "border-red-500", bg: "bg-red-50 dark:bg-red-950/30", text: "text-red-900 dark:text-red-100", titleColor: "text-red-900 dark:text-red-200", icon: "🚫" },
    };
    const s = styles[type] || styles.info;
    return (
      <div className={`my-6 rounded-xl border-l-4 ${s.border} ${s.bg} p-5`}>
        {title && (
          <p className={`mb-1 font-bold ${s.titleColor}`}>
            {s.icon} {title}
          </p>
        )}
        <div className={`${s.text} [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0`}>
          {children}
        </div>
      </div>
    );
  },
  Stat: ({ value, label, color = "indigo" }) => {
    const colors = {
      indigo: "from-indigo-500 to-purple-500",
      green: "from-green-500 to-emerald-500",
      orange: "from-orange-500 to-red-500",
      blue: "from-blue-500 to-cyan-500",
      pink: "from-pink-500 to-rose-500",
    };
    return (
      <div className={`my-6 inline-flex flex-col items-center rounded-2xl bg-gradient-to-br ${colors[color] || colors.indigo} px-8 py-6 text-white shadow-lg`}>
        <div className="text-4xl font-extrabold">{value}</div>
        <div className="mt-1 text-sm font-medium opacity-90">{label}</div>
      </div>
    );
  },
};

const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
};

export default function MDXContent({ source }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypePrettyCode, prettyCodeOptions],
          ],
        },
      }}
    />
  );
}
