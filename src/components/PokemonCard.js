
import React from 'react'
import loading from './loading.gif'
import {Link} from 'react-router-dom'

function PokemonCard ({pkmnKey,pkmnName,pkmnURL}) {

    const [pkmn, setPkmn] = React.useState([
        {
            pkmnName:pkmnName,
            index:pkmnKey,
            url:pkmnURL
        }
    ]);

    React.useEffect(() => {

        

      
        const index = pkmn.url.split('/')[pkmn.url.split('/').length - 2];
        const sprite =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.index}.png`;

        setPkmn({

        pkmnName,
        index,
        sprite
        

        })
    },[]);
    


  


    


    return (
     
        <Link to={`pokemon/${pkmn.index}`}>
            <div className='flex flex-col h-64  items-center p-10 rounded-xl  shadow-lg hover:shadow-2xl hover:border-stone-700 bg-white select-none '>
                <h3 className=' text-center'>{pkmn.pkmnName.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h3>
                <h1>{pkmn.url}</h1>
                {pkmn.imageLoading ? (<img src={loading} className="mx-auto w-10 h-10" alt="loading gif"/>) :null}
                <img className='mx-auto' style={pkmn.tooManyRequests ? {display: "none"} : pkmn.imageLoading ? null : {display: "block"}} src={pkmn.sprite} alt={pkmn.name} onLoad={() => this.setState({imageLoading: false})} onError={ () => this.setState({ tooManyRequests: true})} />
                {this.state.tooManyRequests ? (<h6 className='mx-auto bg-red-600'> <span className='text-white'>Too Many Requests </span></h6>) :null }
                <h3 className="text-center">-No.{this.state.index}-</h3>
            
            </div>
        </Link>
     
    )


  
}
export default PokemonCard
