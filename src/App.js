import { useState, useEffect } from 'react'
import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete.js'
import Details from './components/Details/Details.js'
import axios from 'axios'

function App(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [movieList, setMovieList] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    let newSearchTerm = searchTerm.split(' ').join('%20')
    axios.get(`${process.env.REACT_APP_DEV_BACKEND}autocomplete/${newSearchTerm}`).then((result) => {
      setMovieList(result.data)
    })
  }, [searchTerm])

  useEffect(() => {
    console.log('Movie was selected')
    console.log(selectedMovie)
    if(selectedMovie && window.location.pathname.includes('movieID=')){
      axios.get(`${process.env.REACT_APP_DEV_BACKEND}movie/${selectedMovie.id}`).then((result) => {
        setMovieDetails(result.data)
      })
    } else if(selectedMovie){
      window.location.href=`/movieID=${selectedMovie.id}`
    }
  }, [selectedMovie])

  if(window.location.pathname.length > 1 && !selectedMovie){
    let urlSearch = window.location.pathname.split('movieID=')[1]
    if(urlSearch) {setSelectedMovie({label: '', id: urlSearch}) }
  }
  
  return (
    <div className="App">
      <header className='app-header'>
        <div className='app-header-row'>
          <a href='/' style={{display: 'flex', flexDirection: 'row', textDecoration: 'none'}}>
            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' className='app-logo'/>
            <h2 className='app-title'>The MDsave Movie Project</h2>
          </a>
        </div>
      </header>
      <div className='app-main'>
        {!movieDetails ? 
          <Autocomplete 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            movieList={movieList}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          /> : 
          <Details 
            movieDetails={movieDetails}
          />
        }
      </div>
    </div>
  );
}

export default App;
