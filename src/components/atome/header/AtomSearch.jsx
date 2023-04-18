import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search(props) {

  const { searchData } = useContext(SearchContext)

  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <div className="mx-auto w-1/2 m-5 h-12 flex items-center rounded-full bg-stone3 p-0.5">
        <form className="flex-grow">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Search</label>
          <div className="relative">
            <input onChange={(e) => setSearchWord(e.target.value)} type="text" placeholder="Introduce aquí tu búsqueda" className="bg-stone3 text-white py-2 px-4 w-full rounded-full focus:outline-none placeholder-white pr-10" required />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-white mr-2 text-2xl" />
            </div>
          </div>
        </form>
      </div>


      <div>
        {searchWord !== '' && searchData.entrepreneurships.map(item =>
          item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(searchWord) ?
            <Link to={`/entrepreneurship/${item.id}`} key={item.id} className="flex flex-row mt-4 mb-4 flex-wrap gap-2">
              <h2>{item.title}</h2>
            </Link>
            : null
        )}
      </div>
    </>
  )
}