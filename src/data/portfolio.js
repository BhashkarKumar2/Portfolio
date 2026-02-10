
import { Rocket, Code, Briefcase, FolderGit2, Flag, Zap, Globe, Github, Linkedin, Mail, MapPin, Cpu } from 'lucide-react';

export const portfolioData = {
    hero: {
        name: "Bhashkar Kumar",
        title: "Software Engineer | Full Stack Developer",
        location: "New Delhi, India",
        status: "Available for Work",
        linkedin: "https://www.linkedin.com/in/bhashkar-kumar-351a77257/",
        connections: "500+ Connections",
        bio: "Passionate former SDE Intern at **Expedia Group**. Expert in building scalable web applications with **React, Spring Boot, and AWS**. Top-rated competitive programmer (LeetCode 600+, Codeforces 1200+).",
        resumeLink: "/resume.pdf",
        contactLink: "#contact"
    },

    about: {
        title: "About Me",
        mission: "My journey began in 2020 with custom Tumblr themes, leading me down the rabbit hole of full-stack development. Today, I build enterprise-grade software for **startups, agencies, and large corporations**.",
        currentRole: "I currently drive engineering efforts at **Expedia Group**, focusing on accessible and inclusive digital products.",
        location: "Bengaluru, India",
        status: "Open to Work",
        techStack: ['Java', 'Spring Boot', 'React.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'Kafka']
    },

    experience: [
        {
            company: "Expedia Group",
            role: "Software Development Engineer Intern",
            period: "June 2023 – July 2023",
            description: [
                "Developed and deployed robust RESTful APIs using Java and Spring Boot to query large datasets directly from AWS S3, projected to improve data retrieval efficiency by 40%.",
                "Collaborated with Data Engineering teams to design S3 data schemas, and partnered with Frontend engineers to ensure seamless integration.",
                "Followed agile practices, participating in daily stand-ups and code reviews to maintain high software quality standards."
            ],
            certificate: "https://drive.google.com/file/d/19Vzoy1T4bRWyKt1liBKukqM1AfJIzVCo/view?usp=sharing"
        }
    ],

    projects: [
        {
            title: 'ChefHub',
            description: 'AI-powered chef booking platform with personalized recommendations. Increased booking precision by 30% and handled 2,000+ searches/month.',
            tech: ['React', 'MongoDB', 'Express', 'Node.js'],
            links: { demo: 'https://chefhub-poou.vercel.app/', github: 'https://github.com/BhashkarKumar2/Chefhub' },
            image: "/projects/chefhub.png"
        },
        {
            title: 'JustUs',
            description: 'Real-time chat application with media sharing and optimistic UI updates. Achieved <1s latency and 99% delivery success.',
            tech: ['React', 'Spring Boot', 'WebSocket', 'Redis'],
            links: { demo: 'https://just-us-liard.vercel.app/', github: 'https://github.com/BhashkarKumar2/JustUs' },
            image: "/projects/justus.png"
        },
        {
            title: 'Image Classifier',
            description: 'Deep Learning model classifying handwritten digits (MNIST) and Dog/Cat images with 95%+ accuracy using Hybrid FCN + CNN.',
            tech: ['Python', 'PyTorch', 'Deep Learning'],
            links: { demo: '/image-classifier', github: 'https://github.com/BhashkarKumar2/image-classifier' },
            image: "/projects/classifier.png"
        }
    ],

    skills: {
        "Languages": ["C++", "Python", "JavaScript", "Java"],
        "Frameworks": ["React.js", "Express.js", "Node.js", "Spring Boot", "NumPy", "Pandas", "PyTorch"],
        "Tools": ["Git", "GitHub", "AWS", "Google Colab", "MongoDB", "SQL", "VS Code", "IntelliJ"],
        "Core": ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Deep Learning", "Machine Learning"]
    },

    education: {
        degree: "B.Tech in Computer Engineering",
        institution: "Delhi Technological University",
        period: "2022-2026",
        cgpa: "7.89",
        achievements: [
            "Resolved 600+ LeetCode Problems",
            "1000+ Rating on Chess.com"
        ]
    },

    contact: {
        email: "bhashkarkumar_co22a3_47@dtu.ac.in",
        phone: "+91 8188946300",
        linkedin: "https://linkedin.com/in/bhashkarkumar",
        github: "https://github.com/bhashkarkumar"
    }
};

// Level Map Configuration (for GameMap)
export const levelData = [
    {
        id: "about-level",
        level: 1,
        title: "Profile",
        description: "Software Engineering Student",
        icon: Rocket,
        alignment: "left",
        content: "Final year B.Tech Computer Engineering student at Delhi Technological University (2022-2026). Passionate about full-stack development, AI/ML, and building robust, scalable applications."
    },
    {
        id: "experience-level",
        level: 2,
        title: "Expedia Group",
        description: "SDE Intern",
        icon: Flag,
        alignment: "right",
        status: "active",
        type: "experience" // special handler
    },
    {
        id: "projects-level-1",
        level: 3,
        title: "ChefHub",
        description: "Full-Stack Booking Platform",
        icon: FolderGit2,
        alignment: "left",
        tech: ["React", "Spring Boot"],
        list: [
            "Built a platform supporting 500+ active users with real-time location search.",
            "Enhanced booking precision by 30% using advanced filtering logic.",
            "Integrated 3+ third-party APIs for geocoding and secure payments."
        ]
    },
    {
        id: "projects-level-2",
        level: 4,
        title: "JustUs",
        description: "Real-time Chat Application",
        icon: Zap,
        alignment: "right",
        tech: ["Node.js", "WebSocket"],
        list: [
            "Implemented real-time messaging with WebSockets and optimistic updates.",
            "Developed custom components for authenticated media sharing."
        ]
    },
    {
        id: "skills-level",
        level: 5,
        title: "Technical Arsenal",
        description: "Skills & Technologies",
        icon: Code,
        alignment: "left",
        type: "skills" // special handler
    },
    {
        id: "education-level",
        level: 6,
        title: "Milestones",
        description: "Education & Achievements",
        icon: Briefcase,
        alignment: "right",
        type: "education" // special handler
    },
    {
        id: "contact-level",
        level: 7,
        title: "Contact",
        description: "Get in Touch",
        icon: Mail,
        alignment: "left",
        status: "completed",
        type: "contact" // special handler
    }
];
