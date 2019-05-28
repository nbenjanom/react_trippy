import React from 'react';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { withUser } from "../../user";
import Rating from "./Rating";


const Container = styled.div`

`;
let heart = "favorite";

class Card extends React.Component {
 
  

  addRemoveFavorites(userId, hotelId){
    console.log(">> addToFavorite >>");
    let url = `http://localhost:3001/api/users/${userId}/hotels/${hotelId}/favorites/toggle`;
    fetch(url, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data =>  {
      console.log("AddRemove", data.result.isFavorite);
      this.setState({
        isFavorite : data.result.isFavorite
      });
    
  });
}

  renderUserDisplayFav(){
    console.log(">> userDisplayFav >>")
    if(this.props.user.isAuthenticated()){
        console.log("Logged IN", this.props.user.username);
        return (<div>
                  <i className="material-icons heart" style={{color:"red"}} onClick={()=>this.addRemoveFavorites(this.props.user._id, this.props.id)}>
                    {heart}
                  </i>
              </div>)
    }
    else{
      console.log("No Log");
      return(null);
    }
  };

  renderButtonTest(){
    console.log("TEST OK");
  }
  

  render() {

    return (

      <Container className="col-3 offset-1" style={{padding:0, marginBottom:40, backgroundColor:"#fff",
                                           boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.50)", textAlign: "center", display:"inline-block"
                                           }}
      >
        <Link to={`/hotel/${this.props.id}`} style={{ textDecoration: 'none', color:"black" }}>
          <img src={this.props.poster} style={{width:"100%", height:"40%"}} /> 
          <p>ID: {this.props.id}</p>
          <p><strong>{this.props.name}</strong></p>
        </Link>
        <Rating stars={this.props.stars}   />
        <p>Prix par nuit: {this.props.price} €</p>
        <button style={{borderRadius:50, padding:"5px 10px", cursor:"pointer", background:"linear-gradient(to left, #577399, #326273",
                        color:"#fff"}}>
          Réserver
        </button>
        <div>
          {this.renderUserDisplayFav()}
        </div>


      </Container>
    )
  }
}

Card.defaulProps = {
  name: '',
  id: ''
};

export default withUser(Card);