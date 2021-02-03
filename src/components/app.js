import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = buttonName => {
    this.setState(state => console.log(state))
    
  }
  render() {
    return(
      <>
        <Display />
        <ButtonPanel />
      </>
    )
  }
}
