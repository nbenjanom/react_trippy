import React from "react";
import Card from "./Card";
import Map from "../map/Map";

class Hotels extends React.Component {

    render() {

        const hotels = this.props.hotels;
        const center = this.props.center;
        const zoom = this.props.zoom;
        
        if(hotels.length > 0){
            console.log("#Hotels - Render / this.props.hotels[0]: ", hotels[0].location);
        }
        console.log("#Hotels - Render / this.props.hotels", hotels);
        console.log("#Hotels - Render / this.props.center: ", this.props.center);

        return(
            <div className="row" style={{padding:10}}>
                
                <div className="col-6 TEST" style={{overflow:"scroll", height:"90vh"}}>
                    <div className="row" style={{padding:10}}>
                        { hotels.map( ({name, _id, stars, price, pictures} , index) => {

                            if(hotels.length > 0) {
                                return(
                                    <Card 
                                        key = {index}
                                        name={name}
                                        id={_id}
                                        price={price}
                                        stars={stars}
                                        poster={pictures[0]}
                                    />
                                )
                            }
                            
                        }) }
                    </div>
                </div>
                <div className="col-6">
                    <div className=""  style={{ height: 500, width: "100%"}}>
                        <Map
                            hotels = {hotels}
                            center = {center}
                            zoom = {zoom}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

Hotels.defaultProps = {
    hotels : []
}

export default Hotels;