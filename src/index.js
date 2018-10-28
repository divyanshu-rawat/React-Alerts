import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Alert extends Component {
  constructor(props) {
    super(props);

    this.renderType = this.renderType.bind(this);
  }

  renderType(type) {
    let margin =
      this.props.margin === undefined ? null : parseInt(this.props.margin);
    let width =
      this.props.width === undefined ? null : parseInt(this.props.width);
    let fontColor =
      this.props.fontColor === undefined ? null : this.props.fontColor;
    let backgroundColor =
      this.props.backgroundColor === undefined
        ? null
        : this.props.backgroundColor;
    let message = this.props.message === undefined ? null : this.props.message;
    let restMessage;
    let strongMessage;

    if (message) {
      let splitMessage = this.props.message.split(' ');
      strongMessage = splitMessage[0];
      restMessage = splitMessage.slice(1, splitMessage.length).join(' ');
    } else {
      strongMessage = 'Success!';
      restMessage = 'Component Imported Successfully!!';
    }

    let divStyle = {
      margin: margin,
      width: width,
      color: fontColor,
      background: backgroundColor
    };

    return (
      <div className={`alert alert-${type}`} style={divStyle}>
        <a href="#" className="close" data-dismiss="alert" aria-label="close">
          ×
        </a>
        <strong>{strongMessage}</strong> {restMessage}
      </div>
    );
  }

  render() {
    let alert = null;

    switch (this.props.type) {
      case 'danger':
        alert = this.renderType('danger');
        break;

      case 'info':
        alert = this.renderType('alert');
        break;

      case 'success':
        alert = this.renderType('success');
        break;

      case 'warning':
        alert = this.renderType('warning');
        break;

      case 'secondary':
        alert = this.renderType('secondary');
        break;

      case 'light':
        alert = this.renderType('light');
        break;

      default:
        alert = this.renderType('success');
    }

    return <div>{alert}</div>;
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Alert;
