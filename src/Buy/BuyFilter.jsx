import React from 'react'
import {NavLink} from 'react-router-dom';
import moreFilterToggle from './moreFilterToggle';
import toggleAdvance from './toggleAdvance';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

const BuyFilter = () => {
    return (
        <>
            <div className='filter_main'>
                <div className='filter_inner'>
                    <p>Search properties to buy or sell</p>
                    <div className='search_div'>
                        <div className='input_div'>
                            <SearchIcon className='search_icon' />
                            <input type='text' placeholder='Search City, state, pin...' />
                        </div>
                        <div className='buttons_div'>
                            <button><NavLink exact to='#search_results' className='search_btn_div'>Search</NavLink></button>
                            <button onClick={toggleAdvance}>Advance <SettingsIcon className='button_icon' /></button>
                        </div>
                    </div>

                    <div className='advance_main_div' id='advance_data'>
                        <div className='filter_choice_div'>

                            <div className='filter_row'>
                                <div className='filter_col'>
                                    <div className='filter_btns'>
                                        <button>Properties</button>
                                        <ExpandMoreIcon className='rotate_Arrow' />
                                    </div>
                                    <div className='filter_item_col'>
                                        <input type='checkbox' name='property' />
                                        <label for='afilter_colll'>All Properties</label><br />
                                        <input type='checkbox' name='property' />
                                        <label for='house'>House</label><br />
                                        <input type='checkbox' name='property' />
                                        <label for='villa'>Villa</label><br />
                                        <input type='checkbox' name='property' />
                                        <label for='appartment'>Appartments & Unit</label><br />
                                        <input type='checkbox' name='property' />
                                        <label for='land'>Land</label><br />
                                        <input type='checkbox' name='property' />
                                        <label for='acreage'>Acreage</label><br />
                                    </div>
                                </div>

                                <div className='filter_col'>
                                    <div className='filter_btns'>
                                        <button>Beds</button>
                                        <ExpandMoreIcon className='rotate_Arrow' />
                                    </div>
                                    <div className='filter_item_col'>
                                        <input type="radio" name="beds" />
                                        <label for="any">Any</label><br />
                                        <input type="radio" name="beds" />
                                        <label for="1">1 Bed</label><br />
                                        <input type="radio" name="beds" />
                                        <label for="2">2 Beds</label><br />
                                        <input type="radio" name="beds" />
                                        <label for="3">3 Beds</label><br />
                                        <input type="radio" name="beds" />
                                        <label for="4">4 Beds</label><br />
                                        <input type="radio" name="beds" />
                                        <label for="5">5 Beds</label><br />
                                    </div>
                                </div>

                                <div className='filter_col'>
                                    <div className='filter_btns'>
                                        <button>Price (min)</button>
                                        <ExpandMoreIcon className='rotate_Arrow' />
                                    </div>
                                    <div className='filter_item_col'>
                                        <input type="radio" name='minPrice' />
                                        <label for='any'>Any</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='50'>$50,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='75'>$75,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='100'>$100,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='125'>$125,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='150'>$150,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='200'>$200,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='225'>$225,000</label><br />
                                        <input type="radio" name='minPrice' />
                                        <label for='250'>$250,000</label><br />
                                    </div>
                                </div>

                                <div className='filter_col'>
                                    <div className='filter_btns'>
                                        <button>Price (max)</button>
                                        <ExpandMoreIcon className='rotate_Arrow' />
                                    </div>
                                    <div className='filter_item_col'>
                                        <input type="radio" name='maxPrice' />
                                        <label for='any'>Any</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='50'>$50,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='75'>$75,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='100'>$100,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='125'>$125,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='150'>$150,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='200'>$200,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='225'>$225,000</label><br />
                                        <input type="radio" name='maxPrice' />
                                        <label for='250'>$250,000</label><br />
                                    </div>
                                </div>

                            </div>
                        </div>
             
                    </div>

                </div>
            </div>
        </>
    )
}

export default BuyFilter;