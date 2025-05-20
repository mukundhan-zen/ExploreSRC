import Link from "next/link";
import { AuthButton } from "../header-auth";
import ThemeSwitcher from "../theme-switcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="inline-block"><circle cx="12" cy="12" r="10" fill="#6366f1"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/></svg>
          R&D Platform
        </Link>
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/insights" className="hover:text-indigo-500 transition-colors">Insights</Link>
          <Link href="/maps" className="hover:text-teal-500 transition-colors">Research Maps</Link>
          <Link href="/dashboard" className="hover:text-emerald-500 transition-colors">Dashboard</Link>
          <Link href="/projects" className="hover:text-fuchsia-500 transition-colors">Projects</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <AuthButton />
        </div>
      </div>
      <nav className="flex md:hidden justify-center gap-4 pb-2">
        <Link href="/insights" className="hover:text-indigo-500 text-base">Insights</Link>
        <Link href="/maps" className="hover:text-teal-500 text-base">Research Maps</Link>
        <Link href="/dashboard" className="hover:text-emerald-500 text-base">Dashboard</Link>
        <Link href="/projects" className="hover:text-fuchsia-500 text-base">Projects</Link>
      </nav>
    </header>
  );
}
