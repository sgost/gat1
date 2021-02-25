import React from 'react';
import './scss/switch/switch.scss';
class LightSwitch extends React.Component {
  
    state = {
      active: false,
    }
    render() {
      return (
        <div>
            <button 
              className={ this.state.active ? "square switch-on" : "square switch-off" } onMouseLeave={ this.state.active ? "square switch-on" : "square switch-off" }
              onClick={() => this.setState({active: !this.state.active})} >Download now
            </button>
          </div>
      );
    }
  }
export default LightSwitch;