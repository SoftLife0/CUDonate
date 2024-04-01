import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <div style={{ textAlign: 'left', width: '75%' }}>
            <h1>Sharing the love of Christ!</h1>
            <h4>We exist to bring the love of Jesus Christ to children and families in Africa and beyond</h4>
            <div className="d-flex">
              <a href="#about" className="btn-get-started scrollto">Learn More!</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App