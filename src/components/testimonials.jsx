import React from "react";
import '../stylesheet/testimonials.css';

export function Testimonials({testimonial}) {
    return (
        <div className="content-testimonials">
            <img
                className="img-testimonial"
                src={testimonial.urlImage}
                alt={"Foto de " + testimonial.name}
            />
            <div className="content-text-testimonial">
                <p className="name-testimonial">{testimonial.name}</p>
                <p className="post-testimonial">{testimonial.post} en <strong>{testimonial.country}</strong></p>
                <p className="text-testimonial">{testimonial.text}</p>
            </div>
        </div>
    );
}
