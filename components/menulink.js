import React from 'react';
import style from '../styles/MenuLink.module.css';
import Link from 'next/link';
import Icon from './icon.js';

export default class MenuLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href={this.props.link}>
        <a className={style.link} >
          <Icon className={style.iconMenuLink} lib={this.props.iconLib} icon={this.props.icon} />
          <div>
            <p className={style.nameMenuLink}>{this.props.name}</p>
            <p className={style.descriptionMenuLink}>{this.props.description}</p>
          </div>
        </a>
      </Link>
    );
  }
}
