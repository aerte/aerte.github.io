import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1 gap-6">
      {allBlogs
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
            className="group block border border-neutral-300 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors bg-neutral-50 dark:bg-neutral-900"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image section */}
              <div className="sm:w-48 sm:h-48 h-48 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-neutral-300 dark:border-neutral-700">
                {post.metadata.image ? (
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">📝</div>
                )}
              </div>
              
              {/* Content section */}
              <div className="flex-1 p-6">
                <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-2 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h2 className="text-xl font-semibold text-black dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-400 text-sm line-clamp-2">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
