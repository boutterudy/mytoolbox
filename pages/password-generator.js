import React from 'react';
import Head from 'next/head';
import Menu from '../components/menu.js';
import Page from '../components/page.js';
import Button from '../components/button.js';
import PageTitle from '../components/pageTitle.js';
import PageSubtitle from '../components/pageSubtitle.js';
import PageDescription from '../components/pageDescription.js';
import PasswordGenerator from '../components/passwordGenerator.js';
import style from '../styles/PasswordGenerator.module.css';

export default class PasswordGeneratorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedPassword: "",
      length: 8,
      symbols: false,
      numbers: true,
      lowercase: true,
      uppercase: true,
    }

    this.generatePassword = this.generatePassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
// Caractères ambigus : l (ell), 1 (one), I (capital i), O (capital o), and 0 (zero).
  generatePassword() {
    var password = "";
    var chars = "";

    // Symbols
    var symbols = "!#$%&()*+/\\<>?@";

    // Numbers
    var num = "0123456789";
    var numRegex = new RegExp('^(?=.*[0-9]).*$');

    // Lowercase
    var low = "abcdefghijklmnopqrstuvwxyz";
    var lowRegex = new RegExp('^(?=.*[a-z]).*$');

    // Uppercase
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upRegex = new RegExp('^(?=.*[A-Z]).*$');

    // List of available chars - add symbols
    if (this.state.symbols) {
      chars += symbols;
    }

    // List of available chars - add numbers
    if (this.state.numbers) {
      chars += num;
    }

    // List of available chars - add lowercase
    if (this.state.lowercase) {
      chars += low;
    }

    // List of available chars - add uppercase
    if (this.state.uppercase) {
      chars += up;
    }

    // Check error
    if (chars.length == 0) {
      this.setState(state => ({
        generatedPassword: "Please select one option"
      }));
    // If no error, generate password
    } else {
      do {
        let charPos = Math.floor(Math.random() * password.length) + 0;
        let newChar = chars.charAt(Math.floor(Math.random() * chars.length));
        password = password.slice(0, charPos) + newChar + password.slice(charPos, password.length);
      } while (password.length < this.state.length);

      // Return password
      this.setState(state => ({
        generatedPassword: password
      }));
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Password Generator by Rudy B.</title>
        </Head>
        <Menu />
        <Page>
          <PageTitle>Password Generation Tool</PageTitle>
          <PageSubtitle>Generate a secure password</PageSubtitle>
          <PageDescription>Use my password generator to instantly create a secure random password.</PageDescription>
          <PasswordGenerator />
        </Page>
      </div>
    )
  }
}
