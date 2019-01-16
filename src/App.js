import React, { Component } from 'react';
import './App.scss';
import { Description } from './Description';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teste: null,
      logo: null,
      main_picture: null
    };
  }

  fetchData() {
    fetch(`./Band2.json`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          teste: 'testinho',
          logo: data.logo,
          main_picture: data.main_picture
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { teste, logo, main_picture} = this.state;
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
            <div>
            </div>
            <Description />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
