import React from 'react';

import style from './Filter.module.css';
import { changeFilter } from '../../store/contacts/filter-slice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <div className={style.filter}>
      <label className={style.item}>
        <span>Find contacts by name</span>
        <input
          className={style.field}
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
export default Filter;
