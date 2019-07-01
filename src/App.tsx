import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as hoteldata from './hoteldata.json';
import Filter from './pages/filter';
import { Hotel } from './types/hoteldata.js';



const App: React.FC = () => {
  const data: any = hoteldata.hotels
  return (
    <>
      <menu>
        <ul className="flex">
          <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">Search</li>
          <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">Filter</li>
          <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">Starred</li>
        </ul>
      </menu>
    <Router>
      <Route path="/filter" render={(props) => <Filter {...props} data={data} />} />
    </Router>
    </>
  );
}

export default App;
