import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* Header with avatar and info */}
      <header className="flex gap-4 items-start mb-8">
        <div className="flex-shrink-0">
          <Image 
            src="/avatar.png" 
            alt="Profile photo" 
            width={144}
            height={144}
            className="rounded-lg object-cover border-2 border-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            priority
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-3xl font-bold text-purple-600 mb-1 tracking-tight">Felix Aertebjerg</h1>
            <p className="text-lg text-blue-600 font-semibold mb-2">PhD Student at Denmark's Technical University</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <a href="/cv.pdf" className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-sm font-medium" target="_blank" rel="noopener noreferrer">
                <span>📄</span>
                <span>CV</span>
              </a>
              <a href="https://github.com/aerte" className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-sm font-medium" target="_blank" rel="noopener noreferrer">
                <span>💻</span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-sm font-medium" target="_blank" rel="noopener noreferrer">
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">felar [at] dtu [dot] dk</p>
        </div>
      </header>

      {/* About Me */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-purple-600 mb-3 pb-1 border-b-2 border-purple-600 inline-block">About Me</h2>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Recently graduated master student, aspiring PhD student. 
          My focus areas are machine learning and probabilistic modeling applied in the sciences, especially in physics and chemistry.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200">
          Outside of AI4X, my personal passions are with time-series data and the application of probabilistic models therein. 
          The process of forecasting can be solved in so many interesting ways, and involves much of ML all at once. 
          Particularly, I found <a href="https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/" className="text-purple-600 hover:text-purple-700 underline">GraphCast</a> and 
          <a href="https://arxiv.org/abs/1912.09363" className="text-purple-600 hover:text-purple-700 underline"> Temporal Fusion Transformers</a> very interesting reads.
        </p>
      </section>

      {/* News */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-pink-600 mb-3 pb-1 border-b-2 border-pink-600 inline-block">News</h2>
        <ul className="space-y-2">
          <li className="text-neutral-800 dark:text-neutral-200">
            <span className="font-semibold text-pink-600 mr-3 text-sm">[Jan 2026]</span> 
            Your latest news or achievement here
          </li>
          <li className="text-neutral-800 dark:text-neutral-200">
            <span className="font-semibold text-pink-600 mr-3 text-sm">[Dec 2025]</span> 
            Another update or milestone
          </li>
          <li className="text-neutral-800 dark:text-neutral-200">
            <span className="font-semibold text-pink-600 mr-3 text-sm">[Nov 2025]</span> 
            Previous news item
          </li>
        </ul>
      </section>

      {/* Publications */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-cyan-600 mb-3 pb-1 border-b-2 border-cyan-600 inline-block">Publications</h2>
        <p className="text-neutral-700 dark:text-neutral-300">Coming soon...</p>
      </section>

      {/* Research Interests */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-600 mb-3 pb-1 border-b-2 border-blue-600 inline-block">Research Interests</h2>
        <ul className="space-y-3">
          <li className="relative pl-7 text-neutral-800 dark:text-neutral-200 before:content-['▸'] before:absolute before:left-0 before:text-cyan-600 before:font-bold before:text-xl">
            MCMC, Gaussian Processes, GMMs
          </li>
          <li className="relative pl-7 text-neutral-800 dark:text-neutral-200 before:content-['▸'] before:absolute before:left-0 before:text-cyan-600 before:font-bold before:text-xl">
            GNNs, QMC, Diffusion, Bayesian ML
          </li>
          <li className="relative pl-7 text-neutral-800 dark:text-neutral-200 before:content-['▸'] before:absolute before:left-0 before:text-cyan-600 before:font-bold before:text-xl">
            HPC, MLOps, Python
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 pb-1 border-b-2 border-neutral-900 dark:border-neutral-100 inline-block">Education</h2>
        <div className="space-y-4">
          <div className="flex gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex-shrink-0 text-sm font-semibold text-blue-600 min-w-[120px]">2023 - Present</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">PhD in Computer Science</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-semibold mb-2">Technical University of Denmark</p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Focus on machine learning and probabilistic modeling for scientific applications.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-sm font-semibold text-blue-600 min-w-[120px]">2018 - 2023</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">Master's Degree in [Your Field]</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-semibold mb-2">University Name</p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Brief description of your studies and achievements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 pb-1 border-b-2 border-neutral-900 dark:border-neutral-100 inline-block">Work Experience</h2>
        <div className="space-y-4">
          <div className="flex gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex-shrink-0 text-sm font-semibold text-blue-600 min-w-[120px]">2022 - 2023</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">Position Title</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-semibold mb-2">Company/Organization Name</p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Description of your role and responsibilities.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-sm font-semibold text-blue-600 min-w-[120px]">2020 - 2022</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">Previous Position</h3>
              <p className="text-neutral-600 dark:text-neutral-400 font-semibold mb-2">Company/Organization Name</p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">Description of your role and responsibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 pb-1 border-b-2 border-neutral-900 dark:border-neutral-100 inline-block">Recent Blog Posts</h2>
        <BlogPosts />
      </section>
    </section>
  )
}
