import React, { Component } from 'react'
import PkmnCard from './PkmnCard'
import axios from 'axios'
import loading from './loading.gif'




export default class PkmnList extends Component {

    state = {

          url:"https://pokeapi.co/api/v2/pokemon/",
          pokemon:null
    };

    async componentDidMount() {

      const response = await axios.get(this.state.url);
      this.setState({pokemon : response.data["results"] } );
    }

  render() {

    return (
      <React.Fragment>
          {this.state.pokemon ? ( <div className=" grid grid-cols-1 gap-4 p-6 bg-platnium sm:grid-cols-2 md:grid-cols-4 ">
          {
            this.state.pokemon.map(pokemon => 
              (<PkmnCard

                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                //index={pokemon.index}
                // <h1>{types}</h1>
                // <h1>{abilities}</h1>
                // <h1>{stats}</h1>
                // <h1>{sprite}</h1>
              
              
              
              />) )
          }
        </div>) : (<img src={loading} className="mx-auto bg-platnium" alt="loading gif"/>) }
      </React.Fragment>
    );
  }
}
