export const en = {
	homeMetadataTitle: "Portfolio",
	technologies: "Technologies",
	success: "Success",
	successCopy: "Email copied successfully!",
	homeMetadataDescription: "Developer Portfolio Website",
	role: "Software Engineer",
	changeTheme: "Change theme",
	changeLanguage: "Change language",
	history: `I am a developer with experience in <b>C++/C#</b> for software development. On the front-end, I work with <b>ReactJS, NextJS, Remix, ElectronJS and Vue,</b> focusing on simple, functional interfaces centered on user experience. On the back-end, I use <b>Fastify, ExpressJS, NodeJS, .NET, ASP.NET, PostgreSQL, MySQL and NoSQL</b> to build efficient APIs and systems. I also work in mobile development with React Native and Flutter, prioritizing practical and accessible solutions. I have experience with <b>Docker, AWS, Firebase and Cloudflare,</b> always choosing the most suitable tools for each project and each company.`,
	iAm: "My name is",
	"software-engineer": "Software Engineer",
	"fullstack-developer": "Fullstack Developer",
	about: "About",
	name: "Thiago",
	contactMe: "Contact",
	projects: "Projects",
	professionalExperience: "Professional Experience",
	whoseLogo: "Logo - ",
	sourceCode: "Source Code",
	site: "Website",
	now: "the moment",
	padlock: "Padlock",
	"project-metropole": "Garage system for GTA Online",
	"project-metropole-work":
		"I work on the GTA RP Metropole server in the development area for features and maintenance, using Typescript, Lua, C#, FiveM and Metropole Framework.",
	"project-ans":
		"A data processing application designed to handle and analyze ANS data.",
	privateSourceCode: "The source code for this project is private",
	skills: "Skills",
	"project-bood": `Responsible for developing dynamic interfaces;<br />
Code maintenance;<br />
Responsible for teaching intern developers to program;<br />
Assistant to the TL in monitoring PRs and code reviews;<br />
Lead developer for the development of bood pdv software - order and financial management software.<br />`,
	"project-gfchaos": `System developer for a private MMORPG server, focused on implementing new features, bug fixes and performance optimization.
<br/>
Development and maintenance of front-end interfaces for the GFChaos MMORPG server, ensuring an optimized experience for approximately 100 players online daily.
<br/>
Responsible for building and managing the Discord server, facilitating interaction and communication between approximately 1000 members.
<br/>
Addition of new content and functionalities to the game to provide a dynamic and engaging experience for the community.
<br/>
Utilization of reverse engineering skills to solve complex technical problems and optimize server performance.
<br/>
Review and correction of English and French translations.
<br/>
Improvement of the launcher, developed in Electron, for security measures against cheats.
`,
	"project-chaosify-editor": `
Game map editor that generates maps from FSM files and collisions via SMP files for the GFChaos game.
<br/>
<br/>
FEATURES:
<br/>
- Object manipulation on a map;
<br/>
- Heightmap manipulation;
<br/>
- Texture manipulation;
<br/>
- Collision manipulation.
`,
	"project-chaosify": `DLL that prevents the user from manipulating the GFChaos game memory, blocking programs like IDA, OLLYDBG, CheatEngine, etc., so they cannot run simultaneously with the game. To prevent the player from cheating in ranked queues to obtain the highest ranking, the mutex technique was applied. Therefore, the player cannot open the launcher/executable more than once. If they try to open it, it will close and the game will continue normally. Malicious activities are detected and sent to a Staff server chat via webhooks.
<br/>
It also comes with the Discord RPC library to signal to your Discord friends the game you're playing, your character name, level, class and the map you're on.
<br/>
In its original GFChaos code, graphic fog manipulation is not possible. A key was also added that when pressed, the fog will disappear; thus leaving the map clean.
`,
	"project-babama": `
Website developed to facilitate players' searches for Grand Fantasia game items, using Levenshtein algorithm for proximity searches, since players use slang or minimize the name for certain items. Additionally, it contains bitwise flag filters to find items that have the desired characteristics.
`,
	"project-bood-pdv": `
Software developed to meet restaurant needs for financial and order management.
`,
	"project-gym": `
A backend project that performs CRUD operations for gyms, check-ins and students. Students can only check-in if they are actually at the gym using a mathematical formula to calculate this. Student authentication is done by JWT token.
`,
	"project-nes": `
NES emulators use CPU6502, which is used in various retro consoles. Such as Nintendo Game Boy, Atari 2600, Atari 7800, Commodore 64, Apple II and BBC Micro. For NES game interpretation, a Just-In-Time (JIT) compiler was used with a hand-written table of Assembly instructions that are used in this CPU model.
`,
	"project-pigz": `
Mobile application for delivery drivers. The driver can register using email and password or even with their Google account. If the customer places an order, a new delivery will be notified on the driver's phone with the address. Each accepted/refused delivery will be counted and will show on screen how many were accepted and refused. At the end, the amount earned for the day appears on screen.
`,
	"project-hardware": `
CLI developed for CPU monitoring
`,
	"project-forum": `
A fullstack forum project. Authentication is done by JWT token. Users can post their opinions with the community, delete their own posts and also use their own profile picture by uploading them to AWS S3 bucket.
`,
} as const
