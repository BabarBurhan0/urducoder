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
