import React, { Component } from 'react';
import './Num.scss';

class Num extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
      this.id = `toggle_${Math.random().toString().replace(/0\./, '')}`;
  }

  handleChange() {
    console.log("num changed!")
    this.setState({
      isChecked: !this.state.isChecked
    }, () => {
      this.props.onNumChange(this.props.numName)
    });
  }

  render() {
    return (
      <div className="Num">
        <input
          className="Num__checkbox"
          type="checkbox"
          id={this.id}
          data-num-name={this.props.numName}
          checked={this.props.isChecked}
          onChange={this.handleChange}
        />
        <label
          className="Num__label"
          htmlFor={this.id}
          >
          {this.props.numName}
        </label>
      </div>
    );
  }
}

export default Num;