import React from 'react';
import logo from '../assets/img/fav.png'

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="#" style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <img src={logo} width="60" alt="" srcSet="" />
            <h6 style={{paddingTop:'5px'}}><b>Centrel University <br/>Day of Giving</b></h6>
          </a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About Us</a></li>
            <li className="dropdown">
              <a href="#"><span>Projects</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#project">Upcoming</a></li>
                <li><a href="#">Completed</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#services">Statements</a></li>
            <li><a className="nav-link scrollto" href="#team">Testimonial</a></li>
            <li>
              <a className="getstarted scrollto" style={{ background: '#ff4a17', border: '#ff4a17' }} href="https://seaportcommunitychurch.churchcenter.com/calendar/event/137433448">
                Donate Now
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;