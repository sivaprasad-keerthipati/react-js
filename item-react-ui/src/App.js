// import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import GetItems from './GetItems';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <React.StrictMode>
        <AddItem />
      </React.StrictMode>
      <React.StrictMode>
        <UpdateItem />
      </React.StrictMode>
      <br/>
      <React.StrictMode>
        <GetItems />
      </React.StrictMode>

      </header>
    </div>
  );
}

export default App;
