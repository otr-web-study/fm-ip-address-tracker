'use client';
import dynamic from 'next/dynamic';
import { Header } from '@/app/components/Header';
import { InfoPanel } from '@/app/components/InfoPanel';
import { useSearch } from '@/app/hooks/useSearch';

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

export default function Home() {
  const { data, error, isLoading, search } = useSearch();

  return (
    <>
      <Header onSearch={search} />
      <main className="relative">
        <InfoPanel data={data} error={error} isLoading={isLoading} />
        <Map coordinates={data?.coordinates} />
      </main>
    </>
  );
}
