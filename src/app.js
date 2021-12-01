import { useEffect, useReducer } from 'react';
import React from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

function App() {

  let intialState = {
    requestParams: {},
    data: null,
    history:[]
  };

  let reducer = (state, action) => {
    switch (action.type) {

    case 'ADD_REQUESTPARAMS':
      return {
        ...state,
        requestParams: {
          method: action.payload.method,
          url: action.payload.url
        }
      };
    case 'ADD_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload]
      };

    case 'ADD_DATA':
      return {
        ...state,
        data: {
          headers: action.payload.headers,
          count: action.payload.count,
          response: action.payload.response
        }
      };

    default:
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    if (state.requestParams.method) {
      callApi();
    }
  }, [state.requestParams]);

  async function callApi() {

    if (state.requestParams.url) {
      dispatch({type: 'ADD_HISTORY', payload: state.requestParams});
      let API_URL = state.requestParams.url;
      const response = await axios.get(API_URL);
      const data = {
        headers: response.headers,
        count: response.data.count,
        response: response.data.results
      };
      dispatch({ type: 'ADD_DATA', payload: data});
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Form dispatch={dispatch} />
      <div id='requestMethod'>Request Method: {state.requestParams.method}</div>
      <div id='url'>URL: {state.requestParams.url}</div>
      <Results data={state.data} />
      <History history={state.history}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
