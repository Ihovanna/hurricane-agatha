import { InfoWindow } from "@react-google-maps/api";
import { PropTypes } from "react";

function InfoBox(props) {
const singleMother = () => {
  if (props.homeInfo.data.singleMother === true) {
    return '(single mother)'
  }
};

  return(

    <InfoWindow position={{
      lat: props.homeInfo.data.latitude,
      lng: props.homeInfo.data.longitude
    }}
      options={{
        pixelOffset: new window.google.maps.Size(0, -35)
      }}>
      <div id='household-info'>
        <b className='window-title'>{props.homeInfo.data.family} household</b><br/><br/>
        <b>Head of household:</b> {props.homeInfo.data.hoh} {singleMother()} <br/><br/>
        <b>Household size:</b> {props.homeInfo.data.householdSize}
          <li><b>Children: </b>{props.homeInfo.data.children}</li>
          <li><b>Elders: </b>{props.homeInfo.data.elders}</li>
          <li><b>Members with disabilities: </b>{props.homeInfo.data.handicap}</li><br/>
        <b>Income source:</b> {props.homeInfo.data.incomeSource}<br/>
        <b>Home condition:</b> {props.homeInfo.data.homeCondition}<br/>

      </div>


    </InfoWindow>
  )
};

export default InfoBox;