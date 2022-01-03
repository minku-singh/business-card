import React from 'react';
import Image from './assets/minku.jpg';
import './Main.css';

export default function Main() {
    return (
        <div className='main'>
            <img src={Image} alt="minku" />
            <h2>Minku Singh</h2>
            <p>Frontend Developer</p>

            <div className="email-linked">
                <button><i class="far fa-envelope"></i>Email</button>
                <button><i class="fab fa-linkedin-in"></i>LinkedIn</button>
            </div>

            <div className="about-interest">
                <div className="about">
                    <h2>About</h2>
                    <p>I am a MERN stack developer, but I am more inclined toward frontend. I love JavaScript and looking for more experience in it.</p>
                </div>
                <div className="interest">
                    <h2>Interests</h2>
                    <p>Apart from this, I love painting and travelling.</p>
                </div>
            </div>

            <div className="social">
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-github-square"></i>
            </div>
        </div>
    )
}
