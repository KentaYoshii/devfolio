import hennge_logo from "./experience/hennge_logo.png";
import plaid_logo from "./experience/plaid_logo.png";
import sie_logo from "./experience/sie_logo.png";
import bloomberg_logo from "./experience/bloomberg_logo.png";
import brown_logo from "./experience/brown_logo.png";

interface Experience {
    companyName: string,
    from: string,
    to: string,
    loc: string,
    role: string,
    shortDescription: string,
    skills: string[],
    iconURL: string,
}

export const experience: Experience[] = [
    {
        companyName: "Bloomberg",
        from: "June",
        to: "present",
        loc: "Tokyo, Japan",
        role: "Software Engineer Intern",
        shortDescription: "SWE intern at Feeds APAC Contribs Team",
        skills: [],
        iconURL: bloomberg_logo,
    },
    {
        companyName: "Hennge",
        from: "May",
        to: "June 2023",
        loc: "Tokyo, Japan",
        role: "Software Engineer Intern",
        shortDescription: "Implemented real-time and scalable messaging cloud applications to be used in internal communication tool. Developed using SaaS, SSO, PWA and DevOps pipeline",
        skills: ["TypeScript", "DynamoDB", "S3", "Docker", "Redis", "React", "AWS", "Terraform"],
        iconURL: hennge_logo,
    },
    {
        companyName: "Plaid, inc.",
        from: "Aug",
        to: "Sep 2022",
        loc: "Tokyo, Japan",
        role: "Software Engineer Intern",
        shortDescription: "Implemented user settings by reconstructing system logic and models using Node.js and MongoDB. Verified new releases by developing and running E2E tests using Chai.js and Selenium WebDriver",
        skills: ["JavaScript", "Selenium", "Chai", "Docker"],
        iconURL: plaid_logo,
    },
    {
        companyName: "Sony Interactive Entertainment",
        from: "May",
        to: "Aug 2022",
        loc: "Tokyo, Japan",
        role: "Software Engineer Intern",
        shortDescription: "Implemented working prototype of new messaging feature to be added to the PlayStation Network using MERN stack. Worked in an agile scrum team of 6 to define scope of feature, design mockups, and implement both the interface and the backend.",
        skills: ["MongoDB", "TypeScript", "Node", "React", "Agile"],
        iconURL: sie_logo,
    },
    {
        companyName: "Brown University",
        from: "Sep 2021",
        to: "present",
        loc: "Providence, RI",
        role: "Undergraduate Teaching Assistant",
        shortDescription: "Teaching Assistant for JAPN0100, JAPN0200, CS0200 (Data Structures and Algorithm) and CS1680 (Computer Networks). Held weekly conceptual, debugging, and grading sessions.",
        skills: ["Debugging", "Teaching", "Grading"],
        iconURL: brown_logo,
    }
]