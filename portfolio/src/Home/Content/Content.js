import React from "react";
import Solve from "../../assets/Solve.png"
import Phones from "../../assets/Phones.PNG"
import QuickStreet from "../../assets/QuickStreet.png"
// import Plantlee from "../../assets/Plantlee.png"
import revitalize from '../../assets/revitalize.png'
import './Content.scss'

export default function Content() {
  return (
    <div className="flex" id="Projects">
      <div className="top">
        <div className="left">
          <div className="upper-left black">
            <div className="centered">
              <h1 >Quick Street</h1>
              <p className="small">
                Quick Street is a platform designed for vendors and lovers of
                food to come together.
              </p>
            </div>

            <img src={QuickStreet} alt='Quest for the best logo'></img>
          </div>
          <div className="center-left black">
            <div className="centered">
              <h1>Plantlee</h1>
              <p className="small">
                Plantlee is an application for building a schedule around
                ensuring that all your plants are watered.{" "}
              </p>
            </div>
            {/* <img src={revitalize}></img> */}
          </div>
        </div>
        <div className="right black">
          <div className="centered">
            <h1>Quest For The Best</h1>
            <p className="small">
              Quest For The Best is a Social challenge platform that encourages
              members of a community to seek out the best available experiences
              in their area.
            </p>
          </div>
          <img src={Phones}></img>
        </div>
      </div>
      <div className="bottom black">
        <div className="centered">
          <h1>Solve Employment</h1>
          <p className="small">
            Solve Employment is a socially responsible freelancing platform that
            helps you grow your business and make a difference.
          </p>
        </div>
        <img src={Solve}></img>
      </div>
    </div>
  );
}
