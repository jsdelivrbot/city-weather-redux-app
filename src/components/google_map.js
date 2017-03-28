import React, { Component } from 'react';

class GoogleMap extends Component {
    // gets called automatically after the component is rendered
    componentDidMount() {
        // creating an embedded Google Map for the app
        // It takes a reference to a HTML node/element where we want to render the map to
        new google.maps.Map(this.refs.map, {
            zoom: 12, // zoom level
            center: { // tells google maps where we want to center
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // now we can use this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;