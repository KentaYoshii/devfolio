// Experiences
import hennge_logo from "./experience/hennge_logo.png";
import plaid_logo from "./experience/plaid_logo.png";
import sie_logo from "./experience/sie_logo.png";
import bloomberg_logo from "./experience/bloomberg_logo.png";
import brown_logo from "./experience/brown_logo.png";

// Projects
import ip_tcp_thumb from "./projects/thumbnail/IP_TCP.png";
import modist_thumb from "./projects/thumbnail/MoDist.png";
import ssh_thumb from "./projects/thumbnail/SSH.png";
import tclone_thumb from "./projects/thumbnail/TClone.png";
import weenix_thumb from "./projects/thumbnail/Weenix.png";
import animorphs_thumb from "./projects/thumbnail/Animorphs.png";

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

interface IProjects {
    name: string,
    description: string,
    thumbnail: string,
}

interface IProjectDetail {
    name: string,
    overview: string,
    stack: string[],
    repo: string,
    note: string,
}

export const ProjectsD: IProjects[] = [
    {
        name: "WeenixOS",
        description: "A full operating system kernel, based on Unix",
        thumbnail: weenix_thumb,
    },
    {
        name: "MoDist",
        description: "A Distributed Key-Value Storing System ",
        thumbnail: modist_thumb,
    },
    {
        name: "IP-TCP",
        description: "RFC-compliant implementation of IP/TCP",
        thumbnail: ip_tcp_thumb,
    },
    {
        name: "BigDawsSSH",
        description: "SSH with Transport and Authentication Layer",
        thumbnail: ssh_thumb,
    },
    {
        name: "Twitter-Clone",
        description: "Twitter-like full stack web app with DevOps pipeline",
        thumbnail: tclone_thumb,
    },
    {
        name: "Animorphs",
        description: "New encoding technique for NVIDIA StyleGAN",
        thumbnail: animorphs_thumb,
    }
];

export const ProjectMap = new Map<string, IProjectDetail>([
    ["WeenixOS", {
        name: "WeenixOS",
        overview: "In Spring 2022, I took a class in Operating Systems at Brown University. As part of that class, I developed the majority of a operating system kernel known as Weenix. This is one of the projects that I am proud of finishing :)",
        stack: ["C Programming Language"],
        repo: "",
        note: "This project was developed in CS1690 Operating Systems. Due to Brown University's Academic Code, the source code is not available to public. You can reach out to me if interested.",
    }],
    ["MoDist", {
        name: "MoDist",
        overview: "In Spring 2022, I took a class in Distributed Systems at Brown University. As part of that class, I developed a distributed Key-Value store system also known as Modular Distributed System for Learning (MoDist).",
        stack: ["GoLang", "gRPC"],
        repo: "",
        note: "This project was developed in CS1380 Distributed Systems. Due to Brown University's Academic Code, the source code is not available to public. You can reach out to me if you are interested.",
    }],
    ["IP-TCP", {
        name: "IP-TCP",
        overview: "In Fall 2021, I took a class in Computer Networks at Brown University. As part of that class, I developed an RFC-compliant Internet Protocol (IP) and Transmission Control Protocol (TCP) on top of the said IP",
        stack: ["Golang"],
        repo: "https://github.com/KentaYoshii/ip-tcp",
        note: "This project was developed in CS1680 Computer Networks",
    }],
    ["BigDawsSSH", {
        name: "BigDawsSSH",
        overview: "In Secure Shell, before the client can go about doing their business, certain protcols need to be observed. This project explored the said protocls, namely Transport and Authentication Protocol.",
        stack: ["Golang"],
        repo: "https://github.com/KentaYoshii/BigDawsSSH",
        note: "This project was my final project for CS1515 Applied Cryptography",
    }],
    ["Twitter-Clone", {
        name: "Twitter-Clone",
        overview: "Twitter-like full stack web app that supports users tweeting and connecting with one another. This app is then deployed to AWS with Terraform and using CI/CD pipeline.",
        stack: ["express", "TypeScript", "React", "Terraform", "AWS", "Redis"],
        repo: "https://github.com/KentaYoshii/twitter",
        note: "This project was developed at Hennge during my 4-week internship",
    }],
    ["Animorphs", {
        name: "Animorphs",
        overview: "A project that explored different image encoding techniques with the goal of reproducing similar images using NVIDIA's StyleGAN. Tested with human faces, cats, cars, and art objects",
        stack: ["python", "TensorFlow", "PyTorch"],
        repo: "https://github.com/KentaYoshii/Animorphs",
        note: "This project was my final project for CS1430 Computer Vision",
    }],
]);

export const language = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
];

export const backend = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
];

export const frontend = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
];

export const dev_ops = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg"
];

export const other = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
]

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
        shortDescription: "Teaching Assistant for JAPN0100, JAPN0200, CS0200 (Data Structures and Algorithms) and CS1680 (Computer Networks). Held weekly conceptual, debugging, and grading sessions.",
        skills: ["Debugging", "Teaching", "Grading"],
        iconURL: brown_logo,
    }
]