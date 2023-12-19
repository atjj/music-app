import { useEffect, useState } from 'react';
import ArtistList from '../ArtistList/ArtistList'
import styles from './ArtistsPage.module.css';
import searchIcon from '../../../assets/icons/search.png';
import SearchPanel from '../SearchPanel/SearchPanel';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { getSearchData } from '../../../getDataFunctions/getDataFunctions';



// eslint-disable-next-line react/prop-types
const ArtistPage = ({access_token}) => {


     const [searchInput,setSearchInput] = useState('');
     const [error,setError] = useState(false);
     const [artists,setArtists] = useState('');
     
     

     useEffect(()=>{
       (async () =>{
         await getArtists(sessionStorage.getItem('artist'));         
       })();
       
  /*       console.log(artists)
  */   // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])




   
     const getArtists = async (artist) => {

            if(!artist){
              return;
            }

            const res = await getSearchData(access_token,artist);

            if(!res){
              setError(true);
            } else {
              setError(false);
              setArtists(res);
            }

        }


  
     const search = async () => {
        await getArtists(searchInput);
        sessionStorage.setItem('artist',searchInput);
     }

     const changeInput = (e) =>{
          setSearchInput(e.target.value)
      }




     const view = artists ? <ArtistList artists = {artists}/> : null;
     const withErrorView = error ? <ErrorPage/> : view;
    
     return(
      
        <div className= {styles.container}>
            <SearchPanel search={search}  searchIcon={searchIcon} changeInput={changeInput}/>
            {withErrorView}
        </div>
     )
 }




export default ArtistPage;