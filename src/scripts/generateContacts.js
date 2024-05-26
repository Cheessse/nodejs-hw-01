import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);

    for (let index = 0; index < number; index += 1) {
      const element = createFakeContact();
      contacts.push(element);
    }
    const toStringify = JSON.stringify(contacts, null, 2);

    await fs.writeFile(PATH_DB, toStringify);
  } catch (error) {
    console.error('Помилка: ', error);
  }
};

await generateContacts(3);
