import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import bus from '../../assets/bus.jpg'

const items = [
  {
    id: 1,
    title: "Online Food Ordering System",
    img: "https://www.restroapp.com/blog/wp-content/uploads/2020/03/online-food-ordering-statistics-RestroApp.jpg",
    desc: "Developed an Online Food Ordering System for the college canteen as a mini project to streamline meal ordering and reduce wait times. The system features secure user registration, an interactive menu with detailed food item information, and real-time order tracking. Additionally, created an admin panel for efficient menu management, order history viewing.  This project significantly improved the efficiency and user experience of the canteen services.",
    link: "https://github.com/AKHIL-JOSE-10/Online-_Food_website",
  },
  {
    id: 2,
    title: "Jyothi Bus Management System",
    img: bus,
    desc: "Worked collaboratively to develop a Bus Management System for our college, enhancing transportation logistics and efficiency. The system comprises three panels: one for students and staff to view bus info ,booking and make payments, another for bus coordinators to manage real-time bus tracking and logistics, and a third for college administrators to oversee operations and maintenance. This project significantly improved the efficiency of our college's transportation services.",
    link: "https://github.com/AKHIL-JOSE-10/College_Bus_Management_System"
  },
  {
    id: 3,
    title: "EMIT Web App",
    img: "https://www.earthdata.nasa.gov/s3fs-public/2023-05/emit_iss_dust_graphic_art.png?VersionId=gdBCBAyV0U69IOdEPDTD64cBflQe7i1h",
    desc: " Participated in NASA's Hackathon and led the development of EMIT, a web app facilitating real-time Earth condition updates sourced from NASA's official data. EMIT empowers scientists to publish and access critical environmental data, fostering global collaboration and advancing Earth sciences.",
    link: "https://github.com/AKHIL-JOSE-10/EMIT_for_the_future"
  },
  {
    id: 4,
    title: "Travel Blog Web App",
    img: "https://i.pinimg.com/736x/f7/f7/92/f7f79214754fd978fb267cdcb9e87b41.jpg",
    desc: "Created a travel blog app during an internship organized by ICT Academy at our college. This app serves as a platform for travelers to share their experiences, discover new destinations, and connect with fellow enthusiasts. It showcases a user-friendly interface for posting articles, sharing photos, and interacting with a community passionate about travel exploration. This project highlights my dedication to practical learning and passion for developing engaging digital experiences.",
    link: "https://github.com/AKHIL-JOSE-10/ictProject"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 style={{fontSize:"70px"}}>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
