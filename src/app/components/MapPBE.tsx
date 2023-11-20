// import { type FC, useRef, useEffect } from 'react';
// import { useYMaps, YMaps } from '@pbe/react-yandex-maps';

// const MAP_KEY = process.env.MAP_API_KEY ?? '';

// interface MapProps {
//   coordinates:
//     | {
//         lat: number;
//         lng: number;
//       }
//     | undefined;
// }

// export const Map: FC<MapProps> = ({ coordinates }) => {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const ymaps = useYMaps(['Map']);

//   useEffect(() => {
//     if (!ymaps || !mapRef.current || !coordinates) {
//       return;
//     }

//     const { lat, lng } = coordinates;

//     new ymaps.Map(mapRef.current, {
//       center: [lat, lng],
//       zoom: 10,
//     });
//   }, [ymaps, coordinates]);

//   return <div ref={mapRef} className="w-full"></div>;
// };

// export const MapContainer: FC<MapProps> = (props) => {
//   return (
//     <YMaps query={{ lang: 'en_RU', apikey: MAP_KEY }}>
//       <div className="h-full w-full">
//         <Map {...props} />
//       </div>
//     </YMaps>
//   );
// };
