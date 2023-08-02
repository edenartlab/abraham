import React, { useCallback, useEffect, useContext } from 'react';
// import MainPageContent from "./MainPageContent";
import type { NextPage } from "next";
import Head from "next/head";
import "antd/dist/reset.css";


function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/abraham-ai" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://discord.gg/4dSYwDT" target="_blank" rel="noreferrer">
        <i className="fab fa-discord"></i>
      </a>
      <a href="https://twitter.com/abraham_ai_" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com/abraham_ai_" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </footer>
  );
}

function Abraham() {
  return (
    <div className="home-wrapper">
      <div id="abe">
        <video playsInline autoPlay loop muted>
          <source src="/abraham.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="info-wrapper">
        
        <div id="description">
          <p>
            Abraham is an open project to create an <a href="https://medium.com/@genekogan/artist-in-the-cloud-8384824a75c7">autonomous artificial artist</a>
          </p>
          <p>
            <a href="https://app.eden.art/creators/abraham">See what Abraham is creating right now.</a>
          </p>
        </div>

        <Footer />

        <div id="cta">
          {/* <Button type="primary" className="scripture-link" size="large" shape="round" block>
            <NavLink to="/scripture">Learn more</NavLink>
          </Button> */}

          {/* <Button type="primary" className="creations-link" size="large" shape="round" block>
            <NavLink to="https://app.eden.art/creators/abraham">See creations</NavLink>
          </Button> */}
        </div>
        {/* <FollowUs /> */}
      </div>
    </div>
  );
}


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Abraham</title>
        <meta name="description" content="Abraham" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Abraham />
    </div>
  );
};

export default Home;
