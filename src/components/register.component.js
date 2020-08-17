import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../reminder_logo.svg';
import TelegramLoginButton from './TelegramLoginButton';
import { addUser } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.responseTelegram = this.
        responseTelegram.bind(this)
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
        return <div className="container">
          <div className="container centering">
            <img src={logo} alt="Logo" className="image-left"></img>
      </div>
      <div className="centering">
      <h2>Reminders made Simple !!</h2>
      <TelegramLoginButton dataOnauth={this.responseTelegram} botName="akiranBot" />
        </div>
      </div>
    }
}

export default connect()(Register);