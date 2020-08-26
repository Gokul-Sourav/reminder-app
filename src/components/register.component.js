import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../reminder_logo.ico';
import {Link } from 'react-router-dom';
import { addUser } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import '../signPage.css';
import { FaFacebook, FaGooglePlus } from 'react-icons/fa';

class Register extends Component {
    constructor(props) {
        super(props);
        this.responseTelegram = this.responseTelegram.bind(this)
        this.state = {
          userId: ""
        }
    }

    componentDidUpdate() {
      axios.post("https://ki-reminder-api.herokuapp.com/createUser", {userId: this.state.userId}, {
        "Access-Control-Allow-Origin": "*"
      }).then((response) => {
        console.log("Response Data =", response.data)
      })
    }

   responseTelegram(response) {
     console.log("Came here")
      console.log(response);
      const { history } = this.props;
      const { dispatch } = this.props;
      dispatch(addUser(response));
      this.setState({userId: response.id.toString()})
      history.push("/home")
    };

    render() {
        return <div class="container px-4 py-5 mx-auto">
        <div class="card card0">
            <div class="d-flex flex-lg-row flex-column-reverse">
                <div class="card card1">
                    <div class="row justify-content-center my-auto">
                        <div class="col-md-8 col-10 my-5">
                            <div class="row justify-content-center px-3 mb-3"> <img id="logo" alt="Logo" src={logo}/> </div>
                            <h3 class="mb-5 text-center heading">Remind Me</h3>
                            <h6 class="msg-info">Please login to your account</h6>
                            <div class="form-group"> <label class="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="Phone no or email id" class="form-control"/> </div>
                            <div class="form-group"> <label class="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" class="form-control"/> </div>
                            <div class="row justify-content-center my-3 px-3"> <button class="btn-block btn-color">Login</button> </div>
                            <div class="row justify-content-center my-2"> 
                            <Link to="/setPassword"><small class="text-muted">Forgot Password?</small></Link>
                             </div>
                             <div class="row justify-content-center">
                               <div class="col-6">
                               <FaFacebook class="fa-facebook mr-4"/>
                               <FaGooglePlus class="fa-googleplus"/>
                               </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bottom text-center mb-5">
                        <p href="#" class="sm-text mx-auto mb-3">Don't have an account?
                        <Link class="highlight" href="#">Create new</Link></p>
                    </div>
                </div>
                <div class="card card2">
                    <div class="my-auto mx-md-5 px-md-5 right">
                        <h3 class="text-white">Reminders and Notes made Simple</h3> <small class="text-white">Integrate your reminders along with notes. Manage all your notes in one go and have your html as PDF.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}

export default connect()(Register);