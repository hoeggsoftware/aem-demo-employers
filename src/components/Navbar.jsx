import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import Link from 'next/link'

export default function Navbar() {
    
    const [language, setLanguage] = React.useState('ENGLISH');
    
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Unemployment
          </Typography>
          <FormControl>
            <Select
                labelId="language-selector"
                id="demo-simple-select"
                value={language}
                label="LANGUAGE"
                onChange={handleChange}
            >
                <MenuItem value={'ENGLISH'}>ENGLISH</MenuItem>
                <MenuItem value={'SPANISH'}>SPANISH</MenuItem>
                <MenuItem value={'RUSSIAN'}>RUSSIAN</MenuItem>
  </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <nav>
        <ul className="nav-list">
            <li className="nav-list-item"><Link href="/jobseeker">JOB SEEKERS</Link></li>
            <li className="nav-list-item">EMPLOYERS</li>
        </ul>
      </nav>
    </Box>
  );
}
