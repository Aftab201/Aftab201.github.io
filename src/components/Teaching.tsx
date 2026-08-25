import teaching from "@content/teaching.json";

export default function Teaching() {
  return (
    <div className="relative">
      {/* Timeline spine */}
      <div
        className="absolute left-[6px] top-2 bottom-2 w-[3px] rounded-full bg-zinc-200 dark:bg-zinc-800"
        aria-hidden
      />

      <div className="space-y-10">
        {teaching.map((entry) => (
          <div key={entry.period} className="relative pl-9">
            {/* Timeline dot */}
            <span
              className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-accent-500 ring-4 ring-accent-100 dark:ring-accent-900/50"
              aria-hidden
            />

            <p className="text-sm font-mono font-semibold text-accent-600 dark:text-accent-400 mb-1">
              {entry.period}
            </p>

            <h3 className="font-display text-lg font-semibold">
              {entry.role}
              <span className="font-sans text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {" "}· {entry.institution}
              </span>
            </h3>

            {/* Description paragraph */}
            {entry.description && (
              <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                {entry.description}
              </p>
            )}

            {/* Student projects */}
            <ul className="mt-5 space-y-3">
              {entry.courses.map((course) => (
                <li
                  key={`${course.code}-${course.duty}`}
                  className="flex flex-col gap-1 text-[0.95rem]"
                >
                  <div className="text-zinc-800 dark:text-zinc-200">
                    <span className="font-medium">
                      {course.name}
                    </span>

                    {course.code && (
                      <span className="font-mono text-sm text-accent-600 dark:text-accent-400">
                        {" "}· {course.code}
                      </span>
                    )}
                  </div>

                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {course.duty}
                    {course.level && ` · ${course.level}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}