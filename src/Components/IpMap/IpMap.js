import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import iconLocation from "../../assets/icon-location.svg";
import classes from "./IpMap.module.css";
// import "leaflet/dist/leaflet.css";
import "./leaflet.css";
import ChangeView from "./ChangeView";

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: iconLocation,
    iconSize: _iconSize,
  });
}

const IpMap = ({ ipData }) => {
  // console.log(ipData);
  const {
    location: { lng, lat },
  } = ipData;

  const center = [lat, lng];
  const zoom = 12;

  return (
    <section className={classes.mapContainer}>
      {center && (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
          <ChangeView center={center} zoom={zoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]} icon={GetIcon(35)}></Marker>
        </MapContainer>
      )}
    </section>
  );
};

export default IpMap;
