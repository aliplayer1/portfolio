import { BlogPosts } from 'app/components/posts'
import { ProjectsPosts } from 'app/components/projects'
import { EducationPosts } from 'app/components/educationPosts'

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* Header section */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Ali Asadpoor
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {`I'm a third-year student at Toronto Metropolitan University (Formerly Ryerson), majoring in Computer Science
          with a minor in Economics. My range of interests are quite diverse, but I specialize in data science, quantitative analysis,
          finance, and research. I'm passionate about analyzing complex systems, and model their behaviour
          using mathematical and statistical modelling, with the help of programming languages such as Python, R, and Java.
          `}
        </p>
      </header>
      {/* Education & Certifications section */}
      <section className="my-8">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 -ml-14 mb-3 leading-none">{'>'}</span>
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 ml-4">
            Education & Certifications
          </h2>
        </div>
        <EducationPosts />
      </section>
      {/* Projects Posts section */}
      <section className="my-8">
        <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 -ml-14 mb-3 leading-none">{'>'}</span>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 ml-4">
            My Projects
          </h2>
        </div>
        <ProjectsPosts />
      </section>
      {/* Blog Posts section */}
      <section className="my-8">
        <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 -ml-14 mb-3 leading-none">{'>'}</span>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 ml-4">
            Latest Blog Posts
          </h2>
        </div>
        <BlogPosts />
      </section>
    </main>
  )
}
