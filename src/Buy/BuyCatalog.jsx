import React from 'react'
import CatalogData from './CatalogData';

const BuyCatalog = () => {

    return (
        <>
            <div className='catalog_main' id='search_results'>
                <div className='catalog_title'>
                    <p>"Looking for the dream house is very overwhelming but
                    YourProperty makes it very fun house hunting journey for you.
                    We help you make the best decision!"</p>
                </div>
                <div className='sort'>
                    <h4>Search Results(35):</h4>
                    <select>
                        <option>Recommended</option>
                        <option>What's New</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
                <div className='catalog_row'>
                    {CatalogData.map((props) => (
                        <div className='catalog_col'>
                            <img src={require('' + props.imgSrc)} />
                            <div className='CatDesc'>
                                <h3>{props.title}</h3>
                                <p>{props.price}</p>
                                <p>{props.description}</p>
                                <p>{props.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='showMore_div'>
                    <button className='show_more_btn'>Show More</button>
                </div>
            </div>
        </>
    )
}



export default BuyCatalog;