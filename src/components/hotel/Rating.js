import React from "react";
import Icon from "../core/Icon";

class Rating extends React.Component {
    render(){

        if (this.props.stars === null) {
            return( <p>Rating information unavailable</p> );
        }

        let stars = parseFloat(this.props.stars);
        let starsRound = Math.floor(stars);
        let iconName;
        const starsResult=[];

        for(let i=1; i<=5; i++){
            if (i<=starsRound){
                iconName = 'star';
            }

            if (i===(starsRound +1)){
                if(stars - starsRound === 0.5){
                    iconName = 'star_half';
                } else {
                    iconName = 'star_border'
                }
            }

            if (i>(starsRound +1)){
                iconName = "star_border";
            }
            
            starsResult.push(<Icon key={i} name={iconName} color={'gold'} size={14} />);
        }

        return(
            <div>
                {starsResult}
            </div>
        );
    }
}

export default Rating;