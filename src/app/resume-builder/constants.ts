import { Resume } from "lib/redux/types";

const FRONT_END_SKILLS = [
    "React.js, Next.js",
    "CSS3, TailwindCSS, Sass",
    "Redux with Toolkit and Query, React Query",
    "Hooks, Atomic Design",
    "Extension Development, React Native Web",
];

const BACKEND_SKILLS = [
    "Node.js, Express.js, Nest.js",
    "MongoDB, PostgreSQL",
    "TypeORM, Mongoose, Prisma",
    "GraphQL, REST",
];

const MERN_STACK_SKILLS = [
    "TypeScript, JavaScript",
    ...FRONT_END_SKILLS,
    ...BACKEND_SKILLS,
    "Mocha with Chai, Jest",
];

const SOFT_SKILLS = [
    "Organization, Teamwork, Problem Solving, Learning Mindset",
];

const BLOCKCHAIN_SKILLS = [
    "Ethereum, Solana, Polkadot, Substrate, Algorand, Hedera, Aptos",
    "Solidity, Rust, Go, JavaScript, TypeScript, Move",
    "Unit Testing, Integration Testing, Mocha with Chai, Rust Unit Tests",
    "Wallet Development",
	"Smart contracts",
    "React.js, Next.js, Node.js, MongoDB, PostgreSQL",
];

export const MyResume: Resume = {
    profile: {
        name: "Muhammad Fassih Haider",
        summary: "",
        email: "fassih.haider786@gmail.com",
        phone: "+92-336-888-8395",
        location: "Islamabad, Pakistan",
        github: "https://github.com/MuhammadFassihHaider",
        linkedin: "https://www.linkedin.com/in/muhammad-fassih-haider/",
        projects: "www.notion.so"
    },
    workExperiences: [
        {
            company: "Kryptohive/XP.NETWORK",
            jobTitle: "Full Stack Blockchain Developer",
            date: "July 2022 - Present",
            descriptions: [
                "Working on ~~open-source & ~~decentralized XP.NETWORK NFT Bridge v2 using ~~Substrate and ~~Rust",

                "Implemented & maintained services & features for XP.NETWORK NFT Bridge v1",

                "Implemented MixPanel & new features, created the desktop view & fixed bugs on the -*Pontem Wallet Extension*-. -*Good performance*- led to -*contract extension*- by 4 months with Pontem",

                "Audited smart contracts for Ethereum, Algorand, Solana & Aptos resulting in client retention",

                "Converted front-end of the VLaunch website from JavaScript to Typescript in -*3 days*- (2000+ files) -*without breaking the website*-",

                "Completed the boot camp in the -*shortest amount of time (3 days)*-. Subsequently, tasked with taking boot camps from all new hires & reviewing their code",
            ],
        },
        {
            company: "Punch.cool",
            jobTitle: "Full Stack Developer/Technical Project Manager",
            date: "December 2021 - June 2022",
            descriptions: [
                "Achieved the distinction of being the -*first person to pass*- the JavaScript Developer test among the hires in Pakistan",

                "Appointed as the -*Technical Project Manager*- for the Ocpus project, which was running behind schedule, immediately after the probation period ended, and just 15 days before the MVP deadline. Collaborated with the team to streamline the project, effectively bringing it back on schedule and -*successfully delivering the initial MVP*-",

                "Given a -*100% raise*- immediately after the probation for -*outstanding performance*-",

                "Informed by the HR that I was -*regarded as a benchmark*- for hiring new developers by the HR team & that she was proud of hiring me",
            ],
        },
        {
            company: "BCDApps",
            jobTitle: "Full Stack Developer",
            date: "August 2020 - November 2021",
            descriptions: [
                "Creating UI, integrating APIs using React and Next.js",
            ],
        },
    ],
    educations: [
        {
            school: "SZABIST",
            degree: "BSc in Computer Science",
            date: "2016 - 2020",
            gpa: "3.55",
            descriptions: [
                "Silver Medalist",
                "100% merit-based scholarship",
                "Member of SZABIST Dubai IEEE Student Chapter",
            ],
        },
    ],
    projects: [],
    skills: {
        technical: MERN_STACK_SKILLS,
        soft: SOFT_SKILLS
    },
    custom: {
        descriptions: [],
    },
};

