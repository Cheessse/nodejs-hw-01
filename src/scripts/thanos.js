import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(() => Math.random() >= 0.5);
    const toStringify = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, toStringify);
  } catch (error) {
    console.error('Помилка: ', error);
  }
};

await thanos();
