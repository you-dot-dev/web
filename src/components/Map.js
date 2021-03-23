import React, { Fragment, useState, useRef } from 'react'
import '../components/skill-map.scss';
import Zones from "../images/zones-01.svg";
import ZoneText from "../images/zone-text-01.svg";
import Terrain from "../images/terrain-01.svg";
import Freeland from "../images/freeland-01.svg";
import TheSea from "../images/the-sea.svg";
import SignText from "../images/sign-text-01.svg";
import Signs from "../images/signs-01.svg";
import CloudLayer from "../images/cloud-layer-01.svg";
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

const DEFAULT_BOUNDS = [[-1,-1], [1,1]];

const ZoneOverlay = (props) => {

  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(13);
  const [zoneOpacity, setZoneOpacity] = useState(0);
  const [signOpacity, setSignOpacity] = useState(1);

  const mapEvents = useMapEvents({
    zoomend: (event) => {
      setZoomLevel(event.target._zoom);
      switch(event.target._zoom) {
        case 11:
          setZoneOpacity(1);
          setSignOpacity(0);
          break;
        case 12:
          setZoneOpacity(0.5);
          setSignOpacity(0.5);
          break;
        case 13:
          setZoneOpacity(0);
          setSignOpacity(1);
          break;
        default:
          setZoneOpacity(0);
          setSignOpacity(1);
      }
      console.log('event.target._zoom?:', event.target._zoom );
    }
  });

  console.log("map?:", map);
  console.log("mapEvents['_zoom']??", mapEvents["_zoom"]);

  return (
    <Fragment>
      <ImageOverlay url={ZoneText}   zIndex={6} bounds={DEFAULT_BOUNDS} opacity={zoneOpacity} />
      <ImageOverlay url={Zones}      zIndex={5} bounds={DEFAULT_BOUNDS} opacity={zoneOpacity} />
      <ImageOverlay url={SignText}   zIndex={4} bounds={DEFAULT_BOUNDS} opacity={signOpacity} />
      <ImageOverlay url={Signs}      zIndex={3} bounds={DEFAULT_BOUNDS} opacity={signOpacity} />
    </Fragment>
  );
}


const Map = ({children}) => {

  if (typeof window !== "undefined") {
    return (
      <MapContainer id={"skill-map"}
        center={[0.04, -0.02]}
        minZoom={11} zoom={13} maxZoom={15}
        scrollWheelZoom={false}
        maxBounds={[[-0.5, -0.5],[0.75, 0.5]]}
        maxBoundsViscosity={1.0}
      >
        <ZoneOverlay />
        <ImageOverlay url={CloudLayer} zIndex={10} bounds={DEFAULT_BOUNDS} />
        <ImageOverlay url={Freeland}   zIndex={1}  bounds={DEFAULT_BOUNDS} />
        <ImageOverlay url={TheSea}     zIndex={0}  bounds={DEFAULT_BOUNDS} />
        { children }
      </MapContainer>
    );
  } else {
    return null;
  }
}

export default Map;
