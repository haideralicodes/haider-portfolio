import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Haider Ali",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer with strong experience in Frontend technologies. Very active on LinkedIn.",
  summary:
    "At the start of 2025, I completed my BS in Computer Science and dove headfirst into building and contributing to impactful tech projects. In the past, I’ve worked as a Full Stack Developer using the MERN stack and [had the opportunity to be part of top tech communities like Microsoft as (BETA MLSA)](https://www.linkedin.com/in/haideralispeaks/overlay/1635498123425/single-media-viewer/?profileId=ACoAADQSZmUBtEi-ZZ2Egg1C4F13VFcM-guCAFY). I’ve also served as a Devsinc Student Ambassador, constantly pushing myself to learn and grow. Currently, I’m working as a Software Engineer while exploring opportunities that combine innovation and impact.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Python",
    "Java"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "0345haiderali@gmail.com",
    tel: "+923364451512",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haideralispeaks/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/haideralicodes",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "0345haiderali@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Horizon Tech",
      href: "#",
      title: "Software Engineer",
      logoUrl: "/company.jpeg",
      start: "March 2025",
      end: "Present",
      description:
        "Working as a Software Engineer with technologies including React.js, Next.js, Node.js, Express.js and MongoDB to build scalable web applications.",
    },
  ],
  education: [
    {
      school: "Comsats University Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BSCS)",
      logoUrl: "/university.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  communityWork: [
    {
      company: "Microsoft",
      href: "#",
      title: "(Beta) Microsoft Learn Student Ambassador",
      logoUrl: "/mlsa.png",
      start: "Apr 2022",
      end: "Feb 2025",
      description:
        "Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.",
    },
    {
      company: "Devsinc",
      href: "#",
      title: "Campus Ambassador",
      logoUrl: "/devsinc.jpeg",
      start: "Mar 2023",
      end: "Jan 2025",
      description:
        "Bridged the gap between academia and industry by connecting students with Devsinc. Facilitated industry-related sessions and workshops for students.",
    },
  ],
  projects: [
    {
      title: "Business Buddy",
      href: "https://business-buddy-nine.vercel.app/",
      dates: "November 2024 - Jab 2025",
      active: true,
      description:
        "A platform that helps small local business owners build an online presence and reach a larger audience. The platform enables business owners to easily generate templates tailored to their needs with minimal technical knowledge. Integrated the Gemini API for auto-generating captions and posts, and incorporated the Meta Graph API, allowing users to post seamlessly to social media and significantly boosting user engagement.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Stripe",
        "Material UI",
        "Mongo DB",
      ],
      links: [
        {
          type: "Website",
          href: "https://business-buddy-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haideralicodes/BUSINESS-BUDDY",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bbuddy.png",
    },
    {
      title: "Code Review",
      href: "https://code-review-lilac.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Built a code review web app that allows developers to receive AI-powered feedback on their code. By integrating the Gemini API, the app delivers structured and actionable review insights with 90% accuracy.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Gemini API"
      ],
      links: [
        {
          type: "Website",
          href: "https://code-review-lilac.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haideralicodes/Code-Review",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CodeReview.png",
    },
    {
      title: "Free Scribe",
      href: "https://free-scribe-sigma.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a web app that provides real-time speech-to-text transcription and multi-language translation.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Xenova AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://free-scribe-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/haideralicodes/Free-Scribe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FreeScribe.png",
    },
  ],
} as const;
