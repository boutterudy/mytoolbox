import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './icon.js'
import style from '../styles/Project.module.css';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    let project;
    switch (this.props.type) {
      case "github":
        // If image is not defined, use default image
        project = <Link href={this.props.link}>
                    <a className={style.project} target="_blank">
                      <Icon className={style.projectIcon} lib="boostrap" icon="github" />
                      <p className={style.projectName}>{this.props.name}</p>
                      <p className={style.projectClickToOpen}>Discover now</p>
                    </a>
                  </Link>;
        break;
      default:
      break;

    }
    return ( <div>{project}</div> )
  }
}
