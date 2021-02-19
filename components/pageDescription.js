import React from 'react';
import style from '../styles/PageDescription.module.css';

export default class PageDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={style.pageDescription}>{this.props.children}</p>
    );
  }
}
