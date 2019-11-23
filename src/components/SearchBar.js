import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

export default class SearchBar extends React.Component {
    render() {
        return (
            <TextField 
                variant="outlined" 
                placeholder="Search for GIFs..." 
                InputProps={{
                  endAdornment : 
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="search button"
                        // onClick={handleClickShowPassword}
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                }}
            />
        )
    }
}
