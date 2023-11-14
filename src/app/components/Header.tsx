import { useState } from 'react';

interface HeaderProps {
  onSearch: (addr: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchString, setSearchString] = useState('');

  return (
    <header className="flex min-h-[300px] flex-col items-center gap-[23px] bg-mobile bg-cover px-6 pt-[26px] md:min-h-[280px] md:gap-[28px] md:bg-desktop md:pt-[30px]">
      <h1 className="text-[25px] font-medium tracking-[0.25px] text-white md:text-[31px] md:font-bold md:tracking-normal">
        IP Address Tracker
      </h1>
      <form
        className="flex w-full max-w-[555px] items-center gap-2 overflow-hidden rounded-[15px] bg-white pl-6"
        onSubmit={() => onSearch(searchString)}
      >
        <input
          className="min-w-[50px] flex-grow text-lg outline-none"
          value={searchString}
          onChange={(evt) => setSearchString(evt.target.value)}
          placeholder="Search for any IP address or domain"
        />
        <button
          type="submit"
          className="bg-very-dark-gray bg-icon-arrow bg-center bg-no-repeat p-[29px] transition-opacity duration-300 hover:opacity-90"
        />
      </form>
    </header>
  );
};
