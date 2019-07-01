import React from 'react';
import * as hoteldata from './hoteldata.json';
const data = hoteldata.hotels


const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <menu>
        <ul>
          <li>Search</li>
          <li>Filter</li>
        </ul>
      </menu>
      <dl>
        {data.map(item => {
          return (
            <>
              <dt className="bg-gray-500 text-xl mt-4 p-2 rounded-t-lg">
                <h2>{item.name}</h2> in {item.address.country}
              </dt>
              <dd className="bg-gray-200 rounded-b-lg p-2">
                {item.roomCapacity} rooms
              <div>
                  {item.address.streetAddress}<br />
                  {item.address.city}&nbsp;{item.address.city}<br />
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

export default App;
