import React from 'react';

const SellAbout = () => {
    return (
        <>
            <div className='sellAbout_main'>
                <div className='sellAbout_title'>
                    <p>&#10077; Do you want to Sell your flat or put your house
                    on rent? Yourproperty has the right solution for you.
                    Your advertisement will be viewed by millions of
                    buyers and tenants. Our website offers one free property ad
                    that you can use for selling or renting. You will be able to
                    sell or rent every real estate property from flat or house to
                     land, even commercial property fast and immediately. &#10078;</p>
                </div>
                <div className='sell_details_main'>
                    <div className='sell_details_inner'>
                        <div className='details_title'>
                            <h2>Want to sell your home?</h2>
                            <p>Want to sell your home? Fill this form with your
                               details and we will contact you shortly.</p>
                        </div>

                        <div className='details_inputs'>
                            <div className='input_row'>
                                <div className='input_col'>
                                    <label for="fname">First Name *</label>
                                    <input type="text" id="fname" name="firstname"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="fname">Last Name *</label>
                                    <input type="text" id="lname" name="lastname"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="emailId">Email Address *</label>
                                    <input type="email" id="emailId" name="emailId"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="address">Address *</label>
                                    <input type="text" id="address" name="address"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="city">City</label>
                                    <input type="text" id="city" name="city"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="zip">Zip/Postal Code *</label>
                                    <input type="text" id="zip" name="zip"></input>
                                </div>
                                <div className='input_col'>
                                    <label for="country">Country</label>
                                    <input type="text" id="country" name="country"></input>
                                </div>
                            </div>
                            <div className='submit_btn'>
                                    <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellAbout;