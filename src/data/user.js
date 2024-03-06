const INFO = {
	main: {
		title: "Mo's Portfolio",
		name: "Mohamed Yusuf Mohamed Javid",
		nickname: "Mo",
		email: "mohdgazyanii235@gmail.com",
		logo: "https://mohdgazyanii235.github.io/my-resume/logo.png",
	},

	socials: {
		twitter: "https://twitter.com/MudSec1337",
		github: "https://github.com/mohdgazyanii235",
		linkedin: "https://linkedin.com/in/moyusuf01",
		youtube: "https://www.youtube.com/channel/UCTzDq7ChSq47qMdS8Qm4fAw",
	},

	homepage: {
		title: "Hello world! Welcome to this side of the internet!",
		description:
			"My name is Mohamed Yusuf, but you probably figured that out already. I wear many hats - I'm a computer scientist, teaching assistant, barista, web developer, penetration tester, CEO and a coffee addict (not necessarily in that order). Through this website, I aim to showcase my prowess in software engineering and penetration testing, featuring both my personal and professional escapades. Worry not, You're not sifting through a half-century-old portfolio of someone who once reveled in the limelight! I plan to keep this website as fresh as my daily espresso shots. So dive in and enjoy the blend of technology and caffein induced creativity!",
		projectsTitle: "Some of my favourite projects...",
		image: "https://mohdgazyanii235.github.io/my-resume/homepage.jpg",
	},

	about: {
		title: "About me",
		description: "Lorem ipsum shite",
		photos: [
			{
				title: "What I Look Like after 14 hours of Hacking!🎮👾",
				description: "Fresh off a 14-hour HackTheBox spree with my buddy - my busted ACL (after a skiing accident) made sure I had a great excuse to keep on hacking without taking a break!",
				link: process.env.PUBLIC_URL + "/photo_gallery/broken_knee_and_14_hours_hack_the_box.jpeg",
			},
			{
				title: "Yes, I was a house captain many years ago.",
				description: "Lorem Ipsum Shite.",
				link: process.env.PUBLIC_URL + "/photo_gallery/house_captain.jpeg",
			},
			{
				title: "My love for exhibitions!",
				description: "Lorem Ipsum Shite.",
				link: process.env.PUBLIC_URL + "/photo_gallery/love_for_exhibitions.jpeg",
			},
			{
				title: "Quarantine times!",
				description: "Lorem Ipsum Shite.",
				link: process.env.PUBLIC_URL + "/photo_gallery/quarantine.jpeg",
			},
			{
				title: "Sick golf photo!",
				description: "Lorem Ipsum Shite.",
				link: process.env.PUBLIC_URL + "/photo_gallery/sick_golf_photo.jpeg",
			},
		]
	},

	articles: {
		title: "My Articles",
		description: "Lorem ipsum shite.",
	},

	projects: [
		{
			title: "My Peronal Portfolio Website",
			description:
				"This is where you will find the source code of this website. I am absolutely happy for you clone and build your own using this as a template if you so please!",
			logos: ["https://cdn.worldvectorlogo.com/logos/react-1.svg"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/my-resume",
			pin: true,
		},

		{
			title: "Live Video To Narration",
			description:
				"This was probably the most fun project to build - Imagine having Morgan Freeman narrate what he sees through your camera!",
			logos: ["https://cdn.worldvectorlogo.com/logos/react-1.svg"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/LiveVideo2Narration",
			pin: true,
		},

		{
			title: "Sudoku Solver",
			description:
				"I built a sudoku solver in python - Simply, enter your sudoku puzzle in a csv file and the python code will solve it almost instantly. No, it's not a brute force solution. Time complexity: O(9^n)",
			logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png"],
			linkText: "View Project Source Code",
			link: "https://github.com/mohdgazyanii235/sudoku-solver",
			pin: false,
		},

		{
			title: "Advanced Allocation Algorithm",
			description:
				"The Advanced Allocation Algorithm is our latest ML project, a brainchild cooked up with me and my business partner. Unfortunately, we've got to keep the lid on the details for now... It's like the secret ingredient in your favorite dish - makes you curious, but trust me, it's worth the wait!",
			logos: ["https://mohdgazyanii235.github.io/my-resume/black-with-white-background.png", "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png", "https://cdn.worldvectorlogo.com/logos/react-1.svg", "https://www.svgrepo.com/show/306500/openai.svg", "https://www.svgrepo.com/show/303251/mysql-logo.svg"],
			linkText: "Visit The Bounty Register LinkedIn Page For Updates",
			link: "https://www.linkedin.com/company/thebountyregister/",
			pin: true,
		},
	],
};

export default INFO;
