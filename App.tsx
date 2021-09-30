import React, {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title'
import SelectorAuto from './Components/SelectorAuto'
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;


function App() {
  const [isLoaded,setIsLoaded] = useState(false);
  const [data,setData] = useState([]);

  useEffect(() => {
    if(!isLoaded){
      (async () => {
        

        /* const result = await axios({
          method: 'GET',
          url: '',
          params: {Category: 'soccer', Date: '20210929'},
          headers: {
            'x-rapidapi-host': 'livescore6.p.rapidapi.com',
            'x-rapidapi-key': 'dc70a78f5cmsh40809b35e8268fcp1833bajsn2371c230fcb6'
          }
        }); */
        const result = await axios({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/generation',
          
        });
        var dataRaw = result.data.results
        console.log(Array.isArray(dataRaw))
        setData(dataRaw)
        setIsLoaded(true)
        
      })();
    }

    
  }, []);


  return (
    <Router>
    <div className="App">
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    <Route exact path="/">
    <Title title={"Test Football Api"} subtitle={"Wyciągnij dane o ..."}></Title>
    {
isLoaded ? <SelectorAuto data={data} /> : <p>Loading...</p>
}
    </Route>
    <Route path="/about">
    <Title title={"About Page"} subtitle={"To jest dla About"}></Title>
    </Route>

    
     
    </div>
    </Router>
  );
}
//https://live-score-api.com/prices

export default App;
