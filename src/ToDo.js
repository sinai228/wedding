// import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import main from './assets/main.png';
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

import './ToDo.css';



function ToDo() {

  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    // console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY + 300;
    const stickyClass = scrollTop >= 350 ? "is-sticky" : "";
    setSticky(stickyClass);
    // console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;
  const { t, i18n } = useTranslation("common");

  return (
    <div className="ToDo" >
      <header className={classes}>
        <header className="navbar">
          <ul>
            <li><NavLink activeClass="active"
              to="/" >{t('menu.totop')}</NavLink></li>
            <li><NavLink activeClass="active"
              to="/story" >{t('menu.story')}</NavLink></li>
            <li><a href="https://www.amazon.com/wedding/share/youngraksinai"
              rel="noreferrer" className="visited" target="_blank">{t('menu.reg')}</a></li>
            <li><NavLink activeClass="active"
              to="/todo" >{t('menu.todo')}</NavLink></li>
            {/* Simple locale switcher */}
            {/* <button onClick={() => i18n.changeLanguage("en-US")}>
              ENG
        </button>
            <button onClick={() => i18n.changeLanguage("kr-KR")}>
              KOR
        </button> */}
            {/*
            <select name="lang" id="lang">
              <option value="en-US">{t('buttons.en')}</option>
              <option value="kr">{t('buttons.kr')}</option>
            </select> */}

          </ul>
        </header>
      </header>
      <Fade bottom delay={1000}>

        <div className="body">
          <div id="home" className="border" style={{
            backgroundImage: `url(${main})`, height: '400px'
          }}>
          </div>
          <div className="padding-10">

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is the timeline for the day?
        </AccordionSummary>
                <AccordionDetails>
               Ceremony will start at 11:30am, reception will be at around 12:45pm-3pm. Please come to the venu at least 30 minutes prior(11 AM) to the start of the ceremony if you'd like to take pictures with the bride!
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                   What is the dress code?
        </AccordionSummary>
                <AccordionDetails>
                 Semi-formal Please wear what looks best on you!
                </AccordionDetails>
              </Accordion>
               <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                   Can I bring a plus one?
        </AccordionSummary>
                <AccordionDetails>
                  Unfortunately, we are at capacity and cannot accommodate more guests on the big day, so please accept our sincere apologies! We’re looking forward to celebrating with you soon, though!
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                   Can I bring children?
        </AccordionSummary>
                <AccordionDetails>
                  If we haven't specifically mentioned it to you, unfortunately, we are at capacity and cannot accommodate more guests on the big day, so please accept our sincere apologies! 
                </AccordionDetails>
              </Accordion>
                    <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                   What is the dress code?
        </AccordionSummary>
                <AccordionDetails>
                 Semi-formal, just a notch below cocktail. Please wear what looks best on you! (all events will be indoors)
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Will food be served?
                 </AccordionSummary>
                <AccordionDetails>
                  Yes, lunch will be served from 1pm. Please eat breakfast before you come, so you don't end up hangry
                 </AccordionDetails>
              </Accordion> 
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                   Where can I park? 
                 </AccordionSummary>
                <AccordionDetails>
                   You'll have plenty of parking at the venue, and at the restaurant where reception will be held.
                </AccordionDetails>
              </Accordion> 
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                    What if I have dietary restrictions?
                 </AccordionSummary>
                <AccordionDetails>
                   Please let the bride/groom know.
                </AccordionDetails>
              </Accordion>
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                    How do I RSVP?
                 </AccordionSummary>
                <AccordionDetails>
                   We sure hope you'll be able to join us for your special day. Please RSVP by 3/4/24 by letting either the bride/groom know.
                </AccordionDetails>
              </Accordion>     
                     <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                     Is it an open bar?
                 </AccordionSummary>
                <AccordionDetails>
                   There will be a cash bar at the reception so please plan on bringing cash if you'd like.
                </AccordionDetails>
              </Accordion> 
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Any recommendations for some things to do before/after the wedding?
        </AccordionSummary>
                <AccordionDetails>
                    <div>Cafe</div>
                  <p>La Ventana Cafe</p>
                  <p>White Wolf Pattiesierre</p>
                  <p>Tous Les Jours</p>
                  <p>Cannelle Patisserie</p>
                  <p>Drifter Coffee</p>
                  <p>Kresge Court</p>
                  <p>Gathering Coffee Co.</p>
                  <p>The Congregation</p>
                  <p>Premium Matcha Cafe Maiko</p>
                  <div>Restaurants</div>
                  <p>BBQ Chicken </p>
                  <p>Noori Pocha</p>
                  <p>Birmingham Sushi Cafe</p>
                  <p>Noori Pocha</p>
                  <p>Asian Express</p>
                  <p>Noble Fish</p>
                  <p>Sushi Hana</p> 
                  <p>Detroit Shipping Company</p>
                  <p>Tienda Mexicana</p>
                  <p>Satay House</p>
                  <p>Frita Batidos</p>
                  <p>Marsa</p>
                   <div>
                    Downtown
                  </div>
                  <p>Eastern Market</p>
                  <p>Belle Ille</p>
                  <p>Detroit Riverfront</p>
                  <p>Campus Martius Park</p>
                  <p>Detroit Institute of Arts</p>
                  <div>
                    Parks
                  </div>
                  <p>Innovation Hills</p>
                  <p>Cranbrook House and Gardens</p>
                  <div>
                    Shopping
                  </div>
                  <p>IKEA</p>
                  <p>Somerset Collection</p>
                  <p>Greater Lakes Outlet</p>
                </AccordionDetails>
                <AccordionActions>
                  <Button>Cancel</Button>
                  <Button>Agree</Button>
                </AccordionActions>
              </Accordion>
            </div>
          </div>



        </div>
      </Fade>
      {/* <button onClick={() => i18n.changeLanguage('kr')}>{t('buttons.kr')}</button>
      <button onClick={() => i18n.changeLanguage('en')}>{t('buttons.en')}</button> */}
     <p> Copyright © 2024 Sinai Youngrak. All Rights Reserved</p>
    </div >
  );
}

export default ToDo;
