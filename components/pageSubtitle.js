import React from 'react';
import style from '../styles/PageSubtitle.module.css';

export default class PageSubtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className={style.pageSubtitle}>{this.props.children}</h2>
    );
  }
}
