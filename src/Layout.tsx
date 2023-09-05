import "./Layout.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="page">
      <div className="page_content">
        <div
          className="page_content_item page_content_item--small"
          id="socials"
        >
          <a href="https://www.linkedin.com/in/jacobmacweb/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/jacobmacweb" target="_blank">
            <FaGithub />
          </a>
        </div>
        <main className="page_content_item page_content_item--large">
          {props.children}
        </main>
        <div
          className="page_content_item page_content_item--small"
          id="languages"
        >
          {/* <div className="language">
            <a href="#">
              <img src="https://flagcdn.com/fr.svg" width="32" alt="" />
            </a>
          </div> */}
        </div>
      </div>
      <div className="backdrop">
        <div className="backdrop_overlay"></div>
        <div className="backdrop_background"></div>
        <div className="backdrop_ball-left"></div>
        <div className="backdrop_ball-right"></div>
      </div>
    </div>
  );
}
