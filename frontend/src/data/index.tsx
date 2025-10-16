import { AboutType, ProjectType, SkillType } from "@/type";
import { FaHome } from "react-icons/fa";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaHome />,
  },
  {
    name: "Skill",
    link: "#skill",
    icon: <FaHome />,
  },
  {
    name: "Project",
    link: "#project",
    icon: <FaHome />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <FaHome />,
  },
];

export const aboutMeItems: AboutType[] = [
  {
    id: 1,
    title: "Crafting Scalable Web Experiences with Precision & Passion",
    description:
      "As a full-stack developer, I architect secure, modular systems and craft intuitive interfaces—delivering seamless, scalable experiences from backend logic to branded frontend design",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imageClassName: "w-full h-full",
    titleClassName: "justify-end",
    image: "/bg/b1.svg",
    sparseImage: "",
  },
  {
    id: 2,
    title: "How I Work",
    description:
      "Modular architecture, clean Git workflows, and expressive documentation—clarity drives every decision.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imageClassName: "w-full h-full",
    titleClassName: "justify-center ",
    image: "/bg/b2.png",
    sparseImage: "/grid.svg",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description:
      "Fueled by curiosity and a passion for development, I constantly explore new tools and frameworks to craft scalable, intuitive digital experiences that push the boundaries of modern web.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imageClassName: "",
    titleClassName: "justify-start",
    image: "",
    sparseImage: "",
  },
  {
    id: 4,
    title: "Currently Exploring Next.js 15",
    description:
      "Diving deep into the latest Next.js features — App Router, Server Actions & optimized performance.",
    className: "md:col-span-3 md:row-span-2",
    imageClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-40",
    titleClassName: "justify-center",
    image: "/bg/codingbg.svg",
    sparseImage: "/grid.svg",
  },

  {
    id: 5,
    title: "Collaboration First",
    description:
      "Open communication, timezone flexibility, and a shared vision—because great products are built together.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imageClassName: " opacity-40",
    titleClassName: "justify-center text-center",
    image: "/bg/collaborationbg.svg",
    sparseImage: "",
  },
  {
    id: 6,
    title: "Let's Build the Future Together",
    description:
      "Open to collaborations in modern Web Development Let's make something great.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imageClassName: "",
    titleClassName: "justify-center text-center",
    image: "",
    sparseImage: "",
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Digital Wallet System",
    description:
      "A secure and scalable digital wallet system built with Node.js, Express, TypeScript, and MongoDB, featuring role-based access (Admin, User, Agent), JWT authentication, automatic wallet creation, and complete money transaction features.",
    image: "/projects/DigitalWallet.svg",
    techStack: [
      "/icons/javascript.svg",
      "/icons/typescript.svg",
      "/icons/tailwindcss.svg",
      "/icons/shadcn.svg",
      "/icons/reactjs.svg",
      "/icons/expressjs.svg",
      "/icons/mongoose.svg",
      "/icons/jwt.svg",
      "/icons/zod.svg",
    ],
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    live: "https://digital-wallet-system-frontend-green.vercel.app/",
    frontend: "https://github.com/adibahbab4108/digital-wallet-system-frontend",
    backend: "https://github.com/adibahbab4108/digital-wallet-system",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "This is a full-stack web application designed to manage employees, HR, and admin roles. It includes features like user authentication, role-based dashboards, task management, payment history, and payroll management. The project is built using React for the frontend, Firebase for authentication and database.",
    image: "/projects/EmployeeManagement.svg",
    techStack: [
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/reactjs.svg",
      "/icons/expressjs.svg",
      "/icons/mongodb.svg",
      "/icons/jwt.svg",
    ],
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    live: "https://employee-management-3e084.web.app",
    frontend: "https://github.com/adibahbab4108/employee-management-system",
    backend:
      "https://github.com/adibahbab4108/employee-management-system-backend",
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "This is a full-stack robust library management application built with Mongoose and Express, featuring full CRUD operations for book management, a borrowing system with embedded business logic, and insightful summaries.",
    image: "/projects/LibraryManagementSystem.png",
    techStack: [
      "/icons/javascript.svg",
      "/icons/tailwindcss.svg",
      "/icons/reactjs.svg",
      "/icons/redux.svg",
      "/icons/expressjs.svg",
      "/icons/mongodb.svg",
      "/icons/zod.svg",
      "/icons/react-hook-form.svg",
    ],
    className: "col-span-12 md:col-span-6 lg:col-span-4",
    live: "https://library-management-three-orpin.vercel.app",
    frontend: "https://github.com/adibahbab4108/Library-Management-Frontend",
    backend: "https://github.com/adibahbab4108/Library-api_A3B2",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const skills: SkillType[] = [
  // 🟢 Languages
  {
    id: 1,
    name: "JavaScript",
    image: "/icons/javascript.svg",
    category: "Fullstack",
    level: "Advanced",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "/icons/typescript.svg",
    category: "Fullstack",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "HTML5",
    image: "/icons/html5.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 4,
    name: "CSS3",
    image: "/icons/css3.svg",
    category: "Frontend",
    level: "Advanced",
  },

  // 🟦 Frontend Development
  {
    id: 5,
    name: "React.js",
    image: "/icons/reactjs.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 6,
    name: "Next.js",
    image: "/icons/nextjs.svg",
    category: "Fullstack",
    level: "Beginner",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    image: "/icons/tailwindcss.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 8,
    name: "Redux Toolkit",
    image: "/icons/redux.svg",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    id: 9,
    name: "shadcn/ui",
    image: "/icons/shadcn.svg",
    category: "Frontend",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },

  // 🟧 Backend Development
  {
    id: 10,
    name: "Node.js",
    image: "/icons/nodejs.svg",
    category: "Backend",
    level: "Intermediate",
  },
  {
    id: 11,
    name: "Express.js",
    image: "/icons/expressjs.svg",
    category: "Backend",
    level: "Intermediate",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },

  // 🟠 Databases
  {
    id: 12,
    name: "MongoDB",
    image: "/icons/mongodb.svg",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: 13,
    name: "Mongoose",
    image: "/icons/mongoose.svg",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: 14,
    name: "PostgreSQL",
    image: "/icons/postgresql.svg",
    category: "Database",
    level: "Beginner",
  },
  {
    id: 15,
    name: "Prisma",
    image: "/icons/prisma.svg",
    category: "Database",
    level: "Beginner",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },

  // 🟣 Tools
  {
    id: 16,
    name: "Git",
    image: "/icons/git.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },
  {
    id: 17,
    name: "GitHub",
    image: "/icons/github.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },
  {
    id: 18,
    name: "Firebase",
    image: "/icons/firebase.svg",
    category: "Tool",
    level: "Intermediate",
  },
  {
    id: 19,
    name: "Stripe",
    image: "/icons/stripe.svg",
    category: "Tool",
    level: "Beginner",
  },
  {
    id: 20,
    name: "SSLCommerz",
    image: "/icons/sslcommerz.svg",
    category: "Tool",
    level: "Beginner",
    imageClass: " h-5",
  },
  {
    id: 21,
    name: "Vercel",
    image: "/icons/vercel.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "dark:bg-white p-1 rounded-lg",
  },
  {
    id: 22,
    name: "npm",
    image: "/icons/npm.svg",
    category: "Tool",
    level: "Intermediate",
  },
  {
    id: 23,
    name: "JWT",
    image: "/icons/jwt.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },
  {
    id: 24,
    name: "zod",
    image: "/icons/zod.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },
  {
    id: 25,
    name: "Cloudinary",
    image: "/icons/cloudinary.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },
  {
    id: 26,
    name: "Redis",
    image: "/icons/redis.svg",
    category: "Database",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },
  {
    id: 27,
    name: "React Hook Form",
    image: "/icons/react-hook-form.svg",
    category: "Tool",
    level: "Intermediate",
    imageClass: "rounded-sm",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    image: "/git.svg",
  },
  {
    id: 2,
    image: "/twit.svg",
  },
  {
    id: 3,
    image: "/link.svg",
  },
];
