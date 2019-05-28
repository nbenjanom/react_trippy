import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import HotelsContainer from "./containers/HotelsContainer";
import HotelContainer from "./containers/HotelContainer";
import LoginContainer from "./containers/LoginContainer";
import Nav from './components/core/Nav';
import Cookies from "js-cookie";
import Api from "./utils/Api";


class App extends React.Component {

  componentWillMount() {
    const user = Cookies.getJSON("user");
    if (user) {
      Api.setUser(user);
    }
  }

  render() {
    return (
      <Router>
        <Nav  />
        <div style={{marginTop:"85px"}}>          
          
          {/* <HomeContainer /> */}
          <Route path="/" exact component={HomeContainer} />

          {/* <HotelsContainer /> */}
          <Route path="/hotels" component={HotelsContainer} />

          <Route path="/hotel/:id" component={HotelContainer} />

          <Route path="/login" component={LoginContainer} />


        </div>
      </Router>
    );
  }
}

export default App;