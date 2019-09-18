import React, { Component } from 'react';
import './Stars.css';
import _ from '../node_modules/lodash';

export default class Stars extends Component {
   
    
    render() {
      
        // let stars = [];
        // for (let index = 0; index < numberOfStars; index++) {
        //      stars.push(<i key={index} className="fa fa-star" />);
        // }

        return (
            <div className="col-md-5">
               {/* {stars} */}
               {_.range(this.props.numberOfStars).map(i => <i key={i} className="fa fa-star" />)}
            </div>
        );
    }
}

