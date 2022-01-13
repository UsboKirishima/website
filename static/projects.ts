export interface Project {
	name: string;
	link: string;
	description: string;
	repo: string;
    language: string;
}

export const projects: Project[] = [
	{
		name: 'website',
		link: 'https://github.com/UsboKirishima/website',
		description: 'My personal website.',
		repo: 'UsboKirishima/website',
        language: 'Typescript',
	},
	{
		name: 'Niki',
		link: 'https://github.com/UsboKirishima/Niki',
		description:
			"My last discord bot.",
		repo: 'UsboKirishima/Niki',
        language: 'Typescript',
	},
    {
		name: 'PizzaPastaMandolin',
		link: 'https://github.com/UsboKirishima/PizzaPastaMandolin',
		description:
			"Hacking Toolkit full collection.",
		repo: 'UsboKirishima/PizzaPastaMandolin',
        language: 'C, Shell',
	},
];