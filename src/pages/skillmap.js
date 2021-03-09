import React, { Fragment, useState, useRef } from 'react'
import '../components/skill-map.scss';
import Layout from '../components/layout';
import Zones from "../images/zones-01.svg";
import SEO from "../components/seo"
import ZoneText from "../images/zone-text-01.svg";
import SignText from "../images/sign-text-01.svg";
import Signs from "../images/signs-01.svg";
import PageTransition from 'gatsby-plugin-page-transitions';
//import Map from "../components/Map";
//import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

const DEFAULT_BOUNDS = [[-1,-1], [1,1]];

/*
const ZoneOverlay = (props) => {

  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(13);
  const [zoneOpacity, setZoneOpacity] = useState(0.5);
  const [SignsOpacity, setSignsOpacity] = useState(1);

  const mapEvents = useMapEvents({
    zoomend: (event) => {
      setZoomLevel(event.target._zoom);
      switch(event.target._zoom) {
        case 11:
          setZoneOpacity(1);
          setSignsOpacity(0);
          break;
        case 12:
          setZoneOpacity(0.5);
          setSignsOpacity(0.25);
          break;
        case 13:
          setZoneOpacity(0);
          setSignsOpacity(1);
          break;
        default:
          setZoneOpacity(0);
          setSignsOpacity(1);
      }
      console.log('event.target._zoom?:', event.target._zoom );
    }
  });

  console.log("map?:", map);
  console.log("mapEvents['_zoom']??", mapEvents["_zoom"]);

  return (
    <Fragment>
      <ImageOverlay url={ZoneText}   zIndex={5} bounds={DEFAULT_BOUNDS} opacity={zoneOpacity} />
      <ImageOverlay url={Zones}      zIndex={4} bounds={DEFAULT_BOUNDS} opacity={zoneOpacity} />
      <ImageOverlay url={SignText}   zIndex={3} bounds={DEFAULT_BOUNDS} opacity={SignsOpacity} />
      <ImageOverlay url={Signs}   zIndex={2} bounds={DEFAULT_BOUNDS} opacity={SignsOpacity} />
    </Fragment>
  );
} */


const SkillMap = () => {

  return (
    <Layout>
      <SEO title='Skill Map'/>
      <PageTransition>
      </PageTransition>
    </Layout>
  )
}

export default SkillMap;
