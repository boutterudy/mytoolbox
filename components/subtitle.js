import React from 'react';
import style from '../styles/Subtitle.module.css';

export default class Subtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className={style.Subtitle}>{this.props.children}</h2>
    );
  }
}
