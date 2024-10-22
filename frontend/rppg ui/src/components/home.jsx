import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./home.css";
import { useNavigate } from 'react-router-dom';


import runAnimations, { allLinks, allFunctions } from "../scripts";
const Home = () => {
  useEffect(() => {
    runAnimations();
  }, []);
 

  return (
    <div className="parent-div ">
      <div className="desktop--1-112 pos-abs">
        <div className="image-122 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/806d/ec88/acaebac42054b683f4bf24ff44888141?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vm75GDKAo~gBIVPNVeNHaQGXhbBf5PnBFNRESQiVNcFn87UGEkKs7oIsDayOijdBHQiGa9O2noBE0QDtbEtbftkxFO~qFzuEOyyaO7T3alIvUPtv70MietXounH55wkJLyvBptkB3RP-q36NOg0CO-JJzeH1do73wHsT4KJEr7nP~BbxQ49hYanulCG8KLJtlqzGk7eHqRunN63FUe4UOO3fEXA1-fEnWDntAOc9pcOlbHxpYTeStzGnI0EgY4xwiMKkz4u3oBsahYxeMwlVt-8RmZ2PU8OhEtcmEaBqTDuPF55uVbOxzeeT7-nNWBi9S2sV5iyP-SiV275s9tpqzA__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-122 "
            alt="122-ALT"
          />{" "}
        </div>

        <div className="deepfake-113 pos-abs">
          <span className="deepfake-113-0">{'THE REAL EYE'}</span>
        </div>

        <div className="httpslottiefile-120 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/cfe5/b2f2/786dbc69ed7809d5e2b8de517e30b97d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnCYuOXhUO-XkADT0vH7QN256s2RI~L-YSPAt-RcXTXpTkEy2GVp7ZPZWQ5aFt5Nf5NA8V2ydJ8t3R7U85H6YEqDRPlSCtvY96o671Lpg1-btjg0tWKClAdwRKtaWdbAHr0m4k7gEVYMCMJx5wsHG58sKjIx0rfK27or3RUxXGOipAsq~embrKChyCjA2E6H9Vy24nschNDcwaT5B12hrbShecZq1Xax6CMgp45ecBGeIKGr-OhduHtWlFG~WsgX4PNeU6X-cc-zsk7B5heZ2Iq8SvPWAwcZk9m1m7-U12DkIV4saoxGsENMDT-hS69nSU4R7tWIiO~FT6czZsLdMQ__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-120 "
            alt="120-ALT"
          />{" "}
        </div>

        <div className="home-133 pos-abs">
          <span className="home-133-0">{'Home'}</span>
        </div>

        <div className="about-us-121 pos-abs">
          <span className="about-us-121-0">{'About Us'}</span>
        </div>

        <div className="detect-expose-p-124 pos-abs">
          <span className="detect-expose-p-124-0">{`Detect, Expose, Prevent: Your Defense 
Against Deepfakes


`}</span>
        </div>

        <div className="line-7-125 pos-abs"></div>

        <div className="line-6-119 pos-abs"></div>
        <div className="using-advanced--127-container pos-abs">
          <div className="property-1defau-13 pos-abs" id="id-13">
            <div className="using-advanced--14 pos-abs" id="id-14">
              <span className="using-advanced--14-0">{` Using advanced algorithms, we provide real-time
 verification empowering the users to trust what 
 they see.`}</span>
            </div>
          </div>
        </div>

        <div className="httpslottiefile-123 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/642f/5f12/a48961589eb817a334ec70f4753c4001?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpH~5lXbFGGgu6ofGzCfRXpJfD1RA59ur0w5wu7nwSE6DfsuTWQZp012vyjEXfK5zTRx6JpLH7pOOMyhbQMRkQhj6-~x4vrv5HtdLMpmlzCWw0EzpiGBcwg0jcXAf2S2O9w9badCYiVgSypg~zhZhjdP6eihv71ErUC6jIYqG5BCUi~hP3kimd91WSpcWJsGyW0jJ9OGzNpAmM-W2K5n4VhaCVdkQmCKrHv9nqzvdRW1VY5kGP6r6WkZL4n5p7GWMH0pgmVFM768rFAxXBddv5hxywhjQ7niOOU2TbQxqTYRzFZjc~7Yj1uHAnQ7Dw77zhGAOY70Mdi-G8mdcZPM9g__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-123 "
            alt="123-ALT"
          />{" "}
        </div>

        <div className="line-1-114 pos-abs"></div>

        <div className="line-4-116 pos-abs"></div>

        <div className="line-2-118 pos-abs"></div>

        <div className="line-3-117 pos-abs"></div>

        <div className="line-5-115 pos-abs"></div>
        <div className="component-1-130-container pos-abs">
          <div className="property-1recta-18 pos-abs" id="id-18">
            <div className="rectangle-21-111 pos-abs" id="id-111"></div>

            <div className="rectangle-1-19 pos-abs" id="id-19"></div>
          </div>
        </div>

        <div className="lets-begin-131 pos-abs" style={{ cursor: 'pointer' }}>
  <a href="/upload" className="lets-begin-131-0" style={{ textDecoration: 'none', color: 'inherit' }}>
    {'LET’S BEGIN'}
  </a>
</div>


         
        <div className="follow-us-126 pos-abs">
          <span className="follow-us-126-0">{`FOLLOW US `}</span>
        </div>

        <div className="twitter-132 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/0734/0b68/45ef29631e4157e42edbe647753f57af?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qy1yI1XGOvMB11ou04oSTwNr9MYr-SFPTWFTY0WeF8ipkoU4jNOXJtK6RiA9y3as2SjY~p7VIYnCN-9mS~w6iB4C7FGxHqlC9zSkzdTOM5XGmMoPfnp8dWvLU7ay4jVMuugI~8SvtmvBKyAzZAUJjWmONbtIniNLIa7C340mWOPfAom8xlm63xSAyWoVXGWnFtpbWvXDEhzGAY~rpVNfVplWkZIXojNvlPPPR6DzYwB19c31WIrqN7uzjsRjBYH0KlSmB0rZ9znXXdf-5e65dIrYbhx3KXH6rOSmeUFl3dCrOz-U7yDro3FnXhPCyNbHw8h-MmEhly2-r-IVdv0pQQ__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-132 "
            alt="132-ALT"
          />{" "}
        </div>

        <div className="instagram-128 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/094b/0127/d702b288dda138bbfa9dfa85f7971b59?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFWNLcmQ4iK~6G-EJKxABmrphbuHgSvjli6ZXggS0FKC95cmEDjElLNZlAIIVBMZ4pEafXAmlhmgZfiRg~usURJcENVVe-X9ABxIz~fmCr7t9bx9PQu-mZfSLpI6mSOGz4pyPs03TvGcp8hLkVyRuJgry5ZbOIWwqxuFpjKC1FMQadlBMeQqtnAs7e2toEOftE3A~6qbRSMplAtj1PBdBJs07v0wE710NWtWDOayKry1Q2sbCfBshAI7qv0Ax0kOrtz6Er4JqOwbZzFRZFeZB7NR47aCcT-6dVlvJboqm7xqYlfmMGFiSPz5xB~-k1H7zc9RX1KDYehnSQ-Jh7e1ow__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-128 "
            alt="128-ALT"
          />{" "}
        </div>

        <div className="linkedin-129 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/8d73/9da6/08191081cb3c91f0b98e31eb46e7c042?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lfLCSpHFbrgSLRQdANvXcJh8VadvkloB0hA4CEh3p4QpRDSALOmJobQeH96wUBxe5spPMvYnUBrNBY2sWaqh0NH4CuskraVRSnl~TKAp159ec6v5Roow9~Gug0CIoeCzkooz0YRcJvA1-w6zfU-A8RUOaZSqg5FPKKAltdo5Shu6D2OC8K0~sceD6hg85gsmPcHZMu955LdibfjoTS2xxAkndcqZquFWZ11876vmlzG2wBv5I55NDIecbxvore~Ln7V6wNLUoB5cRAwYfNM8B~lfUylujsVs08MwSBl3wJYVNBt3a2bH3GNa7NBPpoz4gH~FfDZdmw1CBFcLvHXgEg__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-contain nodeBg-129 "
            alt="129-ALT"
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default Home;