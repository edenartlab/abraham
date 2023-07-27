import React from 'react';

// // CSS
// import styled from 'styled-components';

// const FrontPageStyles = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
//   height: 100vh;
//   .home-wrapper {
//     display: flex;
//     flex: 1;
//     flex-direction: column;
//     justify-content: center;
//   }
//   #loading-bar {
//     padding: 8px 0;
//     border-width: 10px 0 0;
//     border-top-style: solid;
//     border-image: linear-gradient(139deg, #2f0541, #9d01ff, #7521c1, #2ab0ff) 3;
//   }
//   #abe {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 0 16px;
//     width: auto;
//   }
//   #abe video {
//     width: 100%;
//   }
//   #mission,
//   #description {
//     text-align: left;
//     line-height: 1.25;
//     padding: 0 16px;
//     width: auto;
//   }
//   #mission,
//   #description,
//   #social {
//     font-size: 24px;
//     font-weight: 600;
//   }
//   #mission {
//     margin-top: 24px;
//   }
//   #description {
//     margin-bottom: 6px;
//   }
//   #cta {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     padding: 16px 16px 0 16px;
//   }
//   button.scripture-link,
//   button.creations-link {
//     /* border-radius: 3px; */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   button.scripture-link {
//     /* background-color: #14133a; */
//     /* color: white; */
//   }
//   button.creations-link {
//     margin-top: 8px;
//     /* color: #14133a; */
//     /* border: 1px solid #14133a; */
//   }
//   .scripture-link a,
//   .creations-link a {
//     font-size: 18px;
//     font-weight: 600;
//   }
//   #social {
//     margin-top: 20px;
//     display: flex;
//     width: 100%;
//     max-width: 600px;
//   }
//   #social ul {
//     display: flex;
//     flex: 1;
//     padding: 0;
//     align-items: flex-end;
//     justify-content: space-around;
//     list-style-type: none;
//   }
//   @media (min-width: 40em) {
//     .home-wrapper {
//       max-width: 600px;
//     }
//     #abe video {
//       max-width: 600px;
//     }
//     #cta {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;
//     }
//     #mission {
//       margin-top: 100px;
//     }
//   }
//   @media (min-width: 60em) {
//   }
//   @media (min-width: 80em) {
//   }
// `;

function App(props) {
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


export default App;
