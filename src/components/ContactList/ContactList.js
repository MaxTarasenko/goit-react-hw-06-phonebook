import PropTypes, { exact } from 'prop-types';
import React from 'react';
import style from './contactList.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBookActions';

const ContactList = ({ filteredContacts, onDelete }) => (
  <ul>
    {filteredContacts.map(({ id, name, number }) => (
      <li key={id} className={style.listItem}>
        <p>
          <span>
            {name}: {number}
          </span>
          <button className={style.button} onClick={() => onDelete(id)} id={id}>
            Delete
          </button>
        </p>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const filteredName = filter.toLowerCase();

  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filteredName),
  );

  return { filteredContacts };
};

const mapDispatchtoProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
