import React, { useEffect, useState } from "react";

 import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import axios from "axios";
import Header from "../Components/Header";
 
import p1 from '../Resources/p1.jpg';
import p2 from '../Resources/p2.jpg';
 import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
 import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dashbologo from '../Resources/dashbologo.png'

const Movies = () => {
  const [search, setNewSearch] = useState("");
    const [allmovies,setAllmovies]=useState([])
    const handleSearchChange = (e) => {
      setNewSearch(e.target.value);
    };
  const filtered = !search
      ? allmovies
      : allmovies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        );
 

   useEffect(()=>{


    axios.get("http://localhost:5000/movies")
        .then(res=>{setAllmovies(res.data)})
        .catch(err=>{console.log(err)})  
    },[])


  return (
   <>
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
    <input type="text" value={search} placeholder='Search Movies' onChange={handleSearchChange} style={{marginTop:"7%",width:"50%",height:"40px",marginLeft:"25%",marginBottom:"5%"}} /> 
   <div style={{width:"100%" ,display:"grid" ,alignItems:"stretch",gridTemplateColumns:"repeat(auto-fill , minmax(200px, 1fr))",gridGap:"20px"}}>
       {filtered.map((movie) => {
          return (
           <div key={movie.title}  style={{width:"10%" ,display:"grid" ,alignItems:"stretch",gridTemplateColumns:"repeat(auto-fill , minmax(200px, 1fr))",gridGap:"20px"}} component="span" sx={{ p: 2, border: '1px dashed grey' }}>
    <Link to={"/movies/"+movie._id} >     <img 
         
        src={movie.picture} alt=""
      /> 
  </Link>
    </div>
 
          );
        })}
        </div>

{/* <div className='Mnavbar' >
        
      <div style={{width:"100%" ,display:"flex", flexDirection:"column", marginTop:"5%"}}>
        <input type="text" value={search} placeholder='Search Movies' onChange={handleSearchChange} /> 
         <div style={{width:"20%"  }}>
    
     
     </div>
      <div>
    </div>
      </div>
  
</div>  */}
</>
  )
}

export default Movies