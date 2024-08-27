"use server";
import { promises as fs } from 'fs';

// type Settings = {
//   targetWeekday: number,
//   targetHour: number,
//   numberOfWords: number
// }

export async function loadSettings() {
  
    const file = await fs.readFile(process.cwd() + '/settings.json', 'utf8');
    const settings = JSON.parse(file);

    return settings;
}

// export async function saveSettings(settings) {
    
//     await fs.writeFile(process.cwd() + '/settings.json', JSON.stringify(settings, null, 2));
    
// }