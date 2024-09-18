import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "AndOr Communications Pvt Ltd",
    date: "Aug 2024 - Present",
    details: [
      "Built APIs for managing <span style='color: white;'>the internal</span> tasks effectively.",
      "Maintained and handeled <span style='color: white;'>the various Databases for better functionality</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Bharat Intern",
    date: "Sep 2023 - Nov 2023",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Suven Consultants Pvt Ltd",
    date: "Jan 2023 - Apr 2023",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  /*{
    title: "Computer Science",
    company_name: "ODU",
    date: "2015 - 2018",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
    ],
  },*/
];

const portfolio = [
  {
    name: "REDUCTO",
    description:
      "A web application with Tailwind CSS and React to analyze user-provided article links, utilizing TextRank and SingleRank algorithms for 30% more accurate summaries, boosting user efficiency.",
    image: oscs,
  },
  {
    name: "YPS Media",
    description:
      "A video streaming app with distributed architecture and load balancers to manage high traffic, and added a keyword-based search feature to enhance video search capability by 30%.",
    image: devnotes,
  },
  {
    name: "SQL-ator",
    description:
      "An LLM project using TypeScript to convert prompts into SQL queries, implementing data modeling to achieve a 92% accuracy rate in generating results",
    image: algorithms,
  },
];

export { experiences, portfolio };

