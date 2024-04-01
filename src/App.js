import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import logo from './assets/img/doglogo.png'

function App() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <div className='container'>
            <div className='row'>
              <div className='col-md-7' style={{textAlign:'center'}}>
                <div className='logo'>
                  <img src={logo} class="logo" alt="" />
                </div> 
                <div className='heading'>
                  <div className='text'>
                    <h1>Be a part of Central University's significant endeavor as we undertake the construction of a cutting-edge medical center and hostel. Join us today in shaping the future of Central University</h1>
                    <div className="d-flex">
                      <a href="#about" className="btn-get-started scrollto">Learn More!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App