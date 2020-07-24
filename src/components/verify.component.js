import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../reminder_logo.svg';
import axios from 'axios';
import OtpInput from 'react-otp-input';


class Verify extends Component {
    constructor(props) {
        super(props);

        this.change = this.change.bind(this);
        this.onOtp = this.onOtp.bind(this);
        this.state = {
          resultId: this.props.resultId,
          pin: ""
        }
    }

    onOtp(event) {
        this.setState({
          pin: event.target.value
        })
    }

    change(event){
      event.preventDefault();
    const verify = {
        requestId: this.state.resultId,
        pin: this.state.pin
    }

       axios.post('https://ki-reminder-api.herokuapp.com/verify', verify, {
        "Access-Control-Allow-Origin": "*"
    })
             .then(res => console.log(res.data))
             .catch(err => console.log(err));
       this.props.history.push('/home');
    }

    render() {
        return <div className="container">
      <div className="container centering">
      <img src={logo} alt="Logo" className="image-left"></img>
      </div>
      <div className="centering">
        <h5>Enter OTP</h5>
          <div class="input-group mb-3">
      <div class="input-group-append">
        <OtpInput
          onChange={this.onOtp}
          numInputs={6}
          separator={<span>-</span>}
        />
      </div>
      <span class="input-group-btn input-space">
      <button className="btn btn-primary loginButton" 
      type="button" onClick={this.change}>Verify</button>
      </span>
     </div>
        </div>
      </div>
    }
}
export default Verify;