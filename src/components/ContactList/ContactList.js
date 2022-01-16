import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../store/contacts/items-slice';

function ContactList({ showFilteredContacts }) {
  const dispatch = useDispatch();
  return (
    <ul className={style.contactsList}>
      {showFilteredContacts().map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={style.deleteBtn}
            type="button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  showFilteredContacts: PropTypes.func,
};

export default ContactList;
