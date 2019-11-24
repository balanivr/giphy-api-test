import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import SearchBar from './components/SearchBar/SearchBar';

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
          <SearchBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
