import React from "react";
import BingMapsReact from "bingmaps-react";

const MapPage = ({locations}) => {
 console.log(locations)

  return (
    <div >
      <BingMapsReact
      bingMapsKey="AlmcDhuEELJtnAxZjE-v3LkNm0gUJTbZ4uAIej7aoAwRw1nhtv1P2WiXqQeKjzfY"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="1000px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "road",
      }}
    />
    </div>
  );
};


export default MapPage;