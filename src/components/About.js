import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
    return (
        <div className='about'>
            <div 
                className='aboutTop' 
                style={{ backgroundImage: `url(${BannerImage})` }} 
            ></div>
            <div className='aboutBottom'>
                <h1>Hakkımızda</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fermentum diam. Integer sed libero vel mauris fringilla sollicitudin. Nulla facilisi. Sed vel libero in neque fermentum cursus. Donec vel bibendum urna, et dictum dolor. Sed vel libero in neque fermentum cursus. Donec vel bibendum urna, et dictum dolor. Sed vel libero in neque fermentum cursus. Donec vel bibendum urna</p>  {/* Corrected to `p` tag */}
            </div>
        </div>
    );
};
