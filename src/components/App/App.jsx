import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ArtistsPage from '../Artists/ArtistsPage/ArtistsPage';
import HomePage from '../Home/HomePage';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import './App.css';
import {useEffect, useState } from 'react';
import ArtistsInfo from '../ArtistsInfo/ArtistsInfo';
import { CLIENT_SECRET,CLIENT_ID } from '../../constants/constants';
import { getAccessToken} from '../../getDataFunctions/getDataFunctions';
import NotFound from '../NotFound/NotFoundPage';

const App = () => {  


  const [accessToken,setAccessToken] = useState('');
  const [favorites,setFavorties] = useState(JSON.parse(sessionStorage.getItem('favorites')) || []);

  useEffect(() => {

     (async () => {

        const access_token = await getAccessToken(CLIENT_ID,CLIENT_SECRET).then(data => data.access_token);

        setAccessToken(access_token);

     })();

     const arr = sessionStorage.getItem('favorites');
     arr && setFavorties(JSON.parse(arr));
     
  },[])



  useEffect(()=>{
    sessionStorage.setItem('favorites',JSON.stringify(favorites));
  },[favorites]);



  /* console.log(favorites); */
  

  return (
      
      <BrowserRouter>
        <div className= 'container'>
              <Header/>
              <Routes>
                  <Route  path = '/' element = {<HomePage />}/>
                  <Route  path = '/artists' element = {<ArtistsPage access_token = {accessToken}/>}/>
                  <Route  path = '/favorites' element = {<Favorites favorites = {favorites}/>} />
                  <Route  path = '/artists/:id' element = {<ArtistsInfo access_token = {accessToken} favorites = {favorites} setFavorties = {setFavorties}/>}/>
                  <Route  path = '*' element = {<NotFound/>}/>
              </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;


