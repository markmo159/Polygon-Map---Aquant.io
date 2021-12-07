import React from 'react';
import { ReactBingmaps } from 'react-bingmaps'; 

const Maps = ({ locations = [] }) => {
    const pinsLocation = () => {
        const pins = []
        if (locations.length) {
            locations.forEach(location => {
              pins.push(location.location)
            })
            
            if (locations.length > 1) {
              pins.push(locations[0].location)
            }
        }
        return pins
    }

    return (
      <div style={{height:'100vh'}}>
        <ReactBingmaps
            bingmapKey='AlmcDhuEELJtnAxZjE-v3LkNm0gUJTbZ4uAIej7aoAwRw1nhtv1P2WiXqQeKjzfY'
            width="100%"
            height="100%"
            center={[32, 34.6]}
            mapTypeId="road"
            pushPins={[...locations]}
            polyline={{
              "location": [...pinsLocation()],
              "option": { strokeColor: 'blue', strokeThickness: 5 }
            }}
        >
        </ReactBingmaps>
      </div>
    )
}

export default Maps;