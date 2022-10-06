
 
import Footer from '../Components/Footer'
 
import "../style/detail.css"

import React, { useState ,useEffect } from 'react'
import {useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Components/Header'
 
import p3 from '../Resources/p3.jpg';
import p4 from '../Resources/p4.jpg';
import p6 from '../Resources/p6.jpg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dashbologo from '../Resources/dashbologo.png'


 
const Details = () => {

 
const [title, setTitle]=useState("");
const [link, setlLink]=useState("");
const [year, setYear]=useState("");
const [imdb, setImdb]=useState(0);
const [genre, setGenre]=useState("");
const [country, setCountry]=useState("");
const [duration, setDuration]=useState(0);
const [quality, setQuality]=useState("");
const [picture, setPicture]=useState("");
const [description, setDescription]=useState("");
const navigate = useNavigate('');
 
 const { movie_id } = useParams()
 
useEffect(() => {
    axios.get("http://localhost:5000/movies/"+movie_id)
        .then(res => {
              setTitle(res.data.title);
        setlLink(res.data.link);
          setYear(res.data.year);
        setImdb(res.data.imdb);
          setGenre(res.data.genre);
        setCountry(res.data.country);
          setDuration(res.data.duration);
        setQuality(res.data.quality);
          setPicture(res.data.picture);
        setDescription(res.data.description);console.log(res.data);
        })
        
    }, []);













  return (
    <div className='player-wrapper'>
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
   <div className='video' style={{ marginTop:"7%",marginBottom:"3%"}}>
    <iframe width="100%" height="500" src={link} scrolling="no" frameborder="0" allow="fullscreen" ></iframe>
   </div>
   <p className='pTag' style={{ marginBottom:"3%"}}>If the current server doesn't work please <a href="/contact"><span>Contact Us</span></a> </p>
   <div className='details det'>
      <div>
        <img className='img' src={picture} alt="" style={{width:"150%"}}/>
      </div>
      <div style={{marginLeft:"5%"}}>
   
        <div style={{marginLeft: "10%"}}>
               <p>{title}</p> 
        <p>{description}</p> 
         
            <p>Released: {year}</p>
            <p>Genre: {genre}</p>
            <p>Country: {country}</p>
                     <p>Duration: {duration}</p>
            <p>Quality: {quality}</p>
            <p>IMDb: {imdb}</p>
        
          <div>
   
          </div>
        </div>
      </div>
   </div>
   <Footer/>
    </div>
  )
}

export default Details