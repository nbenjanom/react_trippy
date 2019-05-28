import React from "react";
import Config from "../../Config";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";



class Map extends React.Component {


    render(){
        const hotels = this.props.hotels;
        // const hotel = this.props.hotel;

        // console.log("#MAP - RENDER / props.center : ", this.props.center, " - props.zoom : ", this.props.zoom);
        console.log("#MAP - RENDER / props.hotels : ", hotels, " Array length: ", hotels.length );
        // console.log("#MAP - RENDER / props.hotel: ", hotel, " Array length: ", hotel.length)

        
        return(
            <div style={{ height: "100vh", width: "100%", overflow:"hidden"}}>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDTPI_oZjdViyRyJHG_WsYt1cL0F-W4FKY" }}
                        defaultCenter={{ lat: this.props.center.lat,
                                         lng: this.props.center.lon }}
                        defaultZoom={this.props.zoom}
                        center={{ lat: this.props.center.lat,
                            lng: this.props.center.lon }}
                        zoom={this.props.zoom}
                    >
                {/* {if(Array.isArray(hotels) === true) {}} */}

                { hotels.map( ({location, price} , index) => {

                    if(hotels.length > 0) {
                        return(
                            <Marker
                                lat={location.lat}
                                lng={location.lon}
                                price={price}
                                key={index}
                            /> 
                        )
                    }
                })}

                    
                    </GoogleMapReact>
             </div>
        )
    }
}

Map.defaultProps = {
    center: {
      lat: 48.8588377,
      lon: 2.27702
    },
    zoom: 12,
    hotels: []
  }

export default Map;