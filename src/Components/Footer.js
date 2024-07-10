import React from 'react';
import '../cssstyles/footer.css';
import img1 from '../images/img1.png';

const Footer = () => {
    return (
        <div>
            <p className='backtotop'>Back to top</p>
            <div className='div1'>
            <div className='block'>

            <div>
                <ul>
                    <li><b>Get to Know Us</b></li>
                    <li><a href = '#'>About Us</a></li>
                    <li><a href = '#'>Careers</a></li>
                    <li><a href = '#'>Press Releases</a></li>
                    <li><a href = '#'>Amazon Science</a></li>
                </ul>
            </div>
            <div>
            <ul>
                    <li><b>Connect with Us</b></li>
                    <li><a href = '#'>Facebook</a></li>
                    <li><a href = '#'>Twitter</a></li>
                    <li><a href = '#'>Instagram</a></li>
                </ul>

            </div>
            <div>
            <ul>
                    <li><b>Make Money with Us</b></li>
                    <li><a href = '#'>Sell on Amazon</a></li>
                    <li><a href = '#'>Sell under Amazon Accelerator</a></li>
                    <li><a href = '#'>Protect and Build Your Brand</a></li>
                    <li><a href = '#'>Amazon Global Selling</a></li>
                    <li><a href = '#'>Become an Affiliate</a></li>
                    <li><a href = '#'>Fulfilment by Amazon</a></li>
                    <li><a href = '#'>Advertise Your Products</a></li>
                    <li><a href = '#'>Amazon Pay on Merchants</a></li>
                </ul>
                
            </div>
            <div>
            <ul>
                    <li><b>Let Us Help You</b></li>
                    <li><a href = '#'>COVID-19 and Amazon</a></li>
                    <li><a href = '#'>Your Account</a></li>
                    <li><a href = '#'>Returns Centre</a></li>
                    <li><a href = '#'>100% Purchase Protection</a></li>
                    <li><a href = '#'>Amazon App Download</a></li>
                    <li><a href = '#'>Help</a></li>

                </ul>
            </div>
            </div>
            <br/><br/>
            <hr className='hr1'></hr>
            <center>
                <a href = '#'><img src = {img1}></img></a>
                <select className='lang'><option>English</option></select>
            </center>
            <div className='countrynames'>
                <center>
                    <a href='#'> Australia </a><a href='#'> Brazil </a><a href='#'> Canada </a><a href='#'>China</a><a href='#'>France</a><a href='#'>Germany</a><a href='#'>Italy</a><a href='#'>Japan</a><a href='#'>Mexico</a><a href='#'>Netherlands</a><a href='#'>Poland</a><a href='#'>Singapore</a><a href='#'>Spain</a><a href='#'>Turkey</a><a href='#'>United Arab Emirates</a>
                <br/>
                <a href = '#'>United Kingdom</a><a href = '#'>United States</a>
                </center>
            </div>
            </div>
            <div className='div2'>
                 
                <table class="tb1" cellspacing="0">
      <tr>
<td ><a href='#' ><b>AbeBooks</b><br/>Books, art<br/>& collectibles</a></td>
<td ><a href='#' ><b>Amazon Web Services</b><br/>Scalable Cloud<br/>Computing Services</a></td>
<td ><a href='#' ><b>Audible</b><br/>Download<br/>Audio Books</a></td>
<td ><a href='#' ><b>IMDb</b><br/>Movies, TV<br/>& Celebrities</a></td></tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td ><a href='#' ><b>Shopbop</b><br/>Designer<br/>Fashion Brands</a></td>
<td ><a href='#' ><b>	Amazon Business</b><br/>Everything For<br/>Your Business</a></td>
<td ><a href='#' ><b>Prime Now</b><br/> 2-Hour Delivery<br/>on Everyday Items</a></td>
<td ><a href='#' ><b>Amazon Prime Music</b><br/>100 million songs, ad-free<br/>Over 15 million podcast episodes </a></td></tr>

    </table><br/>
    <div className='countrynames'>
        <center><a href = "#">Conditions of Use & Sale</a><a href = "#">Privacy Notice</a><a href = "#">Interest-Based Ads</a></center>
    </div>
<center><p className='copy'><b>© 1996-2024, Amazon.com, Inc. or its affiliates</b></p></center>

            </div>
        </div>
    );
};

export default Footer;