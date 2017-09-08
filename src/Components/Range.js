import React, { Component } from 'react';
// import $ from 'jquery';

class Range extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="range">
                <input type="range"/>
            </div>
        );
    }
}

export default Range;
