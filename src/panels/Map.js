import React from 'react';
import PropTypes from 'prop-types';
const DG = require('2gis-maps');
/**
 <script src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"></script>
<link rel="stylesheet" href="https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/MarkerCluster.css" />
<link rel="stylesheet" href="https://2gis.github.io/mapsapi/vendors/Leaflet.markerCluster/MarkerCluster.Default.css" />
 */
class Map{
    /*
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "";
        script.async = true;
    
        document.body.appendChild(script);
    } */
    render(){
        <div id="map"></div>
    }
}
Map.propTypes={
    //center:PropTypes.array.isRequired
};
export default Map;