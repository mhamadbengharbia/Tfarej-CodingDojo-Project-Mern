
////////////////////////////
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errMesssage,setErrorMessage]=useState([])
const navigate = useNavigate('');

 
const onSubmitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',{
        email,
        password,
        username,
        confirmPassword
    })
        .then( res=>navigate('/login'))
        .catch(err=>{
          console.log(err);
    const errorResponse = err.response.data.errors
    const errArr=[]
    const errObj={}
    for(const key of Object.keys(errorResponse)){
        errArr.push(errorResponse[key].message)
        errObj[key]= errorResponse[key].message
    }

    setErrorMessage(errObj)
    })}
  return (
     <div> 

       <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY:"50%"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={onSubmitHandler}>
          
          <TextField        
            margin="normal"
               
              fullWidth
               label="Username"
               id="password" name="username" type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                 {errMesssage.username ?
                    <Stack sx={{ width: '150%' , align:"center" ,margin:"0 auto"}} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>{errMesssage.username}  
                    </Alert>
                    </Stack>
                    : null}
          <TextField        
            margin="normal"
               
              fullWidth
               label="Email"
               id="password" name="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                 {errMesssage.email ?
                    <Stack sx={{ width: '150%' , align:"center" ,margin:"0 auto"}} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>{errMesssage.email}  
                    </Alert>
                    </Stack>
                    : null}
          <TextField        
            margin="normal"
               
              fullWidth
               label="Password"
               id="password"name="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                 {errMesssage.password ?
                    <Stack sx={{ width: '150%' , align:"center" ,margin:"0 auto"}} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>{errMesssage.password}  
                    </Alert>
                    </Stack>
                    : null}
            <TextField        
            margin="normal"
               
              fullWidth
               label="Confirm Password"
               id="password"
              autoComplete="current-password" name="confirmPassword" type="password" onChange={(e)=>setconfirmPassword(e.target.value)} value={confirmPassword}/>
                 {errMesssage.confirmPassword ?
                    <Stack sx={{ width: '150%' , align:"center" ,margin:"0 auto"}} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>{errMesssage.confirmPassword}  
                    </Alert>
                    </Stack>
                    : null}
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: "#21b6ae" }}
            >
              register
            </Button>
          </form>
              <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  style={{color: "#21b6ae" ,textDecoration:"none" }}>
                   
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login" variant="body2" style={{color: "#21b6ae" ,textDecoration:"none" }}>
                  {"Don't have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
           </Box>

      </Container>
          
     </div>
  );
}
export default Register