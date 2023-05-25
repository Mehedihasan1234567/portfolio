import logo from "../assets/logo.png";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navber = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" height={100} width={200} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                services
              </a>
            </li>

            <li>
              <a className="nav-link text-white" href="#">
                how work
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navber;
