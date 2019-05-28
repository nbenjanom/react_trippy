import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withUser } from "../../user";
import Api from "../../utils/Api";



class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          isReady: false,
          isScrolled: false
            }
    
        // **** BINDING ZONE **** //
        this.onScroll = this.onScroll.bind(this);
        this.userDisplay = this.userDisplay.bind(this);

      } 

    componentDidMount(){
        // console.log("#Nav - cDidMount");
        window.onscroll = this.onScroll.bind(this);
    }

    onScroll() {
        // console.log("#Nav - onScroll : ", window.scrollY);
        if ( (window.scrollY >= 15) && (this.state.isScrolled !== true) )  {
          this.setState({ isScrolled: true });
        //   console.log("#Nav - onScroll / Current isScrolled State : ", this.state.isScrolled);
        };
        if ( (window.scrollY <= 15) && (this.state.isScrolled !== false) ) {
          this.setState({ isScrolled: false })
        //   console.log("#Nav - onScroll / Current isScrolled State : ", this.state.isScrolled); 
        }
    }

    userDisplay(){
        console.log(">> userDisplay >>")
        if(this.props.user.isAuthenticated()){
            console.log("Logged IN", this.props.user.username);
            return <div style={{display:"flex"}}>  
                        <i className="material-icons" style={{ marginRight: 10}}>
                            account_circle
                        </i>
                        <p style={{display:"inline-block"}}>{this.props.user.username}</p>
                    </div>
        }
        else{console.log("No Log")}
        console.log("<< userDisplay <<");
    };

    render() {
        console.log("#NAV - RENDER / this.props.user:", this.props.user);
        let navFade = this.state.isScrolled !== false ? "rgba(2, 166, 74, 0.3)" : "rgba(2, 166, 74, 1)";
        
        return(
            <nav className={'fixed-top navbar navbar-expand-lg'} style={{color: "white", backgroundColor: navFade, transition:'all 1s ease-out', width:"100%", marginBottom:"150px"}}>
                <Link to="/">
                    <p className="navbar-brand" >Trippy</p>
                </Link>
                <div className="navbar-nav collapse navbar-collapse">
                    <Link to="/hotels">
                        <li className="nav-item nav-link">Hotels</li>
                    </Link>
                    <li className="nav-item nav-link" >Restaurants</li>
                    <Link to="/login">
                        <li className="nav-item nav-link" >Login</li>
                    </Link>
                    <li className="nav-item nav-link" >Signup</li>
                </div>
                <div>
                    <button onClick={() => {
                        Api.logout();
                        this.props.history.push('/');
                    }}>
                        logout
                    </button>
                </div>
                <div>
                    {this.userDisplay()}
                </div>
            </nav>
        );
    }
}

export default withRouter(withUser(Nav));