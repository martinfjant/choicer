import React, { useState, useEffect } from 'react';
import { Hotel } from '../types/hoteldata';
import { filterByValue } from '../utils/filter';
import Box from '../components/box';


interface SearchProps {
  data: any
}

const Search: React.FC<SearchProps> = ({ data }) => {

  /* Here be state! */
  const [hotelList, setHotelList] = useState(data)
  const [isSearched, setIsSearched] = useState(false)
  const [searchField, setSearchField] = useState("")
  /* Here be toggle triggers */
  useEffect(() => {
    if (searchField !== "") {
      doSearch(data, searchField);
    }
  }, [searchField]
  );

  const onChange = (event: any): void => {
    event.persist();
    setSearchField(event.target.value);

  }

  const doSearch = (data: Array<Hotel>, query: string): void => {
    const reg = new RegExp(query, 'gi');
    const result = data.filter(hotel => {
      if (reg.test(hotel.name)) { return hotel; }
      else if (reg.test(hotel.destinationName)) { return hotel; }
      else if (reg.test(hotel.address.country)) { return hotel; }
      else if (reg.test(hotel.manager.name)) { return hotel; }

    });
    setHotelList(result)
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
      <form>
        <input type="search" onChange={onChange} value={searchField} />
        <button onClick={(event: any) => clearSearch(event)}>Clear</button>
      </form>
      <p>Showing {hotelList.length} Hotels!</p>
      <dl>
        {hotelList.map((item: Hotel) => <Box data={item} />
        )}
      </dl>
    </div>
  );
}

export default Search;