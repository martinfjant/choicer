import React, { useState } from 'react';
import { Hotel } from '../types/hoteldata';
import { filterByValue } from '../utils/filter';
import Box from '../components/box';


interface FilterProps {
  data: any
  geo: any
  isGeo: boolean
}

const Filter: React.FC<FilterProps> = ({ data, geo, isGeo }) => {

  /* Here be state! */
  const [hotelList, setHotelList] = useState(data)
  const [isFiltered, setIsFiltered] = useState(false)
  /* Here be toggle triggers */

  const filters = [
    {
      type: "Countries",
      filters:
        [
          { label: "Sweden", value: "Sweden" },
          { label: "Norway", value: "Norway" },
          { label: "Denmark", value: "Denmark" },
          { label: "Finland", value: "Finland" },
          { label: "Latvia", value: "Latvia" },
          { label: "Lithuania", value: "Lithuania" }
        ]
    },
    {
      type: "Brands",
      filters:
        [
          { label: "Quality", value: "Quality" },
          { label: "Nordic", value: "Nordic Hotels" },
          { label: "Comfort", value: "Comfort" },
          { label: "Clarion", value: "Clarion" }
        ]
    }
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
      <ul className="flex flex-wrap">
        {
          filters.map((type) =>
            <React.Fragment key={type.type}>
              <li className="m-2 bg-gray-400 p-2 rounded">{type.type}&nbsp;&nbsp;<i className="fas fa-chevron-right"></i></li>
              {type.filters.map((filter) => <li key={filter.value} className="m-2 bg-gray-200 p-2 rounded cursor-pointer" onClick={() => doFilter(filter.value)}>
                {filter.label}
              </li>)}
            </React.Fragment>
          )
        }
        {isFiltered && <li className="m-2 bg-gray-400 rounded-full p-2 pl-4 pr-4 cursor-pointer" onClick={() => defilter()}><i className="fas fa-times"></i></li>}
      </ul>
      <h2 className="text-xl p-4 pl-0">Showing {hotelList.length} Hotels!</h2>
      <dl>
        {hotelList.map((item: Hotel) => <Box data={item} geo={geo} isGeo={isGeo} key={item.propertyCode + item.orgNumber} />
        )}
      </dl>
    </div>
  );
}

export default Filter;