import React, { Component } from 'react';
import './Description.scss';

export class Description extends Component {
	constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById('sectors').scrollIntoView({ 
		  behavior: 'smooth' 
		});
  }

  render() {
    return (
      <div className="Description">
      	<div className="Description__button">
      		<a onClick={this.handleClick} >Compre Agora! </a>
      	</div>
      	<div className="Description__local">
      		<div className="Description__local_name">{this.props.local}</div>
      		<div className="Description__local_date">{this.props.date}</div>
      		<div className="Description__local_time">{this.props.time}</div>
      	</div>
      	<div className="Description__sectors" id="sectors">
      		<div className="Description__local_name">{this.props.local}</div>
      		<div className="Description__local_date">{this.props.date}</div>
      		<div className="Description__local_time">{this.props.time}</div>
      	</div>
      </div>
    );
  }
}
