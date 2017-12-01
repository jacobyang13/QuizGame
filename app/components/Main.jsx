var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import Nav from 'Nav'
import Game from 'Game'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <div>
          <div>
          <Game/>
          </div>
        </div>
      </div>

    );
  }
};

module.exports = Main;
