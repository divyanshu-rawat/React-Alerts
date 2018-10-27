
import React from 'react';
import { render} from 'react-dom';
import Alert from '../../src';

const options = {
  margin: '10',
  width : "500",
  fontColor : 'black',
  backgroundColor : 'grey'
}

const App = () => (
	<div>
	    <Alert margin = "10"/>
	    <Alert type = "danger"  	margin = "10"    message = "Danger! This alert box indicates a dangerous or potentially negative action." />
	    <Alert type = "warning" 	margin = "10"    message = "Warning! This alert box indicates a warning that might need attention."/>
	    <Alert type = "secondary"   margin = "10"  	 message = "Secondary! This alert box indicates a less important action." />
	    <Alert type = "info" 		margin = "10"    message = "Info! This alert box indicates a neutral informative change or action." />
	    <Alert type = "success" 	margin = "10"    message = "Success! This alert box indicates a successful or positive action." />
		<Alert type = "light" 		margin = "10"    message = "Light! Light grey alert box." />
		<Alert message = "Custom! modify it by passing optionals" {...options}/>
    </div>
);
render(<App />, document.getElementById("root"));