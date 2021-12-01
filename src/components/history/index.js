import React from 'react';

function History(props) {

  const items = props.history.map((item, index) => {
    return (
      <div key={index}>
        <p id="method">{item.method}</p>
        <p id="url">{item.url}</p>
      </div>
    );
  });

  return (
    <>
      <h3>History</h3>
      {items}
    </>
  );
}

export default History;
