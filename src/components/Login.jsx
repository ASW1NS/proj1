import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
       <h1>Welcome to React</h1>
      <input placeholder='Email'></input><br></br>
      <input placeholder='password'type='password'></input><br></br>
      <button>LOGIN</button>
      <Typography variant='h1'>Welcome to React</Typography>
      <TextField label='Email' variant='outlined'></TextField><br></br>
      <TextField label='pasword' type='password' variant='filled'></TextField>
    </div>
  )
}

export default Login
