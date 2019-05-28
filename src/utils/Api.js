import Config from "../Config";
import Cookies from 'js-cookie';


class Api {

  constructor() {
    // Create the basic user
    this.user = Object.assign({}, this.defaultUser);

    this.logout = this.logout.bind(this);
  }

  getHome() {
    return fetch(`${Config.host}/api/home`)
    .then(res => res.json())
    .then(data => data)
  }


  getHotel(city) {
    return fetch(`${Config.host}/api/hotels/city/${city}`)
    .then(res => res.json())
    .then(data => data)
  }

  getHotelId(id) {
    return fetch(`${Config.host}/api/hotels/${id}`)
    .then(res => res.json())
    .then(data => data)
  }


//********//////// LOGIN ////////*******//

  defaultUser = {
    _id: null,
    token: null,
    username: null,
    thumbnail: null,
    firstName: null,
    dob: null
  };

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }

  authenticate(user) {
    Cookies.set("user", user);
    this.setUser(user);
  }

  signup(user) {
    return fetch(`${Config.host}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  login(user = {}) {
    return fetch(`${Config.host}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        return json;
      });
  }

  logout() {
    console.log(">> LOGOUT >>")
    Cookies.remove("user");
    this.setUser(Object.assign({}, this.defaultUser));
    console.log("<< LOGOUT <<")

  }

  // Compulsory authentication on this route
  getProfile(profile = {}) {
    return new Promise((resolve, reject) => {
      if (this.isAuthenticated()) {
        return fetch(`${Config.host}/api/users/${profile._id}`, {
          headers: {
            Authorization: `Bearer ${this.user.token}`
          }
        })
          .then(res => res.json())
          .then(json => {
            resolve(json);
          });
      }
      reject({
        error: "You must be authenticated"
      });
    });
  }


}

export default new Api();