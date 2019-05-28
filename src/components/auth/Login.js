import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={this.props.email} onChange={(evt) => this.props.onChange({ name: 'email', value : evt.target.value })}  />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.props.password} onChange={(evt) => this.props.onChange({ name : 'password', value: evt.target.value })}  />
            </div>
            <button onClick={this.props.onSubmit}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;