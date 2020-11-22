import React from 'react'

const Footer = (props) => {
    return (
            
  <footer>
    <p className="contact-me">Contact and follow me:</p>
    <div className="container">
      <div className="row footer-row">
        <div id="linkedin-link" className="col-4">
          <a href="https://www.linkedin.com/in/ryangarza/">linkedin</a>
        </div>
        <div id="github-link" className="col-4">
          <a href="https://github.com/rgarzadev">github</a>
        </div>
        <div id="email-link" className="col-4">
          <a href="mailto:ryangarza@live.com">email</a>
        </div>
      </div>
    </div>
    <div className="row">
      <div id="copyright" className="col-12">Copyright rGarzaDev 2020</div>
    </div>
  </footer>
    )
}

export default Footer
