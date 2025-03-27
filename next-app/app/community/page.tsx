export default function ComunityPage() {
  return (
    <main className="flex w-full flex-col gap-2">
      <div className="flex max-w-xl flex-col gap-2 p-4">
        <a
          href="/community/roulette"
          className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-md"
        >
          話題を決めるルーレット
        </a>
      </div>
    </main>
  );
}
