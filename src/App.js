import "./App.css";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import Basemap from "./components/Basemap";
import CollapseProject from './components/CollapsibleSections/CollapseProject';
import CollapseHridayaYoga from './components/CollapsibleSections/CollapseHridayaYoga';


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
        Community of Agua Dulce, Santa María Tonameca municipality, Oaxaca, Mexico
      </header>
      <div className='page-body'><br/><br/>
        <Basemap householdState={households}></Basemap>
        <br/><br/>
        <CollapseProject label='About Agua Dulce'></CollapseProject><br/>
        <CollapseHridayaYoga label='About Hridaya Yoga'></CollapseHridayaYoga>
      </div>
    </>
  )
};
export default App;
