import React from 'react';
import './App.css';
import Routes from './Routes';
import Provider from './context/Provider';
// import 'bootstrap/dist/css/bootstrap.'

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
