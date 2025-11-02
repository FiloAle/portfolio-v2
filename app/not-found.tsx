export default function NotFound() {
  return (
    <div className="w-full h-full">
      <main className="flex flex-col gap-8 text-zinc-800">
        <h1 className="font-serif text-2xl md:text-5xl font-[350] tracking-[-0.05rem] leading-7.5 md:leading-14">
          <span className="font-[410] italic bg-orange-50 text-orange-500">
            Whoops!
          </span>
          <br />
          The page was not found.
        </h1>

        <p className="font-sans text-sm md:text-lg text-zinc-500">
          It seems like there's nothing to see here, but you can always go{" "}
          <a
            href="/"
            className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
          >
            back to home
          </a>
          .
        </p>
      </main>
    </div>
  );
}
