import React, { Component } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import './Num.scss';

class Num extends Component {

  constructor(props) {
    super(props);

    this.id = `toggle_${Math.random().toString().replace(/0\./, '')}`;
    this.state = {
      isChecked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    }, () => {
      this.props.onNumChange(this.props.numName)
    });
  }

  render() {
    return (
      <ToggleButton
        type="checkbox"
        value={this.props.numName}
        className="Num"
        id={this.id}>
        {this.props.numName}
      </ToggleButton>
      // <li className="Num">
      //   <input
      //     className="Num"
      //     type="checkbox"
      //     id={this.id}
      //     checked={this.props.isChecked}
      //     disabled={this.props.isDisabled}
      //     onChange={this.handleChange}
      //   />
      //   <label className="Num__label" htmlFor={this.id}>
      //     {this.props.numName}
      //   </label>
      // </li>
    );
  }
}

export default Num;
