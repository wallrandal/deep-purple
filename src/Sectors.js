import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Sectors.scss';

export class Sectors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const state = {
	galleryItems: this.props.sectors.map((i) => (
		<div className="Sector">
			<div>{i.name}</div>
			<div>{i.value}</div>
			<div>Quantidade: </div>
		</div>
		)),
	}
    return (
      	 <AliceCarousel
	        items={state.galleryItems}
	        responsive={this.responsive}
	        buttonsDisabled={true}
	        fadeOutAnimation={true}
	        mouseDragEnabled={true}
	        disableAutoPlayOnAction={true}
	        onSlideChange={this.onSlideChange}
	        onSlideChanged={this.onSlideChanged}
	      />
    );
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
}
