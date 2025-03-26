export const en = {
	homeMetadataTitle: "Portfolio",
	technologies: "Technologies",
	success: "Sucess",
	successCopy: "E-mail copied successfully!",
	homeMetadataDescription: "Developer portfolio website",
	introduction: "Hello! My name is Thiago!",
	history: `<p>I am a developer with experience in C++ for <b class="text-primary">software development.</b> In the <b class="text-primary">front-end</b>, I work with ReactJS, NextJS, Remix, and Vue, always focused on enhancing the user experience with simple and functional interfaces. In the <b class="text-primary">backend</b>, I use tools like Fastify, PostgreSQL, and MySQL to create solutions that meet project needs. Additionally, in <b class="text-primary">mobile app development</b> with React Native, I always strive to deliver something practical and accessible.<br/><br/> I also work with services like Docker for containerization and other services such as AWS, Firebase, and Cloudflare, always seeking the best tools for each situation.</p>`,
	iAm: "I am",
	role: "developer",
	contactMe: "Contact",
	projects: "Projects",
	whoseLogo: "Logo - ",
	sourceCode: "Source code",
	site: "Website",
	padlock: "Padlock",
	privateSourceCode: "The source code for this project is private",
	"project-gfchaos": `Developer of systems for a private MMORPG server, focused on implementing new features, bug fixes, and performance optimization.
<br/>
Development and maintenance of front-end interfaces for the GFChaos MMORPG server, ensuring an optimized experience for approximately 100 players online daily.
<br/>
Responsible for building and managing the Discord server, facilitating interaction and communication among approximately 1000 members.
<br/>
Addition of new content and functionalities to the game to provide a dynamic and engaging experience for the community.
<br/>
Utilization of reverse engineering skills to solve complex technical problems and optimize server performance.
<br/>
Review and correction of translations in English and French.
<br/>
Improvement of the launcher, developed in Electron, with security measures against cheats.`,
	"project-chaosify-editor": `
Game map editor that generates maps from Finite State Machine (FSM) files and collision data from SMP files for the GFChaos game.
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
	"project-chaosify": `DLL that prevents the user from manipulating the GFChaos game memory by blocking programs like IDA, OLLYDBG, CheatEngine, etc., so that they cannot run simultaneously with the game. To prevent players from cheating in ranked queues to achieve the highest ranking, a mutex technique was applied. Therefore, the player cannot open the launcher/executable more than once; if they try, it will close and the game will continue normally. Malicious activities are detected and sent to a staff server chat via webhooks.
<br/>
It also comes with the Discord RPC library to signal to your Discord friends the game you are playing, your character's name, level, class, and the map you are on.
<br/>
In the original GFChaos code, graphical manipulation of fog was not possible. An additional key has been added that, when pressed, removes the fog, leaving the map clear.
`,
	"project-babama": `
Website developed to facilitate players in searching for items in the game Grand Fantasia, using the Levenshtein algorithm for approximate searches, as players use slang or abbreviate item names. Additionally, it contains bitwise flag filters to find items with the desired characteristics.
`,
	"project-bood-pdv": `
Software developed to meet the needs of restaurants for financial management and order processing.
`,
	"project-gym": `
A backend project that performs CRUD operations for gyms, check-ins, and students. Students can only check in if they are actually at the gym, using a mathematical formula to verify their presence. Student authentication is done via JWT token.
`,
	"project-nes": `
NES emulators use the CPU6502, which is employed in several retro consoles such as the Nintendo Game Boy, Atari 2600, Atari 7800, Commodore 64, Apple II, and BBC Micro. A Just-In-Time (JIT) compiler was used with a manually written table of Assembly instructions for interpreting NES games.
`,
	"project-pigz": `
Mobile application for delivery personnel. The delivery person can register using email and password or via their Google account. When a customer places an order, a new delivery notification is sent to the delivery person's phone with the address. Each accepted or declined delivery is counted and displayed on the screen, along with the total earnings for the day.
`,
	"project-hardware": `
CLI developed for CPU monitoring.
`,
	"project-forum": `
A full-stack forum project. Authentication is done via JWT token. Users can post their opinions to the community, delete their own posts, and upload their own profile pictures to an AWS S3 bucket.
`,
} as const
