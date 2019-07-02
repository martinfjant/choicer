import React from 'react';
import { Hotel } from '../../types/hoteldata';
export interface BoxProps {
  data: Hotel
}

const Box: React.SFC<BoxProps> = ({ data }) => {
  const item = data;
  return (
    <>
      <dt className="bg-gray-500 text-xl mt-4 p-2 rounded-t-lg">
        <h2>{item.name}</h2> in {item.address.country}
      </dt>
      <dd className="bg-gray-200 rounded-b-lg p-2 flex">
        <div>{item.roomCapacity} rooms</div>

        <div>
          {item.address.streetAddress}<br />
          {item.address.postalCode}&nbsp;{item.address.city}<br />
          {item.address.country}
        </div>
        <div>Mer</div>
      </dd>
    </>
  );
}

export default Box;