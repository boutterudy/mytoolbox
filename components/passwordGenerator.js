import React from 'react';
import Icon from './icon.js';
import Input from './input.js';
import style from '../styles/PasswordGenerator.module.css';

export default class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 1,
      globalChoice: 'allCharacters',
      lowercase: true,
      uppercase: true,
      numbers: true,
      numbersDisabled: false,
      symbols: true,
      symbolsDisabled: false,
      avoidAmbiguousCharacters: false,
      generatedPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.generatePassword = this.generatePassword.bind(this);
    this.generateRandomPassword = this.generateRandomPassword.bind(this);
  }

  generatePassword() {
    let password = '';
    let chars = '';

    // Symbols
    var symbols = '!#$%&()*+/\\<>?@';

    // Numbers
    var num = '0123456789';

    // Lowercase
    var low = 'abcdefghijklmnopqrstuvwxyz';

    // Uppercase
    var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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

    // Check errors
    // If length is lower than 1
    if (this.state.length < 1) {
      return 'Length must be greater than zero';

      // If length is greater than 64
    } else if (this.state.length > 64) {
      return 'Length must be lower than 64';

      // If no option is selected
    } else if (chars.length == 0) {
      return 'Please select one option';

      // If no error, generate password
    } else {
      do {
        let charPos = Math.floor(Math.random() * password.length) + 0;
        let newChar = chars.charAt(Math.floor(Math.random() * chars.length));
        password =
          password.slice(0, charPos) +
          newChar +
          password.slice(charPos, password.length);
      } while (password.length < this.state.length);
    }

    return password;
  }

  generateRandomPassword() {
    this.setState({
      generatedPassword: this.generatePassword(),
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(
      function () {
        return {
          [name]: value,
        };
      },

      // After state changes
      function () {
        if (name === 'globalChoice') {
          switch (value) {
            case 'easyToSay':
              this.setState({
                numbersDisabled: true,
                symbolsDisabled: true,
                avoidAmbiguousCharacters: false,
                lowercase: true,
                uppercase: true,
                numbers: false,
                symbols: false,
              });

              this.generateRandomPassword();
              break;
            case 'easyToRead':
              this.setState({
                numbersDisabled: false,
                symbolsDisabled: false,
                avoidAmbiguousCharacters: true,
              });

              this.generateRandomPassword();
              break;
            case 'allCharacters':
              this.setState({
                numbersDisabled: false,
                symbolsDisabled: false,
                avoidAmbiguousCharacters: false,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true,
              });

              this.generateRandomPassword();
              break;
            default:
              break;
          }
        } else {
          this.generateRandomPassword();
        }
      }
    );
  }

  render() {
    return (
      <div className={style.generatePasswordGlobalContainer}>
        <div className={style.generatePasswordInputGroup}>
          <Input
            name='generatedPassword'
            type='text'
            minLength='1'
            maxLength='64'
            value={this.state.generatedPassword}
          />
          <div className={style.inputGroupText}>
            <span
              className={style.copyGeneratedPasswordToClipboard}
              onClick={() => {
                navigator.clipboard.writeText(this.state.generatedPassword);
              }}
            >
              <Icon lib='boostrap' icon='clipboard-plus' />
            </span>
            <span
              className={style.generateRandomPasswordButton}
              onClick={this.generateRandomPassword}
            >
              <Icon lib='boostrap' icon='shuffle' />
            </span>
          </div>
        </div>
        <form>
          <div className={style.generatePasswordLengthContainer}>
            <label htmlFor='length'>Length :</label>
            <Input
              id='length'
              className={style.generatePasswordLengthInputText}
              name='length'
              type='number'
              min='1'
              max='64'
              value={this.state.length}
              onChange={this.handleChange}
            />
            <Input
              id='length'
              className={style.generatePasswordLengthInputRange}
              name='length'
              type='range'
              min='1'
              max='64'
              value={this.state.length}
              onChange={this.handleChange}
            />
          </div>
          <div className={style.optionsToGeneratePassword}>
            <div className={style.optionGeneratePassword}>
              <div>
                <Input
                  id='easyToSay'
                  name='globalChoice'
                  type='radio'
                  value='easyToSay'
                  onChange={this.handleChange}
                />
                <label htmlFor='easyToSay'>Easy to say</label>
              </div>
              <div>
                <Input
                  id='easyToRead'
                  name='globalChoice'
                  type='radio'
                  value='easyToRead'
                  onChange={this.handleChange}
                />
                <label htmlFor='easyToRead'>Easy to read</label>
              </div>
              <div>
                <Input
                  id='allCharacters'
                  name='globalChoice'
                  type='radio'
                  value='allCharacters'
                  onChange={this.handleChange}
                  defaultChecked
                />
                <label htmlFor='allCharacters'>All characters</label>
              </div>
            </div>
            <div className={style.optionGeneratePassword}>
              <div>
                <div>
                  <Input
                    id='lowercase'
                    name='lowercase'
                    type='checkbox'
                    onChange={this.handleChange}
                    checked={this.state.lowercase ? 'checked' : ''}
                  />
                  <label htmlFor='lowercase'>Lowercase</label>
                </div>
                <div>
                  <Input
                    id='uppercase'
                    name='uppercase'
                    type='checkbox'
                    onChange={this.handleChange}
                    checked={this.state.uppercase ? 'checked' : ''}
                  />
                  <label htmlFor='uppercase'>Uppercase</label>
                </div>
                <div>
                  <Input
                    id='numbers'
                    name='numbers'
                    type='checkbox'
                    onChange={this.handleChange}
                    checked={this.state.numbers ? 'checked' : ''}
                    disabled={this.state.numbersDisabled}
                  />
                  <label htmlFor='numbers'>Numbers</label>
                </div>
              </div>
            </div>
            <div className={style.optionGeneratePassword}>
              <div>
                <Input
                  id='symbols'
                  name='symbols'
                  type='checkbox'
                  onChange={this.handleChange}
                  checked={this.state.symbols ? 'checked' : ''}
                  disabled={this.state.symbolsDisabled}
                />
                <label htmlFor='symbols'>Symbols</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
