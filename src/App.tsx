import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as hoteldata from './hoteldata.json';
import Filter from './pages/filter';
import Search from './pages/search';



const App: React.FC = () => {
  const data: any = hoteldata.hotels
  const [geo, setGeo] = useState();
  const [isGeo, setIsGeo] = useState(false)
  const getGeo = () => {
    console.log("hiyaa")
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude)
      setGeo([latitude, longitude]);
      setIsGeo(true)
    },
      (error) => console.error(error));
  }
  return (
    <>
      <Router>
        <menu className="bg-gray-500 flex justify-between m-0 mb-5">
          <ul className="flex">
            <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">
              <NavLink to="/search" activeClassName="text-white underline font-bold">
                Search&nbsp;<i className="fas fa-search-location"></i>
              </NavLink>
            </li>
            <li className="bg-gray-500 text-xl m-4 p-2 rounded-lg">
              <NavLink to="/filter" activeClassName="text-white underline font-bold">
                Filter&nbsp;<i className="fas fa-filter"></i>
              </NavLink>
            </li>
             </ul>
          <div className="text-xl m-4 p-2">
            <button onClick={getGeo} className="bg-gray-200 p-2 m-2 rounded-lg" >Locate me!</button>&nbsp;
             <i className={`fas fa-location-arrow ${isGeo && "text-blue-300"}`} ></i>
          </div>
        </menu>
        <Route path="/filter" render={(props) => <Filter {...props} data={data} geo={geo} isGeo={isGeo} />} />
        <Route path="/search" render={(props) => <Search {...props} data={data} geo={geo} isGeo={isGeo} />} />
      </Router>
    </>
  );
}

export default App;
