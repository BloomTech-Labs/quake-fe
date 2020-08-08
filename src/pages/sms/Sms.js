import React, { useState, useCallback, useEffect } from 'react';
import GeoCoder from '../activity/search/SearchBar';
const axios = require('axios');

const Sms = () => {

    const twilioPost = e => {
      e.preventDefault();
      alert('feature coming soon')
      console.log(`Sms > submit ${smsInfo.cell} ${smsInfo.coords} ${smsInfo.distance}`)
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

    const [rangeval, setRangeval] = useState(50);
    const [rangevalMiles, setRangevalMiles] = useState(31.1)

    useEffect(() => {
      
      }, [rangeval]);

    const handleChangeSlider = e => {
        console.log('value', e.target.value)
        let value = e.target.value;
        setRangeval(e.target.value);
        setRangevalMiles((e.target.value / 1.609344).toFixed(1));
        
        
        setSmsInfo({
          ...smsInfo,
          [e.target.name]: value
        });
      }

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
                <input name='coords' className='text' type='text' onChange={changeHandler} value={smsInfo.coords} />
                {/* show on map? with radius indicator */}
                {/* <GeoCoder /> */}
            </div>
            <div className='Distance col'>
                <label className='label'>Slide to choose a notification radius</label>
               
               <div className='slide-container'>
                <input name='distance' className='slider' type="range" min='1' max='100' value={rangeval} onChange={handleChangeSlider} />
               </div>

               <br />
               <h4 id='distance-label'>{rangeval} Kilometers / {rangevalMiles} Miles</h4>

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
