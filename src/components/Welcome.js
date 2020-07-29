import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        let myJSX = (
            <div>
                Welcome { this.props.name }!
            </div>
        );
        return myJSX;
    }
}

export default Welcome;