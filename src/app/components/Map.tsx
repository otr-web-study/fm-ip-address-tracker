import { type FC, useRef, useEffect } from 'react';
import { useYMaps } from '@pbe/react-yandex-maps';

interface MapProps {
  coordinates:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
}
export const Map: FC<MapProps> = ({ coordinates }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const ymaps = useYMaps(['Map']);

  useEffect(() => {
    if (!ymaps || !mapRef.current || !coordinates) {
      return;
    }

    const { lat, lng } = coordinates;

    new ymaps.Map(mapRef.current, {
      center: [lat, lng],
      zoom: 10,
    });
  }, [ymaps, coordinates]);

  return <div ref={mapRef} className="w-full"></div>;
};
