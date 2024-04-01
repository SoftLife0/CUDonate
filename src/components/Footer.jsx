import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3>GospelKidZ!</h3>
                <p>
                  First Address <br />
                  Second Address<br /><br />
                  <strong>Phone:</strong> +1 860 884 1625<br />
                  <strong>Email:</strong> gospelkidz23@yahoo.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 footer-newsletter">
              <h4>GospelKidZ!</h4>
              <p>Tagline Goes Here ⬇️</p>
              <p>Through spreading faith, love, and essential support, we empower communities. Our mission is to touch hearts, nurture souls, and impact futures, connecting compassion with action, one meaningful endeavor at a time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>PrestoSolutions</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://prestoghana.com/">PrestoSolutions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
