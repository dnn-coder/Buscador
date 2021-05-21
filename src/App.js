import './App.css';
import { useEffect, useState } from 'react';
import searchGif from './servicios/searchGif';
import Gif from './components/Gif';
import Search from './components/Search';
import Ejemplo from './ejemplos'

function App() {
  const [currentGif, setCurrentGif] = useState({
    images: {
      original: {
        url: ''
      }
    }
  });
  const [queryTerm, setQueryTerm] = useState('puppies');
  useEffect(() => {
    searchGif(queryTerm).then(data => {
      setCurrentGif(data.data[0]);
    })
  }, [queryTerm])
  return (
    <div className="App">
      <header className="App-header">
        <Search changeQuery={setQueryTerm}/>
        <Gif url={currentGif.images.original.url}/>
        <Ejemplo />
      </header>
    </div>
  );
}

export default App;
