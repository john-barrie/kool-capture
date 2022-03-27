/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../component/App'

ReactDOM.render(<App />, document.getElementById('root'))
