import { createContext, useState, useContext } from 'react';

const FilterProductContext = createContext();

export const FilterProductProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    'product-type': [],
    'trademark': []
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
    <FilterProductContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterProductContext.Provider>
  );
};

export const useProductFilter = () => useContext(FilterProductContext);