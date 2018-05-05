import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React, { Component } from 'react'

export class ContainerMap extends Component {

    render() {
        const bounds = new this.props.google.maps.LatLngBounds()
        this.props.containers.forEach(container => {
            bounds.extend({lat: container.lat, lng: container.lon})
        })
        const center = bounds.getCenter().toJSON()
        console.log(center)
        return (
            <Map style={{width:'70vw', heigth:'400px'}} google={this.props.google} initialCenter={center}>
                {this.props.containers.map(container => (<Marker 
                    key={container.containerId} 
                    name={container.containerId} 
                    position={{lat: container.lat, lng: container.lon}}/>))}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDWcxq-wliehCZkjvx-OmkIBc3zcMx4_3Q')
})(ContainerMap)