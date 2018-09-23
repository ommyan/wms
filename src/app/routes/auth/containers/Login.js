import React from 'react'

import UiValidate from '../../../components/forms/validation/UiValidate'

import { connect } from 'react-redux';
import { login,logout } from '../../../components/user/UserActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(UserActions.logout());

    this.state = {
        username: '',
        password: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange=(e)=> {
  const { name, value } = e.target;
  this.setState({ [name]: value,
   });
}

handleSubmit=(e)=> {
  e.preventDefault();
  this.setState({ submitted: true });
  const { username, password } = this.state;
  const { dispatch } = this.props;
  if (username && password) {
      this.props.dispatch(login(username, password));
      
  }
}
  render() {
    return (
      <div id="extr-page">
        
        <div id="main" role="main" className="animated fadeInDown">

          <div id="content" className="container">
            <div className="row">
            <div className="row">
            <div id="logo-group">
            <span id="logo"> <img src="assets/img/logo.png" alt="Warehouse Management System"/> </span>
            <span id="logo"> <img src="assets/img/aqua.png" alt="Aqua"/> </span>
          </div>
            </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
            
            <br></br>
              <h1 className="txt-color-red login-header-big">Warehouse Management System</h1>
              <span id="logo" style={{width: '350px'}}> <img src="assets/img/haier.png" alt="Haier"/>
              PT Haier Sales Indonesia
              </span>
                <div className="hero">
                  <div className="pull-left login-desc-box-l">
                    <h4 className="paragraph-header">It's Okay to be Smart. Experience the simplicity of Warehouse Management,
                      everywhere you go!</h4>
                    
                  </div>
                  <img src="assets/img/demo/iphoneview.png" className="pull-right display-image" alt=""
                       style={{width: '210px'}}/>
                </div>
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                <div className="well no-padding">
                  <UiValidate>
                    <form onSubmit={this.handleSubmit} id="login-form" className="smart-form client-form">
                      <header>
                        Login
                      </header>
                      <fieldset>
                        <section>
                          <label className="label">User Name</label>
                          <label className="input"> <i className="icon-append fa fa-user"/>
                            <input type="text"  name="username" 
                                   data-message-required="Please enter your email address"
                                   data-message-email="Please enter a VALID email address"
                                   name="username"  onChange={this.handleChange} 
                                   />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"/>
                              Please enter username</b></label>
                        </section>
                        <section>
                          <label className="label">Password</label>
                          <label className="input"> <i className="icon-append fa fa-lock"/>
                            <input type="password"  name="password" data-smart-validate-input="" data-required=""
                                   data-minlength="3" data-maxnlength="20"
                                   data-message="Please enter your email password"
                                   name="password"  onChange={this.handleChange}
                                   />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"/> Enter
                              your password</b> </label>

                          <div className="note">
                            <a href="#/forgot">Forgot password?</a>
                          </div>
                        </section>
                        <section>
                          <label className="checkbox">
                            <input type="checkbox" name="remember" defaultChecked={true}/>
                            <i/>Stay signed in</label>
                        </section>
                      </fieldset>
                      <footer>
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                      </footer>
                    </form>
                  </UiValidate>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  UserReducer: state.UserReducer
})

export default connect(
  mapStateToProps
  )(Login)