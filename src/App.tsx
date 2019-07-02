import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import * as hoteldata from './hoteldata.json';
import Filter from './pages/filter';
import { Hotel } from './types/hoteldata.js';
import Flag from './components/flag/';
import Search from './pages/search';



const App: React.FC = () => {
  const data: any = hoteldata.hotels
  return (
    <>
      <Router>
        <menu className="bg-gray-500">
          <ul className="flex">
            <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">
              <NavLink to="/search" activeClassName="bg-blue-300">
                Search
              </NavLink>
            </li>
            <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">
              <NavLink to="/filter" activeClassName="bg-blue-300">
                Filter
              </NavLink>
            </li>
            <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">Starred</li>
          </ul>
        </menu>

        <Route path="/filter" render={(props) => <Filter {...props} data={data} />} />
        <Route path="/search" render={(props) => <Search {...props} data={data} />} />
      </Router>
    </>
  );
}

export default App;
