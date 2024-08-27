import { promises as fs } from 'fs';

export async function loadSettings() {
  
    const file = await fs.readFile(process.cwd() + '/settings.json', 'utf8');
    const settings = JSON.parse(file);

    return settings;
}