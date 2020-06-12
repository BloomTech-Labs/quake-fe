import React, {Fragment} from "react";
import Header from '../partials/Header'
import { ReactComponent as Drop } from "../images/drop.svg";
import { ReactComponent as Cover } from "../images/cover.svg";
import { ReactComponent as HoldOn } from "../images/holdon.svg";
import { ReactComponent as CaneDrop } from "../images/cane-drop.svg";
import { ReactComponent as CaneCover } from "../images/cane-cover.svg";
import { ReactComponent as CaneHoldOn } from "../images/cane-holdon.svg";
import { ReactComponent as WalkerLock } from "../images/walker-lock.svg";
import { ReactComponent as WalkerCover } from "../images/walker-cover.svg";
import { ReactComponent as WalkerHoldOn } from "../images/walker-holdon.svg";
import { ReactComponent as WheelchairBrake } from "../images/wheelchair-brake.svg";
import { ReactComponent as WheelchairCover } from "../images/wheelchair-cover.svg";
import { ReactComponent as WheelchairHoldOn } from "../images/wheelchair-holdon.svg";
import { ReactComponent as TriangleUp } from "../images/triangle-up.svg";
import { ReactComponent as BulletPlus } from "../images/bullet-plus.svg";
import { ReactComponent as BulletSolid } from "../images/bullet-solid.svg";
import { ReactComponent as STEPLogo } from "../images/STEP-logo.svg";
import FEMALogo from "../images/fema-logo.jpg";
import RedCrossLogo from "../images/red-cross-logo.jpg";
import SalvationArmyLogo from "../images/salvation-army-logo.jpg";
import EarthquakeShelterLogo from "../images/earthquake-shelter-logo.jpg";


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
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Indoors:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>While indoors during an earthquake the best thing to do is find a safe spot <strong>away from windows</strong> preferably on the <strong>1st floor</strong>.</p>
          </div>
          <h3 className='sub-head-text'>If possible</h3>
          <div className='img-row'>
            <Drop className='safety-step-img' alt='image of person dropping to the floor'/>
            <Cover className='safety-step-img' alt='image of person moving under cover'/>
            <HoldOn className='safety-step-img' alt='image of person holding on to cover'/>
          </div>
          <div className='section-text-container'>
            <p className='section-text'><strong>Drop</strong> to your knees.</p>
            <p className='section-text'>Find a safe spot for <strong>cover</strong> such as a table.</p>
            <p className='section-text'>Place hands behind your head and place your head in your lap.
            </p>
            <p className='section-text'><strong>Hold on</strong> to your cover in case it shifts.</p>
          </div>
          <h3 className='sub-head-text'>Using a cane</h3>
          <div className='img-row'>
            <CaneDrop className='safety-step-img' alt='image of person with cane dropping to the floor'/>
            <CaneCover className='safety-step-img' alt='image of person with cane moving under cover'/>
            <CaneHoldOn className='safety-step-img' alt='image of person with cane holding on to cover'/>
          </div>
          <h3 className='sub-head-text'>Using a walker</h3>
          <div className='img-row'>
            <WalkerLock className='safety-step-img' alt='image of person locking their walker'/>
            <WalkerCover className='safety-step-img' alt='image of person sitting on walker and covering their head'/>
            <WalkerHoldOn className='safety-step-img' alt='image of person sitting on walker holding their cover over their head'/>
          </div>
          <h3 className='sub-head-text'>Using a wheelchair</h3>
          <div className='img-row'>
            <WheelchairBrake className='safety-step-img' alt='image of person on wheelchair putting on their breaks'/>
            <WheelchairCover className='safety-step-img' alt='image of person on wheelchair covering their head'/>
            <WheelchairHoldOn className='safety-step-img' alt='image of person on wheelchair holding their cover over their head'/>
          </div>
        </div>
      </section>
      <section id='outdoors'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Outdoors:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>While outdoors during an earthquake</p>
          </div>
          <h3 className='sub-head-text'>Do not try to run inside!</h3>
          <div className='section-text-container'>
            <p className='section-text'><strong>Injury can occur from broken doorways or glass.</strong></p>
            <p className='section-text'>Instead <strong>look for an open area</strong> away from powerlines, buildings, tall structures, and anything else that could be flung around during an earthquake.</p>
            <p className='section-text'><strong>Get into the drop and cover position and wait out the shaking.</strong></p>
          </div>
        </div>
      </section>
      <section id='in-vehicle'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>In your vehicle:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>Drive to an <strong>open area</strong> free of powerlines, overpasses, or anything that could fall or collapse.</p>
            <p className='section-text'><strong>Stay buckled and remain in the car until the quake has ended.</strong></p>
            <p className='section-text'>Check the vehicle for damage as well as the roadway for cracks or tall debris.</p>
          </div>
        </div>
      </section>
      <section id='e-kits'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Keep an emergency kit:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'><strong>A kit can save the day should the worst occur.</strong></p>
            <p className='section-text'>Consider leaving a kit in your house, car, or luggage in a earthquake prone area.</p>
          </div>
          <ul className='list-type-plus'>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Bandages</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Gauze</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Antiseptic</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Pain relievers (ibuprofen)</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Space blanket</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Dust mask</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Working gloves</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Comfortable walking shoes</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Flashlight</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Whistle or noise-maker to call for help</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Bottled water</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Canned food</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Large food storage bags</li>
            <li className='list-item'><BulletPlus className='bullet-plus'/> Colored paper or markers to mark areas safe to walk over</li>
          </ul>
          <div className='section-text-container'>
            <p className='section-text'>Have <strong>three days</strong> of non-perishable food and water. If traveling try to bring as much as you can fit in a carry-on.</p>
          </div>
        </div>
      </section>
      <section id='step'>
        <div className='content-container'>
          <div className='title-container large-title'>
            <h2 className='section-title'>Sign up for S.T.E.P. and Faultline Notifications</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='logo-container'>
            <STEPLogo className='step-logo' alt='Smart Traveler Enrollment Program compony logo'/>
            <a href='https://step.state.gov/' target='_blank' rel='noopener noreferrer' className='resource-link'>Connect to step.state.gov</a>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>Sign up for Smart Traveler Enrollment Program, or STEP, through the Bureau of Consular Affairs. They will send you important emergency information during a disaster.</p>
          </div>
        </div>
      </section>
      <section id='site-tools'>
        <div className='content-container'>
          <div className='resource-link-container'>
            <div className='section-text-container'>
              <p className='section-text'><strong>Consider using the tools on this site to get</strong></p>
            </div>
            <a href='#' className='resource-link'>SMS Messenger updates</a>
            <a href='#' className='resource-link'>Find locations of shelters nearby</a>
            <a href='#' className='resource-link'>Report an event</a>
            <a href='#' className='resource-link'>Review the news feed for up-to-date information</a>
          </div>
        </div>

      </section>
      <section id='help-signals'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Signaling for help:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>During an earthquake, becoming buried under debris is possible.</p>
            <div className='green-message'>
              <p className='green-message-text'>It’s important to learn how to signal for help so rescuers can find you.</p>
            </div>
            <p className='section-text'>Possible signaling techniques:</p>
          </div>
          
          <ul className='list-type-solid'>
            <li className='list-item'><BulletSolid className='bullet-solid'/>Blow on a whistle in bursts of three until help arrives.</li>
            <li className='list-item'><BulletSolid className='bullet-solid'/>Flick a light on and off until help arrives.</li>
            <li className='list-item'><BulletSolid className='bullet-solid'/>Shine a flashlight in a dark area.</li>
            <li className='list-item'><BulletSolid className='bullet-solid'/>Yell loudly.</li>
            <li className='list-item'><BulletSolid className='bullet-solid'/>Tap on piping or other objects that can carry sound.</li>
          </ul>
        </div>
      </section>
      <section id='travel-tips'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Other travel tips:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='section-text-container'>
            <p className='section-text'>Consider travel insurance to cover possible expenses abroad. Bring cash and copies of important travel documents in case you are forced to evacuate the country.</p>
          </div>
        </div>
      </section>
      <section id='medical-aid'>
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Medical aid:</h2>
            <div className='jump-link-container'>
              <a href='#intro' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
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
        <div className='content-container'>
          <div className='title-container'>
            <h2 className='section-title'>Disaster Links:</h2>
            <div className='jump-link-container'>
              <a href='#disaster-help' className='jump-link'>
                <TriangleUp className='triangle-up' />
                <p className='jump-text'>Back to top</p>
              </a>
            </div>
          </div>
          <div className='resources-container'>
            <div className='resource-card'>
              <img src={FEMALogo} className='resource-logo' alt='Federal Emergency Management Agency logo'/>
              <h4 className='resource-name'>FEMA - Greater LA Area</h4>
              <p className='resource-phone'>Phone: <span className='resource-highlight'>231-549-2345</span></p>
              <p className='resource-email'>Email: <span className='resource-highlight'>helpnow@fema.org</span></p>
              <a href='http://www.fema.gov' target='_blank' rel='noopener noreferrer' className='resource-highlight website'>http://www.fema.gov</a>
            </div>
            <div className='resource-card'>
              <img src ={RedCrossLogo} className='resource-logo' alt='American Red Cross logo'/>
              <h4 className='resource-name'>American Red Cross - LA</h4>
              <p className='resource-phone'>Phone: <span className='resource-highlight'>231-549-2345</span></p>
              <p className='resource-email'>Email: <span className='resource-highlight'>helpnow@redcross.org</span></p>
              <a href='http://www.recross.org' target='_blank' rel='noopener noreferrer' className='resource-highlight website'>http://www.recross.org</a>
            </div>
            <div className='resource-card'>
              <img src={SalvationArmyLogo} className='resource-logo' alt='Salvation Army logo'/>
              <h4 className='resource-name'>Salvation Army - Greater LA</h4>
              <p className='resource-phone'>Phone: <span className='resource-highlight'>231-549-2345</span></p>
              <p className='resource-email smaller'>Email: <span className='resource-highlight'>help@salvationarmyusa.org</span></p>
              <a href='http://www.salvationarmyusa.org' target='_blank' rel='noopener noreferrer' className='resource-highlight website smaller'>http://www.salvationarmyusa.org</a>
            </div>
            <div className='resource-card'>
              <img src={EarthquakeShelterLogo} className='resource-logo' alt='Emergency Shelters logo'/>
              <h4 className='resource-name'>LA Emergency Shelters</h4>
              <p className='resource-phone'>Phone: <span className='resource-highlight'>231-549-2345</span></p>
              <p className='resource-email smaller'>Email: <span className='resource-highlight'>help@salvationarmyusa.org</span></p>
              <a href='http://www.salvationarmyusa.org' target='_blank' rel='noopener noreferrer' className='resource-highlight website smaller'>http://www.salvationarmyusa.org</a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Resources;
