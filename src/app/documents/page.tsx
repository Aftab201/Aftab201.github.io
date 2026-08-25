const documents = [
  {
    title: "Curriculum Vitae",
    description:
      "Academic and professional curriculum vitae of Aftab Akram.",
    file: "/documents/Aftab-Akram-CV.pdf",
    category: "Professional Document",
    icon: "📄",
  },
  {
    title: "Master's Degree",
    description:
      "Master's degree certificate and academic qualification.",
    file: "/documents/Masters-Degree.pdf",
    category: "Academic Degree",
    icon: "🎓",
  },
  {
    title: "Master's Transcript",
    description:
      "Official academic transcript for the Master's degree.",
    file: "/documents/Masters-Transcript.pdf",
    category: "Academic Transcript",
    icon: "📋",
  },
  {
    title: "Bachelor's Degree",
    description:
      "Bachelor's degree certificate and academic qualification.",
    file: "/documents/Bachelors-Degree.pdf",
    category: "Academic Degree",
    icon: "🎓",
  },
  {
    title: "Bachelor's Transcript",
    description:
      "Official academic transcript for the Bachelor's degree.",
    file: "/documents/Bachelors-Transcript.pdf",
    category: "Academic Transcript",
    icon: "📋",
  },
];

export default function DocumentsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-sm font-semibold tracking-widest text-accent-500">
          PROFESSIONAL RECORDS
        </p>

        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Curriculum Vitae & Credentials
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A collection of my curriculum vitae, academic degrees, and
          transcripts, provided for academic and professional verification.
        </p>
      </div>

      {/* Documents */}
      <div className="space-y-5">
        {documents.map((document) => (
          <div
            key={document.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-zinc-200/80
              bg-white/70 p-6
              shadow-lg shadow-black/5
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:border-accent-500/50
              hover:shadow-xl
              dark:border-zinc-800
              dark:bg-zinc-900/40
              dark:shadow-black/20
            "
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Document information */}
              <div className="flex items-start gap-5">
                <div
                  className="
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-xl border border-accent-500/20
                    bg-accent-100/70 text-2xl
                    transition-transform duration-300
                    group-hover:scale-110
                    dark:bg-accent-900/30
                  "
                >
                  {document.icon}
                </div>

                <div>
                  <p className="font-mono text-xs font-medium tracking-wide text-accent-600 dark:text-accent-400">
                    {document.category}
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    {document.title}
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {document.description}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 gap-3">
                <a
                  href={document.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-lg border border-accent-500/40
                    px-4 py-2.5 text-sm font-medium
                    text-accent-600
                    transition-all duration-200
                    hover:bg-accent-500/10
                    hover:shadow-lg hover:shadow-accent-500/10
                    dark:text-accent-400
                    dark:hover:bg-accent-500/10
                  "
                >
                  View PDF ↗
                </a>

                <a
                  href={document.file}
                  download
                  className="
                    rounded-lg bg-accent-500
                    px-4 py-2.5 text-sm font-medium text-white
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-accent-600
                    hover:shadow-lg hover:shadow-accent-500/30
                  "
                >
                  Download ↓
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-14 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
          These documents are shared for academic and professional verification
          purposes. Please handle personal information contained in these
          documents responsibly.
        </p>
      </div>
    </main>
  );
}