import { useState, useEffect } from 'react';

interface ExternalSearchData {
  ip: string;
  isp: string;
  location: {
    country: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
}

export interface SearchData {
  coordinates: {
    lat: number;
    lng: number;
  };
  info: {
    location: string;
    ip: string;
    isp: string;
    timezone: string;
  };
}

export const useSearch = () => {
  const [data, setData] = useState<SearchData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query: string | null = null) => {
    setData(null);
    setIsLoading(true);
    setError(null);

    const url = '/api/search' + (query ? `?query=${encodeURI(query)}` : '');
    let res;

    try {
      res = await fetch(url);
    } catch (e) {
      console.log(e instanceof Error ? e.message : e);
      setError('Something went wrong.');
    }

    if (res?.ok) {
      const {
        ip,
        isp,
        location: { country, city, lat, lng, postalCode, timezone },
      } = await res.json();

      setData({
        coordinates: { lat, lng },
        info: {
          ip,
          location: `${city}, ${country} ${postalCode}`,
          timezone: `UTC ${timezone}`,
          isp,
        },
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    search();
  }, []);

  return { data, error, isLoading, search };
};
