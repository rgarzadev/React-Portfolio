import React from 'react'

const Footer = (props) => {
    return (
            
  <footer>
    <p className="contact-me">Contact and follow me:</p>
    <div className="container">
      <div className="row footer-row">
        <div className="col-4 linkedin-link">
          <a href="https://www.linkedin.com/in/ryangarza/">linkedin</a>
        </div>
        <div className="col-4 github-link">
          <a href="https://github.com/rgarzadev">github</a>
        </div>
        <div className="col-4 email-link">
          <a href="mailto:ryangarza@live.com">email</a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 copyright">Copyright rGarzaDev 2020</div>
    </div>
  </footer>
    )
}

export default Footer
