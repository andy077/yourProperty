import React from 'react';
import NavBar from '../Header/NavBar';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const HomeFront = () => {

    return (
        <>
            <div className='hero_main'>
                <NavBar />
                <div className='hero_div'>
                    <h1>Find the Best Home For You</h1>

                    <div className="input_search">
                        <input type='text' placeholder='Search city, state, pin...' id='search_item' />
                        <button>Search</button>
                    </div>
                </div>
                <div className='scroll_more'>
                    <h2>Scroll for more...</h2>
                    <a href='#details'><ExpandMoreOutlinedIcon className='arrow_icon' /></a>
                </div>
            </div>
        </>
    )
}

export default HomeFront;