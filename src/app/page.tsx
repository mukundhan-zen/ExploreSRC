import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <section className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center tracking-tight text-slate-900 dark:text-white">
          Welcome to the Corporate R&D Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/insights"
            className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-start"
          >
            <span className="text-xl font-semibold mb-2 text-indigo-600 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300">
              Corporate R&D Insights Panel
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Explore real-time analytics, trends, and impactful research insights across your organization.
            </span>
          </Link>
          <Link
            href="/maps"
            className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-start"
          >
            <span className="text-xl font-semibold mb-2 text-teal-600 group-hover:text-teal-800 dark:text-teal-400 dark:group-hover:text-teal-300">
              Living Research Maps
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Visualize dynamic knowledge graphs and discover connections between projects, teams, and fields.
            </span>
          </Link>
          <Link
            href="/dashboard"
            className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-start"
          >
            <span className="text-xl font-semibold mb-2 text-emerald-600 group-hover:text-emerald-800 dark:text-emerald-400 dark:group-hover:text-emerald-300">
              Personalized Research Dashboards
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Get tailored recommendations, project updates, and performance metrics personalized for you.
            </span>
          </Link>
          <Link
            href="/projects"
            className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-start"
          >
            <span className="text-xl font-semibold mb-2 text-fuchsia-600 group-hover:text-fuchsia-800 dark:text-fuchsia-400 dark:group-hover:text-fuchsia-300">
              Corporate R&D Project View
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Manage research projects, organize folders, and annotate findings for seamless collaboration.
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
