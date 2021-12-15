import React, { useEffect } from "react";
import aboutimg from "../images/aboutUs.jpg";
import stats from "../images/bg-stats.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/signin");
    }
  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <div>
      <form method="GET"></form>
      <div id="aboutus" className="about_con">
        <div className="about_left">
          <h1>About NGO Foundation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            impedit voluptatum architecto eaque eveniet explicabo in, tempora
            voluptates odio exercitationem natus fuga dolore ratione corporis
            quae optio, officiis a. Inventore porro, ex deleniti cumque dolorem
            eaque adipisci officia totam, ratione, quibusdam iure sapiente!
            Omnis illo quas officiis labore totam inventore.
          </p>
        </div>
        <div className="about_right">
          <img src={aboutimg} alt="about" />
        </div>
      </div>
      <img src={stats} alt="about" style={{ width: "100%" }} />
    </div>
  );
};
export default About;
