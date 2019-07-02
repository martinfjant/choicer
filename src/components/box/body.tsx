import * as React from 'react';
import { getDistance } from '../../utils/distance';
export interface BodyProps {
  data: any
  geo: any
  isGeo: boolean
}

const Body: React.SFC<BodyProps> = ({ data, geo, isGeo }) => {
  const item = data;
  return (
    <>
      <div className="w-full h-1/3 sm:w-full md:w--1/3  lg:w-1/3 xl:w-1/3 text-lg flex flex-col justify-between">
        <div className="m-auto p-2">
          <i className="fas fa-hotel fa-7x text-gray-700"></i>
          </div>
          <div>
        <ul>
          <li><span className="font-bold">Size:</span> {item.roomCapacity} wonderful rooms</li>
          <li><span className="font-bold">Distance:</span> {isGeo ? getDistance(item.location.latitude, item.location.longitude,
            geo[0], geo[1]) : "?"} km from your position </li>
        </ul>
        </div>
      </div>
      <div className="w-full h-1/3 sm:w-full md:w-1/3  lg:w-1/3 xl:w-1/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl m-2 p-2"><i className="fas fa-phone-alt"></i>&nbsp;{item.contactDetails.phoneNumber}</h2>
 
        </div>
        <div>         
          <ul className="m-2 p-2">
            <li><i className="fas fa-user-tie"></i>&nbsp;{item.manager.name}</li>
            <li><i className="fas fa-mobile"></i>&nbsp;{item.manager.phoneNumber}</li>
            <li><i className="fas fa-paper-plane"></i>&nbsp;{item.manager.emailAddress}</li>
          </ul></div>
        <div className="bg-white m-2 p-2 rounded">
          {item.address.streetAddress}<br />
          {item.address.postalCode}&nbsp;{item.address.city}<br />
          {item.address.country}
        </div>
      </div>
      <div className="w-full h-1/3 sm:w-full md:w-1/3  lg:w-1/3 xl:w-1/3">
        <img src={`https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&key=${process.env.REACT_APP_MAP_KEY}&zoom=14&center=${item.location.longitude},${item.location.latitude}4&width=800&height=800&view=Unified&language=en-GB`} alt="This is a map" />
      </div>
    </>);
}

export default Body;