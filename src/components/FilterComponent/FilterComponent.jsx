import './FilterComponent.css'

const FilterComponent = ({ FiltersData }) => {
  return (
    <div className="filters">
      <h3>Filters</h3>
      {FiltersData.map((item, index) => (
        <>
          <div className='filter' key={index}>
            <h4>{item.title}</h4>
            <ul>
              {
                item.options.map((option, index1) => (
                  <li className='filters-option' key={index1}>
                    <input className="styled-checkbox" type="checkbox" />
                    <span>{option}</span>
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
