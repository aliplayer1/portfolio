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
    {`I’m a Computer Science student at Toronto Metropolitan University, minoring in Economics. I specialize in quantitative research, financial computation, and data analysis, and I’m passionate about using data to solve complex problems in financial markets.`}
  </p>
  <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
    {`Here are some key skills and achievements that I bring to the table:`}
  </p>
  <ul className="list-disc ml-6 mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
    <li>{`Proficiency in Python, R, and Matlab, applying advanced quantitative techniques such as Bayesian inference and predictive modeling to optimize investment strategies.`}</li>
    <li>{`Developed machine learning tools for portfolio management, processing data for over 5000 stocks, and improving investment strategies.`}</li>
    <li>{`Participated in algorithmic trading competitions, achieving a 24% portfolio return through delta hedging and derivatives pricing models.`}</li>
    <li>{`Hands-on experience in automating workflows and processing large datasets, enhancing operational efficiency with data visualization tools (Power BI, Matplotlib).`}</li>
    <li>{`Experience in quantitative finance, financial modeling, and algorithmic trading, with a focus on delivering actionable data-driven insights.`}</li>
    <li>{`Certified in Python for Data Science, Bayesian Statistics, and Algorithmic Trading.`}</li>
  </ul>
  <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
    {`I’m driven to apply my skills in quantitative finance and algorithmic trading to contribute to innovative projects. I’m excited to collaborate with teams on cutting-edge financial solutions. Feel free to reach out if you're looking for someone to tackle data-driven challenges in finance and technology.`}
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
