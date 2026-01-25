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
            className="group block border border-blue-200 dark:border-blue-200 rounded-lg overflow-hidden hover:border-blue-400 dark:hover:border-blue-400 transition-colors bg-blue-50 dark:bg-blue-50"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image section */}
              <div className="sm:w-48 sm:h-48 h-48 bg-blue-100 dark:bg-blue-100 flex-shrink-0 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-blue-200 dark:border-blue-200">
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
                <p className="text-sm text-slate-600 dark:text-slate-600 mb-2 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-900 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-700 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-slate-700 dark:text-slate-700 text-sm line-clamp-2">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
