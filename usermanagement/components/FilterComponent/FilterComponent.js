import React from 'react'
import ResultSection from './SearchSection/ResultSection'
import SearchSection from './SearchSection/SearchSection'

function FilterComponent({data,query}) {
  return (
    <div className=' flex flex-col md:flex-row justify-center xs:w-full sm:w-5/5' >
        {/* searchSection */}
        <SearchSection query={query}/>
        {/* resultSection */}
        <ResultSection data={data}/>
    </div>
  )
}

export default FilterComponent