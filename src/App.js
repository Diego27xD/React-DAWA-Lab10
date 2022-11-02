import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <div className='contenedor1'>
          <div className='foto'>
            <img alt='foto' src='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          </div>
        </div>
        <div className='contenedor2'>
          <h1>Este es mi primer componente</h1>
          <img src='./perfil.jpg' alt='perfil'></img>
          <h1>By Diego Flores Jara</h1>
          
          <h2>El primer valor de number es: {number}</h2>
          <div className='botones'>
            <button onClick={() => setNumber(number + 1)}>Incrementar</button>
            <button onClick={() => setNumber(number - 1)}>Decrementar</button>
          </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
