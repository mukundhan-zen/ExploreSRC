import Image from "next/image";

export const metadata = {
  title: "Personalized Research Dashboard",
  description: "Your tailored gateway to research updates, recommendations, and metrics.",
};

export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">
            Personalized Research Dashboard
          </h1>
          <p className="mb-5 text-lg text-slate-700 dark:text-slate-200">
            Stay ahead with a dashboard designed just for you. Track your projects, get AI-driven recommendations, and monitor key research metrics.
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Customizable widgets and layout</li>
            <li>Project progress and deadlines</li>
            <li>Personalized research recommendations</li>
            <li>Recent activity and notifications</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Personal dashboard"
            width={400}
            height={280}
            className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
            unoptimized
          />
        </div>
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Your Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-lg flex flex-col items-start">
            <span className="text-xl font-semibold text-emerald-700 dark:text-emerald-200 mb-1">Active Projects</span>
            <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-200">4</span>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-lg flex flex-col items-start">
            <span className="text-xl font-semibold text-indigo-700 dark:text-indigo-200 mb-1">Recommendations</span>
            <span className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">3</span>
          </div>
          <div className="bg-fuchsia-100 dark:bg-fuchsia-900/40 p-4 rounded-lg flex flex-col items-start">
            <span className="text-xl font-semibold text-fuchsia-700 dark:text-fuchsia-200 mb-1">Deadlines</span>
            <span className="text-3xl font-bold text-fuchsia-700 dark:text-fuchsia-200">2</span>
          </div>
        </div>
      </section>
    </main>
  );
}
