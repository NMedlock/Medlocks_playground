import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      let rez = await( await fetch(`/api/message`)).json();
      setData(rez.message);
    })();
  });

  return <div>{data}</div>;
}

export default App;