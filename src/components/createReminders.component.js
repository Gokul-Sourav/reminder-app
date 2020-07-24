import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Badge from "react-bootstrap/Badge";
import Navigation from './navigation.components';
let marked = require("marked");
class CreateReminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: props.id,
            reminder_description: "default",
            reminder_responsible: "defalut",
            reminder_time_hrs: "01",
            reminder_time_min: "00",
            reminder_time_partOfDay: "AM",
            reminder_frequency: "DAILY",
            notes: ""
        }
        this.onReminderDescription = this.onReminderDescription.bind(this);
        this.onReminderResponsible = this.onReminderResponsible.bind(this);
        this.onReminderTimeHrs = this.
        onReminderTimeHrs.bind(this);
        this.onReminderTimeMin = this.onReminderTimeMin.bind(this);
        this.onReminderTimePartOfDay = this.onReminderTimePartOfDay.bind(this);
        this.onReminderFrequency = this.onReminderFrequency.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateMarkdown(notes) {
        this.setState({ notes });
      }

    onSubmit(e) {
        e.preventDefault();
         const task = {
            owner: this.state.owner,
            reminder_description: this.state.reminder_description,
            reminder_responsible: this.state.reminder_responsible,
            reminder_time: this.state.reminder_time_hrs+":"+this.state.reminder_time_min+ " "+this.state.reminder_time_partOfDay,
            reminder_frequency: this.state.reminder_frequency,
            notes: this.state.notes
        }

        console.log(task);
         axios.post('https://ki-reminder-api.herokuapp.com' + "/createTask", task).then((response) => {
         console.log("Response Data =", response.data)
       })
    }
    onReminderDescription(e) {
        this.setState({
            reminder_description : e.target.value
        })
    }

    onReminderResponsible(e) {
        this.setState({
            reminder_responsible : e.target.value
        })
    }

    onReminderTimeHrs(e) {
      this.setState({
          reminder_time_hrs : e.target.value
      })
    }

    onReminderTimeMin(e) {
      this.setState({
          reminder_time_min : e.target.value
      })
    }

    onReminderTimePartOfDay(e) {
      this.setState({
          reminder_time_partOfDay : e.target.value
      })
    }

    onReminderFrequency(e) {
         this.setState({
             reminder_frequency : e.target.value
         })
    }

    render() {
        return(
            <div>
                <Navigation/>
                <div class="page-wrapper p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
                <form class="jumbotron bg-light text-dark" onSubmit={this.onSubmit}>
            
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" className="form-control" onChange = {this.onReminderDescription}/>
                </div>
                <div className="form-group">
                    <label>Responsible:</label>
                    <input type="text" className="form-control"
                    onChange = {this.onReminderResponsible}></input>
                </div>

                <label>Reminder for Every:</label>
                <div class="form-group">
                  <div class="form-inline">
                  <select class="form-control" id="sel1"
                value={this.state.reminder_frequency} 
                onChange={this.onReminderFrequency}>
                    <option>DAILY</option>
                    <option>WEEKLY</option>
                </select>
                  </div>
                </div>

                <div class="form-group">
            <label for="time">Select Time:</label>
                <div class="form-inline">
                    <select class="form-control" id="hrs"
                    value={this.state.reminder_time_hrs} 
                    onChange={this.onReminderTimeHrs}>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>

                    <select class="form-control" id="min"
                    value={this.state.reminder_time_min} 
                    onChange={this.onReminderTimeMin}>
                        <option>00</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        </select>
                    
                    <select class="form-control" id="partOfDay"
                    value={this.state.reminder_time_partOfDay} 
                    onChange={this.onReminderTimePartOfDay}>
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
            </div>

                <div className="row justify-content-between">
            <div className="form-group">
              {" "}
              <div className="col-6 text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Edit Notes
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.notes}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {" "}
                  {console.log(this.state.notes)}
                </textarea>
              </div>
            </div>

            <div className="col-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.notes),
              }}></div>
            </div>
            </div>
            <div className="form-group" style={submitStyle}>
                    <input type="submit" value="Create Reminder" className="btn btn-secondary"></input>
                </div>
                </form>
                </div>
                </div>
                <div class="footer spacing">
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3 bg-secondary text-white">© 2020 Copyright:
                <a class="text-info" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                </footer>
                </div>
            </div>
        )
    }
}

var submitStyle = {
    marginTop: "100px"
}

var inputStyle = {
    width: "300px",
    height: "32vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  var outputStyle = {
    width: "300px",
    height: "32vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
    padding:"10px"
  };

const mapStateToProps = (state) => (state.loginReducer);

export default connect(mapStateToProps)(CreateReminders);