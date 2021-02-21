import React from 'react';
import style from '../styles/Page.module.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <section className={style.container}>{this.props.children}</section>
    );
  };
}
