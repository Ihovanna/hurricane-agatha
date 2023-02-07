import "./App.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import Basemap from "./components/Basemap";
import CollapsibleBox from './components/CollapsibleBox';

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
    <>
    <header className='page-header'>
        <h1>Hurricane Agatha 2022: Agua Dulce Damage Assessment</h1>
        Community of Agua Dulce, Oaxaca, Mexico
      </header>
      <div className='page-body'><br/><br/>
        <Basemap householdState={households}></Basemap>
        <br/><br/>
        <CollapsibleBox></CollapsibleBox><br/>
        <CollapsibleBox></CollapsibleBox>
      </div>
    </>
  )
};
export default App;
