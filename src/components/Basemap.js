import { PropTypes, useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import InfoBox from "./InfoBox";
// import { collection, query, where, onSnapshot } from 'firebase/firestore';
// import db from '../firebase';
import CustomMarker from "../images/cottage_FILL0_wght400_GRAD0_opsz48.svg";
import redHome from "../images/redHome.svg";
import yellowHome from "../images/yellowHome.svg";
import greenHome from "../images/greenHome.svg";

function Basemap(props) {
  const [selectedHome, setSelectedHome] = useState("");

  // console.log(props.householdState);
  const householdsAppState = props.householdState;

  // householdsAppState.map((thing) =>
  //   console.log(thing.data.family, thing.data.SDoH)
  // );

  const { isLoaded } = useJsApiLoader({
    id: "175d9416e532b683",
    googleMapsApiKey: "AIzaSyApWfuqlJ5YGQb-wiFoCzpNIQYi13pQxj8",
  });

  const containerSize = {
    width: "700px",
    height: "500px",
  };

  const mapCenter = {
    //Capilla de Agua Dulce (modified)
    lat: 15.76723133,
    lng: -96.639,
  };

  function markerColor(scaleValue) {
    if (scaleValue === 3) {
      return greenHome;
    } else if (scaleValue === 2) {
      return yellowHome;
    } else if (scaleValue === 1) {
      return redHome;
    } else {
      return CustomMarker;
    }
  }

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapTypeId="satellite"
          mapContainerStyle={containerSize}
          center={mapCenter}
          zoom={15}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          {householdsAppState.map((marker) => {
            return (
              <Marker
                key={marker.id}
                position={{
                  lat: marker.data.latitude,
                  lng: marker.data.longitude,
                }}
                options={{ icon: markerColor(marker.data.SDoH) }}
                onClick={() => {
                  // setSelectedHome("");
                  setSelectedHome(marker);
                  console.log(selectedHome);
                }}
              >
                <InfoBox homeInfo={marker}></InfoBox>;
              </Marker>
            );
          })}
          ;
          {/* 
                <InfoWindow
                  position={{
                    lat: selectedHome.data.latitude,
                    lng: selectedHome.data.longitude
                  }}
                  onClose={setSelectedHome(null)}>
                    <p>RANDOM TEXT</p>
                  </InfoWindow> */}
          {/* <InfoBox>
                  <p>text</p>
                <InfoBox/> */}{" "}
          */}
        </GoogleMap>
      </>
    )
  );
  // );
}

Basemap.propTypes = {
  // householdState: PropTypes.any.isRequired
};

export default Basemap;
