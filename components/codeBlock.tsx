"use client";
import { useEffect } from "react";
import hljs from "highlight.js";

export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((block) => {
			hljs.highlightElement(block as HTMLElement);
		});
	}, []);

	return (
		<div className="w-full my-7 md:my-14 rounded-xl bg-zinc-100 overflow-hidden">
			<pre className="overflow-x-auto">{children}</pre>
		</div>
	);
};
