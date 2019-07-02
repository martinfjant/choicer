import React, { useState } from 'react';
import { Hotel } from '../types/hoteldata';
import { filterByValue } from '../utils/filter';
import Box from '../components/box';


interface FilterProps {
  data: any
}

const Filter: React.FC<FilterProps> = ({ data }) => {

  /* Here be state! */
  const [hotelList, setHotelList] = useState(data)
  const [isFiltered, setIsFiltered] = useState(false)
  /* Here be toggle triggers */

  const filters = [
    { label: "Sweden", value: "Sweden" },
    { label: "Norway", value: "Norway" },
    { label: "Denmark", value: "Denmark" },
    { label: "Finland", value: "Finland" }
  ]

  const doFilter = (value: string) => {
    console.log("Running filter " + value)
    const filterData = filterByValue(data, value);
    console.log(filterData)
    setHotelList(filterData);
    setIsFiltered(true)
  }

  const defilter = () => {
    setHotelList(data);
    setIsFiltered(false)
  }
  return (
    <div className="container mx-auto px-4">
      <ul className="flex">
        {filters.map(filter => <li className="m-2" onClick={() => doFilter(filter.value)}>{filter.label}</li>)}
        <li className="m-2 bg-red-200" onClick={() => defilter()}>Remove filter</li>
      </ul>
      <p>Showing {hotelList.length} Hotels!</p>
      <dl>
        {hotelList.map((item: Hotel) => <Box data={item} />
        )}
      </dl>
    </div>
  );
}

export default Filter;