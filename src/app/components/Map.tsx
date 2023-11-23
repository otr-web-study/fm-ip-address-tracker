'use client';
import { type FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { type LngLat } from '@yandex/ymaps3-types';

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker } =
  reactify.module(ymaps3);

const { YMapZoomControl } = reactify.module(await ymaps3.import('@yandex/ymaps3-controls@0.0.1'));

interface MapProps {
  coordinates:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
}

const Map: FC<MapProps> = ({ coordinates }) => {
  if (!coordinates) return null;

  const location = { center: [coordinates.lng, coordinates.lat], zoom: 13 };

  return (
    <YMap location={location} className="min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-280px)]">
      <YMapControls position="left">
        <YMapZoomControl />
      </YMapControls>

      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      <YMapMarker coordinates={location.center as LngLat} zIndex={1}>
        <div className="relative h-[56px] w-[46px]">
          <Image src="/icon-location.svg" alt="location" fill />
        </div>
      </YMapMarker>
    </YMap>
  );
};

export default Map;
