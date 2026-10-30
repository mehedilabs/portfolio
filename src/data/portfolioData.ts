import { PersonalInfo, Project, SkillCategory, EducationItem, AchievementItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Mehedi",
  lastName: "Hasan",
  designation: "Full-Stack Web Developer",
  availability: "Available for opportunities",
  location: "Chandpur / Dhaka, Bangladesh",
  email: "mehedi.hasan.bd.dev@gmail.com",
  phone: "01877168787",
  whatsapp: "01977168787",
  whatsappUrl: "https://wa.me/8801977168787",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://twitter.com/",
  bioHeadline: "More than just code.",
  bioShort:
    "Crafting intuitive, scalable, and responsive web applications with modern technologies. Focused on performance, clean code, and delightful user experiences.",
  aboutStory: [
    "Hello! I'm Mehedi Hasan, a passionate Full-Stack Web Developer based in Bangladesh. My journey into programming started with an intense curiosity about how digital interfaces work behind the scenes and grew into an obsession with creating seamless, interactive web experiences.",
    "Currently pursuing my B.A. (Honours) in Philosophy at Chandpur Government College, my academic background has given me a distinctive edge in software engineering: disciplined logical reasoning, deep critical thinking, and a habit of breaking down complex, abstract problems into elegant, structured solutions.",
    "I focus on the modern JavaScript and TypeScript ecosystem, building full-stack applications with Next.js, React, Node.js, Express, and MongoDB. I care deeply about clean architecture, performance optimization, responsive layouts, and writing maintainable code that delivers real user value.",
    "Outside of coding and academics, I enjoy reading literature, exploring tech articles, following open-source innovations, and brainstorming ideas for practical web applications that solve everyday challenges."
  ],
  quickFocus: [
    {
      title: "Problem Solving",
      description: "Deconstructing real-world workflows into clean, algorithmic web solutions."
    },
    {
      title: "Modern Tech Stack",
      description: "Developing with Next.js App Router, TypeScript, React, and Tailwind CSS."
    },
    {
      title: "Continuous Learning",
      description: "Constantly expanding knowledge in system design, APIs, and modern UI/UX."
    },
    {
      title: "Clean Architecture",
      description: "Writing maintainable, modular, and accessible frontend code."
    }
  ],
  stats: [
    { label: "Completed Projects", value: "3+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "Continuous Dedication", value: "100%" },
    { label: "Code Quality & Passion", value: "Top" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "FRONTEND DEVELOPMENT",
    iconName: "frontend",
    description: "Building fast, responsive, and accessible user interfaces",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "BACKEND DEVELOPMENT",
    iconName: "backend",
    description: "Architecting reliable APIs and server-side logic",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "RESTful APIs" },
      { name: "CRUD Operations" },
      { name: "JSON Data Handling" }
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    iconName: "tools",
    description: "Essential toolchain and deployment workflows",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "npm / package managers" },
      { name: "Postman" }
    ]
  },
  {
    title: "DESIGN & STYLING",
    iconName: "design",
    description: "Creating aesthetic, accessible, and mobile-first layouts",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Responsive Web Design" },
      { name: "Modern UI/UX Principles" },
      { name: "Component Systems" },
      { name: "Dark & Light Mode" },
      { name: "Cross-Browser Compatibility" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    slug: "live-weather",
    title: "Live Weather",
    tagline: "Real-time atmospheric insights and global weather forecasts",
    shortDescription:
      "A fast, modern weather forecasting application providing real-time meteorological conditions, search by city, dynamic weather metrics, and clean responsive UI.",
    fullDescription:
      "Live Weather is a sleek web application built to offer instantaneous weather conditions, temperature readouts, atmospheric pressure, humidity, wind velocity, and multi-day forecasts for global locations. Designed with a mobile-first philosophy, it combines clean typography and visual condition indicators to deliver weather data with clarity and speed.",
    image: "/images/projects/live-weather.jpg",
    liveUrl: "https://live-weather-sky.vercel.app/",
    githubUrl: "https://github.com/your-username/live-weather", // User can easily update
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Weather API", "Responsive"],
    role: "Lead Frontend Developer & UI Designer",
    duration: "2024",
    category: "Web Application",
    overview: [
      "Live Weather provides users with an instant snapshot of real-time conditions around the world.",
      "Engineered with responsive design principles to ensure smooth interaction across smartphones, tablets, and desktop displays.",
      "Implements dynamic visual cards tailored to current conditions such as clear skies, rain, clouds, or snow."
    ],
    features: [
      "Real-time weather data search for cities worldwide with instant suggestions.",
      "Comprehensive metrics including humidity, wind speed, visibility, and thermal comfort.",
      "Temperature toggle between Celsius and Fahrenheit.",
      "Responsive card layout with smooth status feedback and error handling for invalid locations.",
      "Lightweight footprint with zero layout shifts and fast initial page load."
    ],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "OpenWeather API", category: "API" },
      { name: "Vercel", category: "Deployment" }
    ],
    challenges: [
      {
        challenge: "Handling asynchronous API responses and network latencies gracefully.",
        solution: "Implemented robust loading state skeletons and comprehensive try/catch boundaries with user-friendly error messages."
      },
      {
        challenge: "Displaying dense weather metrics cleanly on ultra-narrow 360px mobile viewports.",
        solution: "Designed a modular grid system that re-flows intelligently into single-column cards on small screens."
      }
    ],
    futureImprovements: [
      "Add interactive radar maps and precipitation charts.",
      "Support browser geolocation auto-detection on first visit with permission consent.",
      "Store recently searched cities in local storage for quick access."
    ]
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    tagline: "Daily essential commodity price tracker and market monitor",
    shortDescription:
      "A consumer-focused daily commodity price tracking platform delivering transparent local market rates, categorization, and easy product price comparisons.",
    fullDescription:
      "Bazar Dor is an intuitive market analytics platform tailored to help everyday consumers and households track daily market rates of essential groceries, vegetables, fish, meat, and dry goods. The application focuses on data clarity, clean categorizations, and rapid search to keep buyers informed before visiting the local market.",
    image: "/images/projects/bazar-dor.jpg",
    liveUrl: "https://bazar-dor-delta.vercel.app/",
    githubUrl: "https://github.com/your-username/bazar-dor", // User can easily update
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Data Visualization", "Marketplace"],
    role: "Full-Stack Developer",
    duration: "2024",
    category: "E-Commerce / Market Analytics",
    overview: [
      "Empowers consumers with transparent price tracking for essential daily grocery and kitchen supplies.",
      "Features categorized item lists (vegetables, protein, staples, spices) with unit pricing.",
      "Designed with high-contrast accessibility so users can quickly look up prices on mobile devices while shopping."
    ],
    features: [
      "Categorized commodity explorer with instant keyword filtering.",
      "Unit price indicators (per KG, dozen, liter) with daily fluctuation indicators.",
      "Shopping list builder to estimate total grocery budget before visiting markets.",
      "Mobile-optimized list and card views with touch-friendly tap targets.",
      "Fast client-side search with zero delay."
    ],
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Deployment" }
    ],
    challenges: [
      {
        challenge: "Organizing multiple categories and sub-items without overwhelming mobile users.",
        solution: "Structured tabbed category pills and collapsible sections with smooth transitions."
      },
      {
        challenge: "Ensuring high readability under outdoor daylight conditions.",
        solution: "Adopted clean typography hierarchy with high-contrast badge indicators."
      }
    ],
    futureImprovements: [
      "Historical price change charts to visualize weekly and monthly inflation trends.",
      "Community crowdsourced reporting for local neighborhood market prices.",
      "Offline progressive web app (PWA) support."
    ]
  },
  {
    slug: "bangla-news-24",
    title: "Bangla News 24",
    tagline: "Dynamic Bengali digital news portal and editorial hub",
    shortDescription:
      "A modern Bengali digital news and media platform featuring categorized breaking updates, responsive editorial layouts, reader-friendly typography, and fast performance.",
    fullDescription:
      "Bangla News 24 is a comprehensive digital journalism portal designed to present breaking news, national affairs, technology, sports, and editorial features in Bengali script. Built with high editorial standards, the platform emphasizes reading comfort, responsive media embeds, categorized content curation, and rapid navigation across news desks.",
    image: "/images/projects/bangla-news-24.jpg",
    liveUrl: "https://news-bangla-24-one.vercel.app/",
    githubUrl: "https://github.com/your-username/bangla-news-24", // User can easily update
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Bengali Typography", "Media Portal"],
    role: "Frontend Architect & Designer",
    duration: "2024",
    category: "Media & Editorial",
    overview: [
      "Modern Bengali digital journalism web portal offering curated categories and breaking alerts.",
      "Special emphasis on typography rendering for Bengali fonts, line-height balancing, and reading comfort.",
      "Engineered for high editorial throughput with clean cards, lead story hero banners, and category sidebars."
    ],
    features: [
      "Lead story hero section with prominent headline, badge, and timestamp.",
      "Desk navigation: National, Politics, Economy, Tech, Sports, and International.",
      "Bengali font rendering optimization with crisp readability on high-density screens.",
      "Social sharing buttons and reading time estimation.",
      "Fully responsive magazine layout that stacks elegantly on mobile screens."
    ],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vercel", category: "Deployment" }
    ],
    challenges: [
      {
        challenge: "Rendering complex Bengali Unicode typography with optimal line spacing and zero glyph clipping.",
        solution: "Carefully tuned font-family stacks, font-feature settings, and leading ratios across breakpoints."
      },
      {
        challenge: "Maintaining fast page loads despite rich editorial images and frequent article cards.",
        solution: "Used modern Next.js image loading techniques and deferred non-critical assets."
      }
    ],
    futureImprovements: [
      "Bookmark articles to local storage for offline read-it-later access.",
      "Text-to-speech audio reader for accessibility.",
      "Dark mode reading theme toggle specifically optimized for night readers."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.A. (Honours) in Philosophy",
    institution: "Chandpur Government College",
    year: "Present",
    location: "Chandpur, Bangladesh",
    isCurrent: true,
    description:
      "Pursuing Bachelor of Arts in Philosophy. The program deepens analytical reasoning, formal logic, epistemology, and ethical inquiry — cultivating strong cognitive foundations that translate directly into structured software architecture and problem solving.",
    highlights: [
      "Formal logic & symbolic reasoning",
      "Critical thinking and structured argumentation",
      "Ethical considerations in modern technology"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhasha Sainik Ajit Guha Maha Biddalay",
    year: "2021",
    location: "Cumilla / Chandpur, Bangladesh",
    description:
      "Completed Higher Secondary Certificate with dedicated academic focus, laying solid foundations in analytical sciences, communication, and self-directed study.",
    highlights: [
      "Academic excellence in core curriculum",
      "Active participation in co-curricular activities"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Kachua Government Pilot High School",
    year: "2019",
    location: "Kachua, Chandpur, Bangladesh",
    description:
      "Completed Secondary School Certificate with strong academic discipline, curiosity in computing sciences, and foundational mathematics.",
    highlights: [
      "Early exploration of computer systems and web concepts",
      "Foundational mathematics and science coursework"
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Full-Stack Web Developer",
    organization: "Practical Engineering Milestone",
    year: "2024",
    badge: "Milestone",
    description:
      "Successfully developed, deployed, and verified multiple end-to-end web applications (Live Weather, Bazar Dor, Bangla News 24) on modern cloud infrastructure with zero downtime."
  },
  {
    title: "Frontend Engineering & Responsive UI",
    organization: "Continuous Building & Best Practices",
    year: "2024",
    badge: "Specialization",
    description:
      "Mastered modern frontend engineering with React, Next.js App Router, TypeScript, and Tailwind CSS, adhering to semantic HTML, accessibility standards, and mobile-first principles."
  }
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

