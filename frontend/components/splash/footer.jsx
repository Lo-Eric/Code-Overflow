import React from "react";

class Footer extends React.Component {
  render() {
    return (
        <section className="footer-content">
          <img className="footer-logo" src={window.logo} height="70" width="40" />
          <ul>
            <li id="column-header">CODE OVERFLOW</li>
            <li>Questions </li>
            <li>Jobs</li>
            <li>Developer Jobs Directory</li>
            <li>Salary Calculator</li>
            <li>Help</li>
            <li>Mobile</li>
            <li>Disable Responsiveness</li>
          </ul>
          <ul>
            <li id="column-header">PRODUCTS</li>
            <li>Teams</li>
            <li>Talent</li>
            <li>Advertising</li>
            <li>Enterprise</li>
          </ul>
          <ul>
            <li id="column-header">COMPANY</li>
            <li>About </li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
          <ul>
          <li id="column-header">CODE EXCHANGE NETWORK</li>
            <li>Technology </li>
            <li>Life/Arts</li>
            <li>Culture/Recreation</li>
            <li>Science</li>
            <li>Other</li>
          </ul>

          <section className="links">
            <div id="social">
              <li>
                <a target="_blank" href="https://www.facebook.com">
                  Facebook
                </a>
              </li>
              <br />
              <li>
                <a target="_blank" href="https://github.com">
                  GitHub
                </a>
              </li>
              <br />
              <li>
                <a target="_blank" href="https://www.linkedin.com">
                  LinkedIn
                </a>
              </li>
            </div>
            
            <div id="copy-rights">
              site design / logo © 2020 Code Overflow Inc; user contributions
              licensed under cc by-sa 4.0 with attribution required. rev
              2020.6.11.35739
            </div>
          </section>
        </section>
    );
  }
}

export default Footer;
