import Image from "next/image";

export const metadata = {
  title: "Corporate R&D Project View",
  description: "Manage research projects, folders, and annotations for effective collaboration.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-700 dark:text-fuchsia-300">
            Corporate R&D Project View
          </h1>
          <p className="mb-5 text-lg text-slate-700 dark:text-slate-200">
            Organize, track, and annotate your research projects for streamlined collaboration and knowledge sharing.
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Project folders & hierarchy</li>
            <li>Team-based project access</li>
            <li>Annotations & research notes</li>
            <li>Real-time collaboration tools</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Project folders"
            width={400}
            height={280}
            className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
            unoptimized
          />
        </div>
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Project Management</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-fuchsia-100 dark:bg-fuchsia-900/40 p-4 rounded-lg mb-4 md:mb-0">
            <h3 className="font-medium mb-2 text-fuchsia-700 dark:text-fuchsia-200">Folders & Hierarchy</h3>
            <p className="text-slate-700 dark:text-slate-200">Organize projects into folders and subfolders for easy access and management.</p>
          </div>
          <div className="flex-1 bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-emerald-700 dark:text-emerald-200">Annotations</h3>
            <p className="text-slate-700 dark:text-slate-200">Add research notes and highlight key findings directly within project folders.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
