import React from 'react';
import ReactJson from 'react-json-view';

import './results.scss';

function Results(props) {
  return (
    <section>
      <pre data-testid="data">
        {props.data
          ? <ReactJson src={props.data} theme="summerfruit:inverted" />
          : <p>...loading</p>}
      </pre>
    </section>
  );
}

export default Results;
