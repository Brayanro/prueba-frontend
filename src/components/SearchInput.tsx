interface SearchInputProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  handleSearch,
}) => {
  return (
    <div className="relative mt-5">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#5bb0ca]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-[270px] md:w-[300px] outline-none p-3 ps-10 text-sm rounded-lg bg-white"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
