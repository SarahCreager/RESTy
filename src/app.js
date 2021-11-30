import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  // const callApi = async (requestParams) => {
  //   let API_URL = requestParams.url;
  //   const response = await axios.get(API_URL);

  //   const data = {
  //     Headers: response.headers,
  //     count: response.data.count,
  //     Response: response.data.results
  //   };
  //   setData(data);
  //   setRequestParams(requestParams);
  // };

  useEffect(() => {
    async function callApi() {
      if (requestParams.url) {
        let API_URL = requestParams.url;
        const response = await axios.get(API_URL);
        const data = {
          Headers: response.headers,
          count: response.data.count,
          Response: response.data.results
        };
        setData(data);
      }
    }
    callApi();
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <Form setRequestParams={setRequestParams} />
      <div id='requestMethod'>Request Method: {requestParams.method}</div>
      <div id='url'>URL: {requestParams.url}</div>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
