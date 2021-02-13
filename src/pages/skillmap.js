import React, { useRef } from 'react'
import '../components/skill-map.scss';
import Layout from '../components/layout';
import Zones from "../images/zones-01.svg";
import Freeland from "../images/freeland.svg";
import TheSea from "../images/the-sea.svg";
import Words from "../images/words.svg";
import CloudLayer from "../images/cloud-layer-01.svg";
import PageTransition from 'gatsby-plugin-page-transitions';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';


const skillMap = () => {
  const defaultBounds = [[-1,-1], [1,1]];

  return (
    <Layout>
      <PageTransition>
      <MapContainer id={"skill-map"}
        center={[0,0]}
        minZoom={11} zoom={13} maxZoom={14} onZoomend={(event) => {console.log("event:", event)}}
        scrollWheelZoom={true}
        maxBounds={[[-0.5, -0.5],[0.75, 0.5]]}
        maxBoundsViscosity={1.0}
      >

        <ImageOverlay url={CloudLayer} zIndex={4} bounds={defaultBounds} />
        <ImageOverlay url={Zones}      zIndex={3} bounds={defaultBounds} />
        <ImageOverlay url={Words}      zIndex={2} bounds={defaultBounds} />
        <ImageOverlay url={Freeland}   zIndex={1} bounds={defaultBounds} />
        <ImageOverlay url={TheSea}     zIndex={0} bounds={defaultBounds} />
        <Marker position={[0.0, 0.0]}>
          <Popup>
            Getting Started
          </Popup>
        </Marker>
        <Marker position={[0.0, 0.01]} className={"completed"}>
          <Popup>
            <iframe title="HTML" width={"560"} height={"315"} src={"https://www.youtube.com/embed/Pr_-AudwsNU"} frameborder={"0"} allow={"autoplay; clipboard-write; encrypted-media; picture-in-picture"} allowfullscreen={true}></iframe>
          </Popup>
        </Marker>
      </MapContainer>
      </PageTransition>
    </Layout>
  )
}

export default skillMap;
