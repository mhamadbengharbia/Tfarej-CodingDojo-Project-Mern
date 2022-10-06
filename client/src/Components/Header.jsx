import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dashbologo from '../Resources/dashbologo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        
     <Box sx={{  color: '#eeeeee' , display: 'flex' }} >
      <AppBar component="nav" style={{ backgroundColor: "Black",height:"10%" ,fontFamily:"sans-serif"}}>
        <Toolbar>
            <img src={dashbologo} alt="Logo missing" width={"15%"} />
            <Typography
            variant="h6"
            component="div"
            style={{display:"flex",justifyContent:"center" ,gap:"5%",flexWrap:"wrap"}}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }} to="/">Home</Link>
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white" ,fontFamily:"sans-serif",fontWeight:"bold"}}  to="/login">All Movies</Link>
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }}  to="/contact">Contact-Us</Link>
                     
          </Typography>
          
          <Button endIcon={<LoginIcon style={{ backgroundColor: "white"}}/>} style={{ backgroundColor: "#21b6ae" , margin:"1%" }} variant="contained">
              <Link style={{color: "white" ,textDecoration:"none" }}  to="/login">Login</Link>
          </Button>
          <Button endIcon={<HowToRegIcon style={{ backgroundColor: "white"}}/>}  style={{ backgroundColor: "#21b6ae" }}variant="contained">
             <Link style={{color: "white" ,textDecoration:"none" }}  to="/register">Register</Link>
          </Button>
        </Toolbar>
      </AppBar>
      
</Box>
    </div>
  )
}

export default Header