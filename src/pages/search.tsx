import React, { useState, useEffect } from 'react';
import { Hotel } from '../types/hoteldata';
import Box from '../components/box';


interface SearchProps {
  data: any
  geo: any
  isGeo: boolean
}

const Search: React.FC<SearchProps> = ({ data, geo, isGeo }) => {

  /* Here be state! */
  const [hotelList, setHotelList] = useState(data)
  const [isSearched, setIsSearched] = useState(false)
  const [searchField, setSearchField] = useState("")
  /* Here be toggle triggers */
  // Listen to the searchField state and run doSearch() whenever it changes
  useEffect(() => {
        if (searchField !== "") {
      doSearch(data, searchField);
    }
  }, [searchField, data]
  );

  const onChange = (event: any): void => {
    event.persist();
    setSearchField(event.target.value);

  }

  const doSearch = (data: Array<Hotel>, query: string): void => {
    // Make regexp object
    const reg = new RegExp(query, 'gi');
    // Filter out entries that do not matcg with regexp
    const result = data.filter(hotel => {
      // Does it match against the hotel names?
      if (reg.test(hotel.name)) { return true; }
      // Or the destination?
      else if (reg.test(hotel.destinationName)) { return true; }
      // You get the idea...
      else if (reg.test(hotel.address.country)) { return true; }
      else if (reg.test(hotel.manager.name)) { return true; }
      else return false
    });
    // Put into component state for rerender
    setHotelList(result)
    // And let's toggle this to true
    setIsSearched(true)
  }

  const clearSearch = (event: MouseEvent) => {
    event.preventDefault();
    setSearchField("");
    setHotelList(data);
    setIsSearched(false);
  }
  return (
    <div className="container mx-auto px-4">
      <form className="w-full flex text-xl">
        <input className=" w-full bg-gray-100 border border-gray-400 rounded-lg text-xl h-12 p-2 pl-5 " type="search" onChange={onChange} value={searchField} />
        {isSearched && <button className="bg-gray-400 p-2 m-2 rounded-full text-xl h-10 w-10" onClick={(event: any) => clearSearch(event)}><i className="fas fa-times"></i></button>}
      </form>
<h2 className="text-xl p-4 pl-0">Showing {hotelList.length} Hotels!</h2>
      <dl>
        {hotelList.map((item: Hotel) => <Box data={item} geo={geo} isGeo={isGeo} key={item.propertyCode + item.orgNumber} />
        )}
      </dl>
    </div>
  );
}

export default Search;