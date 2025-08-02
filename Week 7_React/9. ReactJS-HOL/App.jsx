import React from 'react';
import ListofPlayers from './Components/ListOfPlayer';
import IndianPlayers from './Components/IndianPlayer';

function App() {
  const flag = true;

  return (
    <div className="App">
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
