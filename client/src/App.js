import './App.css';
import {BrowserRouter , Routes , Route, Router} from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Allmovies from './Views/Allmovies';
import About from './Views/about';
import Login from './Components/Login';
import Register from './Components/Register';
import Details from './Views/Details';
import Dashboard from './Views/dashboard';
import React from 'react';
import AddMovies from './Components/dashboard/addMovies';
import Allusers from './Components/dashboard/allusers';
import Messages from './Components/dashboard/Messages';
import UpdateMovie from './Components/dashboard/updatemovies';
import ContactForm from './Components/contactform/ContactForm';
import Loginadmin from './Components/Loginadmin';
import Accueil from './Views/accueil';
import Movies from './Views/Movies';
 

 function App() {
  return (
     <div className="App">
      
      <BrowserRouter>
 
            <Routes>
              <Route path="/" element={ <Home />}/>
              <Route path="/allmovies" element={ <Allmovies />}/>
              <Route path="/contact" element={ <ContactForm />}/>
              <Route path="/login" element={ <Login />}/>
              <Route path="/register" element={ <Register />}/>
              <Route path="/movies/:movie_id" element={ <Details />}/>
              <Route path="/admin" element={ <Dashboard />}/>
              <Route path="/allusers" element={ <Allusers />}/>
              <Route path="/allmessages" element={ <Messages />}/>
              <Route path="/admin/addmovie" element={ <AddMovies />}/>
               <Route path="/admin/updatemovie/:movie_id" element={ <UpdateMovie />}/>
               <Route path="/loginadmin" element={ <Loginadmin />}/>
               <Route path="/accueil" element={ <Accueil />}/>
                <Route path="/movies" element={ <Movies />}/>
             </Routes>
   
       </BrowserRouter>
    </div>
   );
}

export default App;
