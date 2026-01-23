import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on machine learning, probabilistic modeling, and scientific computing.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Blog</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Thoughts on machine learning, probabilistic modeling, and scientific computing.
        Exploring the intersection of theory and practice in modern AI research.
      </p>
      <BlogPosts />
    </section>
  )
}
