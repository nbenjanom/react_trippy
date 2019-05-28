import React from "react";
import Hotel from "../components/hotel/Hotel";
import Api from "../utils/Api";

class HotelContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hotel : [],
            location: {},
            pictures: [],
            commodities: []
        };  
    }

    componentDidMount() {
        Api.getHotelId(this.props.match.params.id)
        .then(hotel => {
        console.log("#HotelContainer - DIDMOUNT - getHotel / hotels : ", hotel);
        this.setState({ hotel : hotel.result,
                        location : hotel.result.location,
                        pictures : hotel.result.pictures,
                        commodities : hotel.result.commodities });
        })
    console.log("#HotelsContainer - DIDMOUNT /  State Hotels : ", this.state.hotels)
    };


    render(){

        // console.log("#HotelContainer - RENDER / this.state.location: ", this.state.location.lat);

        return(
            <div>
                SALUT C HOTELCONTAINER
                < Hotel
                    hotel={this.state.hotel}
                    location={this.state.location}
                    pictures={this.state.pictures}
                    commodities={this.state.commodities}
                />
            </div>
        );
    }
}

export default HotelContainer;