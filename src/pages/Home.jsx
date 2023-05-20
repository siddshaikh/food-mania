import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyle.css'
import Homebg from '../images/Homebg.jpg'
const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Homebg})`,
       backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
      >
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to={"/menu"}>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
