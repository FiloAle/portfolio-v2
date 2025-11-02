import Link from "next/link";
import { Circle } from "iconoir-react";

export default function Topbar() {
  return (
    <div className="fixed left-0 top-0 w-full flex items-start justify-start  font-sans z-50 mix-blend-exclusion">
      <main className="w-full pt-2 md:pt-8 px-8 md:px-32 flex flex-row justify-start items-center max-w-6xl mx-auto">
        <Link
          href="mailto:ciao@filippoalessandrini.com"
          className="flex flex-row justify-start gap-2 items-center group -translate-x-[1px] text-white"
        >
          <Circle strokeWidth={1.25} />{" "}
          <h1 className="text-lg group-hover:underline">filippo</h1>
        </Link>
      </main>
    </div>
  );
}
