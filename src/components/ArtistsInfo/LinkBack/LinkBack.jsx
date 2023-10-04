import { useNavigate } from "react-router-dom";
import styles from './LinkBack.module.css';
import linkBack from '../icons/goBack.svg';

const LinkBack = () =>{


    const navigate = useNavigate();

    return(
        <a  className={styles.link} href="#" onClick={() =>{
            navigate(-1);
        }}><img className= {styles.link__img} src = {linkBack} alt = "go back"/></a>
    )
}


export default LinkBack;