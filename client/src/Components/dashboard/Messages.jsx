 
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
 
const Messages = () => {

    const [allmsg,setAllmsg]=useState([])

  useEffect(()=>{


    axios.get("http://localhost:5000/api/contacts")
        .then(res=>{setAllmsg(res.data)})
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


<section class="home-section  ">
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
 
 <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center"> Name</TableCell>
            <TableCell align="center">Email</TableCell>
 
            <TableCell align="center">Message</TableCell>
          </TableRow>
        </TableHead>
 <TableBody>
        {allmsg.map(( msg ,index)=>{
            return( 
   <TableRow>
              <TableCell align="left">{msg.name}</TableCell>
              <TableCell align="center">{msg.email} </TableCell>
               <TableCell align="center">{msg.msg} </TableCell>

<div className='player-wrapper'>

        </div>                   
            
   </TableRow>
     )})}
 </TableBody>
               </Table>

    </TableContainer>
</div>
</section>















    </div>
  )
}

export default Messages