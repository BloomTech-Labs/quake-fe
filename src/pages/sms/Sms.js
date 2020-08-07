import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Sms = () => {

    const twilioPost = e => {
        // alert(`Phone: ${smsInfo.cell}, Co-ords: ${smsInfo.coords}, Distance: ${smsInfo.distance}`)
        const accountSid = 'AC11ebda6573e6d3940c8354f6b330d7c2';
        const authToken = '3b7654bfb0a96fc246b075d26b3ad8b2';
        const client = require('twilio')(accountSid, authToken);
    
        client.chat.services('IS92d9d14c9f694c3ea4ca4bf46cad0684')
        .channels
        .create({identity: '+123'})
        .then(channel => console.log(channel.sid));
    };

    const [smsInfo, setSmsInfo] = useState({
        cell: '',
        coords: '',
        distance: ''
      });
    
    const changeHandler = ev => {
        console.log('value', ev.target.value)
        let value = ev.target.value;
    
        setSmsInfo({
          ...smsInfo,
          [ev.target.name]: value
        });
    
        console.log('object', smsInfo);
      };

  return (
      
    <section id='sms-main' className='main-container no-scroll'>
    <div className='container'>
      <h2 className='title'>Get earthquake SMS updates.</h2>
      <h1 className='subTitle'>No subscription required.</h1>
        <form id='myForm' onSubmit={twilioPost}>
            <div className='Phone col'>
                <label className='label'>Phone Number</label>
                <input type='text' className='text' name='cell' placeholder='+1 ' onChange={changeHandler} value={smsInfo.name} required/>
            </div>
            <div className='Coords col'>
                <label className='label'>Address or ZIP Code</label>
                {/* reuse search bar with current location? Auto populate if value already in main screen?*/}
                <input name='coords' className='text' type='text' placeholder='[-75.343, 39.984]' onChange={changeHandler} value={smsInfo.coords} />
            </div>
            <div className='Distance col'>
                <label className='label'>Slide to choose a notification radius</label>
                {/* Consider a slider which shows km and miles at same time */}
                <input name='distance' className='text' placeholder='10' required onChange={changeHandler} value={smsInfo.distance} />
            </div>
            <div className='btn-container'>
                <button className='btn' type='submit'>Send Verification to my Phone</button>
            </div>
        </form>
        </div>
      </section>
  );
};

//US numbers only? Check Twilio

export default Sms;
