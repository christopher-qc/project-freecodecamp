import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterClick } from './components/CounterClick';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { Testimonio } from './components/Testimonio';
import { Calculator } from './components/Calculator';
import { List } from './components/List';

function App() {
  return (
    <div className="App">
      <div className='content-main'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/testimonials' element={<Testimonio />} />
            <Route path='/counter' element={<CounterClick />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/list' element={<List />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
