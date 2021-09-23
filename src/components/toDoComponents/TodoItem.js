/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable react/forbid-prop-types */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  const { title, completed, id } = todo;

  const handleEditing = () => {
    setEditing((current) => !current);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing((current) => !current);
    }
  };

  return (
    <>
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => handleChangeProps(id)} />
          <button type="button" onClick={() => deleteTodoProps(id)}>
            <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
          </button>
          <span style={completed ? completedStyle : null}>
            { title }
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  setUpdate: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
