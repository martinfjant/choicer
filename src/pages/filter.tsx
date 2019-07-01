import React, { useState } from 'react';
import { Hotel } from '../types/hoteldata';
import * as hoteldata from '../hoteldata.json';


interface FilterProps {
  data: any
}

const Filter: React.FC<FilterProps> = ({ data }) => {

  /* Here be state! */
  const [hotelList, setHotelList] = useState([data])
  /* Here be toggle triggers */

  const filters = [
    { label: "Sweden", value: "sweden" },
    { label: "Norway", value: "norway" },
    { label: "Denmark", value: "denmark" },
    { label: "Finland", value: "finland" }
  ]

  return (
    <div className="container mx-auto px-4">
      <ul className="flex">
        {filters.map(filter => <li className="m-2">{filter.label}</li>)}
      </ul>
      <dl>
        {data.map((item: Hotel) => {
          return (
            <>
              <dt className="bg-gray-500 text-xl mt-4 p-2 rounded-t-lg">
                <h2>{item.name}</h2> in {item.address.country}
              </dt>
              <dd className="bg-gray-200 rounded-b-lg p-2">
                {item.roomCapacity} rooms
              <div>
                  {item.address.streetAddress}<br />
                  {item.address.postalCode}&nbsp;{item.address.city}<br />
                  {item.address.country}
                </div>
              </dd>
            </>
          )
        }
        )}
      </dl>
    </div>
  );
}

export default Filter;