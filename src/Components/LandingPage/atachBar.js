import React from 'react';
import './landingPage.css';

export default function AtachBar() {
    return (
        <div class="social">
            <a href="mailto: nahuelmartinc@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-envelope-o"></i>
            </a>
            <a href="https://github.com/nahuelcaputto" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nahuel-caputto/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://t.me/nahuelcaputto" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-telegram"></i>
            </a>
        </div>
    )
}