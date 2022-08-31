
import loading from './loading.gif'
import {Link} from 'react-router-dom'


const PkmnCard = ({pokemon}) => {

    const index = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
    const sprite =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
    
    return (
     
        <Link to={`/pokemon/${pokemon.name}/${index}` }>
            {pokemon ? (<div className='flex flex-col h-64  items-center p-10 rounded-xl  shadow-lg hover:shadow-2xl hover:border-stone-700 bg-white select-none '>
                <h3 className='text-center capitalize'>{pokemon.name}</h3>
                
                {pokemon.imageLoading ? (<img src={loading} className="mx-auto w-10 h-10" alt="loading gif"/>) :null}
                <img className='mx-auto' style={pokemon.tooManyRequests ? {display: "none"} : pokemon.imageLoading ? null : {display: "block"}} src={sprite} alt={pokemon.name} onLoad={() => ({imageLoading: false})} onError={ () => ({ tooManyRequests: true})} />
                {pokemon.tooManyRequests ? (<h6 className='mx-auto bg-red-600'> <span className='text-white'>Too Many Requests </span></h6>) :null }
                <h3 className="text-center">-No.{index}-</h3>
            
            </div>):  (<img src={loading} className="mx-auto bg-platnium" alt="loading gif"/>)}
        </Link>
     
    )


  
}
export default PkmnCard
