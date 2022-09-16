import React from "react";
import "./Home.css";
import image from "../assets/Vector.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Home = () => {
  return (
    <div div className="home">
      <section className="landing-page">
        <div className="contain">
          <h1>
            Hi, I am John,
            <br /> Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam <br /> consequat sunt nostrud amet.
          </p>
          <button className="btn">Download Resume</button>
        </div>
        <div className="image-block">
          <img src={image} alt="" />
        </div>
      </section>
      <section className="posts">
        <div className="contain">
          <p>Recent posts</p>
          <p>view all</p>
        </div>
        <div className="card-block">
          <div className="card">
            <h3>Making a design system from scratch</h3>
            <div className="date">
              <p>12 Feb 2020</p> <div className="line"></div>
              <p>Design,Pattern</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="card">
            <h3>Creating pixel perfect icons in Figma</h3>
            <div className="date">
              <p>12 Feb 2020</p> <div className="line"></div>
              <p>Figma,Icon Desgin</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
      <section className="features">
        <p>Featured Works</p>
        <div className="featured-card">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="featured_card-contain">
            <h1>Designing Dashboards</h1>
            <div className="date">
              <p>2020</p>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="featured-card">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="featured_card-contain">
            <h1>Vibrant Portraits of 2020</h1>
            <div className="date">
              <p>2018</p>
              <p>Illustration</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="featured-card">
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <div className="featured_card-contain">
            <h1>36 Days of Malayalam type</h1>
            <div className="date">
              <p>2018</p>
              <p>Typography</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
