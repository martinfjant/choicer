import React from 'react';
import './App.css';
import * as hoteldata from './hoteldata.json';
const data = hoteldata.hotels

const App: React.FC = () => {
  return (
    <div className="App">

      <ul>
        {data.map(item => <li>{item.name} i {item.address.country}</li>)}
      </ul>
    </div>
  );
}

export default App;
