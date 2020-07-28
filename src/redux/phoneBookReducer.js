import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './phoneBookActions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (!state.find(({ name }) => name === payload.name)) {
      return [...state, payload];
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
