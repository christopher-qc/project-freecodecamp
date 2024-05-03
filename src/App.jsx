import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterClick } from './components/CounterClick';
import { Testimonials } from './components/Testimonials';
import { Home } from './components/Home';
import { Error } from './components/Error';

function App() {
  return (
    <div className="App">
      <div className='content-main'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/counter' element={<CounterClick />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
