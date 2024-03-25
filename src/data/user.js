const INFO = {
	main: {
		title: "Mo's Portfolio",
		name: "Mohamed Yusuf Mohamed Javid",
		nickname: "Mo",
		email: "mohdgazyanii235@gmail.com",
		logo: "https://mohdgazyanii235.github.io/my-resume/logo.png",
	},

	projectPage: {
		title: "My Side Projects.",
		description: "Oh, you know how it is - every now and then when boredom hits, you won't catch me scrolling through LeetCode (come on I'm not a neek), instead I spend my time building rediculously useful projects that help me so very much in my day to day life. Take, for instance, my pièce de résistance: the Morgan Freeman Live Narrator. Just imagine the possibilities! Life is infinitely more epic with Morgan Freeman's iconic voice setting the scene... See below for more such useful projects!",
	},

	socials: {
		twitter: "https://twitter.com/MudSec1337",
		github: "https://github.com/mohdgazyanii235",
		linkedin: "https://www.linkedin.com/in/moyusuf01/",
		youtube: "https://www.youtube.com/channel/UCTzDq7ChSq47qMdS8Qm4fAw",
		instagram: "https://www.instagram.com/mo.yusuf01/",
		email: "mohdgazyanii235@gmail.com",
		phoneNumber: "+44 (0)7 955 170 009",
	},

	homepage: {
		title: "Hello world! Welcome to this side of the internet!",
		description: "My name is Mohamed Yusuf, but you probably figured that out already. I wear many hats - I'm a computer scientist, teaching assistant, barista, web developer, penetration tester, CEO and a coffee addict (not necessarily in that order). Through this website, I aim to showcase my prowess in software engineering and penetration testing, featuring both my personal and professional escapades. Worry not, You're not sifting through a half-century-old portfolio of someone who once reveled in the limelight! I plan to keep this website as fresh as my daily espresso shots. So dive in and enjoy the blend of technology and caffeine induced creativity!",
		projectsTitle: "Some of my favourite projects...",
		image: "https://mohdgazyanii235.github.io/my-resume/homepage.jpg",
	},

	about: {
		title: "About me",
		description: "This page is about me- I promise I am not a narcissist! This is where I will share snippets of my life, each photo/video capturing a slice of the adventure that is me. From solving the rubik's cube blindfolded to absolutely acing a 6 iron, every image here tells a story of passion, persistence and a sprinkle of playfulness.",
		photos: [
			{
				title: "What I Look Like after 14 hours of Hacking!🎮👾",
				description: "Fresh off a 14-hour HackTheBox spree with my buddy - my busted ACL (after a skiing accident) made sure I had a great excuse to keep on hacking without taking a break!",
				link: process.env.PUBLIC_URL + "/photo_gallery/broken_knee_and_14_hours_hack_the_box.jpeg",
			},
			{
				title: "Yes, I was a house captain many years ago.",
				description: "As house captain, I sported the pink ribbons for breast cancer awareness, with a tie as lively as my approach to leadership. This photo takes me back to that day, bursting with camaraderie and a playful flex—it was leadership with a dash of heart.",
				link: process.env.PUBLIC_URL + "/photo_gallery/house_captain.jpeg",
			},
			{
				title: "My love for hackathons!",
				description: "At a hackathon, it's all about those chance encounters that lead to epic collaborations. Here I am with a fellow enthusiast, post-coding spree, reveling in the buzz of innovation and mutual admiration. This is where the magic happens—new friendships forged in the heat of creative battle!",
				link: process.env.PUBLIC_URL + "/photo_gallery/love_for_exhibitions.jpeg",
			},
			{
				title: "Sick golf photo!",
				description: "Oh yes, if you don't already know, I love golf! I particularly love this photo, taken by my best friend and perhaps the best potrait photographer out there! find his work on: https://www.mohammadrezayazdian.com/",
				link: process.env.PUBLIC_URL + "/photo_gallery/sick_golf_photo.jpeg",
			},
			{
				title: "Quarantine times!",
				description: "In the solitude of quarantine, in a room infested with houseflies, there I was: solving the Rubik's cube, eyes covered with a makeshift blindfold.With the camera propped on a drying rack serving as a makeshift tripod, I was determined to crack the colorful code. Spoiler alert-I did solve it, one silent victory in a room no bigger than a box.",
				link: process.env.PUBLIC_URL + "/photo_gallery/quarantine.jpeg",
			},
			
			{
				title: "My first ever golf swing!",
				description: "🏌️🏌️🏌️🏌️🏌️⛳⛳⛳⛳⛳",
				link: process.env.PUBLIC_URL + "/photo_gallery/my_first_golf_swing.gif",
			},
			{
				title: "Golf in the corridor pt. 1",
				description: "What does one do at 3 am after summer ball? Me? I practice my sand wedge!",
				link: process.env.PUBLIC_URL + "/photo_gallery/golf_obsessed.jpeg",
			},
			{
				title: "Most recent swing!",
				description: "This is a video of me using my 6-iron... I think this went around 200 yards!! One year of golf!! 🏌️🏌️🏌️🏌️🏌️⛳⛳⛳⛳⛳",
				link: process.env.PUBLIC_URL + "/photo_gallery/my_6_iron.gif",
			},
			{
				title: "Golf in the corridor pt. 2",
				description: "Yes, so what we set up up a golf net inside student accommodation??!! It's f**k*ng cold outside!!",
				link: process.env.PUBLIC_URL + "/photo_gallery/golf_net_in_student_accomodation.gif",
			},
		]
	},

	article: {
		title: "My Articles.",
		description: "I aim to upload on this page, an array of my articles / meaningful documents  that I have written over the years... these could be bug bounty reports from 6 years ago to a detailed comparitive analysis between vim and emacs (I chose vim because psycopathy doesn't run in MY family)! ... See you soon!",
	},

	articles: [
		{
			title: "Security Analysis of WideVine as a Digital Rights Management Solution",
			description: "In my first year studying Computer Science with a focus on Information Security at Royal Holloway University of London, I was selected for an undergraduate research project with an ambitious goal. The project aimed to conduct an in-depth security analysis of WideVine, a leading digital rights management system. Our objective was to assess the resilience of DRM-protected video content from prominent platforms like Netflix and Amazon Prime, exploring potential vulnerabilities. This initiative not only sharpened my technical skills but also provided a practical perspective on the challenges and complexities of digital content protection.",
			location: process.env.PUBLIC_URL + "/articles/widevine.pdf",
			link: "article image",
			dateWritten: "August 2021",
			authors: ["K Markantonakis", "Darren Hurley-Smith", "Carlton Shepherd", "Mohamed Yusuf"]
		},
		{
			title: "My UCAS Personal Statement",
			description: "After dedicating 2-3 months to meticulously crafting my UCAS personal statement amidst the whirlwind of university applications four years ago, the thought of limiting its audience to just a select few feels like a disservice. This labor of love, a testament to my determination and passion during a pivotal chapter of my academic journey, deserves a broader stage.",
			location: process.env.PUBLIC_URL + "/articles/UCAS_personal_statement.pdf",
			link: "article image",
			dateWritten: "August 2021",
			authors: ["K Markantonakis", "Darren Hurley-Smith", "Carlton Shepherd", "Mohamed Yusuf"]
		},
	],

	projects: [
		{
			title: "CV Maker",
			description: "CV Maker is your go-to solution for crafting the perfect CV for every job application. This tool eliminates the hassle of constantly modifying your resume to match each job's requirements.",
			logos: ["https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", "https://logowik.com/content/uploads/images/latex6119.logowik.com.webp", "https://www.iconpacks.net/icons/2/free-pdf-icon-3385-thumb.png"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/cv-maker",
			pin: true,
		},
		{
			title: "My Peronal Portfolio Website",
			description: "This is where you will find the source code of this website. I am absolutely happy for you clone and build your own using this as a template if you so please!",
			logos: ["https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/my-resume",
			pin: true,
		},

		{
			title: "Live Video To Narration",
			description: "This was probably the most fun project to build - Imagine having Morgan Freeman narrate what he sees through your camera!",
			logos: ["https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", "https://elevenlabs.io/logo-squircle.svg"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/LiveVideo2Narration",
			pin: true,
		},

		{
			title: "Sudoku Solver",
			description: "I built a sudoku solver in python - Simply, enter your sudoku puzzle in a csv file and the python code will solve it almost instantly. No, it's not a brute force solution. Time complexity: O(9^n)",
			logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/sudoku-solver",
			pin: false,
		},

		{
			title: "Advanced Allocation Algorithm",
			description: "The Advanced Allocation Algorithm is our latest ML project, a brainchild cooked up with me and my business partner. Unfortunately, we've got to keep the lid on the details for now... It's like the secret ingredient in your favorite dish - makes you curious, but trust me, it's worth the wait!",
			logos: ["https://mohdgazyanii235.github.io/my-resume/black-with-white-background.png", "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", "https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://www.svgrepo.com/show/306500/openai.svg", "https://www.svgrepo.com/show/303251/mysql-logo.svg"],
			linkText: "Visit The Bounty Register LinkedIn Page For Updates",
			link: "https://www.linkedin.com/company/thebountyregister/",
			pin: false,
		},
	],
};

export default INFO;
