
import React from 'react';
import { render} from 'react-dom';
import Alert from '../../src';

const App = () => (
    <Alert type = "success" message = "Component mounted successfully!!"/>
);
render(<App />, document.getElementById("root"));