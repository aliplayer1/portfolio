import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* Header section */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
          Ali Asadpoor
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {`I'm a third-year student at Toronto Metropolitan University (Formerly Ryerson), majoring in Computer Science
          with a minor in Economics. My range of interests are quite diverse, but I specialize in data science, quantitative analysis,
          finance, and research. I'm passionate about analyzing complex systems, and model their behaviour
          using mathematical and statistical modelling, with the help of programming languages such as Python, R, and Java.
          `}
        </p>
      </header>

      {/* Blog Posts section */}
      <section className="my-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Latest Blog Posts
        </h2>
        <BlogPosts />
      </section>
    </main>
  )
}
