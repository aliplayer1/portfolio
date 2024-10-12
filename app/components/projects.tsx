import Link from 'next/link'
import { formatDate, getProjectsPosts } from 'app/projects/utils'

export function ProjectsPosts() {
  let allProjects = getProjectsPosts()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-lg text-blue-700 dark:text-blue-400 underline tracking-tight cursor-pointer transition-transform duration-200 ease-out hover:scale-102 hover:text-blue-900 dark:hover:text-blue-300">
                {post.metadata.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 w-[300px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>

            {/* Display key technologies on the main projects page */}
            <p className="text-sm text-white-300 dark:text-white-200">
              Technologies: {post.metadata.techs}
            </p>
          </Link>
        ))}
    </div>
  )
}

