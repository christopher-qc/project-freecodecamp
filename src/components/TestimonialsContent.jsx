import React from "react";
import '../stylesheet/TestimonialsContent.css';

export function TestimonialsContent({testimonial}) {
    return (
        <div className="content-testimonials">
            <img
                className="img-testimonial"
                src={testimonial.image}
                alt={"Foto de " + testimonial.name}
            />
            <div className="content-text-testimonial">
                <p className="name-testimonial">{testimonial.name}</p>
                <p className="post-testimonial"><strong>Specie</strong>: { testimonial.species}</p>
                <p className="post-testimonial"><strong>Status</strong>: { testimonial.status}</p>
                <p className="text-testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et eos dolore corporis molestias, esse facilis saepe quam dignissimos enim perferendis, magnam blanditiis doloribus illum, rem sed veritatis eum corrupti.</p>
            </div>
        </div>
    );
}
