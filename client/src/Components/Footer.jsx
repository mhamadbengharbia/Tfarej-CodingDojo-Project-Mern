import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Resources/Logo.png'

const Footer = () => {
  return (
      <footer>
        <div class="top_header" style={{display:"flex",justifyContent:"center" ,gap:"10px",flexWrap:"wrap",backgroundColor:"white"}}>
          <img src={Logo} alt="" width="10%" />
        </div>
        <div class="bottom_content">
          <section style={{display:"flex",justifyContent:"center" ,gap:"10px",flexWrap:"wrap",backgroundColor:"white"}} >
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }}to="/">Home</Link>
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }} to="/login">All Movies</Link>
            <Link style={{color: "black" ,textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold" }}  to="/contact">Contact-Us</Link>
          </section>
        </div>
        <div class="copyright" style={{color: "red" ,textDecoration:"none",backgroundColor:"black", color:"white",fontFamily:"sans-serif",fontWeight:"bold" }}>
            Copyright © tfarej.tn - All rights reserved 
        </div>
      </footer>
  )
}

export default Footer