import { useRef} from "react";
import "./InputSearchCustom.css";


const SearchInput = ({ placeholder, classExtra, onSearch }) => {
  
  const ref = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(ref.current?.value.trim() || '');
    }
  };

  return (
    <input ref={ref}
      className="search-bar form-control lh-1 border-0 "
      placeholder={placeholder}
      onKeyDown={handleKeyDown} />
  );
};

export default SearchInput;
