import reicoLogo from '../assets/CompanyLogos/reico-logo.webp'
import ineposLogo from '../assets/CompanyLogos/inepos-logo.webp'

const experiences = [
  {
    id: 'profesional-experience-1',
    title: 'Internship in IT Support',
    company: 'REICO',
    companyLogo: reicoLogo,
    fromDate: 'Jan 2025',
    toDate: 'Apr 2025',
    responsibilities: [
      'Configured and installed **network equipment and servers**, improving infrastructure stability by **20%**.',
      'Performed computer maintenance with a **90% reintegration rate** within 24 hours.',
      'Resolved **85% of incidents** without escalation, optimizing response times and user satisfaction.',
      'Documented procedures with **100% traceability**, strengthening operational continuity.'
    ]
  },
  {
    id: 'profesional-experience-2',
    title: 'Web Developer Intern',
    company: 'REICO',
    companyLogo: reicoLogo,
    fromDate: 'Jan 2025',
    toDate: 'Apr 2025',
    responsibilities: [
      'Developed a **responsive web application** for performance evaluation and business insights.',
      'Built **interactive dashboards and automated reports** using **Chart.js** and **ExcelJS**.',
      'Implemented secure **RESTful APIs** with **Node.js, Express, and JWT authentication**.',
      'Managed **users, departments, and reports** with audit and activity tracking.',
      'Designed a **React SPA** with **Vite** and a **PostgreSQL database** for production deployment.'
    ]
  },
  {
    id: 'profesional-experience-3',
    title: 'IT Instructor',
    company: 'INEPOS',
    companyLogo: ineposLogo,
    fromDate: 'Jun 2025',
    toDate: 'Present',
    responsibilities: [
      'Delivered **IT training programs** in programming, web development, cybersecurity, databases, and AI.',
      'Taught **hands-on courses** in **HTML, CSS, JavaScript, Python, SQL**, and data analysis.',
      'Provided **cybersecurity awareness training**, covering digital security basics and data protection.',
      'Introduced **AI and generative AI tools** focused on practical and ethical use cases.',
      'Adapted technical content for **mixed-skill audiences** in public and private sectors.'
    ]
  }
]

export default experiences
