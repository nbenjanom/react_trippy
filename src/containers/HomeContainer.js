import React from 'react';
// import styled, { css } from "styled-components";
import Api from "../utils/Api";
import Home from "../components/core/Home";


// const Container = styled.div`
//    color : ${Global.color.body}
// `;


class HomeContainer extends React.Component {

    // ************* CONSTRUCT ZONE ************** //
    constructor(props){
        super(props);
        this.state = {
            cities : []
        }

        // ********** BINDING ZONE ****************** //

    }

  componentDidMount() { 
    // console.log(Api.getHome());
    Api.getHome()
    .then(cities => {
        this.setState({cities : cities.cities})
    })
    // console.log("#HomeContainer - DIDMOUNT /  State Cities : ", this.state.cities)
   };

  render() {
    //   console.log("#HomeContainer / this.State.cities : ", this.state.cities);
    // ERREUR   console.log("#HomeContainer / this.State.cities[0] : ", this.state.cities[0]);

    return (

        <div className='container-fluid'
            style={{
            fontFamily: 'Montserrat' }} >
               
                <Home
                    cities = {this.state.cities}
                />
            

        </div>        
    );
  }
}

export default HomeContainer;