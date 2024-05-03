import {TestimonialsContent} from './TestimonialsContent';
import React, { useState, useEffect } from 'react';
// import { Header } from "./Header";

import '../stylesheet/Testimonials.css';

export function Testimonials() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const jsonData = await response.json();
        const data = jsonData.results;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='content-test'>
      <p className='txt-testimonials'>MEMBERS OF THE RICK AND MORTY SERIES</p>
        {data && data.map((d) => (
          <TestimonialsContent testimonial={d} />
        ))}
        {isLoading ? <h1>Loading...</h1> : null}
    </div> 
    );
}