import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
import Navigation from './navigation.components';
import { BsArrowRightShort } from "react-icons/bs";

function Home () {
    var cardStyle = {
        marginTop: "80px"
    }

    const user = useSelector((state) => state.loginReducer)
    return <div class="home-body">
        <Navigation/>
            
  <div class="container">
      <div class="jumbotron d-flex align-items-center" style={cardStyle}>
          <div>
          <h1 class="text-center">Welcome {user.first_name}</h1>
      <h4 class="text-center">Make your notes as well as set reminders.</h4>
  <div class="card-deck" style={cardStyle}>
    <div class="card border-light mb-3 w-50 z-depth-4">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-danger xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title style-card-title">Important Tasks</h5>
      <p class="card-text style-card-body">Lists all the important tasks to be reminded.</p>
      <div class="float-right">
      <BsArrowRightShort class="text-muted iconStyle"></BsArrowRightShort>
      </div>
    </div>
  </div>
    <div class="card border-light mb-3 w-50 z-depth-4">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-info xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title style-card-title">Finished Tasks</h5>
      <p class="card-text style-card-body">Lists all the finsihed tasks. Can be opened again.</p>
      <div class="float-right">
      <BsArrowRightShort class="text-muted iconStyle"></BsArrowRightShort>
      </div>
    </div>
  </div>

    <div class="card border-light mb-3 w-50 z-depth-4">
    <div class="card-header">
    <h1>
    <span class="badge badge-pill badge-success xl-2 col-sm-3 offset-md-4 ">3</span>
        </h1>
  </div>
    <div class="card-body">
      <h5 class="card-title style-card-title">Upcoming Tasks</h5>
      <p class="card-text style-card-body">Tasks which are scheduled to be reminded currently.</p>
      <div class="float-right">
      <BsArrowRightShort class="text-muted iconStyle"></BsArrowRightShort>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
  </div>
        </div>
        
}

export default Home;