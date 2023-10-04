
import { useEffect, useState } from "react";
import styles from './ArtistsInfo.module.css';
import favoriteIconFill from './icons/favorite-fill.png';
import favoriteIcon from './icons/favorite.png';
import { useParams } from "react-router-dom";
import {getData,getArtistsTopTracks, getArtistsAlbums} from "../../getDataFunctions/getDataFunctions";
import Info from "./Info/Info";
import LinkBack from "./LinkBack/LinkBack";
import { getImg } from "../../functions/functions";
// eslint-disable-next-line react/prop-types
const ArtistsInfo = ({access_token,favorites,setFavorties}) =>{

    let {id}  = useParams();

    const [artist,setArtist] = useState({});
    const [favorite,setFavortie] = useState(false);
    const [topTracks,setTopTracks] = useState([]);
    const [albums,setAlbums] = useState([]);


/*     console.log(artist); */

    useEffect(()=>{

        (async () =>{

            const res1 = await getData(access_token,"artists",id);
            const res2  = await getArtistsTopTracks(access_token,id);
            const res3 = await getArtistsAlbums(access_token,id);
            setArtist(res1);
            setTopTracks(res2.tracks);
            setAlbums(res3.items);
        })();
          
/*         if(sessionStorage.getItem('favorites'))
            setFavortie(true); */
        if(sessionStorage.getItem('favorites')){
            JSON.parse(sessionStorage.getItem('favorites')).forEach(item =>{
                if(item.id == id)
                    setFavortie(true);
            })
        }
    },[access_token, id])


  /*   console.log(topTracks); */
    /* console.log(albums); */


    const add = () =>{
       /*  setFavortie(true); */
       /*  sessionStorage.setItem(id,name); */
        setFavorties([{id:id,name:name,images:images}, ...favorites]);
    }


    const remove = (id) =>{
       /*  sessionStorage.removeItem(id); */
        // eslint-disable-next-line react/prop-types
        setFavorties(favorites.filter((element) => element.id !== id));
    }



    const toggleFavorite = (id) => {
        if(!favorite) {
            setFavortie(true);
            add();
        } else {
            setFavortie(false);
            remove(id);
        }

    }




    
    const {followers,name,popularity,images,genres} = artist;

    const total = followers ? followers.total: null;
    const newgenres = genres ? genres.map(item => `${item} `) : null;

    
    const img = getImg(images);
    



    
    return(
        <div className={styles.container}>
            <LinkBack/>
            <div className={styles.info__wrapper} >
                <img className={styles.info__img} src= {img} alt = {name}/>
                <img    
                    className={styles.info__favorite}
                    onClick={()=>{
                        toggleFavorite(artist.id);
                    }}
                    src = {favorite ? favoriteIconFill: favoriteIcon}
                    alt = "add favorite"
                />
                <ul className={styles.info__list} >
                    <li>Name: {name}</li>
                    <li>Popularity: {popularity}</li>
                    <li>genres: {newgenres} </li>
                    <li>followers: {total}</li>
                </ul>
            </div>

           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <Info info = {topTracks} title = "Top Tracks" />
                <Info info = {albums} title = "Albums"/>
           </div>

        </div>
    )


}


export default ArtistsInfo;















/* const a = {
    name: 'john',
    age: 25
}

let arr = Object.entries(a);
console.log(arr.map((item)=> item[0]));


 */