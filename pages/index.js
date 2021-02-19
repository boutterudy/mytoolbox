import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Menu from '../components/menu.js';
import Page from '../components/page.js';
import ProjectList from '../components/projectList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>My Toolbox - Made with love by Rudy B.</title>
        </Head>
        <Menu />
        <Page>
          <ProjectList />
        </Page>
      </div>
    )
  }
}
