import { readdirSync } from 'fs'

const projectFiles = readdirSync('../../projects').filter(file => file.endsWith('.json'));

for (const file of projectFiles) {
	const project = require(`../../projects/${file}`);
}