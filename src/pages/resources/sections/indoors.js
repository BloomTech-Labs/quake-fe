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

const subImageRow = [
	{text: 'Using a cane', imgOne: CaneDrop, altOne: 'image of person with cane dropping to the floor', imgTwo: CaneCover,  altTwo: 'image of person with cane moving under cover', imgThree: CaneHoldOn, altThree: 'image of person with cane holding on to cover'},
	{text: 'Using a walker', imgOne: WalkerLock, altOne: 'image of person locking their walker', imgTwo: WalkerCover,  altTwo: 'image of person sitting on walker and covering their head', imgThree: WalkerHoldOn, altThree: 'image of person sitting on walker holding their cover over their head'},
	{text: 'Using a wheelchair', imgOne: WheelchairBrake, altOne: 'image of person on wheelchair putting on their breaks', imgTwo: WheelchairCover,  altTwo: 'image of person on wheelchair covering their head', imgThree: WheelchairHoldOn, altThree: 'image of person on wheelchair holding their cover over their head'},
]

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
						<strong className='bold'>away from windows</strong> preferably on the{' '}
						<strong className='bold'>1st floor</strong>.</p>
				</div>
				<ImageRow subHeadText='If possible' ImageOne={Drop} altOne='image of person dropping to the floor' ImageTwo={Cover} altTwo='image of person moving under cover' ImageThree={HoldOn} altThree='image of person holding on to cover'/>
				<div className='section-text-container'>
					<p className='section-text'><strong className='bold'>Drop</strong> to your knees.</p>
					<p className='section-text'>Find a safe spot for <strong className='bold'>cover</strong> such as a table.</p>
					<p className='section-text'>Place hands behind your head and place your head in your lap.</p>
					<p className='section-text'><strong className='bold'>Hold on</strong> to your cover in case it shifts.</p>
				</div>
				{subImageRow.map((row, index) => {return(
						<ImageRow subHeadText={row.text} key={index} ImageOne={row.imgOne} altOne={row.altOne} ImageTwo={row.imgTwo} altTwo={row.altTwo} ImageThree={row.imgThree} altThree={row.altThree}/>
				)})}
			</div>
		</section>
	);
};

export default Indoors;
