import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Logo from '../../Resources/dashbologo.png'
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
 

const Allusers = () => {


    const [allusers,setAllusers]=useState([])

  useEffect(()=>{


    axios.get("http://localhost:5000/users")
        .then(res=>{setAllusers(res.data)})
        .catch(err=>{console.log(err)})  
    },[])

const removeFromDom = user_id => {
        setAllusers(allusers.filter(allusers => allusers._id !== user_id));
    }

 const deleteusers = (user_id) => {
    axios.delete("http://localhost:5000/users/delete/"+user_id)
        .then(res => {removeFromDom(user_id)})
        .catch(err => console.error(err));
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
 

      <div class="sales-boxes">
  
        <div class="top-sales box" style={{color:"black" , width:"100%"}}>
      <div class="title " style={{color:"black"}}> Users</div>
           <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center"> Username</TableCell>
            <TableCell align="center">Email</TableCell>
 
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
 <TableBody>
        {allusers.map(( user ,index)=>{
            return( 
   <TableRow>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell align="center">{user.email} </TableCell>
 
<div className='player-wrapper'>

        </div>                   
              <TableCell align="center"><Button variant="outlined" color="error" onClick={(e)=>{deleteusers(user._id)}} > 
            Delete
            </Button></TableCell>
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

export default Allusers