import React from "react";
import Api from "../utils/Api";
import qs from "qs";
import Hotels from "../components/hotel/Hotels"


class HotelsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hotels : [],
            center: {},
            zoom: 1

        };  
    }

    componentDidMount() {
        const { city } = qs.parse(this.props.location.search.replace('?', ''));
        // console.log(Api.getHotel())
        Api.getHotel(city)
        .then(hotels => {
            console.log("#HotelsContainer - DIDMOUNT - getHotel / hotels : ", hotels);
            this.setState({ hotels : hotels.results,
                            center : hotels.center,
                            zoom : hotels.zoom });
        })
        console.log("#HotelsContainer - DIDMOUNT /  State Hotels : ", this.state.hotels)
    };

    render() {


        console.log("#HotelsContainer - RENDER /  State Hotels : ", this.state.hotels)
        console.log("#HotelsContainer - RENDER /  State Center : ", this.state.center)
        console.log("#HotelsContainer - RENDER /  State Hotels[0] : ", this.state.hotels)

        // if(this.state.hotels.length === 0){
        //     return (<p>CHARGEMENT</p>);
        // }

        return(
            <div>
                <Hotels
                    hotels = {this.state.hotels}
                    center = {this.state.center}
                    zoom = {this.state.zoom}
                />
            </div>


        );
    }

}

export default HotelsContainer;