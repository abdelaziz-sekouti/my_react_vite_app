import React,{useState} from 'react'
import { TextField,Box,Typography,Button } from '@mui/material'
import {toast} from 'react-toastify'

function Signup() {

      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')
      const [confirmPassword,setConfirmPassword]=useState('')
      // const userInfos = [{}]
      const handleForm = (e)=>{
          e.preventDefault()
          toast.success('Registration Successful')
          // localStorage.setItem('userinfo',JSON.stringify(userInfos ? [...,{email:'email',password:'password'}] : [{}]))
      }
  return (
     <Box  component="form" onSubmit={handleForm}  sx={{border:'2px solid #cc77',borderRadius:'20px',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',width:'70%',margin:'auto',padding:'30px'}}>
        <Typography variant='h3' sx={{color:"#249ff7ff",mb:'20px'}}>
            Sign Up
        </Typography>
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' fullWidth sx={{background:'transparent',mb:'10px'}}></TextField>
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' type='password' fullWidth sx={{background:'transparent',mb:'10px'}}></TextField>
        <TextField value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} label='Confirm Password' type='password' fullWidth sx={{background:'transparent',mb:'10px'}}></TextField>

        <Button type='submit' sx={{fontWeight: 'bold' ,fontFamily: 'Roboto' , fontSize: '17px',background:'#bdd219ff',marginLeft: 1,transition:"all .3s",color:"#fa0808ff","&:hover":{background:'#c1b',color:"#fa0"}}}>Submit</Button>
    </Box>   
  )
}

export default Signup
