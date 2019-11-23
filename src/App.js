import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { VerticallyCentered } from './components/Layouts';
import SearchBar from './components/SearchBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000',
    },
  },
});

class App extends React.Component {
  state = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <div style={{ width: '40%', height: '100vh', margin: 'auto' }}>
            <VerticallyCentered>
              <SearchBar />
            </VerticallyCentered>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
