import React, { Component } from 'react';
import './Description.scss';
import { Sectors} from './Sectors';
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
        <a onClick={this.handleClick} >
      	 <button className="Description__button">
      	   	Compre Agora!
      	   </button>
        </a>
      	<div className="Description__local">
      		<div className="Description__local_name">{this.props.local}</div>
      		<div className="Description__local_date">{this.props.date}</div>
      		<div className="Description__local_time">{this.props.time}</div>
      	</div>

      	<div className="Description__sectors" id="sectors">
          <div className="Description__sectors__title">Escolha a Melhor Opção!</div>
           <Sectors sectors={this.props.sectors} />
      	</div>
      </div>
    );
  }
}
