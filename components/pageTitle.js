import React from 'react';
import style from '../styles/PageTitle.module.css';

export default class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={style.pageTitle}>{this.props.children}</h1>
    );
  }
}
