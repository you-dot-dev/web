import React from 'react'
import '../components/skill-map.scss';
import Layout from '../components/layout';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const skillMap = () => {
  return (
    <Layout>
      <MapContainer id="skill-map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default skillMap;
