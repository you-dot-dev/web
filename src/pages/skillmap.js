import React from 'react'
import '../components/skill-map.scss';
import Layout from '../components/layout';
import Freeland from "../images/freeland.svg";
import TheSea from "../images/the-sea.svg";
import Words from "../images/words.svg";
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import PageTransition from 'gatsby-plugin-page-transitions';

const skillMap = () => {
  const defaultBounds = [[-1,-1], [1,1]];

  return (
    <Layout>
      <PageTransition>
      <MapContainer id={"skill-map"}
        center={[0,0]}
        minZoom={10} zoom={13} maxZoom={14}
        scrollWheelZoom={true}
        maxBounds={defaultBounds}
        maxBoundsViscosity={1.0}
      >

        <ImageOverlay url={Words} zIndex={2} bounds={defaultBounds} />
        <ImageOverlay url={Freeland} zIndex={1} bounds={defaultBounds} />
        <ImageOverlay url={TheSea}   zIndex={0} bounds={defaultBounds} />
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
