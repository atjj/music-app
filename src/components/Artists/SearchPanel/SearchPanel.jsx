/* eslint-disable react/prop-types */
import styles from './SearchPanel.module.css';

const SearchPanel = ({search,searchIcon,changeInput}) =>{
    return(
        <div className= {styles.search_container} >
              <input className={styles.input} type ="text" placeholder= "search..." onChange = {e => changeInput(e)}/>
              <button className={styles.btn} onClick={search}><img src ={searchIcon} alt = 'search'/></button>
        </div>
    )
}


export default SearchPanel;
