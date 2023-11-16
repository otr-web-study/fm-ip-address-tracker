import { type FC } from 'react';

interface InfoItemProps {
  title: string;
  value: string;
  bordered: boolean;
}
export const InfoItem: FC<InfoItemProps> = ({ title, value, bordered }) => {
  return (
    <div className="flex justify-between md:w-full">
      <div className="flex flex-col gap-1 md:gap-3">
        <h2 className="text-center text-[10px] font-bold tracking-[1.5px] text-dark-gray md:text-start md:text-[13px] md:tracking-[1.3px]">
          {title}
        </h2>
        <h3 className="text-center text-xl font-medium md:text-start md:-tracking-[0.2px] lg:text-[26px]">
          {value}
        </h3>
      </div>
      {bordered && <span className="hidden h-[75px] self-center bg-dark-gray pl-[1px] md:inline" />}
    </div>
  );
};
