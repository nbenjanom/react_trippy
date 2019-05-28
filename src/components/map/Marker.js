import React from "react";

class Marker extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:"white", display:"inline-block", padding:"5px", border:"1px solid black", borderRadius:"15px"}}>
                <p style={{margin:0}}>{this.props.price}€</p>
            </div>
        );
    }
}

export default Marker;