import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import pic from "../Images/pic.jpg";
import clickSound from "../Images/click1.wav"; // ✅ Import click sound
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;

    // Play the sound and then navigate after a short delay
    audio.play()
      .then(() => {
        setTimeout(() => {
          navigate("/latestworks");
        }, 200); // Delay to let sound play
      })
      .catch((err) => {
        console.error("Autoplay issue or error playing sound:", err);
        navigate("/latestworks"); // Fallback if sound fails
      });
  };

  return (
    <div className="home-container">
      <motion.div
        className="content"
        initial={{ opacity: 1, rotateY: -80 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="main-section">
          <motion.div className="text-section">
            <p>
              HI, I'M <span>GOPU SPOORTHI</span>
            </p>
            <h1>I'M A WEB DEVELOPER</h1>
            <p className="description">
              I love turning ideas into reality through elegant and functional web applications.
            </p>
            <motion.button
              onClick={handleButtonClick}
              className="btn btn-outline-light"
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY PROJECTS
            </motion.button>
          </motion.div>

          <motion.div
            className="image-section"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={pic} alt="Profile" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
