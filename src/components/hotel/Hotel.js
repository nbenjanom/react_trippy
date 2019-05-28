import React from 'react';
import ImageGallery from 'react-image-gallery';
import Icon from "../core/Icon";
import Map from "../map/Map";
import "react-image-gallery/styles/css/image-gallery.css";

class Hotel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pictures : this.props.pictures,
            hotel : this.props.hotel
        };  
    };
    
    render(){

        console.log("#Hotel - Render / Hotel: ", this.props.hotel);

        const commodit = this.props.commodities;
        const images = []

        for(let i=0; i < this.props.pictures.length ; i++) {
            let image={
                original : this.props.pictures[i],
                thumbnail : this.props.pictures[i]
            };
            images.push(image);
        };

        return(
            <div>
                Hotel
               

                <div style = {{width:"500px"}}>
                    <ImageGallery
                        items={images}
                        showPlayButton={true}
                        showThumbnails={true}
                        infinite={true}
                    />
                 </div>

                 <div style = {{fontSize:"40px"}}>
                    {this.props.hotel.name}
                 </div>

                 <Icon

                 />

                 <div>
                     { commodit.map( (com, index) => {
                         return(
                            
                                <li key={index}>{com}</li>
                            
                        )
                     })}
                 </div>

                <div style= {{height:"300px"}}>
                    <Map
                        hotels={this.props.hotel}
                        center={this.props.hotel.location}

                    />
                </div>
            </div>
        );
    }
}

export default Hotel;