import { type FC } from 'react';
import { InfoItem } from './InfoItem';
import type { SearchData } from '../hooks/useSearch';

interface InfoPanelProps {
  data: SearchData | null;
  error: string | null;
  isLoading: boolean;
}
export const InfoPanel: FC<InfoPanelProps> = ({ data, error, isLoading }) => {
  return (
    <div className="absolute -top-[134px] left-1/2 z-10 grid w-[90%] max-w-[1110px] -translate-x-1/2 transform grid-cols-1 justify-items-center gap-6 rounded-2xl bg-white px-8 py-7 md:-top-20 md:grid-cols-4 md:justify-items-start md:py-9">
      {isLoading && <h2 className="min-h-[100px] text-center text-xl">Loading...</h2>}
      {error && <h2 className="min-h-[100px] text-center text-xl">{error}</h2>}
      {data &&
        Object.entries(data.info).map(([key, value], idx, { length }) => (
          <InfoItem
            key={key}
            title={key === 'ip' ? 'IP ADDRESS' : key.toUpperCase()}
            value={value}
            bordered={idx < length - 1}
          />
        ))}
    </div>
  );
};
