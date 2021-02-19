import React from 'react';
import style from '../styles/Button.module.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return <button onClick={this.props.onClick} className={style.button}>{this.props.content}</button>;
  }
}
