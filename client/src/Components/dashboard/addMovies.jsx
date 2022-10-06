import React, { useState ,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Logo from '../../Resources/dashbologo.png'
 
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import Stack from '@mui/material/Stack';


import Header from '../../Components/Header';

const Dashboard = () => {

const [errMesssage,setErrorMessage]=useState([])
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

const onSubmitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/new/movie',{
        title,
        link,
        year,
        imdb,
        genre,
        country,
        duration,
        quality,
        picture,
        description
    })
        .then( res=>
 
          navigate('/admin/addmovie'))
 .catch(err=>{
    const errorResponse = err.response.data.errors
    const errArr=[]
    const errObj={}
    for(const key of Object.keys(errorResponse)){
      errArr.push(errorResponse[key].message)
      errObj[key]= errorResponse[key].message
    }
    setErrorMessage(errObj)
        })
    }

 


  return (
    <div>
       <div class="sidebar">
    <div class="logo-details">
      <i  ></i>
            <img src={Logo} alt="Logo missing" width={"60%"} />
    </div>
      <ul class="nav-links">
        <li>
          <Link to="/">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Tfarrej </span>
            </Link>
          
        </li>
        <li>
         <Link to="/admin">
            <i class='bx bx-box' ></i>
            <span class="links_name">Dashboard </span>
          </Link>
        </li>
        <li>
          <Link to="/allmovies">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Movies list</span>
          </Link>
        </li>
        <li>
              <Link to="/admin/addmovie">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Add a movie</span>
         </Link>
        </li>
       
        <li>
          <Link to="/allusers">
            <i class='bx bx-user' ></i>
            <span class="links_name">All Users</span>
           </Link>
        </li>
        <li>
          <Link to="/allmessages">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
           </Link>
        </li>
 
      </ul>
  </div>
  <section class="home-section add">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
     
      <div class="profile-details">
         <span class="admin_name">Admin</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
    </nav>

    <div class="home-content">
 
 
    </div>
    <div class="form">
      <div class="title">New Movie</div>
      <div class="subtitle">Let's create a new movie</div>
             <form onSubmit={onSubmitHandler} style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>

      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Title" name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        
      
        
      </div>
    {errMesssage.title ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.title} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Link" name="link" onChange={(e)=>setlLink(e.target.value)} value={link}/>
 
      </div>
    {errMesssage.link ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.link} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}

            <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Year" name="year" onChange={(e)=>setYear(e.target.value)} value={year}/>
 
      </div>

    {errMesssage.year ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.year} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}
            <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="IMDb" name="imdb" onChange={(e)=>setImdb(e.target.value)} value={imdb}/>
 
      </div>

    {errMesssage.imdb ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.imdb} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}

         <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Genre" name="genre" onChange={(e)=>setGenre(e.target.value)} value={genre}/>
 
      </div>
        {errMesssage.genre ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.genre} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Country" name="country" onChange={(e)=>setCountry(e.target.value)} value={country}/>
 
      </div>
    {errMesssage.country ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.country} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}

            <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Duration" name="duration" onChange={(e)=>setDuration(e.target.value)} value={duration}/>
 
      </div>
    {errMesssage.duration ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.duration} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}

            <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Quality" name="quality" onChange={(e)=>setQuality(e.target.value)} value={quality}/>
 
      </div>
    {errMesssage.quality ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.quality} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}

                 <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Picture" name="picture" onChange={(e)=>setPicture(e.target.value)} value={picture}/>
 
      </div>
    {errMesssage.picture ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.picture} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}
            <div class="input-container ic1">
        <textarea id="firstname" class="input" type="text" placeholder="Description" name="description"onChange={(e)=>setDescription(e.target.value)} value={description} ></textarea>
 
      </div>
    {errMesssage.description ?
        <Stack sx={{ width: '100%' , align:"center" ,margin:"0 auto"}} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>{errMesssage.description} <strong>check it out!</strong>
            </Alert>
        </Stack>
        : null}


      <button style={{marginTop:"10%"}} type="text" class="submit">submit</button>
      </form>
    </div>

    
  </section>
     </div>
  )
}

export default Dashboard