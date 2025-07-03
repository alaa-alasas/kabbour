import { createContext, useState, useContext } from 'react';

const FilterEventContext = createContext();

export const FilterEventProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    'event-type': []
  });

  const updateFilter = (filterType, value) => {
    setFilters((prev) => {
      const current = prev[filterType] || [];
      return {
        ...prev,
        [filterType]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
      };
    });
  };

  return (
    <FilterEventContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterEventContext.Provider>
  );
};

export const useEventFilter = () => useContext(FilterEventContext);