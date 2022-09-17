import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

  constructor(props){
    super(props);
    
  }

  
  
  render() {
    return (
      <div className='navbar' >
        <div className="branding">
            monsoon<span>.io</span>
        </div>
        <form action="get">
            <input type="search" id="search" name="search" placeholder='Enter city name...'
            onChange={this.props.handleChange} value={this.props.query} />
            <button type='submit' onClick={this.props.getReport}>Get Report</button>
        </form>
      </div>
    )
  }
}

export default Navbar