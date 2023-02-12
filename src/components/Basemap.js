import { PropTypes, useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindowF,
} from "@react-google-maps/api";
import InfoWindowContent from "./InfoWindowContent";
import CustomMarker from "../images/cottage.svg";
import redHome from "../images/redHome.svg";
import yellowHome from "../images/yellowHome.svg";
import greenHome from "../images/greenHome.svg";
import church from "../images/church.svg";
import school from "../images/school.svg";
import agriculture from "../images/agriculture.svg";
import water from "../images/water.svg";
import medical from "../images/medical.svg";

function Basemap(props) {
  const [selectedHome, setSelectedHome] = useState();
  const [center, setCenter] = useState({ lat: 15.76723133, lng: -96.639 });
  const [mapStyling, setMapStyling] = useState("");

  const householdsAppState = props.householdState;

  const { isLoaded } = useJsApiLoader({
    id: "175d9416e532b683",
    googleMapsApiKey: "AIzaSyApWfuqlJ5YGQb-wiFoCzpNIQYi13pQxj8",
  });

  const containerSize = {
    width: "850px",
    height: "550px",
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

  function otherBuilding(buildingType) {
    if (buildingType === "agriculturalLand") {
      return agriculture;
    } else if (buildingType === "chapel") {
      return church;
    } else if (buildingType === "clinic") {
      return medical;
    } else if (buildingType === "school") {
      return school;
    } else if (buildingType === "well1" || buildingType === "well2") {
      return water;
    } else {
      return CustomMarker;
    }
  }

  function homeOrElse(scaleValue, buildingType) {
    if (scaleValue) {
      return markerColor(scaleValue);
    } else if (buildingType) {
      return otherBuilding(buildingType);
    }
  }

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapTypeId={mapStyling}
          mapContainerStyle={containerSize}
          center={center}
          zoom={17}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
            maxZoom: 20,
            minZoom: 15,
            restriction: {
              latLngBounds: {
                north: 15.774,
                south: 15.7599,
                east: -96.629,
                west: -96.652
              }
            }
          }}
          onTilesLoaded={() => {
            setCenter(null);
            setMapStyling("satellite");
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
                options={{ icon: homeOrElse(marker.data.SDoH, marker.id) }}
                onClick={() => {
                  setSelectedHome(marker);
                  console.log(marker);
                }}
              ></Marker>
            );
          })}
          ;
          {selectedHome && (
            <InfoWindowF
              position={{
                lat: selectedHome.data.latitude,
                lng: selectedHome.data.longitude,
              }}
              options={{
                pixelOffset: new window.google.maps.Size(0, -35),
              }}
              onCloseClick={() => setSelectedHome("")}
            >
              <InfoWindowContent currentHome={selectedHome} />
            </InfoWindowF>
          )}
        </GoogleMap>
      </>
    )
  );
  // );
}

// Basemap.propTypes = {
//   householdState: PropTypes.object
// };

export default Basemap;
