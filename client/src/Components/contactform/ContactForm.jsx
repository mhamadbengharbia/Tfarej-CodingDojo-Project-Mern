import React, { useState } from 'react'
import {useNavigate ,Link} from 'react-router-dom'
import axios from 'axios'
import "./contactStyle.css"
import Footer from '../Footer'
import Header from '../Header'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

 import dashbologo from '../../Resources/dashbologo.png'
const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const [errHand,setErrHand]=useState([])
    const [errMesssage,setErrorMessage]=useState([])

    const navigate = useNavigate()

    const alertBox = () => {
      alert("Thank you for your feedback!")
    }

    const submitHandler = e => {
      e.preventDefault()
      const newContact = {
          name,
          email,
          msg
      }
  
      axios.post("http://localhost:5000/api/contacts", newContact)
      .then(res => alertBox() )
      .then(res =>  navigate("/movies"))
      .catch(err => {
         
      const errorResponse = err.response.data.errors
          const errArr=[]
          const errObj={}
      for(const key of Object.keys(errorResponse)){
          // console.log(errorResponse[key].message);
            errArr.push(errorResponse[key].message)
            errObj[key]= errorResponse[key].message
          }
          // console.log(errArr)
          setErrHand(errArr)
          setErrorMessage(errObj)
        }) 
  }


  return (
    <div className='contact' >
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
      <div style={{marginTop:"7%"}}></div>
        <form class="form" onSubmit={submitHandler}  style={{backgroundColor:"white"}}> 
            <h3>Get in touch</h3>
            <div class="form-group">
              <input type="text" class="form-control" value={name} placeholder="Name" id="contact-name" onChange={e => {setName(e.target.value)}}/>
              <label class="input-field-icon icon-user" for="login-name"></label>
              <br />
              {errMesssage.name ? <p class="alert alert-danger">{errMesssage.name}</p> : null}
            </div>

            <div class="form-group">
              <input type="text" class="form-control" value={email} placeholder="Email" id="contact-email" onChange={e => {setEmail(e.target.value)}}/>
              <label class="input-field-icon icon-email" for="login-email"></label>
              <br />
              {errMesssage.email ? <p class="alert alert-danger">{errMesssage.email}</p> : null}
            </div>
            
            <div class="form-group">
              <textarea class="form-control"  placeholder="Message" id="contact-message" rows="1" value={msg} onChange={e => {setMsg(e.target.value)}}></textarea>
              <br />
              {errMesssage.msg ? <p class="alert alert-danger">{errMesssage.msg}</p> : null}
            </div>

            <button id="contact-send" class="btn btn-primary btn-lg btn-block">Send</button>
          </form>
 
              {window.location.pathname === '/contact' && <Footer />}
    </div>
  )
}

export default ContactForm