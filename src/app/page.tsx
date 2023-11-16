'use client';
import { Header } from '@/app/components/Header';
import { InfoPanel } from './components/InfoPanel';
import { Map } from './components/Map';
import { useSearch } from './hooks/useSearch';
import { YMaps } from '@pbe/react-yandex-maps';

export default function Home() {
  const { data, error, isLoading, search } = useSearch();

  return (
    <>
      <Header onSearch={search} />
      <main className="relative">
        <InfoPanel data={data} error={error} isLoading={isLoading} />
        <YMaps query={{ lang: 'en_RU' }}>
          <Map coordinates={data?.coordinates} />
        </YMaps>
      </main>
    </>
  );
}
