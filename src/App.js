import React, { Component } from 'react';
import logo from './media/img/logo.png';
import members from './media/img/members.jpg';
import './App.scss';
import { Description } from './Description';
// import axios from 'axios';


class App extends Component {
  // componentDidMount() {
  //   axios.get(`https://drive.google.com/file/d/1qYXLwxbNiFbQZRlMMQxUYq35MzHulauO/view`)
  //     .then(res => {
  //       console.log(res)
  //     })
  // }

  render() {
    return (
      <div className="App">
        <div className="App__background" >
          <div className="App__background__content" >
            <div className="App__background__content__title">
                <img src={logo} />
            </div>
            <div className="App__background__content__header" >
              <img src={members} />
            </div>
            <Description />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
