import React from 'react';
import style from '../styles/Title.module.css';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={style.Title}>{this.props.children}</h1>
    );
  }
}
