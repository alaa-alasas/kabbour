import { useTranslation } from 'react-i18next';
import './FilterComponent.css'

const FilterComponent = ({ FiltersData }) => {
    const { t } = useTranslation();

  return (
    <div className="filters">
      <h3>Filters</h3>
      {FiltersData.map((item, index) => (
        <>
          <div className='filter' key={index}>
            <h4>{t(item.title)}</h4>
            <ul>
              {
                t(item.options,{ returnObjects: true }).map((option, index1) => (
                  <li className='filters-option' key={index1}>
                    <input className="styled-checkbox" type="checkbox" />
                    <span>{t(option)}</span>
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
