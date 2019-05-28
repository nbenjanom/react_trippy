import React from 'react';

import Login from '../components/auth/Login';

import Api from '../utils/Api';

class LoginContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    const {
      email,
      password
    } = this.state;

    Api.login({
      email,
      password
    })
    .then((res) => {
      console.log('#LoginContainer - RES: ', res);
      if (res.error) {
        alert(res.error);
      } else {
        this.props.history.push("/");
      }
    });
  }

  onChange({ name, value }) {
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <Login {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} />
    );
  }
}

export default LoginContainer;