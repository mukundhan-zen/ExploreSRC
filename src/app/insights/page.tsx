import Image from "next/image";

export const metadata = {
  title: "Corporate R&D Insights Panel",
  description: "Interactive panel presenting analytics and strategic research insights.",
};

export default function InsightsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            Corporate R&D Insights Panel
          </h1>
          <p className="mb-5 text-lg text-slate-700 dark:text-slate-200">
            Unlock powerful analytics on R&D activity, investment, performance, and impact. Make strategic decisions with data-driven insights.
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Research output trends and KPIs</li>
            <li>Cross-team collaboration analytics</li>
            <li>Real-time innovation impact metrics</li>
            <li>Funding allocation and ROI analysis</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Insights panel dashboard"
            width={400}
            height={280}
            className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
            unoptimized
          />
        </div>
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Analytics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-2 text-indigo-700 dark:text-indigo-300">Research Output</h3>
            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-lg mb-4">
              <span className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">132</span>
              <span className="ml-2 text-slate-700 dark:text-slate-200">Publications this quarter</span>
            </div>
            <h3 className="font-medium mb-2 text-emerald-700 dark:text-emerald-300">Collaboration Index</h3>
            <div className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-lg">
              <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-200">87%</span>
              <span className="ml-2 text-slate-700 dark:text-slate-200">Cross-team projects</span>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-fuchsia-700 dark:text-fuchsia-300">Innovation Impact</h3>
            <div className="bg-fuchsia-100 dark:bg-fuchsia-900/40 p-4 rounded-lg mb-4">
              <span className="text-3xl font-bold text-fuchsia-700 dark:text-fuchsia-200">24</span>
              <span className="ml-2 text-slate-700 dark:text-slate-200">Patents filed this year</span>
            </div>
            <h3 className="font-medium mb-2 text-teal-700 dark:text-teal-300">Funding ROI</h3>
            <div className="bg-teal-100 dark:bg-teal-900/40 p-4 rounded-lg">
              <span className="text-3xl font-bold text-teal-700 dark:text-teal-200">3.6x</span>
              <span className="ml-2 text-slate-700 dark:text-slate-200">Return on R&D investment</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
