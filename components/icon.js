import React from 'react';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconClass;
    switch (this.props.lib) {
      case "boostrap":
        if (this.props.icon === undefined) {
          iconClass = this.props.className + " bi"
        } else {
          iconClass = this.props.className + " bi bi-" + this.props.icon;
        }
        break;
      default:

    }
    return (
      <i className={iconClass}></i>
    );
  }
}
