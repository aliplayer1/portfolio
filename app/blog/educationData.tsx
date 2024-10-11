export const educationData = [
    {
        category: 'education',  
        institution: 'Toronto Metropolitan University (Formerly Ryerson)',
        degree: <li><p>BSc in Computer Science, Minor in Economics</p></li>,
        duration: 'January 2023 - Present',
        details: [
            '- Majoring in Computer Science with a minor in Economics.',
            "- Made it to Dean's List for 2023-2024 school year with a GPA of 3.89/4.3"
        ],
    },
    {
        category: 'certification',
        institution: 'IBM',
        certification: (
            <li><a
              href="https://www.credly.com/badges/8d525e5d-e360-429c-8e36-3775196def7d/linked_in_profile"
              className="underline text-grey-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python for Data Science
            </a></li>
          ),
        duration: 'September 2024',
        details: [
            '- Developed expertise in machine learning, data analysis, visualization, and statistical modeling using Pandas, NumPy, and scikit-learn.',
        ],
    },
    {
        category: 'certification',
        institution: 'University of California, Santa Cruz',
        certification: (
          <li><a
            href="https://www.coursera.org/account/accomplishments/verify/ZJ1XT21W4KRT"
            className="underline text-grey-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bayesian Statistics: From Concept to Data Analysis (with Honors)
          </a></li>
        ),
        duration: 'September 2024',
        details: [
          '- Gained proficiency in Bayesian inference and modeling',
          '- Applied Bayesian methods to real-world data using Python for statistical computing',
        ],
      },
    {
        category: 'certification',
        institution: 'LinkedIn',
        certification: (
            <li><a
              href="https://www.linkedin.com/learning/certificates/a1f395287f7a535fbe18be903b4f2f3e5d0d5de9cf37c427bfadd1a9c0d1efc3"
              className="underline text-grey-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithmic Trading and Finance Models with Python, R, and Stata
            </a></li>
          ),
        duration: 'October 2024',
        details: [
            '- Built quantitative trading models using Python, R, and Stata for data analysis and regression analysis'
        ],
    },
  ]
  