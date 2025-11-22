import { TextField,Box,Typography,Button } from '@mui/material'
import React, { useState } from 'react'
import {toast} from 'react-toastify'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const userInfos = [{}]
    const handleForm = (e)=>{
        e.preventDefault()
        toast.success('Login Successful')
        // localStorage.setItem('userinfo',JSON.stringify(userInfos ? [...,{email:'email',password:'password'}] : [{}]))
    }
  return (
    <Box  component="form" onSubmit={handleForm} sx={{border:'2px solid #cc77',borderRadius:'20px',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',width:'70%',margin:'auto',padding:'30px'}}>
        <Typography variant='h3' sx={{color:"#249ff7ff",mb:'20px'}}>
            Login
        </Typography>
        <TextField onChange={(e)=>{setEmail(e.target.value)}} label='Email' value={email} fullWidth sx={{background:'transparent',mb:'10px'}}></TextField>
        <TextField onChange={(e)=>{setPassword(e.target.value)}} label='Password' type='password' value={password} fullWidth sx={{background:'transparent',mb:'10px'}}></TextField>

        <Button  type='submit' sx={{fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px',background:'#bdd219ff',marginLeft: 1,transition:"all .3s",color:"#fa0808ff","&:hover":{background:'#c1b',color:"#fa0"}}}>Submit</Button>
    </Box>    
  )
}

export default Login
