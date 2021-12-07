import React, { useState } from "react";
import Form from './Form/Form'
import Map from './Map/Map';


const MainPage = () => {
  const [locations, setLocations] = useState([]);

  const addLocation = (latitude,longitude) => {
    setLocations([
      ...locations,
      {
        location: [parseInt(latitude), parseInt(longitude)],
        option: { color: "red" },
      },
    ]);
  };


  return (
    <div>
      <Form addLocation={addLocation} />
      <Map locations={locations} />
    </div>
  );
};

export default MainPage;
