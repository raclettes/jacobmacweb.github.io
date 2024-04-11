import React from "react";
import Layout from "./Layout";
import "./App.css";
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <Layout>
      <div className="content">
        <div className="content_profile">
          <img
            src={`https://avatars.githubusercontent.com/u/19372006?v=${Date.now()}`}
            className="content_profile_image"
            alt="logo"
          />
          <h1 className="content_profile_name">Jacob MacKenzie-Websdale</h1>
          <h4 className="content_profile_title">
            {/*Lead Developer at{" "}
            <a
              href="https://and-element.com/"
              className="content_profile_title_link"
            >
              <span className="text">&Element</span>
  </a>*/}
            Senior Software Developer
          </h4>
        </div>
        <div className="content_description">
          <div className="content_description_text">
            <p>
              I am a <strong>full-stack software developer</strong> currently
              based in Switzerland (canton of Valais) who specialises in React, Node.js
              (often with Express), dev-ops, and with skills and experience in
              Python and Rust.
            </p>
            {/*<p>
               am currently working as a Lead Developer at{" "}
              <a href="https://and-element.com/">
                <span className="text">&Element</span>
              </a>
              , a digital agency based in Colchester, UK.
              
              Day-to-day, I manage
              projects for my workplace, communicating between management and
              employees, scoping out projects and estimating tasks, eventually
              handing work over to my team and reviewing ongoing work. I strive
              to create code that we can be proud of, ensuring that it follows
              best practices and company set standards as well as being
              intuitive and easy to use.
            </p>*/}
            <p>
              I believe in sensible and creative user experience, providing the
              user with rapid interfaces with little response time, whether it
              be analytical dashboards or simple landing pages.
            </p>
          </div>
          <div className="content_description_viewmore">
            {/* <a href="#" className="content_description_viewmore_link">
              <span className="text content_description_viewmore_link_text">
                Want to checkout my skills?
              </span>
              ---&gt;
            </a> */}
            <p>
              Thank you for visiting my website. There's more to come soon{" "}
              <FaHeart />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
