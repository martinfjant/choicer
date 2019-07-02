import React, { useState } from 'react';
import { Hotel } from '../../types/hoteldata';
import Body from './body';
import Flag from '../flag';
export interface BoxProps {
  data: Hotel
  geo: any
  isGeo: boolean
}

const Box: React.SFC<BoxProps> = ({ data, geo, isGeo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const item = data;

  const open = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <>
      <dt className="bg-gray-500 text-xl mt-4 p-2 rounded-t-lg flex justify-between">
        <div><Flag country={item.address.country} /></div>
        <h2>{item.name}</h2>
        <button onClick={open}>{isOpen ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</button>
      </dt>
      <dd className="bg-gray-200 rounded-b-lg p-2 flex sm:flex-col md:flex-row lg:flex-row justify-between">
        {isOpen ? <Body data={data} geo={geo} isGeo={isGeo} /> : <><div>{item.roomCapacity} rooms in {item.destinationName}</div><div onClick={open}>More ...</div></>}
      </dd>
    </>
  );
}

export default Box;