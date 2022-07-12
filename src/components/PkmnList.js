import * as React from 'react';
import PkmnCard from './PkmnCard'
import Pagination from './Pagination';
import axios from 'axios'
import loading from './loading.gif'




function PkmnList () {

  const[isLoading, setIsLoading] = React.useState(true);
  const[currentPageUrl, setCurrentPageUrl] = React.useState("https://pokeapi.co/api/v2/pokemon/");
  const[nextPageUrl, setNextPageUrl] = React.useState();
  const[prevPageUrl, setPrevPageUrl] = React.useState();

  const [pokemon, setPokemon]= React.useState([]);

  React.useEffect(() => {
    setIsLoading(true)
    
  

      axios.get(currentPageUrl).then((response) => {
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setIsLoading(false);
      setPokemon(response.data.results)
       //console.log("Heres the pokemon" , pokemon)

      }).catch(error => {
        setIsLoading(false);
        console.log("An error happened", error);
      });
   
  }, [currentPageUrl]);

  function gotoNextPage(){

    setCurrentPageUrl(nextPageUrl);

  }
  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }
  
    return (
      <>
          <Pagination 
            gotoNextPage={nextPageUrl ? gotoNextPage : null }
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null } />
          {pokemon ? ( <div className=" grid grid-cols-1 gap-4 p-6 bg-platnium sm:grid-cols-2 md:grid-cols-4 ">
          {
            pokemon.map(pokemon => 
              (<PkmnCard

                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              
              
              
              />) )
          }
        </div>) : (<img src={loading} className="mx-auto bg-platnium" alt="loading gif"/>) }
      </>
    );
};
export default PkmnList;
