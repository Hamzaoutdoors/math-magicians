/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item ...');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="Add Todo..." value={inputText.title} onChange={onChange} name="title" className="input-text" />
      <button type="button" className="input-submit">
        {' '}
        <FaPlusCircle style={{ color: 'darkcyan', fontSize: '1.5rem', textAlign: 'center' }} />
      </button>
    </form>
  );
};
export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
