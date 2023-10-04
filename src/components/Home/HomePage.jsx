import { useEffect} from "react";

// eslint-disable-next-line react/prop-types
const HomePage = () =>{



    useEffect(()=>{
        sessionStorage.removeItem('artist');

    },[]);


    return (
        <>
            <h1>Home Page</h1>

        </>
    )
}




export default HomePage;