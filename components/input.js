import React from 'react';
import style from '../styles/Input.module.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: style.input,
    }

    if (!(this.props.className === undefined)) {
      this.state.className += " " + this.props.className;
    }
  }

  render() {
    return (
      <input id={this.props.id} className={this.state.className} name={this.props.name} type={this.props.type} minLength={this.props.minLength} maxLength={this.props.maxLength} min={this.props.min} max={this.props.max} defaultValue={this.props.value} onChange={this.props.onChange} defaultChecked={this.props.defaultChecked} checked={this.props.checked} disabled={this.props.disabled}/>
    )
  }
}
