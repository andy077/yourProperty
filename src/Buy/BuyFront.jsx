import React from 'react';
import NavBar from '../Header/NavBar';
import BuyFilter from '../Buy/BuyFilter';

const BuyFront = () => {
    return (
        <>
            <div className='buy_main'>
                <NavBar />

                <div className='buy_div'>
                    <h1>Buy the Home of your Dream.</h1>
                </div>
                <BuyFilter />

                
            </div>
        </>
    )
}

export default BuyFront;