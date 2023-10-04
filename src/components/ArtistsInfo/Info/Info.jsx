import styles from './Info.module.css';




const Info = ({info,title}) => {
    return(
        <>
            <div className={styles.tracks__wrapper}>
                <h2>{title}</h2>
                <ul>
                    {info.map(({name,id})=> <li key = {id}> {name} </li>)}
                </ul>
            </div>
        </>
    )
}



export default Info;