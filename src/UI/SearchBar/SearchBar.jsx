import { IoIosSearch } from "react-icons/io";
import cl from "./SearchBar.module.css";
import { useRef } from "react";

export default function SearchBar({ search }) {
  const inputRef = useRef(null);
  const handleSearch = () => {
    search(inputRef.current.value.trim());
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cl.searchBar}>
      <IoIosSearch className={cl.icon} onClick={handleSearch} />
      <input
        type="text"
        placeholder="new york"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
