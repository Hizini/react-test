import React, { Component } from "react";
import axios from "axios";

class R061_AxiosGet extends Component {
 
    componentDidMount() {
        axios.get('http://localhost:3000/test-get').then( response => {alert(response.data)} )
    }

    render() {
        return (
            <h2>axios get</h2>
        )
    }
}

export default R061_AxiosGet