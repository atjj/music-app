import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () =>{

    return(
        <div className={styles.container}>
            <ul className = {styles.header__list}>
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to ='/artists'>Artists</NavLink></li>
                <li><NavLink to ='/favorites'>Favorite artists</NavLink></li>
            </ul>
        </div>
    )
}

export default Header


