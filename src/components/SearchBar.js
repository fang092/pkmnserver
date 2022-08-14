import React from 'react'

const SearchBar = ({pokemon, setSearchResults}) => {
  

  
    const handleSubmit = (e) => e.preventDefault();

    const handleSearch = (e) =>{

      if(!e.target.value) return setSearchResults(pokemon)

      const resultsArray = pokemon.filter(pokemon => pokemon.name.includes(e.target.value))
    
      setSearchResults(resultsArray)

    }

    // get search query
    // grab all the pokemon
    // compare query to each pokemon entry
    // hand off information on queried pokemon to list component to display
    



  return (
    <div className='flex flex-row justify-center items-center'>
      <form className='search' onSubmit={handleSubmit}>
        <input id="searchbar"
               className="rounded-lg h-10 p-6" 
               type="" 
               placeholder='Search...'
               onChange={handleSearch}>
        </input>
      </form>
    </div>
  )
}

export default SearchBar