import { Link } from 'react-router-dom';
import styles from './ArtistList.module.css';
import { getImg } from '../../../functions/functions';
import musicnote from '../icons/musical-note.png'
const ArtistList = ({artists}) =>{

    return(
        <div>
            <ul className={styles.artist__list}>
                {artists && artists.map(({id,name,followers:{total},images})=>{ 

                   const img = getImg(images);
                   return <li className={styles.artist__item} key = {id}>                              
                                <Link to = {`/artists/${id}`}>
                                    <img  className = {styles.artist__image }src ={img ? img : musicnote } alt = {name}/>
                                    <span className = {styles.artist__name }>{name}</span>
                                    <span className = {styles.artist__followers }>followers: {total}</span>
                                </Link>
                          </li>                       
                    
                    })
                }
            </ul>
        </div>
    )
}

export default ArtistList;