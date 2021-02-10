import React from 'react'
import '../components/skill-map.scss';
import Layout from '../components/layout';
import FreeMap from '../images/test-map.jpg';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet'

const skillMap = () => {
  return (
    <Layout>
      <MapContainer id="skill-map" center={[0, 0]} zoom={15} scrollWheelZoom={false}>
        <ImageOverlay
          url={FreeMap}
          bounds={[
            [-0.1,-0.1],
            [0.1, 0.1]
          ]}/>
        <Marker position={[0.0, 0.0]}>
          <Popup>
            Getting Started
          </Popup>
        </Marker>
        <Marker position={[0.0, 0.01]}>
          <Popup>
            <iframe title="HTML" width={"560"} height={"315"} src={"https://www.youtube.com/embed/Pr_-AudwsNU"} frameborder={"0"} allow={"autoplay; clipboard-write; encrypted-media; picture-in-picture"} allowfullscreen={true}></iframe>
          </Popup>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default skillMap;
