import { DolbyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Miłosz Kucharski",
  initials: "MK",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Python Cloud QA Intern | Computer Science Student | Aspiring DevOps Engineer",
  summary:
    "Enthusiastic and detail-oriented QA Engineer with a passion for quality and innovation. Currently a working student diving deep into the realms of software testing and quality assurance, I am on a transformative journey towards becoming a skilled DevOps developer, particularly in cloud technologies.    ",
  avatarUrl: "https://avatars.githubusercontent.com/u/43927240?v=4",
  personalWebsiteUrl: "https://mkuch.pl",
  contact: {
    email: "miloszkucharski@gmail.com",
    tel: "contact for phone number",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Butterski",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Lower Silesia DSW",
      degree: "Engineer's degree in Computer Science - Cloud Systems and Applications",
      start: "2022",
      end: "2025",
    },
    {
      school: "ZSP Oleśnica",
      degree: "IT Technical School",
      start: "2018",
      end: "2022",
    }
  ],
  cert_and_award: [
    {
      what: "1st Place, HackYeah",
      desc:
        "Awarded for winning Hackathon in Kraków, showcasing problem-solving and technical skills. I played a pivotal role in frontend development and the DevOps aspects of our project.",
      when: "2023",
    },
    {
      what: "AWS Educate Certificates",
      desc: "Comprehensive cloud computing certification series including Cloud Operations, Compute Services, Storage Solutions, and Cloud Fundamentals 101.",
      when: "2023",
    },
    {
      what: "Introduction to Cybersecurity - Cisco",
      desc: "Completed Cisco's comprehensive cybersecurity fundamentals course, covering security best practices and threat prevention.",
      when: "2023",
    },
    {
      what: "PCAP: Programming Essentials in Python",
      desc: "Advanced Python programming certification demonstrating proficiency in Python development and automation.",
      when: "2023",
    }
  ],
  work: [
    {
      company: "Dolby",
      link: "https://www.dolby.com/",
      badges: ["Hybrid"],
      title: "Python Cloud QA Intern",
      logo: DolbyLogo,
      start: "08.2023",
      end: "now",
      description: "Architected and implemented an LLM-powered test analysis system, reducing analysis time from 4+ hours to under 1 minute. Designed cloud-native testing infrastructure using AWS services (EC2, S3, Lambda). Managed CI/CD pipelines with GitLab CI, implementing automated testing and deployment practices. Technologies: Python, Pytest, AWS, Docker, Linux, Bash, GitLab CI, LLM",
    },
    {
      company: "ManaCode s. c.",
      link: "",
      badges: ["Remote"],
      title: "Main Programmer and Co-owner",
      start: "08.2022",
      end: "08.2023",
      description: "Established DevOps practices including Git workflows and automated deployment pipelines. Implemented containerized development environments using Docker. Managed cloud infrastructure ensuring high availability. Technologies: React, Docker, GitLab CI, Linux, Nginx, Cloud Services, Infrastructure Management",
    },
    {
      company: "Adam Świrkowski",
      link: "",
      badges: ["Remote"],
      title: "React Native Internship",
      start: "10.2021",
      end: "10.2022",
      description: "Contributed to React Native application development while implementing CI/CD practices. Collaborated in Agile environment using Jira and GitLab. Technologies: React Native, TypeScript, Redux, Git, GitLab, Jira",
    },
    {
      company: "SkillWeb",
      link: "skillweb.pl",
      badges: ["Remote"],
      title: "WordPress Developer",
      start: "03.2021",
      end: "11.2021",
      description: "Managed deployment and hosting infrastructure for WordPress sites, implementing automated backup solutions and security measures. Technologies: WordPress, PHP, Infrastructure Management, Security Implementation",
    }
  ],
  skills: [
    // Cloud & DevOps
    "AWS (EC2, S3, Lambda)",
    "Docker",
    "GitLab CI/CD",
    "Infrastructure as Code",
    "Linux Administration",
    "Bash Scripting",
    "Cloud Architecture",
    "Nginx",
    // Programming
    "Python",
    "JavaScript/TypeScript",
    "Node.js",
    // AI & Automation
    "LLM Implementation",
    "MLOps",
    "Test Automation",
    // Testing
    "Pytest",
    "Test Framework Design",
    // Tools
    "Git",
    "VS Code",
    "MySQL",
    "React/React Native",
    // Methodologies
    "Agile/Scrum",
    "DevOps Practices",
    "Cloud Computing",
    "Computer Networking",
  ],
  projects: [
    {
      title: "Train Qualitier",
      techStack: [
        "Big Project",
        "React",
        "JavaScript",
        "sqlite3",
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "Linux",
        "Raspberry Pi",
        "Internet of Things",
        "Sensors",
      ],
      description:
        "Train Qualitier is a cutting-edge application aimed at enhancing passengers' travel experiences by monitoring and assessing the quality of train rides through real-time data collection from various sensors.",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/train-qualitier-backend",
      },
    },
    {
      title: "Weather App",
      techStack: [
        "Side Project",
        "React",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "Nginx",
      ],
      description: "Weather app that shows current weather in your location",
      link: {
        label: "github.com",
        href: "https://weather.mkuch.pl",
      },
    },
    {
      title: "FantasyRatBot",
      techStack: [
        "Side Project",
        "Python",
        "Discord.py",
        "Docker",
        "bash",
        "Linux",
        "DevChatOps",
      ],
      description:
        "FantasyRatBot is a helpful bot for the FantasyRat Discord server. It is written in Python using the discord.py library.",
      link: {
        label: "github.com",
        href: "https://github.com/Butterski/evil-rat-bot",
      },
    },
  ],
} as const;
