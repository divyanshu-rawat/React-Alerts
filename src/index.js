
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Alert extends React.Component{
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

		switch (this.props.type) {
		    case 'danger':
		         alert = (
			         <div className="alert alert-danger" style = { divStyle }>
			          <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					  <strong>{ strongMessage }</strong> { restMessage }
					</div>
			      );
		        break;

		    case 'info':
		         alert = (
			         <div className="alert alert-info" style = { divStyle }>
			          <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					  <strong>{ strongMessage }</strong> { restMessage }
					</div>
			      );
		        break;

		    case 'success':
		    	 alert = (
			          <div className="alert alert-success" style = { divStyle }>
					    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					    <strong>{ strongMessage }</strong> { restMessage }
					  </div>
			      );
		    	 break;

		   	case 'warning':
		    	 alert = (
			          <div className="alert alert-warning" style = { divStyle }>
					    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					    <strong>{ strongMessage }</strong> { restMessage }
					  </div>
			      );
		    	 break;

		    case 'secondary':
		    	 alert = (
			          <div className="alert alert-secondary" style = { divStyle }>
					    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					    <strong>{ strongMessage }</strong> { restMessage }
					  </div>
			      );
		    	 break;

		     case 'light':
		    	 alert = (
			          <div className="alert alert-light" style = { divStyle }>
					    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					    <strong>{ strongMessage }</strong> { restMessage }
					  </div>
			      );
		    	 break;

		    default:
		        alert = (
			          <div className="alert alert-success" style = { divStyle }>
					    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
					    <strong>{ strongMessage }</strong> { restMessage }
					  </div>
			      );
		}

		return(
				<div>
					{ alert }
				</div>
		)
	}
}

Alert.validTypes = [
  'default',
  'danger',
  'warning',
  'secondary',
  'info',
  'success',
  'light',
  'custom'
];

Alert.propTypes = {
  type: PropTypes.oneOf(Alert.validTypes),
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
  message: null
};

export default Alert;
