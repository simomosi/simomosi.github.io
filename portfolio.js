import emoji from "react-easy-emoji";

export const greetings = {
	name: "Simone Mosi",
	title: "Hi all, I'm Simone",
	description:
		"Software Engineer with 7+ years of experience specializing in System Design, Backend Development and Security",
	resumeLink:
		null,
};

export const openSource = {
	githubUserName: "simomosi",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/simomosi",
	linkedin: "https://www.linkedin.com/in/simonemosi/",
};
// export const socialLinks = {
// 	facebook: "https://www.facebook.com/1hanzla100",
// 	instagram: "https://www.instagram.com/__hanzla100",
// 	twitter: "https://twitter.com/1hanzla100",
// 	github: "https://github.com/1hanzla100",
// 	linkedin: "https://www.linkedin.com/in/1hanzla100/",
// };

export const skillsSection = {
	title: "What I am",
	subTitle:
		"Computer Science Enthusiast",
	data: [
		{
			title: "Software Engineer",
			lottieAnimationFile: "/lottie/skills/business-meeting.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Talk with People"),
				emoji("⚡ Collect Complete and Accurate Software Requirements"),
				emoji("⚡ Design Systems"),
				emoji("⚡ Guide my Team to our goal"),
				emoji("⚡ Write clear documentation"),
			],
			softwareSkills: [
				{
					skillName: "UML",
					fontAwesomeClassname: "fa-solid:project-diagram",
				},
				{
					skillName: "Jira",
					fontAwesomeClassname: "logos:jira",
				},
				{
					skillName: "LaTeX",
					fontAwesomeClassname: "file-icons:latex",
				},
				{
					skillName: "Confluence",
					fontAwesomeClassname: "logos:confluence",
				},
				{
					skillName: "Markdown",
					fontAwesomeClassname: "logos:markdown",
				},
			]
		},
		{
			title: "Full Stack Developer",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Write Reliable & Optimized Software"),
				emoji("⚡ Build Web-apps"),
				emoji("⚡ Ensure Privacy & Security"),
				emoji("⚡ Build APIs"),
				emoji("⚡ Database Administrator"),
				emoji("⚡ Automate Test & Deploy"),
			],
			softwareSkills: [
				{
					skillName: "PHP",
					fontAwesomeClassname: "bxl:php",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Blockchain Developer",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Build Scripts for automated testing & deployment of Smart Contracts"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards"
				),
				emoji(
					"⚡ Develop NFT Smart Contracts using ERC-721 Token Standard"
				)
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
				{
					skillName: "IPFS",
					fontAwesomeClassname: "simple-icons:ipfs",
				},
			],
		},
	],
};

export const SkillBars = null;
// export const SkillBars = [
// 	{
// 		Stack: "Frontend/Design", //Insert stack or technology you have experience in
// 		progressPercentage: "90", //Insert relative proficiency in percentage
// 	},
// 	{
// 		Stack: "Backend",
// 		progressPercentage: "70",
// 	},
// 	{
// 		Stack: "Programming",
// 		progressPercentage: "60",
// 	},
// ];

export const educationInfo = [
	{
		schoolName: "M.Sc. in Computer Science",
		// subHeader: "Master's Degree in Computer Science",
		duration: "2017 - 2019",
		grade: "110/110 Cum Laude",
		desc: "Details:",
		descBullets: [
			"Thesis about GDPR & Privacy",
			"Paper about Advanced Semantic Queries and their Explanation",
		],
	},
	{
		schoolName: "B.Sc. in Computer Science",
		// subHeader: "Master's Degree in Computer Science",
		duration: "2013 - 2016",
		grade: "108/110",
		desc: "Details:",
		descBullets: [
			"Thesis: Development of a Game Engine specialized in Showrooms/Virtual Realities creation",
		],
	}
];

export const experience = [
	{
		role: "Software Architect and Software Engineer",
		company: "Bidoo",
		companylogo: "/img/icons/common/bidoo-logo.jpg",
		date: "May 2020 - Today",
		desc: "Bidoo offers a live auction platform which requires fast and efficient algorithms",
		descBullets: [
			"Designed and developed from scratch an E-Commerce which supports the famous Auction site",
			"Designed and developed the whole Payments Processing Platform",
			"Made different reports on payments to support business decisions",
			"Developed a software for Access Control List management to handle user roles and permissions in the company intranet"
		],
	},
	{
		role: "Software Architect",
		company: "Deloitte",
		companylogo: "/img/icons/common/deloitte-logo.png",
		date: "Dec 2019 - May 2020",
		desc: "Deloitte is one of the Big Four companies. I worked with their main clients: banks",
		descBullets: [
			"Designed the Strong Customer Authentication (SCA) implementation in order to limit frauds in online payments with credit and debit cards (systems PSD2 compliant)",
			"Designed the integration between foreign banks and italian systems in order to support italian payments (i.e. Checks/MAV/RAV/F23 etc)",
			"Developed a software for the ETL phase in a Fraud Reporting project to handle giant files with low resources"
		],
	},
	{
		role: "Software Engineer",
		company: "FIAT Chrysler Automobiles",
		companylogo: "/img/icons/common/fca-logo.jpg",
		date: "Nov 2018 - Dec 2019",
		desc: "FIAT required high security, information confidentiality and integrity. I developed a Web Application for FCA's World Class Manufacturing process",
	},
	{
		role: "Full Stack Software Engineer",
		company: "",
		companylogo: "/img/icons/common/freelancer-logo.svg",
		date: "Oct 2015 - Sep 2018",
		desc: "Worked with 6 different companies",
		descBullets: [
			"Developed a software which offers services like international mobile top-up and international shipments",
			"Designed different management softwares for company assets, human resources etc",
			"Developed a software capable of projecting costs to determine short to long term gains, thus guiding the company in its decision making processes",
			"...and much more! Ask me for my resume!"
		],
	}
];

export const projects = [
	{
		name: "Dynamic Forms",
		desc: "DynamicForms is a js library that handles all the interaction with forms with dynamic content",
		github: "https://github.com/simomosi/dynamic-forms",
		link: "https://simomosi.github.io/dynamic-forms/",
	},
	{
		name: "MachineLearning MNIST",
		desc: "A Neural Network to recognise hand‑written digits which are stored in the MNIST database",
		github: "https://github.com/simomosi/MachineLearning-MNIST",
	},
	{
		name: "ComputerVision Algorithms",
		desc: "A software which uses Computer Vision algorithms for noise reduction in photos",
		github: "https://github.com/simomosi/ComputerVision-Algorithms",
	},
	{
		name: "Treasure Hunt",
		desc: "Online multiplayer treasure hunt game",
		github: "https://github.com/simomosi/treasure_hunt",
	},
];

export const feedbacks = null;
// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];

// See object prototype on SEO.jsx page
export const seoData = {
	author: "Simone Mosi",
	title: "Portfolio | simomosi",
	description:
		"A passionate Software Engineer.",
	image: "https://avatars.githubusercontent.com/u/37104045?v=4",
	url: "simomosi.github.io",
	keywords: [
		"simomosi",
		"simomosi portfolio",
		"Simone Mosi",
		"Simone Mosi Portfolio",
		"Portfolio",
		"Software Developer",
		"Software Developer Portfolio",
		"Software Developer CV",
	],
};