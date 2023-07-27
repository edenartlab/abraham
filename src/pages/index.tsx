import React, { useCallback, useEffect, useContext } from 'react';
// import MainPageContent from "./MainPageContent";
import type { NextPage } from "next";
import Head from "next/head";
import "antd/dist/reset.css";



function Abraham(props) {
  return (
    <div className="home-wrapper">
      <div id="abe">
        <video playsInline autoPlay loop muted>
          <source src="/abraham.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="info-wrapper">
        {/* <div id="mission">An artist in the cloud...</div> */}

        <div id="description">
          Abraham is an open project to create an{' '}
          <a href="https://medium.com/@genekogan/artist-in-the-cloud-8384824a75c7">autonomous artificial artist</a>
        </div>

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Abraham />
    </div>
  );
};

export default Home;
