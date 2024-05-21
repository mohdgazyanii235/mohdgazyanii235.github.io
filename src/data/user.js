const d = new Date();
const year = d.getFullYear();

const INFO = {



	main: {
		title: "Mo's Portfolio",
		name: "Mohamed Yusuf Mohamed Javid",
		nickname: "Mo",
		email: "mohdgazyanii235@gmail.com",
		logo: "https://mohdgazyanii235.github.io/logo.png",
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
		articlesTitle: "Some of my favourite articles...",
		image: "https://mohdgazyanii235.github.io/homepage.jpg",
	},

	about: {
		title: "About me",
		description: "This page is about me- I promise I am not a narcissist! This is where I will share snippets of my life, each photo/video capturing a slice of the adventure that is me. From solving the rubik's cube blindfolded to absolutely acing a 6 iron, every image here tells a story of passion, persistence and a sprinkle of playfulness.",
		photos: [
			{
				title: "Retiring to the bed after a lost battle with the chair!",
				description: "After a long few weeks of studying from my desk, I finally succumbed to the chair's relentless assault on my spine. The chair won this round, I decided to retire to the bed to watch youtube videos by professors from University of Nottingham (Computerphile) for my Royal Holloway Degree...",
				link: process.env.PUBLIC_URL + "/photo_gallery/studying_from_bed.jpeg",
			},
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
		title: "My Work..",
		description: "Perhaps 'Articles' isn't a great title for this page, but it's my website so I will do whatever I want to. In this section of the site I want to display some of the work that I have done over the years in computer science. This includes security reports, personal statements, resumes, youtube videos, articles, blog posts and just general stuff that shows my competencies and love for the world of technology🖥️🖥️🖥️! Stay tuned!",
	},

	articles: [
		{
			title: "Security Analysis of WideVine as a Digital Rights Management Solution",
			description: "In my first year studying Computer Science with a focus on Information Security at Royal Holloway University of London, I was selected for an undergraduate research project with an ambitious goal. The project aimed to conduct an in-depth security analysis of WideVine, a leading digital rights management system. Our objective was to assess the resilience of DRM-protected video content from prominent platforms like Netflix and Amazon Prime, exploring potential vulnerabilities. This initiative not only sharpened my technical skills but also provided a practical perspective on the challenges and complexities of digital content protection.",
			location: process.env.PUBLIC_URL + "/articles/widevine.pdf",
			dateWritten: "August 2021",
			authors: ["K Markantonakis", "Darren Hurley-Smith", "Carlton Shepherd", "Mohamed Yusuf"],
			isArticle: true,
			isYoutubeVideo: false,
			pin: true,
		},
		{
			title: "My UCAS Personal Statement",
			description: "After dedicating 2-3 months to meticulously crafting my UCAS personal statement amidst the whirlwind of university applications four years ago, the thought of limiting its audience to just a select few feels like a disservice. This labor of love, a testament to my determination and passion during a pivotal chapter of my academic journey, deserves a broader stage.",
			location: process.env.PUBLIC_URL + "/articles/UCAS_personal_statement.pdf",
			dateWritten: "September 2019",
			authors: ["K Markantonakis", "Darren Hurley-Smith", "Carlton Shepherd", "Mohamed Yusuf"],
			isArticle: true,
			isYoutubeVideo: false,
			pin: false,
		},
		{
			title: "Security Incident Report - Equifax Data Breach 2017",
			description: "This is an security incident report that I was tasked to build as part of my module requirements. The goal was to conduct a thorough examination of a security breach occured in 2017 at Equifax. The incident response conducted by Equifax after this breach was diabolical... read to find out!",
			location: process.env.PUBLIC_URL + "/articles/security_management.pdf",
			dateWritten: "March 2024",
			authors: ["Mohamed Yusuf"],
			isArticle: true,
			isYoutubeVideo: false,
			pin: true,
		},
		{
			title: "Addressing the Human Element in Advanced Persistent Threat Defence: A Literature Review of Social Engineering Mitigation Strategies",
			description: "This is a literature review that I wrote as part of my module requirements. The review focuses on the human element in Advanced Persistent Threat Defence and explores the various social engineering mitigation strategies that can be employed to protect against these threats... towards the end I also highlight a novel solution that I haven't seen being employed in industry yet! Read to find out!",
			location: process.env.PUBLIC_URL + "/articles/Cyber_Security.pdf",
			authors: ["Mohamed Yusuf"],
			dateWritten: "April 2024",
			isArticle: true,
			isYoutubeVideo: false,
			pin: true,
		},
		{
			title: "Solving The CryptoBank CTF on VulnHub",
			description: "This is a " +  (year - 2020) + " year old video of me solving a capture the flag challenge from VulnHub that I thought was quite fun (Also my first ever youtube video). After solving this challenge, I remember @emaragkos (twitter)(the author of the CTF) telling me that I was the only person who solved the CTF in the way that I did.",
			location: "https://www.youtube.com/watch?v=eLX12zv7isw",
			video_id: "eLX12zv7isw",
			dateWritten: "May 2020",
			authors: ["Mohamed Yusuf", "Elpidoforos Maragkos"],
			isArticle: false,
			isYoutubeVideo: true,
			pin: false,
		},
		{
			title: "Solving The CryptoBank Typo1 CTF on VulnHub",
			description: "This is another " +  (year - 2020) + " year old video of me solving a capture the flag challenge from VulnHub. Perfect challenge for demonstrating very notorious privelege escalation method - SUID binaries 💀💀💀!!!",
			location: "https://www.youtube.com/watch?v=nw94T1HAmfs&t=462s",
			video_id: "nw94T1HAmfs",
			dateWritten: "May 2020",
			authors: ["Mohamed Yusuf"],
			isArticle: false,
			isYoutubeVideo: true,
			pin: false,
		},
		{
			title: "Solving The Traceback CTF on HackTheBox",
			description: "This is another " +  (year - 2020) + " year old video of me solving a capture the flag challenge, this time from HackTheBox (my fav). Simple OSINT box with a 6 minute privelege escalation! - I remember this being quite easy!",
			location: "https://www.youtube.com/watch?v=CP56oz0M-d8&t=98s",
			video_id: "CP56oz0M-d8",
			dateWritten: "May 2020",
			authors: ["Mohamed Yusuf"],
			isArticle: false,
			isYoutubeVideo: true,
			pin: false,
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
			link: "https://github.com/mohdgazyanii235/mohdgazyanii235.github.io",
			pin: false,
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
			logos: ["https://mohdgazyanii235.github.io/black-with-white-background.png", "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", "https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://www.svgrepo.com/show/306500/openai.svg", "https://www.svgrepo.com/show/303251/mysql-logo.svg"],
			linkText: "Visit The Bounty Register LinkedIn Page For Updates",
			link: "https://www.linkedin.com/company/thebountyregister/",
			pin: true,
		},

		{
			title: "The Programming Collage",
			description: "The Programming Collage is a git repository where I'll be sharing algorithms, from beginner to advanced levels, to help with coding interviews. I'll also include my solutions to LeetCode problems, because let's be honest, you newbies could use some guidance (just kidding)!",
			logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png"],
			linkText: "View Git Repository",
			link: "https://github.com/mohdgazyanii235/TheProgrammingCollage",
			pin: true,
		}
	],
};

export default INFO;
