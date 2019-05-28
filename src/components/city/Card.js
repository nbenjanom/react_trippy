import React from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`

`;

class Card extends React.Component {
  

  render() {
    // console.log("Card - photo:", this.props.photo);
    let photoPath = this.props.photo
    let photoPathServer = "http://localhost:3001" + photoPath ;
    // "http://192.168.1.33:3000/img/paris.png"
    return (

      <Container className="col-6">
        <Link to={`/hotels?city=${this.props.slug}`}>

          CARD
          <img src={photoPathServer} alt={this.props.slug} />
          <p> {this.props.name} </p>

        </Link>
      </Container>




      // <div>
 
      //     <li> NAME: {this.props.name} </li>
      //     <li>  PHOTO: <img src={this.props.photo} alt="City"/> </li>
      //     <li>  LIEN HOTEL: </li>
      //     <li> SLUG: {this.props.slug} </li>
        
      // </div>
    )
  }
}

Card.defaulProps = {
  name: '',
  photo: "http://via.placeholder.com/300x200",
  slug: ''
};

export default Card