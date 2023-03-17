import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h2'>Sign Up</Typography><br></br>
        <TextField label='First Name' variant='outlined'></TextField><br></br>
        <TextField label='Last Name' variant='outlined'></TextField><br></br>
        <TextField label='email' variant='outlined'></TextField><br></br>
        <TextField label='password' type='password' variant='outlined'></TextField><br></br>
        <Button variant='contained'>LOGIN</Button>
    </div>
  )
}

export default Signup