import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Sectors.scss';

export class Sectors extends Component {
  constructor(props) {
    super(props);
    this.i = [];
    this.maskMoney = this.maskMoney.bind(this);
    this.submit = this.submit.bind(this);
  }

  maskMoney = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',  minimumFractionDigits: 2})
  }

  submit() {
    alert('ok')
  }

  render() {
  	const state = {
      currentIndex: 0,
	     galleryItems: this.props.sectors.map((sector) => (
		<div className="Sector">
			<div>Tipo: {sector.name}</div>
      <div className="Sector__quantity">
        <label  htmlFor="quantity">Qtde:</label>
          <div className="Sector__quantity__input"><input type="number" defaultValue="0" min="0"name="quantity[]" /></div>
      </div>
			<div>Valor Unitário: {this.maskMoney(sector.value)}</div>
		</div>
		)),
	}
    return (
      	 <div>
           <AliceCarousel
            items={state.galleryItems}
            responsive={this.responsive}
            buttonsDisabled={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            disableAutoPlayOnAction={true}
            infinite={false}
          />
          <div className="Sector__submit">
            <button onClick={this.submit} className="Sector__submit__button">Finalizar Compra</button>
          </div>
         </div>
    );
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  }

}
