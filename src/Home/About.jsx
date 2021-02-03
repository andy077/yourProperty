import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';

const About = () => {
    return (
        <>
            <div className='about_container' id='details'>
                <div className='about_row'>
                    <div className='about_col'>
                        <MonetizationOnOutlinedIcon className='info_icon' />
                        <h2>Sell Your Home</h2>
                        <p>Looking to sell your house FAST?  We buy homes
                        in any condition, in any market, and can make you
                           an offer in less than 24 hours.  </p>
                    </div>
                    <div className='about_col'>
                        <EmojiPeopleOutlinedIcon className='info_icon' />
                        <h2>Contractors</h2>
                        <p>We partner with local, reputable construction
                        companies to renovate properties and revitalize
                           communities.  </p>
                    </div>
                    <div className='about_col'>
                        <HomeOutlinedIcon className='info_icon' />
                        <h2>Realtors</h2>
                        <p>We work with a wide network of top agents on both
                        sides of the transactions.  Whether you're needing a
                        cash buyer, or you are looking for your next listing,
                           contact us today.</p>
                    </div>
                </div>
            </div>

            <div className='info_div'>
                <div className='info_row'>

                    <div className='info_col'>
                        <div className='img_div'>
                            <img src={require('../images/gal1.jpg')} alt='gallery1' />
                        </div>
                        <div className='title_info'>
                            <h2>Top Residential Sales Last 4 Years</h2>
                            <p>We helped 88 clients in 2019 close nearly 23 million dollars in property,
                            & in 2020 we broke 20 million once again. We were thankful for the opportunity
                            to help clients in the midst of such a challenging year.
                            Our team works hard everyday to grow and learn, so that we may continue to excel
                            in our market. Our clients deserve our best,
                            & we want to make sure our best is better every year.</p>
                        </div>
                    </div>

                    <div className='info_col'>
                        <div className='img_div'>
                            <img src={require('../images/gal2.jpg')} alt='gallery2' />
                        </div>
                        <div className='title_info'>
                            <h2>Don't Just List it...</h2>
                            <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every
                               possible buyer, getting you top dollar for your home.</p>
                        </div>
                    </div>

                    <div className='info_col'>
                        <div className='img_div'>
                            <img src={require('../images/gal3.jpg')} alt='gallery3' />
                        </div>
                        <div className='title_info'>
                            <h2>Guide to Buyers</h2>
                            <p>Nobody knows the market like we do. Enjoy having two pros at your service. Market analysis,
                               upgrades lists, contractors on speed dial, & more!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='about_desc'>
                <div className='desc_div'>
                    <h2>Why Work With Us?</h2>
                    <p>We are full-service top producing Realtors®.
                    We provide relevant, timely, and comprehensive advice
                    on all aspects of your home buying process. We are tough
                    negotiators and diligent on ensuring you are well protected
                    throughout your transaction. We are not afraid of scary
                    basements, crawl spaces or septic systems, and are immensely
                    knowledgeable in knowing a good house from a money pit.
                    By the time we are done you will likely know more about the
                home you are buying than the person who is selling it!</p>
                </div>
            </div>

            <div className='more_about_div'>
                <div className='more_div'>
                    <h3>Want to know more about our work?</h3>
                    <a>Explore More</a>
                </div>
            </div>
        </>
    )
}

export default About;