import { Resume } from "lib/redux/types";

const COMMON_SKILLS = [
    "TypeScript",
    "JavaScript"
]

const FRONT_END_SKILLS = [
    "React.js", "Next.js",
    "CSS3", "TailwindCSS", "Sass",
    "Redux with Toolkit and Query", "React Query",
    "Hooks", "Atomic Design",
    "Extension Development", "React Native Web",
];

const BACKEND_SKILLS = [
    "Node.js", "Express.js", "Nest.js",
    "MongoDB", "PostgreSQL",
    "TypeORM", "Mongoose",
    "GraphQL", "REST",
    "Mocha with Chai", "Unit and Integration Tests"
];

const BLOCKCHAIN_SKILLS = [
    "Ethereum, Solana, Polkadot, Substrate, Algorand, Hedera, Aptos",
    "Solidity, Rust, Go, JavaScript, TypeScript, Move",
    "Unit Testing, Integration Testing, Mocha with Chai, Rust Unit Tests",
    "Wallet Development",
	"Smart contracts",
    "React.js, Next.js, Node.js, MongoDB, PostgreSQL",
];


const SEPERATOR = ", "

const formatSkills = (...newSkills: string[][]): string => {
    console.log({newSkills});
    return newSkills.map(s => s.join(SEPERATOR)).join(SEPERATOR)
    // return currentSkills.concat(commaSeparatedSkills)
}

const MERN_STACK_SKILLS = [
    formatSkills(BLOCKCHAIN_SKILLS, COMMON_SKILLS, FRONT_END_SKILLS, ).concat("."),
];

const SOFT_SKILLS = [
    "Organization, Teamwork, Problem Solving, Learning Mindset.",
];


export const MyResume: Resume = {
    profile: {
        name: "Muhammad Fassih Haider",
        summary: "Full Stack Developer",
        email: "fassih.haider786@gmail.com",
        phone: "+92-336-888-8395",
        location: "Islamabad, Pakistan",
        github: "https://github.com/MuhammadFassihHaider",
        linkedin: "https://www.linkedin.com/in/muhammad-fassih-haider/",
        // projects: "www.notion.so"
    },
    workExperiences: [
        {
            company: "Kryptohive/XP.NETWORK",
            jobTitle: "Full Stack Blockchain Developer",
            date: "July 2022 - Present",
            descriptions: [
                "Playing a key role in the development of open-source and decentralized 'XP.NETWORK NFT Bridge V2'.",

                "Expertly maintained and upgraded existing services for 'XP.NETWORK NFT Bridge V1', enhancing functionality and reliability. Also integrated new blockchains, significantly expanding the bridge's capabilities.",

                "Led the successful integration of MixPanel analytics and new feature development for the 'Pontem Wallet Extension', including creating a desktop view and bug fixes. This led to a 4-month contract extension due to exemplary performance.",

                "Conducted thorough smart contract audits for multiple blockchains (Ethereum, Algorand, Solana, Aptos), contributing to client retention.",

                "Demonstrated exceptional skill in converting the 'VLaunch' website's front-end from JavaScript to TypeScript (over 2000 files) in just 3 days, maintaining seamless website functionality.",

                "Completed the company's boot camp in a record 3.5 days, leading to new responsibility of conducting boot camps for new hires and overseeing their code reviews, demonstrating leadership and expertise in blockchain development.",
            ],
        },
        {
            company: "Punch.cool",
            jobTitle: "Full Stack Developer/Technical Project Manager",
            date: "December 2021 - June 2022",
            descriptions: [
                "Achieved the distinction of being the first person to pass the JavaScript Developer test among the new hires in Pakistan, demonstrating exceptional proficiency.",

                "Rapidly promoted to Technical Project Manager for the 'Ocpus' project post-probation, tasked with turning around the project behind schedule. Successfully led the remote team in streamlining processes and met the challenging 20-day deadline for the MVP delivery.",

                "Awarded a 100% raise immediately post-probation in recognition of outstanding performance and contribution to key projects.",

                "Recognized by HR as a benchmark for new developer hires due to exemplary performance, with the HR team expressing pride in my recruitment.",
            ],
        },
        {
            company: "BCDApps",
            jobTitle: "Full Stack Developer",
            date: "August 2020 - November 2021",
            descriptions: [
                "Led the development of 'Menully', a PWA for meal planning, using React.js, Nest.js and Atomic Design principles. Implemented innovative features like 'Drag and Drop' and 'Dish Tinder', developed and integrated APIs.",
                "Contributed to the development of 'Kuverit', an online marketplace for freelancing services. Focused on creating pixel-perfect UIs and robust front-end API integration using React and Next.js"
            ],
        },
    ],
    educations: [
        {
            school: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST)",
            degree: "BSc in Computer Science",
            date: "2016 - 2020",
            gpa: "3.55 CGPA, Silver Medalist, 100% merit-based scholarship",
            descriptions: [
                "Member of SZABIST Dubai IEEE Student Chapter",
            ],
        },
    ],
    projects: [
        {
            // project: "For a detailed view of my projects, please visit my Notion portfolio",
            descriptions: [
                "https://muhammadfassihhaider.notion.site/muhammadfassihhaider/Major-Projects-61a92f142215435a8f39d874077b6c6b"]
        }
    ],
    skills: {
        technical: MERN_STACK_SKILLS,
        soft: SOFT_SKILLS
    },
    custom: {
        descriptions: [],
    },
};

