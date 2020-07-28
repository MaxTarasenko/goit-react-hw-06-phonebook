import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const addContact = createAction('phoneBook/addContact', ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const deleteContact = createAction('phoneBook/deleteContact');
const filterContacts = createAction('phoneBook/filterContacts');

export { addContact, deleteContact, filterContacts };
