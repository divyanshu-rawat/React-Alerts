
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
	    <Alert type = "danger"  margin = "10"  message = "error! occured somewhere." />
	    <Alert type = "warning" margin = "10"  message = "Hurry! check your dependencies!"/>
	    <Alert {...options} />
    </div>
);
render(<App />, document.getElementById("root"));