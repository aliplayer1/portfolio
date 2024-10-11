import { educationData } from 'app/blog/educationData'

export function EducationPosts() {
  return (
    <div>
      {educationData.map((education, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
            {education.degree || education.certification}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center">
            {education.institution}
            <span className="mx-2">|</span>
            {education.duration}
          </p>
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 space-y-1">
            {education.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          {/* Add the horizontal line manually after the education entry */}
          {index === 0 && <hr className="my-6 w-4/5 border-gray-300 dark:border-gray-600" />}
        </div>
      ))}
    </div>
  )
}
