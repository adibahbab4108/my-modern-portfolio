import { FaHome } from "react-icons/fa";

  export const navItems = [
    {
      name:"Home",
      link:"/",
      icon:<FaHome/>
    },
    {
      name:"About",
      link:"#about",
      icon:<FaHome/>
    },
    {
      name:"Skill",
      link:"#skill",
      icon:<FaHome/>
    },
    {
      name:"Project",
      link:"#project",
      icon:<FaHome/>
    },
    {
      name:"Blog",
      link:"/blog",
      icon:<FaHome/>
    }
  ]

export const aboutMeItems = [
  {
    id: 1,
    title: "Crafting Scalable Web Experiences with Precision & Passion",
    description:
      "As a full-stack developer, I architect secure, modular systems and craft intuitive interfaces—delivering seamless, scalable experiences from backend logic to branded frontend design",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imageClassName: "w-full h-full",
    titleClassName: "justify-end",
    image: "/b1.svg",
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
    image: "/bg.png",
    sparseImage: "/grid.svg",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "Fueled by curiosity and a passion for development, I constantly explore new tools and frameworks to craft scalable, intuitive digital experiences that push the boundaries of modern web.",
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
    image: "/codingbg.png",
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
    image: "/collaborationbg.png",
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

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    image: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
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

export const skills = [
  // 🟢 Languages
  {
    id: 1,
    name: "JavaScript",
    image: "/javascript.svg",
    category: "Fullstack",
    level: "Advanced",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "/typescript.svg",
    category: "Fullstack",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "HTML5",
    image: "/html5.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 4,
    name: "CSS3",
    image: "css3.svg",
    category: "Frontend",
    level: "Advanced",
  },

  // 🟦 Frontend Development
  {
    id: 5,
    name: "React.js",
    image: "/reactjs.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 6,
    name: "Next.js",
    image: "/nextjs.svg",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    image: "/tailwindcss.svg",
    category: "Frontend",
    level: "Advanced",
  },
  {
    id: 8,
    name: "Redux Toolkit",
    image: "/redux.svg",
    category: "Frontend",
    level: "Intermediate",
  },
  {
    id: 9,
    name: "shadcn/ui",
    image: "/shadcn.svg",
    category: "Frontend",
    level: "Beginner",
    imageClasses:"rounded-sm"
  },

  // 🟧 Backend Development
  {
    id: 10,
    name: "Node.js",
    image: "/nodejs.svg",
    category: "Backend",
    level: "Intermediate",
  },
  {
    id: 11,
    name: "Express.js",
    image: "/expressjs.svg",
    category: "Backend",
    level: "Intermediate",
  },

  // 🟠 Databases
  {
    id: 12,
    name: "MongoDB",
    image: "/mongodb.svg",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: 13,
    name: "Mongoose",
    image: "/mongoose.svg",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: 14,
    name: "PostgreSQL",
    image: "/postgresql.svg",
    category: "Database",
    level: "Beginner",
  },
  {
    id: 15,
    name: "Prisma",
    image: "/prisma.svg",
    category: "Database",
    level: "Beginner",
  },

  // 🟣 Tools
  {
    id: 16,
    name: "Git",
    image: "/git.svg",
    category: "Tool",
    level: "Intermediate",
  },
  {
    id: 17,
    name: "GitHub",
    image: "/github.svg",
    category: "Tool",
    level: "Intermediate",
  },
  {
    id: 18,
    name: "Firebase",
    image: "/firebase.svg",
    category: "Tool",
    level: "Intermediate",
  },
  {
    id: 19,
    name: "Stripe",
    image: "/stripe.svg",
    category: "Tool",
    level: "Beginner",
  },
  {
    id: 20,
    name: "SSLCommerz",
    image: "/sslcommerz.svg",
    category: "Tool",
    level: "Beginner",
    imageClasses:"w-20 h-10"
  },
  {
    id: 21,
    name: "Vercel",
    image: "/vercel.svg",
    category: "Tool",
    level: "Intermediate",
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
