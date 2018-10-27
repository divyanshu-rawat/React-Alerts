
import React, { Component } from 'react';
import './style.css';

class Alert extends React.Component{
	render(){

		let alert = null;

		const margin  = parseInt(this.props.margin);
		const width   = parseInt(this.props.width);
		const { fontColor } = this.props;
		const { backgroundColor } = this.props;

		const splitMessage  = this.props.message.split(" ");
		const strongMessage = splitMessage[0];
		const restMessage   = splitMessage.slice(1, splitMessage.length).join(" ");
	
		const divStyle = {
		  margin: margin,
		  width : width,
		  color : fontColor,
		  background : backgroundColor
		};

		if (this.props.type === 'danger') {
	      alert = (
	         <div className="alert alert-danger" style = { divStyle }>
	          <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
			  <strong>{ strongMessage }</strong> { restMessage }
			</div>
	      );
	    }
	    if (this.props.type === 'info') {
	      alert = (
	         <div className="alert alert-info" style = { divStyle }>
	          <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
			  <strong>{ strongMessage }</strong> { restMessage }
			</div>
	      );
	    }
	    if (this.props.type === 'success') {
	      alert = (
	          <div className="alert alert-success" style = { divStyle }>
			    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
			    <strong>{ strongMessage }</strong> { restMessage }
			  </div>
	      );
	    }

	    if (this.props.type === 'warning') {
	      alert = (
	          <div className="alert alert-warning" style = { divStyle }>
			    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
			    <strong>{ strongMessage }</strong> { restMessage }
			  </div>
	      );
	    }

	    if (this.props.type === 'secondary') {
	      alert = (
	          <div className="alert alert-secondary" style = { divStyle }>
			    <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
			    <strong>{ strongMessage }</strong> { restMessage }
			  </div>
	      );
	    }

	    if (this.props.type === 'light') {
	      alert = (
	          <div className="alert alert-light" style = { divStyle }>
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