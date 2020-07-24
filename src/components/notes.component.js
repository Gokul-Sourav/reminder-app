import React, { Component } from 'react';
import Navigation from './navigation.components';
let marked = require("marked");
class Notes extends Component {
    constructor(props) {
        super(props);
        console.log(props.location.state)
        this.state = {
            notes: props.location.state.notes
        }
    }

    render() {
        console.log(this.state.notes)
        var navStyle = {
            marginTop: "100px"
        }
        return(
            <div>
                <Navigation/>
            <div style= {navStyle}
            dangerouslySetInnerHTML={{__html: marked(this.state.notes, {sanitize: true})}}></div>
            </div>
        )
    }

}

export default Notes;