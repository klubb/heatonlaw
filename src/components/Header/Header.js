import React, { Component } from "react"
import "./header.css"
import logo from "./heaton-law.png"
import { Link } from "gatsby"
import { FaPhone, FaClock, FaBars, FaRegEnvelope } from "react-icons/fa"



export default class Header extends Component {

        openMenu = () => {
                document.getElementById('menu').style.height = '335px';
                
        }

        closeMenu = () => {
                document.getElementById('menu').style.height = '0';
        }
  render() {
    return (
      <div>
        <div className="blackheader">
          

          <h1 className='office'> Our office hours are 6AM - 5PM. Mon-Fri.</h1>
          <div className="divspacer" />
          <div className="spacer" />
          <div className="phone">
            <FaRegEnvelope className='icons' /> <h1>info@yourdomain.com</h1>
            
            <FaPhone className='icons phone-icon' /> <h1> (801) -709-4117</h1>
          </div>
        </div>
        <div className="navbarContainer">
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
                <nav className='navbar'>

                <span  className='hamburger'>
                    <FaBars onClick={this.openMenu}/>    
                </span>
                
                </nav>

                <div id='menu' className="nav-dropdown">
                <div className='nav-items'>

                        <a href="#" className='btn-close' onClick={this.closeMenu}>&times;</a>
                        <Link to='/'>Home</Link>
                        <hr className='menuspacer'/>
                        <Link to='/expert-team'>Our Expert Team</Link>
                        <hr className='menuspacer'/>
                        <Link to='/practice-areas'>Practice Areas</Link>
                        <hr className='menuspacer'/>
                        <Link to='/contact'>Contact</Link>
                        <hr className='menuspacer'/>
                        <Link to='/blog'>Blog</Link>
                </div>
                
                </div>

          <ul className="navLinks">
            <div class="dropdown  ">
              <Link activeClassName="active" to="/">
                <span className="dropbtn hvr-fade">Home</span>
              </Link>
            </div>
            <div class="dropdown">
              <Link activeClassName="active" to="/expert-team">
                <span className="dropbtn hvr-fade">Our Expert Team</span>
              </Link>
            </div>

            <div class="dropdown">
              <Link activeClassName="active" to="/practice-areas">
                <span class="dropbtn hvr-fade">Practice Areas</span>
              </Link>
              <div class="dropdown-content">
                <Link activeClassName="active" to="/criminal">
                  Criminal
                </Link>
                <Link
                  partiallyActive={true}
                  activeClassName="active"
                  to="/litigation"
                >
                  Litigation
                </Link>
                <Link activeClassName="active" to="/injury">
                  Personal injury
                </Link>
                <Link activeClassName="active" to="/auto-accident">
                  Auto Accident
                </Link>
              </div>
            </div>

            <div class="dropdown">
              <Link
                partiallyActive={true}
                activeClassName="active"
                to="/contact"
              >
                <span className="dropbtn hvr-fade">Contact</span>
              </Link>
            </div>

            <div class="dropdown">
              <Link partiallyActive={true} activeClassName="active" to="/blog">
              <span className="dropbtn hvr-fade">Blog</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
