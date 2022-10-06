import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import WithStyles from 'react-material-ui-carousel';
import Logo from '../Resources/Logo.png';
import { Link } from 'react-router-dom'
 import axios from 'axios';
 
import p3 from '../Resources/p3.jpg';
import p4 from '../Resources/p4.jpg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dashbologo from '../Resources/dashbologo.png'
const Accueil = () => {



const [allmovies,setAllmovies]=useState([])
   useEffect(()=>{


    axios.get("http://localhost:5000/movies")
        .then(res=>{setAllmovies(res.data)})
        .catch(err=>{console.log(err)})  
    },[])








  
   return (
    <div >
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
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }} to="/accueil">Home</Link>
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white" ,fontFamily:"sans-serif",fontWeight:"bold"}}  to="/movies">All Movies</Link>
            <Link style={{color: "#21b6ae" ,textDecoration:"none", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }}  to="/contact">Contact-Us</Link>
                     
          </Typography>
          
          <Button endIcon={<LogoutIcon style={{ backgroundColor: "white"}}/>} style={{ backgroundColor: "#21b6ae" , margin:"1%" }} variant="contained">
              <Link style={{color: "white" ,textDecoration:"none" }}  to="/">Logout</Link>
          </Button>
   
         </Toolbar>
      </AppBar>
      
</Box>
      <div style={{ display: 'block',marginBottom:"3%",marginTop:"4%" , width:"100%"}}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Link to="/login" > 
          <img
            className="d-block w-100"
            src={p3} alt="" width="10%" 
          /></Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Link to="/login" > 
          <img
            className="d-block w-100"
            src={p4} alt="" width="10%"
          /></Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  <div style={{textAlign:"center", marginTop:"2%",fontFamily:"sans-serif",fontWeight:"bold"}}><h1 style={{ fontFamily:"sans-serif",fontWeight:"bold"}}>Watch Your Favorite Movies for Free</h1></div>

      </div> <div className='mainpagemovies'>
                <button className='button-86'>Horror </button>

      <div className='horrror'>
        
      {allmovies.map(( movie ,index)=>{
            return( 
 
      <div>
      { movie.genre ==="horror" ? <div  > <Link to={"/movies/"+movie._id} ><img
           
            src={movie.picture} alt="horropic" width="100%"/></Link></div>
           : <h1></h1> }
            
      </div>
   
 
     )})}

        
          
        </div>
       
 
         <button className='button-86'>Adventure </button>
         <div className='horrror'>
            {allmovies.map(( movie ,index)=>{
            return( 
 
      <div>
      { movie.genre ==="adventure" ? <div className='mypictures'> <Link to={"/movies/"+movie._id} > <img
            className="d-block w-100"
            src={movie.picture} alt="horropic" width="100%"/></Link></div>
           : <h1></h1> }
            
      </div>
   
 
     )})}

          
        </div>
         
 
             <button className='button-86'>Science Fiction </button>
         <div className='horrror'>
          {allmovies.map(( movie ,index)=>{
            return( 
 
      <div>
      { movie.genre ==="science fiction" ? <div className='mypictures'>  <Link to={"/movies/"+movie._id} > <img
            className="d-block w-100"
            src={movie.picture} alt="horropic" width="100%"/></Link></div>
           : <h1></h1> }
            
      </div>
   
 
     )})}

          
        </div>
 
 
             <button className='button-86'>Action </button>    
                 <div className='horrror'>
          {allmovies.map(( movie ,index)=>{
            return( 
 
      <div>
      { movie.genre ==="action" ? <div className='mypictures'>  <Link to={"/movies/"+movie._id} ><img
            className="d-block w-100"
            src={movie.picture} alt="horropic" width="100%"/></Link></div>
           : <h1></h1> }
            
      </div>
   
 
     )})}

          </div>
        </div>
           <footer>
        <div class="top_header" style={{display:"flex",justifyContent:"center" ,gap:"10px",flexWrap:"wrap",backgroundColor:"white"}}>
          <img src={Logo} alt="" width="10%" />
        </div>
        <div class="bottom_content">
          <section style={{display:"flex",justifyContent:"center" ,gap:"10px",flexWrap:"wrap",backgroundColor:"white"}} >
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }}to="/accueil">Home</Link>
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }} to="/movies">All Movies</Link>
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }}  to="/contact">Contact-Us</Link>
          </section>
        </div>
        <div class="copyright" style={{color: "red" ,textDecoration:"none",backgroundColor:"black", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }}>
            Copyright © tfarej.tn - All rights reserved 
        </div>
      </footer>
    </div>

  );


}

export default Accueil