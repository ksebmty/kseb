import React from "react"
import Navbar from '../navbar/navbar'
import './home.css';
// import Maintanance from '../../asset/maintanance.jpg'


const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                {/* <img src={Maintanance} className="maintananceImg" alt="/"/> */}
                <form method="get" action="/add">
                    <button className="homebtn1" type="submit">Add details</button>
                </form>
                <form method="get" action="/list">
                    <button className="homebtn2" type="submit">View Details</button>
                </form>

            </div>
        </>
    );
};

export default Home
