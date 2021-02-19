import React from 'react';
import Link from 'next/link';
import Sidebar from './sidebar.js';
import Icon from './icon.js';
import Title from './title.js';
import Subtitle from './subtitle.js';
import MenuLink from './menulink.js';
import style from '../styles/Menu.module.css';

export default class Menu extends React.Component {
  render() {
    return (
      <Sidebar>
        <div>
          <Link href="/">
            <a>
              <Icon className={style.toolboxIcon} lib="boostrap" icon="tools" />
              <Title>My <span className="accentColor">Toolbox</span></Title>
              <Subtitle>Made with love by Rudy B.</Subtitle>
            </a>
          </Link>
          <MenuLink name="Password Generator" description="Free and open-source" link="/password-generator" icon="shield-lock-fill" iconLib="boostrap" />
        </div>
        </Sidebar>
    );
  }
}
