import React from 'react';
import '../cssstyles/cards1.css';
import carda1 from '../images/carda1.jpg';
import carda2 from '../images/carda2.jpg';
import carda3 from '../images/carda3.jpg';
import carda4 from '../images/carda4.jpg';
import card5 from '../images/card5.jpg';
import card6 from '../images/card6.jpg';
import card7 from '../images/card7.jpg';
import cardb4 from '../images/cardb4.jpg';
import cardc1 from '../images/cardc1.jpg';
import cardc2 from '../images/cardc2.jpg';
import cardc3 from '../images/ardc3.jpg';
import cardc4 from '../images/cardc4.jpg';



const Cards1 = () => {
    return (
        <div>
        <div className='row1'>
            
            <section>
            <h4>Appliances for your home | Up to 55% off</h4>
            
            <div className='card1'>
                <div>
                    <img src = {carda1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {carda2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {carda3} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {carda4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href = '#'>See more</a>
            </section>

            <section>
                <h4>Up to 60% off | Styles for men</h4>
            <div className='card1'>
                <div>
                    <img src = {card5} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {card6} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {card7} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {cardb4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href = '#'>End of season sale</a>
            </section>

            <section>
                <h4>Revamp your home in style</h4>
                <br/>
            <div className='card1'>
                <div>
                    <img src = {cardc1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {cardc2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {cardc3} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {cardc4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href ='#'>Explore all</a>
            </section>

            <section>
                <h4>Up to 75% off | Headphones</h4>
                <br/>
            <div className='card1'>
                <div>
                    <img src = {carda1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {carda2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {carda3} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {carda4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href = '#'>See all offers</a>
            </section>
        </div>


        
        <div className='row1'>
            
            

            <section>
                <h4>Up to 60% off | Styles for men</h4>
            <div className='card1'>
                <div>
                    <img src = {card5} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {card6} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {card7} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {cardb4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href = '#'>End of season sale</a>
            </section>

            <section>
                <h4>Revamp your home in style</h4>
                <br/>
            <div className='card1'>
                <div>
                    <img src = {cardc1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {cardc2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                    <img src = {cardc3} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {cardc4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href ='#'>Explore all</a>
            </section>

            <section>
            <h4>Appliances for your home | Up to 55% off</h4>
            
            <div className='card1'>
                <div>
                <img src = {card7} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {cardb4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
                <div>
                    <img src = {carda3} alt = 'home appliances'/>
                    <p>Microwaves</p>
                
                    <img src = {carda4} alt = 'home appliances'/>
                    <p>Washing Machines</p>
                </div>
            </div>
            <a href = '#'>See more</a>
            </section>

            <section>
                <h4>Up to 75% off | Headphones</h4>
                <br/>
            <div className='card1'>
                <div>
                    <img src = {carda1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {carda2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
                <div>
                <img src = {cardc1} alt = 'home appliances'/>
                    <p>Air Conditioners</p>
                
                    <img src = {cardc2} alt = 'home appliances'/>
                    <p>Refrigerators</p>
                </div>
            </div>
            <a href = '#'>See all offers</a>
            </section>
        </div>
        </div>
    );
};

export default Cards1;