import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Api from "@helium/sdk"

function App() {
  const [funData, setFunData] = React.useState<any>()
  const boatApi = new Api.BoatApi();
  boatApi.findboats({ conditions: {} }).then(success => {
    setFunData(success.body)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {JSON.stringify(funData)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
