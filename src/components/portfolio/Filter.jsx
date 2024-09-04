import React from 'react';

const Filter = ({ setSelectedTechnology, selectedTechnology, searchText, setSearchText ,placeHolder,all}) => {
  const categories = [all, 'Python', 'Django','JAVA','RESTful API',]; // Add more categories as needed

  return (
    <div>
      <ul id="portfolio-filters">
        {categories.map(technology => (
          <li
            className={selectedTechnology === technology ? 'filter-active' : ''}
            key={technology}
            onClick={() => setSelectedTechnology(technology)}
          >
            {technology}
          </li>

        ))}
        <li className='search_cate'>
            <input
            className='search_cate_input'
            type="text"
            placeholder={placeHolder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          </li>
      </ul>
      
    </div>
  );
};

export default Filter;