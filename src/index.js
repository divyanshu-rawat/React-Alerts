
import React, { Component } from 'react';
import './style.css';

class Alert extends React.Component{
	render(){

		let alert = null;
		let margin          = this.props.margin == undefined ? null : parseInt(this.props.margin);
		let width           = this.props.margin == undefined ? null : parseInt(this.props.width);
		let fontColor       = this.props.fontColor == undefined ? null : this.props.fontColor;
		let backgroundColor = this.props.backgroundColor == undefined ? null : this.props.backgroundColor ;
		let message         = this.props.message == undefined ? null : this.props.message;
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
		  margin: margin,
		  width : width,
		  color : fontColor,
		  background : backgroundColor
		};

		switch (this.props.type) {
		    case 'danger':
		    console.log('IN')
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


export default Alert;