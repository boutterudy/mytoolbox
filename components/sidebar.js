import React from 'react';
import style from '../styles/Sidebar.module.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.sidebar}>{this.props.children}</div>
    );
  }
}
