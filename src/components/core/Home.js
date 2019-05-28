import React from "react";
import Config from "../../Config";
import Gallery from "../city/Gallery";
import Global from "../../Global";
import styled, { css } from "styled-components";


// const Container = styled.div`
//     height: 3000px;
//     margin-top = 10;
//     margin-bottom = 20;
//     color = ${Global.color.body};
//     font-family = ${Global.font.primary};
//     background-color : grey;
// `;

class Home extends React.Component {

    componentDidMount(){
        // this.setState({cities : this.props.cities})
        // console.log("#Home - Render / this state cities: ", this.state.cities);

    }

    render() {
        
        
        let cities = this.props.cities;

        // if(cities.length !== 0){
        // let city = cities.map(city => city.name);
        // console.log("---------------HOME render------------");

        // console.log("#Home - Render / this props cities: ", cities);
        // console.log("#Home - Render / cities map: ", city);

        // console.log("#Home - Render / conf: ", Config.host);

        // console.log("-----------//Home render//-------------");
        // }

        return (
            <div className="">
                <Gallery
                    cities={cities}
                />
            </div>
        );
    }
}

export default Home;