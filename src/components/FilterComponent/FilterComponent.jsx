import { useTranslation } from 'react-i18next';
import './FilterComponent.css'
import { LanguageDirectionContext } from './../../context/LanguageDirectionContext';
import { useContext } from 'react';

const FilterComponent = ({ FiltersData , onFilterChange, selectedFilters}) => {
    const { t } = useTranslation();
    const { direction } = useContext(LanguageDirectionContext);

  return (
    <div className={`filters ${direction == 'rtl' ? 'filters-padding-rtl' : 'filters-padding'}`}>
      <h3>{t("filters.filter-name")}</h3>
      {FiltersData.map((item, index) => (
        <>
          <div className={`filter`} key={index}>
            <h4>{t(item.title)}</h4>
            <ul>
              {
                t(item.options,{ returnObjects: true }).map((option, index1) => (
                  <li className='filters-option' key={index1}>
                    <input className="styled-checkbox" type="checkbox" 
                    checked={selectedFilters[item.id]?.includes(option.id) || false}
                    onChange={() => onFilterChange(item.id, option.id)}/>
                    <span>{t(option.name)}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='line-filter-sperater'></div>
        </>
      ))}
    </div>
  )
}

export default FilterComponent
