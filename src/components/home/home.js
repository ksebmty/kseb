import React from "react"
import Navbar from '../navbar/navbar'
import Create from '../create/create'
import './home.css';



const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Create />
            </div>
        </>
    );
};

export default Home

