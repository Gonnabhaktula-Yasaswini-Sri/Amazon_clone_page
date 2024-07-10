import React from 'react';
import '../cssstyles/header.css';
import Cards1 from './Cards1.js';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import search from '../images/search.jpg';
import cart from '../images/cart.png';
import flag from '../images/flag.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import first from '../images/fir.png';
import second from '../images/second.png';
import third from '../images/third.png';
import forth from '../images/forth.png';



const Header = () => {
    
    return (
        <div>
            <nav className='nav'>
                <img src = {img2} alt = 'amazon logo' className='logo1'/>
                <img src = {img3} alt = 'location' className='logo1'/>
                <select className = 'select'>
                    <option> All</option><option>Baby</option><option>Dresses</option><option>Women's</option><option>Electronics</option><option>Men's</option>
                </select>
                <input type = 'text' value = 'Search Amazon.in' className='searchbar'/>
                <img src = {search} alt = 'search icon' className='logo1' id = 'searchimg'/>
                <span className='navspan'><img src = {flag} alt = 'flag' className='flag'/><b>EN</b></span>    
                <span className='navspan'>Hello, sign in <br/><b>Account & Lists</b></span> 
                <span className='navspan'>Returns <br/><b>& Orders</b></span>    
                <img src = {cart} alt = 'cart' className='logo1'></img>
            </nav>
            <nav className='navb'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">All</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Amazon miniTV</Nav.Link>
            <Nav.Link href="#features">Sell</Nav.Link>
            <Nav.Link href="#pricing">Best Sellers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            </nav>
            <div className='body'>
                <div id="demo" class="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">

                    {/* <!-- Indicators/dots --> */}
                    {/* <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div> */}

                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={first} alt="Los Angeles" className="d-block"/>    
                        </div>

                        <div class="carousel-item">
                            <img src={second} alt="Chicago" className="d-block"/>
                        </div>

                        <div class="carousel-item">
                            <img src={third} alt="New York" className="d-block"/>
                        </div>

                        <div class="carousel-item">
                            <img src={forth} alt="New York" className="d-block"/>
                        </div>

                    </div>

                    {/* <!-- Left and right controls/icons --> */}
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                <Cards1/>
            </div>
            


        </div>
    );
};

export default Header;