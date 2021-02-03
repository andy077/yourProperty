import React from 'react';
import Header from '../Header/NavBar';

const SellFront = () => {

    return (
        <>
            <div className='sell_main'>
                <Header />
                <div className='sell_div'>
                    <div className='sell_inner'>
                        <h1>Sell Your Home</h1>
                        <p>We’ve partnered with companies to help you sell,<br />
                           buy and move. Find out what options are available for your home.</p>
                        <div className='search_address'>
                            <input type='text' placeholder='Enter your home address' />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellFront;