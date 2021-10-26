import React, { Component } from "react";
import axios from "axios";

class R062_AxiosPost extends Component {
 
    componentDidMount() {
        axios.post('http://localhost:3000/test-post', {
            name: "khj"
        }).then( response => {alert(response.data)} )
    }

    render() {
        return (
            <h2>axios post</h2>
        )
    }
}

export default R062_AxiosPost