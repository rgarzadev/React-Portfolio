import React from 'react'

const Footer = (props) => {
    return (
  
  <div>
  <footer>
    <p className="contact-me">CONTACT AND FOLLOW ME<span class="full-stop-white">:</span></p>
    <div className="container">
      <div className="row footer-row">
        <div className="col-4 linkedin-link">
          <a href="https://www.linkedin.com/in/ryangarza/">LINKEDIN</a>
        </div>
        <div className="col-4 github-link">
          <a href="https://github.com/rgarzadev">GITHUB</a>
        </div>
        <div className="col-4 email-link">
          <a href="mailto:ryangarza@live.com">EMAIL</a>
        </div>
      </div>
    </div>
  </footer>
  <div className="row">
      <div className="col copyright">&copy;2020 RYAN GARZA DEV</div>
    </div>
  </div>
    )
}

export default Footer
