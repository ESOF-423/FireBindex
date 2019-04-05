import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import { createMuiTheme } from '@material-ui/core/styles';


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);


const palette = {
  primary: { main: '#ffffff' },
  secondary: { main: '#f50057' }
};
const themeName = 'San Marino Razzmatazz Jaguar';

export default createMuiTheme({ palette, themeName });
