import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TocRoundedIcon from '@material-ui/icons/TocRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { NavLink } from 'react-router-dom';

const Navbar= ()=>{
    return(<>

<div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">

    <nav className="navbar navbar-expand-lg">

  <div className="container-fluid">
    <NavLink exact className="navbar-brand mt-2" to="/"><h2>NasimTech</h2></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><TocRoundedIcon/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact  className="nav-link " to="/"><HomeRoundedIcon/> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/service"><AppsRoundedIcon/> Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/about"><InfoRoundedIcon/> About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact"><ContactsRoundedIcon/> Contact</NavLink>
        </li>
       </ul>
    </div>
  </div>
</nav>
 </div>
 </div>
 </div>
  
    </>);
};

export default Navbar;