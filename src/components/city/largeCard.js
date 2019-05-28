import React from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`

`;

class LargeCard extends React.Component {
  

  render() {

    let photoPath = this.props.photo;
    let photoPathServer = "http://localhost:3001" + photoPath ;

    return (

      <Container className="">
        <Link to={"/hotels?city=" + this.props.slug}>
            LARGECARD
            
            <img src={photoPathServer} alt={this.props.name}  />
            <p> {this.props.name} </p>
    
        </Link>
      </Container>
    )
  }
}

LargeCard.defaulProps = {
  name: '',
  photo: "http://via.placeholder.com/300x200",
  slug: ''
};

export default LargeCard;