import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/map.png';

const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    padding-top: 10rem;
    margin-left: 200px;
    margin-right: 200px;
    .container{
        position: relative;
        min-height: 400px;
        padding-top: 10px;
    }
    .map__card{
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        
        background: gray;
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
`;

export default function Map(){

    return(
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here is me</h3>
                    <h4>GEC circle, Oklahoma City, Oklahoma</h4>
                    <a href="https://goo.gl/maps/Bn1f6at9Fadjv2Bk7" width="640" height="480" target="_blank" rel="noreferrer">Open in Google Map</a>
                </div>
            </div>
        </MapStyles>
    )
}