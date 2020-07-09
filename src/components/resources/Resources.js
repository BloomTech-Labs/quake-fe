import React, {Fragment} from "react";
import TitleContainer from './titleContainer';
import ResourceCard from './resourceCard';
import ImageRow from './imageRow';
import ListTypePlus from './listTypePlus';
import ListTypeSolid from './listTypeSolid';

import { Drop, Cover, HoldOn, CaneDrop, CaneCover, CaneHoldOn, WalkerLock, WalkerCover, WalkerHoldOn, WheelchairBrake, WheelchairCover, WheelchairHoldOn, STEPLogo, Outdoors, InVehicle, EKit} from './imageImports';

const Resources = () => {
  return (
    <Fragment>
      <section id='intro'>
        <div className='content-container'>
          <h1 className='title'>About 20,000 earthquakes occur every year.</h1>
          <p className='text'>They can happen at any moment, so it’s important to plan accordingly and be prepared for an earthquake at any moment or place.</p>
        </div>
      </section>
      <section id='section-links'>
        <div className='content-container'>
          <h2 className='section-title'>Jump to</h2>
          <div className='links-container'>
            <a href='#indoors' className='link'>Indoors</a>
            <a href='#outdoors' className='link'>Outdoors</a>
            <a href='#in-vehicle' className='link'>In Vehicle</a>
            <a href='#travel-tips' className='link'>Travel Tips</a> 
            <a href='#e-kits' className='link'>E-Kits</a>
            <a href='#step' className='link'>S.T.E.P.</a>
            <a href='#help-signals' className='link'>Help Signals</a>
            <a href='#medical-aid' className='link'>Medical Aid</a>
            <a href='#disaster-help' className='link'>Disaster Help</a>
          </div>
        </div>
      </section>
      <section id='indoors'>
        <TitleContainer title='Indoors:'/>
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>While indoors during an earthquake the best thing to do is find a safe spot <strong>away from windows</strong> preferably on the <strong>1st floor</strong>.</p>
          </div>
          <ImageRow subHeadText='If possible' ImageOne={Drop} altOne='image of person dropping to the floor' ImageTwo={Cover} altTwo='image of person moving under cover' ImageThree={HoldOn} altThree='image of person holding on to cover' />
          <div className='section-text-container'>
            <p className='section-text'><strong>Drop</strong> to your knees.</p>
            <p className='section-text'>Find a safe spot for <strong>cover</strong> such as a table.</p>
            <p className='section-text'>Place hands behind your head and place your head in your lap.
            </p>
            <p className='section-text'><strong>Hold on</strong> to your cover in case it shifts.</p>
          </div>
          <ImageRow subHeadText='Using a cane' ImageOne={CaneDrop} altOne='image of person with cane dropping to the floor' ImageTwo={CaneCover} altTwo='image of person with cane moving under cover' ImageThree={CaneHoldOn} altThree='image of person with cane holding on to cover' />

          <ImageRow subHeadText='Using a walker' ImageOne={WalkerLock} altOne='image of person locking their walker' ImageTwo={WalkerCover} altTwo='image of person sitting on walker and covering their head' ImageThree={WalkerHoldOn} altThree='image of person sitting on walker holding their cover over their head' />

          <ImageRow subHeadText='Using a wheelchair' ImageOne={WheelchairBrake} altOne='image of person on wheelchair putting on their breaks' ImageTwo={WheelchairCover} altTwo='image of person on wheelchair covering their head' ImageThree={WheelchairHoldOn} altThree='image of person on wheelchair holding their cover over their head' />
        </div>
      </section>
      <section id='outdoors'>
        <TitleContainer title='Outdoors:'/>
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>While outdoors during an earthquake</p>
          </div>
          <h3 className='sub-head-text'>Do not try to run inside!</h3>
          <div className='section-text-container'>
            <p className='section-text'><strong>Injury can occur from broken doorways or glass.</strong></p>
            <p className='section-text'>Instead <strong>look for an open area</strong> away from powerlines, buildings, tall structures, and anything else that could be flung around during an earthquake.</p>
            <Outdoors className='outdoor-img' alt='people standing in an open area during an earthquake'/>
            <p className='section-text'><strong>Get into the drop and cover position and wait out the shaking.</strong></p>
          </div>
        </div>
      </section>
      <section id='in-vehicle'>
        <TitleContainer title='In your vehicle:' />
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>Drive to an <strong>open area</strong> free of powerlines, overpasses, or anything that could fall or collapse.</p>
            <InVehicle className='invehicle-img' alt='slow down, pull over, stay inside image representation'/>
            <p className='section-text bigger'><strong>Stay buckled and remain in the car until the quake has ended.</strong></p>
            <p className='section-text'>Check the vehicle for damage as well as the roadway for cracks or tall debris.</p>
          </div>
        </div>
      </section>
      <section id='e-kits'>
        <TitleContainer title='Keep an emergency kit:' />
        <div className='content-container'>
          <div className='section-text-container'>
            <EKit className='ekit-img' alt='emergency kit containing the following items: waterproof bags, non-perishable food, batteries, first aid kit, important documents in sealed bags, flashlight, baby formula, sturdy gloves, portable radio'/>
            <p className='section-text bigger'><strong>An emergency kit can save the day should the worst occur.</strong></p>
            <p className='section-text'>Consider leaving a kit in your house, vehicle, or luggage in an earthquake prone area.</p>
          </div>
          <ListTypePlus />
          <div className='section-text-container'>
            <p className='section-text'>Have <strong>three days</strong> of non-perishable food and water. If traveling try to bring as much as you can fit in a carry-on.</p>
          </div>
        </div>
      </section>
      <section id='step'>
        <TitleContainer title='Sign up for S.T.E.P.'/>
        <div className='content-container'>
          <div className='logo-container'>
            <STEPLogo className='step-logo' alt='Smart Traveler Enrollment Program compony logo'/>
            <a href='https://step.state.gov/' target='_blank' rel='noopener noreferrer' className='resource-link'>Connect to step.state.gov</a>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>Sign up for Smart Traveler Enrollment Program, or STEP, through the Bureau of Consular Affairs. They will send you important emergency information during a disaster.</p>
          </div>
        </div>
      </section>
      {/* <section id='site-tools'>
        <div className='content-container'>
          <div className='resource-link-container'>
            <div className='section-text-container'>
              <p className='section-text'><strong>Consider using the tools on this site to get</strong></p>
            </div> */}
            {/* temp links while pages under construction */}
            {/* <a href='#intro' className='resource-link'>SMS Messenger updates</a>
            <a href='#intro' className='resource-link'>Find locations of shelters nearby</a>
            <a href='#intro' className='resource-link'>Report an event</a>
            <a href='#intro' className='resource-link'>Review the news feed for up-to-date information</a>
          </div>
        </div>

      </section> */}
      <section id='help-signals'>
        <TitleContainer title='Signaling for help:' />
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>During an earthquake, becoming buried under debris is possible.</p>
            <div className='green-message'>
              <p className='green-message-text'>It’s important to learn how to signal for help so rescuers can find you.</p>
            </div>
            <p className='section-text'>Possible signaling techniques:</p>
          </div>
          <ListTypeSolid />
        </div>
      </section>
      <section id='travel-tips'>
        <TitleContainer title='Other travel tips:' />
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>Consider travel insurance to cover possible expenses abroad. Bring cash and copies of important travel documents in case you are forced to evacuate the country.</p>
          </div>
        </div>
      </section>
      <section id='medical-aid'>
        <TitleContainer title='Medical aid:' />
        <div className='content-container'>
          <div className='section-text-container'>
            <p className='section-text'>If you find yourself or anyone injured during an event, refer to these links for medical care.</p>
          </div>
          <div className='resource-link-container'>
            <a href='https://www.osha.gov/' target='_blank' rel='noopener noreferrer' className='resource-link'>OSHA - Occupational Safety and Health Administration</a>
            <a href='https://www.cdc.gov/' target='_blank' rel='noopener noreferrer' className='resource-link'>CDC - Center for Disease Control</a>
            <a href='https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html' target='_blank' rel='noopener noreferrer' className='resource-link'>Red Cross.org Earthquake Safety</a>
            <a href='https://www.fema.gov/media-library-data/1510153676317-82124ab3b0a31ea239f60acc8d46c2ba/FEMA_B-526_Earthquake_Safety_Checklist_110217_508.pdf' target='_blank' rel='noopener noreferrer' className='resource-link'>FEMA - Earthquake Preparedness Form</a>
            <a href='https://www.aarp.org/health/healthy-living/info-10-2012/medical-emergency-preparation.html' target='_blank' rel='noopener noreferrer' className='resource-link'>AARP - Tips to Prepare for Medical Response</a>
          </div>
        </div>
      </section>
      <section id='disaster-help'>
        <TitleContainer title='Disaster Links:' />
        <div className='content-container'>
          <div className='resources-container'>
            <ResourceCard />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Resources;
