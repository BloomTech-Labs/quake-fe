import React from 'react';
import ImageRow from "../imageRow";
import TitleContainer from "../titleContainer";

import {
  Drop,
  Cover,
  HoldOn,
  CaneDrop,
  CaneCover,
  CaneHoldOn,
  WalkerLock,
  WalkerCover,
  WalkerHoldOn,
  WheelchairBrake,
  WheelchairCover,
  WheelchairHoldOn,
} from "../imageImports";

const toggleClass = () => {
  document.querySelector('#indoors .content-container').classList.toggle('closed');
  document.querySelector('#indoors .triangle-up').classList.toggle('closed');
}

const Indoors = () => {
	return (
		<section id='indoors'>
			<TitleContainer title='Indoors:' customClickEvent={toggleClass}/>
			<div className='content-container closed'>
				<div className='section-text-container'>
					<p className='section-text'>
						While indoors during an earthquake the best thing to do is find a safe spot{' '}
						<strong>away from windows</strong> preferably on the{' '}
						<strong>1st floor</strong>.
					</p>
				</div>
				<ImageRow subHeadText='If possible'
					ImageOne={Drop} altOne='image of person dropping to the floor'
					ImageTwo={Cover} altTwo='image of person moving under cover'
					ImageThree={HoldOn} altThree='image of person holding on to cover'/>
				<div className='section-text-container'>
					<p className='section-text'><strong>Drop</strong> to your knees.</p>
					<p className='section-text'>Find a safe spot for <strong>cover</strong> such as a table.</p>
					<p className='section-text'>Place hands behind your head and place your head in your lap.</p>
					<p className='section-text'><strong>Hold on</strong> to your cover in case it shifts.</p>
				</div>
				<ImageRow subHeadText='Using a cane'
					ImageOne={CaneDrop} altOne='image of person with cane dropping to the floor'
					ImageTwo={CaneCover} altTwo='image of person with cane moving under cover'
					ImageThree={CaneHoldOn} altThree='image of person with cane holding on to cover' />
				<ImageRow subHeadText='Using a walker'
					ImageOne={WalkerLock}	altOne='image of person locking their walker'
					ImageTwo={WalkerCover} altTwo='image of person sitting on walker and covering their head'
					ImageThree={WalkerHoldOn} altThree='image of person sitting on walker holding their cover over their head'/>
				<ImageRow subHeadText='Using a wheelchair'
					ImageOne={WheelchairBrake} altOne='image of person on wheelchair putting on their breaks'
					ImageTwo={WheelchairCover} altTwo='image of person on wheelchair covering their head'
					ImageThree={WheelchairHoldOn} altThree='image of person on wheelchair holding their cover over their head' />
			</div>
		</section>
	);
};

export default Indoors;
