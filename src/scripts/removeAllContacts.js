import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    contacts.length = 0;
    const toStringify = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, toStringify);
  } catch (error) {
    console.error('Помилка: ', error);
  }
};

await removeAllContacts();
