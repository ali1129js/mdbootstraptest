/**
 * @Author: Ali Ismail
 * @Date:   2018-04-10T19:15:28+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-10T19:37:41+02:00
 */



import React, { Component } from 'react';
import {Button , Input} from 'mdbreact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <form>

          <Input  />
          <div className="text-center">
            <Button color="primary">Login</Button>
            <div class="Button">  </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
