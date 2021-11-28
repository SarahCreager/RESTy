import React from 'react';

import './results.scss';

function Results(props) {
  return (
    <section>
      <pre data-testid="data">{props.data ? JSON.stringify(props.data, undefined, 2) : <p>...loading</p>}</pre>
    </section>
  );
}

export default Results;
