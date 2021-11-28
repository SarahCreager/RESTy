import React from 'react';
import { useState } from 'react';
import './form.scss';

function Form(props) {

  const [urlValue, setURLValue] = useState('');
  const [methodValue, setMethodValue] = useState('');

  function handleURLInput(e) {
    // testing with https://swapi.dev/api/people
    let { value } = e.target;
    setURLValue(value);
  }

  function handleClick(e) {
    let method = e.target.id.toUpperCase();
    setMethodValue(method);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: methodValue,
      url: urlValue,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="methods">
          <span onClick={handleClick} id="get">GET</span>
          <span onClick={handleClick} id="post">POST</span>
          <span onClick={handleClick} id="put">PUT</span>
          <span onClick={handleClick} id="delete">DELETE</span>
        </label>
        <label >
          <span>URL: </span>
          <input onChange={handleURLInput} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label>
          <pre>{methodValue === 'POST' || methodValue === 'PUT' ? <input type="textarea"
            name="textValue" /> : null}</pre>
        </label>
      </form>
    </>
  );
}

export default Form;
