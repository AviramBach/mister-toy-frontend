import React from "react";
import GoogleMapReact from 'google-map-react';
import { useState } from "react";

const TelAvivStore = ({ text }) => <div>{text}</div>;
const HaderaStore = ({ text }) => <div>{text}</div>;
const BatYamStore = ({ text }) => <div>{text}</div>;

export function GoogleMaps() {

    const [coordinates, setCoordinates] = useState({ lat: 32, lng: 34.7 })
    const [zoom, setZoom] = useState(8)


    function handleClick({ lat, lng }) {
        setCoordinates({ lat, lng })
    }

     function handleClickStore(storeBranch) {
        let lat, lng

        if (storeBranch === 'tel') {
            lat = 32.088065
            lng = 34.789584
        }
        if (storeBranch === 'had') {
            lat = 32.437351
            lng = 34.921077
        }
        if (storeBranch === 'bat') {
            lat = 32.017245
            lng = 34.745293
        }

        setCoordinates({ lat, lng });
        setZoom(15)
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '100%' }}>
            { <button onClick={ () => handleClickStore('tel')}>Tel-Aviv</button>}
            { <button onClick={ () => handleClickStore('had')}>Hadera</button>}
            { <button onClick={ () => handleClickStore('bat')}>Bat Yam</button>}
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA_SPSnYN0EPFpVp2SvWFXy_O3fMBmweLc" }}
                center={coordinates}
                zoom={zoom}
                onClick={handleClick}
            >
                <TelAvivStore
                    lat={32.088065}
                    lng={34.789584}
                    text="MisterToy store 🎁"
                />
                <HaderaStore
                    lat={32.437351}
                    lng={34.921077}
                    text="MisterToy store 🎁"
                />
                <BatYamStore
                    lat={32.017245}
                    lng={34.745293}
                    text="MisterToy store 🎁"
                />


            </GoogleMapReact>
        </div>
    );
}