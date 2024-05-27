import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);

    const toStringify = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, toStringify);
  } catch (error) {
    console.error('Помилка: ', error);
  }
};

await addOneContact();
