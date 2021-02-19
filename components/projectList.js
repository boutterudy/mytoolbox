import React from 'react';
import Project from './project.js';
import style from '../styles/ProjectList.module.css';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.projectList}>
        <Project name="Perfimaas" type="github" link="https://github.com/boutterudy/Perfimaas" />
        <Project name="Bon'Alim" type="github" link="https://github.com/boutterudy/bonAlim" />
        <Project name="Strong Password Generator" type="github" link="https://github.com/boutterudy/strongPasswordGenerator" />
      </div>
    );
  }
}
