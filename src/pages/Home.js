import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import pic from "../Images/pic.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">

        <div className="main-section">
          <div className="text-section">
            <p>HI, I'M <span>GOPU SPOORTHI</span></p>
            <h1>I'M A WEB DEVELOPER</h1>
            <p className="description">
              I love turning ideas into reality through elegant and functional web applications.
            </p>
            <button onClick={() => navigate("/latestworks")} className="btn btn-outline-light">
              VIEW MY PROJECTS
            </button>
          </div>

          <div className="image-section">
            <img src={pic} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
