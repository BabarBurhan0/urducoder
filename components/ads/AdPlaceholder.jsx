export default function AdPlaceholder({ label, size = "h-[280px]", network = "Ad" }) {
  return (
    <div
      className={`my-8 flex w-full ${size} items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800`}
      aria-label={`${network} placeholder`}
    >
      <div className="text-center">
        <div className="text-3xl">📢</div>
        <div className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          {network} Placeholder
        </div>
        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {label}
        </div>
        <div className="mt-2 text-[10px] uppercase tracking-wider text-gray-400">
          Visible only in development
        </div>
      </div>
    </div>
  );
}
