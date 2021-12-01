
import { useState } from 'react';
import './form.scss';

function Form(props) {
  // state that holds the URL inputted
  const [urlValue, setURLValue] = useState('');
  // state that holds the method name (GET, PUT, etc)
  const [methodValue, setMethodValue] = useState('');
  // state that holds the particular span selected so it can be styled
  const [methodSelected, setMethodSelect] = useState('');


  function handleURLInput(e) {
    let { value } = e.target;
    setURLValue(value);
  }

  function handleClick(e) {
    let method = e.target.id.toUpperCase();
    setMethodValue(method);
    handleSelectedMethodStyle(e.target);
  }

  function handleSelectedMethodStyle(target) {
    // if a method is already selected remove class
    if (methodSelected) {
      methodSelected.classList.remove('selected');
    }

    // set state to current span and add selected class to style
    setMethodSelect(target);
    target.classList.add('selected');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      method: methodValue || 'GET',
      url: urlValue,
    };

    props.dispatch({type: 'ADD_REQUESTPARAMS', payload: formData});
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
          <pre>
            {
              methodValue === 'POST' || methodValue === 'PUT'
                ? <textarea></textarea>
                : null}
          </pre>
        </label>
      </form>
    </>
  );
}

export default Form;
