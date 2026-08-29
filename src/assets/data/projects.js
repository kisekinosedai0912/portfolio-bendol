import GeoQuest from "@/assets/img/geoquest.png";
import FretMuse from "@/assets/img/fretmuse.png";
import RAGPRES from "@/assets/img/ragpres.jpg";
import Scheduler from "@/assets/img/scheduler-event.png";
import Metrics from "@/assets/img/metrics-dashboard.png";
import POS from "@/assets/img/product-page.png";
import Gym from "@/assets/img/gym-dashboard.png";
import Chat from "@/assets/img/chat.jpg";
import Laundry from "@/assets/img/laundry.jpg";
import Uplow from "@/assets/img/uplow.png";
import Dahlings from "@/assets/img/dahlings.png";

export const projects = [
    {
        id: 1,
        title: "Uplow - Media & reputation monitoring for the Icelandic market",
        image: Uplow,
        link: "https://www.uplow.com/",
        description:
            `A media monitoring system built for Icelandic companies that tracks ads published in various platforms. These platforms
				includes meta, google, podcast & radio channels. It helps the businesses know the latest updates of their competitors,
				giving the business insights and most of all, efficiency of information especially with the built-in AI chat that
				instantly gives the results you ask.
                `,
        tech: ["Next.Js", "Node Js", "Neon", "Typescript", "Tailwind", "Temporal", "Nx Workspace", "Sentry", "OpenAI Models"],
    },
    {
        id: 2,
        title: "Dahlings SPA & Salon",
        image: Dahlings,
        link: null,
        description:
            `A web system built for Dahlings to improve their marketing services through websites  with a POS & inventory system.
				This system is designed to solve the manual processes of Dahlings giving easier insights on their inventory levels,
				stocks & purchasing transactions. The architecture is designed as microservices that are seamless & scalable following
				modern structures & up to the standard.
                `,
        tech: ["React", "Express Js", "Node Js", "Typescript", "Tailwind", "Postgres SQL", "Redis", "Inngest", "Nx Workspace"],
    },
    {
        id: 3,
        title: "GeoQuest - Gamified Tourism Platform for Escalante City",
        image: GeoQuest,
        link: "https://geoquest-t9s2.onrender.com",
        description:
            `A gamified tourism web app built from React, Express, Nodejs & MongoDB. This platform was built and designed
                 to provide tourists and the townsfolk of Escalante City a unified platform with details of their tourist sites
                 found in the area. It features achievement based on user activity, quizzes and site visits allowing a gamified
                 concept. The engineering of this web app was designed with MERN stack with OAuth, JWT, Push Notifications and Map
                 features all for better user engagement.
                `,
        tech: ["React", "JavaScript", "Express", "Node Js", "MongoDB", "Firebase", "Google Cloud", "Tailwind"],
    },
    {
        id: 4,
        title: "FretMuse - Open source website platform for beginner guitarists",
        image: FretMuse,
        link: "https://fret-muse.vercel.app",
        description:
            `A personal website intentionhally built to help fellow guitar enthusiasts to level up their guitar skills
                 with provided scale patterns, random note generation for fret memorization and interactive, responsive UI.
                 This website is hosted via Vercel and is available for all users and guitarists.
                `,
        tech: ["React", "JavaScript", "Tailwind", "CSS"],
    },
    {
        id: 5,
        title: "Live Chat App",
        image: Chat,
        link: null,
        description:
            `A simple live chat app built with native html, css, javascript in frontend with express and mongodb for backend.
                 It uses simple authentication system with web socket integration to allow live chatting towards all users available.
                 It is a personal project built to practice web socket integration and showcase my curiosity in developing systems/apps.
                `,
        tech: ["Express", "Node Js", "MongoDB", "Javascript", "HTML", "CSS"],
    },
    {
        id: 6,
        title: "Laundry Management System",
        image: Laundry,
        link: null,
        description:
            `A simple Laundry Management System built with React, Expres, Node Js and Tailwind. The data are only stored on JSON files
                 because the primary role of this system is just to demonstrate a solution in a project of a student in their specific
                 subject. It solves a problem found in the area specifically in laundry shops. The simple system was only built for a
                 project and not implemented yet.
                `,
        tech: ["React", "Express", "Node Js", "JSON", "Javascript", "Tailwind"],
    },
    {
        id: 7,
        title: "RAGPRES - Recycled and Greenery Points Reward Exchange System",
        image: RAGPRES,
        link: null,
        description:
            `A Barangay Community web system built with Laravel, jQuery and Admin LTE plugin to follow a fast development pace.
                 The system was made to give the Barangay Poblacion I of Sagay City, Negros Occidental a software & website that will
                 showcase their recycled products and allow profits of every recycled materials made by the people in the area. It
                 features recycled materials as its primary asset as well as conducting commmunity campaigns, giving points to every
                 barangay participants and rewards them with points that they can use as well to purchase a product of their choice.
                `,
        tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
    },
    {
        id: 8,
        title: "Web Based Scheduler System with Automated Conflict Resolution",
        image: Scheduler,
        link: null,
        description:
            `A web app built with Laravel, jQuery and Tailwind, to address the manual scheduling process of Sagay City Senior
                 High School during enrollment scheduling to teachers, student's subjects, and classrooms. It features
                 automated conflict resolution where the system detects if specific teacher schedules is conflicting with other or
                 their own schedules. It also features and SMS notification for every school calendar events are made or changed to
                 the designated teachers of SCSHS.
                `,
        tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
    },
    {
        id: 9,
        title: "Student Performance Metrics Management System",
        image: Metrics,
        link: null,
        description:
            `A web system designed and engineered for the needs of Sewahon National High School. It caters account creation automation,
                 automated grade calculation and rankings. It was built as a collaboration project with a co-developer using native PHP and
                 jQuery for the development utilizing Github for codebase management, updates and version control. Implemented 4 user role
                 access such as admin, student, teacher and parent to the system, each with different controls.
                `,
        tech: ["PHP", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
    },
    {
        id: 10,
        title: "Rosejing Secure Inventory and Semi-POS Management System",
        image: POS,
        link: null,
        description:
            `A web system engineered using Laravel, jQuery and MySQL to ensure secure transactions, inventory & sales management
                 throughout every branch of Rosejing Computer Parts Shop. It features barcode generation of products, sales history,
                 delete history, user activity and a built-in POS for staff members during product selling. The system primarily ensures
                 security of the products and accurate inventory status delivering a seamless inventory management and business process.
                `,
        tech: ["Laravel", "Javascript", "jQuery", "MySQL", "HTML", "Tailwind"],
    },
    {
        id: 11,
        title: "Muscle Hub - Gym Membership & Sales Management System",
        image: Gym,
        link: null,
        description:
            `A mockup web system built for Muscle Hub gym in our area. It features gym membership management, sales dashboard,
                 authentication and product selling parts. The implementation of the system is still on hold due to the gym's status
                 of not yet fully paid and will be implemented as soon as the owner contacts to proceed the development.
                `,
        tech: ["PHP", "jQuery", "MySQL", "HTML", "Tailwind", "CSS"],
    },
];
