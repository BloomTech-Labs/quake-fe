import React, { useState } from 'react';

const Sms = () => {

    const twilioPost = e => {
        alert(`Phone: ${smsInfo.cell}, Co-ords: ${smsInfo.coords}, Distance: ${smsInfo.distance}`)
        
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
    <div className="main-container no-scroll">
      <main className="sms-main">
        <form id='myForm' onSubmit={twilioPost}>
            <div className='Phone col'>
                <label className='label'>Your Phone Number</label>
                <input type='text' name='cell' placeholder='+1 ' onChange={changeHandler} value={smsInfo.name} required/>
            </div>
            <div className='Coords'>
                <label className='label'>Coordinates</label>
                <textarea name='coords' placeholder='[-75.343, 39.984]' onChange={changeHandler} value={smsInfo.coords} />
            </div>
            <div className='Distance'>
                <label className='label'>Notification Distance in km</label>
                <textarea name='distance' placeholder='10' required onChange={changeHandler} value={smsInfo.distance} />
            </div>
            <div className='btn-container'>
                <button className='btn' type='submit'>Setup Notifications</button>
            </div>
        </form>
      </main>
    </div>
  );
};

//US numbers only? Check Twilio

export default Sms;
