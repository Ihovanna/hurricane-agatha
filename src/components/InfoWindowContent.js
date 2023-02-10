import { PropTypes } from "react";
import './InfoWindowContent.css';

function InfoWindowContent(props) {
  const singleMother = () => {
    if (props.currentHome.data.singleMother === true) {
      return "(single mother)";
    }
  };

  const allBuildings = () => {
    if (props.currentHome.id === 'agriculturalLand') {
        return props.currentHome.data.buildingType
    } else if (props.currentHome.id === 'chapel') {
        return props.currentHome.data.buildingType
    } else if (props.currentHome.id === 'clinic') {
        return props.currentHome.data.buildingType
    } else if (props.currentHome.id === 'school') {
        return props.currentHome.data.buildingType
    } else if (props.currentHome.id === 'well1' || props.currentHome.id === 'well2') {
        return props.currentHome.data.buildingType
    } else if (props.currentHome.id === '1' ||
              props.currentHome.id === '2' || 
              props.currentHome.id === '3' ||
              props.currentHome.id === '4' ||
              props.currentHome.id === '5' ||
              props.currentHome.id === '6' ||
              props.currentHome.id === '7' ||
              props.currentHome.id === '8' ||
              props.currentHome.id === '9' ||
              props.currentHome.id === '10' ||
              props.currentHome.id === '11' ||
              props.currentHome.id === '12' ||
              props.currentHome.id === '13' ||
              props.currentHome.id === '14' ||
              props.currentHome.id === '15' ||
              props.currentHome.id === '16' ||
              props.currentHome.id === '17' ||
              props.currentHome.id === '18' ||
              props.currentHome.id === '19' ||
              props.currentHome.id === '20' ||
              props.currentHome.id === '21' ||
              props.currentHome.id === '22' ||
              props.currentHome.id === '23' ||
              props.currentHome.id === '24' ||
              props.currentHome.id === '25' ||
              props.currentHome.id === '26' ||
              props.currentHome.id === '27' ||
              props.currentHome.id === '28' ||
              props.currentHome.id === '29' ||
              props.currentHome.id === '30' ||
              props.currentHome.id === '31' ) {

        return (
          <div id="household-info">
            <h2 className="window-title">
              {props.currentHome.data.family} household
            </h2>

            <b>Head of household:</b> {props.currentHome.data.hoh} {singleMother()}{" "}
            <br />
            <br />
            <b>Household size:</b> {props.currentHome.data.householdSize}
            <li>
              <b>Children: </b>
              {props.currentHome.data.children}
            </li>
            <li>
              <b>Elders: </b>
              {props.currentHome.data.elders}
            </li>
            <li>
              <b>Members with disabilities: </b>
              {props.currentHome.data.handicap}
            </li>
            <br />
            <b>Income source:</b> {props.currentHome.data.incomeSource}
            <br />
            <b>Home condition:</b> {props.currentHome.data.homeCondition}
            <br />
        </div>
      )
    }
  };

  return allBuildings()
};

export default InfoWindowContent;
