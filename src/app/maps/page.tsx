import Image from "next/image";

export const metadata = {
  title: "Living Research Maps",
  description: "Explore dynamic knowledge graphs and visualize research connections.",
};

export default function ResearchMapsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-700 dark:text-teal-300">
            Living Research Maps
          </h1>
          <p className="mb-5 text-lg text-slate-700 dark:text-slate-200">
            Visualize the ever-evolving landscape of your organization's research. Discover interconnected projects, expertise clusters, and collaboration pathways.
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Dynamic knowledge graph explorer</li>
            <li>Real-time relationship mapping</li>
            <li>Expertise and topic clusters</li>
            <li>Collaboration and innovation pathways</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Knowledge graph"
            width={400}
            height={280}
            className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
            unoptimized
          />
        </div>
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Knowledge Graph Overview</h2>
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="italic text-slate-500 dark:text-slate-400">Interactive research map coming soon...</span>
        </div>
      </section>
    </main>
  );
}
