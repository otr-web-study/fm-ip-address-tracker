import { useState, useEffect } from 'react';

interface SearchData {
  ip: string;
  isp: string;
  location: {
    country: string;
    city: string;
    region: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
}

export const useSearch = () => {
  const [data, setData] = useState(null);
};
