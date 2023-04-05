import React from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Home.module.css";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";
import seven from "../../assets/images/seven.png";
import eight from "../../assets/images/eight.png";

const images = [one, two, three, four, five, six, seven, eight];
const Home = () => {
  return (
    <div>
      <div className={classes.Home}>
        <div className={classes.Carousel}>
          <Carousel interval={1000}>
            {images.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
