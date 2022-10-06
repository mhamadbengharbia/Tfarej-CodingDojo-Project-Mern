import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Logo from '../Resources/dashbologo.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Dashboard = () => {

    const [Allusers,setAllusers]=useState([])

        const [allmovies,setAllmovies]=useState([])

  useEffect(()=>{

    axios.get("http://localhost:5000/users")
        .then(res=>{setAllusers(res.data)})
        .catch(err=>{console.log(err)})  


    axios.get("http://localhost:5000/movies")
        .then(res=>{setAllmovies(res.data)})
        .catch(err=>{console.log(err)})  
    },[])


 



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
  <section class="home-section">
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
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Users</div>
            <div class="number">{Allusers.length}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Visitors</div>
            <div class="number">152</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Movies</div>
            <div class="number">{allmovies.length}</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Hours spending</div>
            <div class="number">37</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
        </div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title" style={{color:"black"}}> Users</div>
          <div class="sales-details">


<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="left"> Username</TableCell>
            <TableCell align="left">Email</TableCell>
           </TableRow>
        </TableHead>
 <TableBody>
         {Allusers.map(( user ,index)=>{
            return( 
   <TableRow>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell align="left">{user.email} </TableCell>
 
<div className='player-wrapper'>

        </div>                   
       
   </TableRow>
     )})}
 </TableBody>
               </Table>

    </TableContainer>




 
           
          </div>
        </div>
        <div class="top-sales box">
      <div class="title" style={{color:"black"}}> Movies</div>



<TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="left"> Username</TableCell>
            <TableCell align="left">Email</TableCell>
           </TableRow>
        </TableHead>
 <TableBody>
        {allmovies.map(( movie ,index)=>{
            return( 
   <TableRow>
              <TableCell align="left">{movie.title}</TableCell>
              <TableCell align="left">{movie.genre} </TableCell>
 
<div className='player-wrapper'>

        </div>                   
       
   </TableRow>
     )})}
 </TableBody>
               </Table>

    </TableContainer>









 
        </div>
      </div>
    </div>


  </section>
    
    </div>
  )
}

export default Dashboard