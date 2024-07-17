import "./Hero.scss";
import Akhil from '../assets/Akhil.jpg';
import ResumePDF from '../assets/AKHIL-JOSE(Resume).pdf'; 
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(ResumePDF); 
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AKHIL JOSE</motion.h2>
          <motion.h2 variants={textVariants}>
            Software Engineer
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.a 
              href="https://github.com/AKHIL-JOSE-10?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </motion.a>
            <motion.button variants={textVariants} onClick={handleDownloadResume}>
              Download Resume
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src=''
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer
      </motion.div>
      <div className="imageContainer">
        <img style={{ borderRadius: '40px' }} src={Akhil} alt="" />
      </div>
    </div>
  );
};

export default Hero;
