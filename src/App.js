import React, { Component } from 'react';
import './App.scss';
import { Description } from './Description';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  fetchData() {
    fetch(`./Band1.json`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          logo: data.logo,
          main_picture: data.main_picture,
          band_name: data.band_name,
          local: data.local,
          date: data.date,
          time: data.time,
          sectors: data.sectors
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {logo, main_picture, band_name, local, date, time, sectors} = this.state;
    return (
      <div className="App"> 
        <div className="App__background" >
          <div className="App__background__content" >
            <div className="App__background__content__title">
                <img src={logo} />
            </div>
            <div className="App__background__content__header" >
              <img src={main_picture} />
            </div>
            <Description local={local} date={date} time={time} sectors={sectors} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
