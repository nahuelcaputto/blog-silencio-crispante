import React from 'react'
import data from './certData'
import './certifications.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Certifications() {
    const certificates = data.certificates;
    AOS.init({
        mirror: false,
        once: false,
        easing: 'ease-in-out'
    });
    return (
        <>
            <div className="container mt-5">
                <h1 className="cert-title"
                    data-aos="fade-right"
                    data-aos-duration="600">
                    certificaciones<strong>.</strong>
                </h1>
                <div className="row row-cols-1  row-cols-md-2 row-cols-lg-2">
                    {certificates && certificates.map((cert, i) => (
                        <div key={i} className="shadow my-1 d-flex align-items-center"
                            data-aos="zoom-in-up"
                            data-aos-duration={500 + (i * 200)}>
                            <a href={cert.url}><img className="img-fluid" src={cert.urlImage} alt=""></img></a>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}