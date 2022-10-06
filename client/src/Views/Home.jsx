import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import WithStyles from 'react-material-ui-carousel';
import Logo from '../Resources/Logo.png';
import { Link } from 'react-router-dom'
 import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import p1 from '../Resources/p1.jpg';
import p2 from '../Resources/p2.jpg';
const Home = () => {



const [allmovies,setAllmovies]=useState([])
   useEffect(()=>{


    axios.get("http://localhost:5000/movies")
        .then(res=>{setAllmovies(res.data)})
        .catch(err=>{console.log(err)})  
    },[])








  
   return (
    <div >

      <div style={{ display: 'block',marginBottom:"3%",marginTop:"4%" , width:"100%"}}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Link to="/login" > 
          <img
            className="d-block w-100"
            src={p1} alt="" width="10%" 
          /></Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Link to="/login" > 
          <img
            className="d-block w-100"
            src={p2} alt="" width="10%"
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
      { movie.genre ==="horror" ? <div  > <Link to="/login" > <img
           
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
      { movie.genre ==="adventure" ? <div className='mypictures'> <Link to="/login" > <img
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
      { movie.genre ==="science fiction" ? <div className='mypictures'> <Link to="/login" > <img
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
      { movie.genre ==="action" ? <div className='mypictures'> <Link to="/login" > <img
            className="d-block w-100"
            src={movie.picture} alt="horropic" width="100%"/></Link></div>
           : <h1></h1> }
            
      </div>
   
 
     )})}

          </div>
        </div>
              {window.location.pathname === '/' && <Header />}
              {window.location.pathname === '/' && <Footer />}
    </div>

  );


}

export default Home