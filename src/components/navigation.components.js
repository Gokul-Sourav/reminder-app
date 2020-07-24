import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../reminder_logo.svg';
function Navigation() {
    return (
    <div>
        <nav class="navbar navbar-expand-sm bg-secondary fixed-top">
                <ul class="navbar-nav mr-auto">
                <Link class="navbar-brand text-white" to="/home">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                Finnit
                </Link>
                    <li class="nav-item active">
                    <Link class="nav-link text-white" to="getReminders">Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text-white" to="/editReminders">Edit Reminders</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link text-white" to="/createReminders">Create Reminder</Link>
                    </li>
                </ul>
            </nav>
    </div>
    );
}

export default Navigation;