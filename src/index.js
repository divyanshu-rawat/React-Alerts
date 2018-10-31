
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Alert extends React.Component{
	renderAlert(className, divStyle, strongMessage, restMessage) {
		return(
			<div className = { className } style = { divStyle }>
				<a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
				<strong>{ strongMessage }</strong> { restMessage }
			</div>
		);
	}

	render(){
		let alert = null;
		let restMessage;
		let strongMessage;

		if( this.props.message ){
			let splitMessage  = this.props.message.split(" ");
			strongMessage     = splitMessage[0];
			restMessage       = splitMessage.slice(1, splitMessage.length).join(" ");
		}else{
			strongMessage  = "Success!"
			restMessage    = "Component Imported Successfully!!"
		}

		let divStyle = {
		  margin: this.props.margin,
		  width : this.props.width,
		  color : this.props.fontColor,
		  background : this.props.backgroundColor
		};

		let className = `alert ${Alert.validTypes[this.props.type].className}`;

		return(
				<div>
					{ this.renderAlert(className, divStyle, strongMessage, restMessage) }
				</div>
		)
	}
}

Alert.validTypes = {
	default: { className: 'alert-success' },
	danger: { className: 'alert-danger' },
	warning: { className: 'alert-warning' },
	secondary: { className: 'alert-secondary' },
	info: { className: 'alert-info' },
	success: { className: 'alert-success' },
	light: { className: 'alert-light' },
	custom: { className: 'alert-custom' }
};

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(Alert.validTypes)),
  message: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

Alert.defaultProps = {
  margin: null,
  width: null,
  fontColor: null,
  backgroundColor: null,
  message: null,
  type: 'default'
};

export default Alert;
