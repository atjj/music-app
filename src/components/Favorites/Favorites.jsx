/* eslint-disable react/prop-types */
import { getImg } from '../../functions/functions';
import styles from './Favorites.module.css';



const Favorites = ({favorites}) =>{
    return(
        <div className= {styles.container}>
            <ul className={styles.favorites__list}>
                {favorites && favorites.map(({name,images}) => {

                    const img = getImg(images);
                    return <li className= {styles.favorites__list_item} key ={name}>
                                <img className={styles.favorites__img} src = {img} alt ={name}/>
                                <span>{name}</span>
                           </li>
                })}
            </ul>
        </div>
    )

}


export default Favorites;