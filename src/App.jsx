import './App.css';
// import {Testimonials} from './components/testimonials';
import {Botton} from './components/Botton';
import { useState } from 'react';

const testimonialData = {
  urlImage: 'https://w7.pngwing.com/pngs/562/750/png-transparent-homer-simpson.png',
  name: "Homero",
  post: "Amo de casa",
  country: 'Honduras',
  text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.."
};

const testimonialData2 = {
  urlImage: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
  name: "Bart",
  post: "Estudiante",
  country: 'Peru',
  text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.."
};

const testimonialData3 = {
  urlImage: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
  name: "Milhouse",
  post: "Estudiante",
  country: 'Mexico',
  text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.."
};

function App() {

  const [numClick, setNumClick] = useState(0);

  const handleClick = () => {
    setNumClick(numClick + 1);
  }

  const restartClick = () => {
    setNumClick(0);
  }

  return (
    <div className="App">
      <div className='content-principal'>
        <h1>Esto es lo que dicen los dibujitos</h1>
        {/* <Testimonials testimonial={testimonialData} />
        <Testimonials testimonial={testimonialData2} />
        <Testimonials testimonial={testimonialData3} /> */}

        <div className='counter'>
          {numClick}
        </div>

        <Botton text="Click" isBtnClick={true} eventclick={handleClick} />
        <Botton text="Reiniciar" eventclick={restartClick} />

      </div>
    </div>
  );
}

export default App;
