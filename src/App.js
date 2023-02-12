import "./App.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import ReactPlayer from 'react-player';
import db from "./firebase";
import Basemap from "./components/Basemap";
import AboutAgatha from "./components/AboutAgatha";
import CollapseProject from "./components/CollapsibleSections/CollapseProject";
import CollapseHridayaYoga from "./components/CollapsibleSections/CollapseHridayaYoga";
import CollapseAguaDulce from "./components/CollapsibleSections/CollapseAguaDulce";

function App() {
  const [households, setHouseholds] = useState([]);

  function getData() {
    const subjectData = collection(db, "Agua Dulce Households");

    getDocs(subjectData)
      .then((response) => {
        const household = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setHouseholds(household);
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // console.log(households);
    // console.log(...households);
  }, [households]);

  return (
    <div className="container">

      <div className="page-header ">
        <h1>Hurricane Agatha 2022: Agua Dulce Damage Assessment</h1>
        <div id="sub-title">
        Community of Agua Dulce, Santa María Tonameca municipality, Oaxaca,
        Mexico
        </div>
      </div>

      <br />
      <br />

      <div className="page-body">
        <br />
        <br />
        <Basemap className="map" householdState={households}></Basemap>
        <AboutAgatha className="about-agatha"></AboutAgatha>
        <br />
        <br />
      </div>

      <br />
      <br />

      <div className="all-collapsibles">
        <CollapseProject
          className="about-project"
          label="About this project"
        ></CollapseProject>
        <CollapseAguaDulce
          id="about-agua-dulce"
          label="About Agua Dulce"
        ></CollapseAguaDulce>
        <CollapseHridayaYoga
          id="about-hridaya"
          label="About Hridaya Yoga"
        ></CollapseHridayaYoga>
      </div>

      <div className='info-videos'>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=VPCEXVVzWMY&embeds_euri=https%3A%2F%2Fhridaya-yoga.com%2F&embeds_origin=https%3A%2F%2Fhridaya-yoga.com&source_ve_path=MjM4NTE&feature=emb_title'
          width='530px'
          height='298px'/>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=IPFdlfSO5EA&embeds_euri=https%3A%2F%2Fhridaya-yoga.com%2F&embeds_origin=https%3A%2F%2Fhridaya-yoga.com&source_ve_path=MzY5MjU&feature=emb_imp_woyt'
          width='530px'
          height='298px'/>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className='footer'>
        <div className='more-info'>
          <ul>
            <a href="https://hridaya-yoga.com/">
              <b>Hridaya Yoga's site</b>
            </a>
          </ul>
          <ul>
            <a href="https://hridaya-yoga.com/community-development/">
              <b>Community Development Department</b>
            </a>
          </ul>
          <ul>
            <a href="https://hridaya-yoga.com/hurricane-agatha/"> 
              <b>United for Oaxaca campaign</b>
            </a>
          </ul>
        </div>
        <small>A project by Ihovanna Huezo. All intellectual content is property of Hridaya Yoga.</small>
      </footer>

    </div>
  );
}
export default App;
