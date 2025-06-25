import { useTranslation } from 'react-i18next';
import './FilterComponent.css'
import { LanguageDirectionContext } from './../../context/LanguageDirectionContext';
import { useContext } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const FilterComponent = ({ FiltersData , onFilterChange, selectedFilters,show,onClose,isMobile}) => {
    const { t } = useTranslation();
    const { direction } = useContext(LanguageDirectionContext);

  return (
    <div className={`filters ${!show ? 'hide-side' : 'show-side'} ${direction == 'rtl' ? 'filters-padding-rtl' : 'filters-padding'}`}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3>{t("filters.filter-name")}</h3>
        {
          isMobile &&
        <AiOutlineClose className='mode-icon' onClick={onClose}/>
}
      </div>

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
