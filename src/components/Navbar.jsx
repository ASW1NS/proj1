import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/Home' style={{color:'white'}}>HOME</Link>
          </Typography>
          <Button color="inherit"><Link to='/Login' style={{color:'white'}}>Login</Link></Button>
          <Button color="inherit"><Link to='/Signup' style={{color:'white'}}>Signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}
    export default Navbar