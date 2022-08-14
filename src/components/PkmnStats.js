import React, {Component} from 'react'
import axios from 'axios'


export default class PkmnStats extends Component {

    state = {
        name:'',
        index:'',
        imageUrl:'',
        types:[''],
        description:'',
        stats:{

            hp:'',
            attack:'',
            defense:'',
            speed:'',
            specialAttack:''        
        },
        height:'',
        weight:'',
        abilities:['']

    };
    async componentDidMount() {

        const {index} = this.props.match.params;
        const pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`
        const pkmnSpecies = `https://pokeapi.co/api/v2/pokemon-species/${index}/`


        const pkmnResponse = await axios.get(pkmnUrl);
        const name = pkmnResponse.data.name;
        const imageUrl = pkmnResponse.data.sprites.front_default;
        const species = pkmnResponse.data.species;
        this.setState({ name });

        let [ hp, attack, defense, speed, specialAttack, specialDefense] = '';

        pkmnResponse.data.stats.map((stat) => {
            if(stat.stat.name === 'hp'){
                hp = stat['base_stat'];
            }
            if(stat.stat.name === 'attack'){
                attack = stat['base_stat'];
            }
            if(stat.stat.name === 'defense'){
                defense = stat['base_stat'];
            }
            if(stat.stat.name === 'speed'){
                speed = stat['base_stat'];
            }
            if(stat.stat.name === 'special-attack'){
                specialAttack = stat['base_stat'];
            }
            if(stat.stat.name === 'special-defense'){
                specialDefense = stat['base_stat'];
            }
              

    });

        const height = Math.round((pkmnResponse.data.height * 0.328084 + 0.0001) * 100)/100;
        const weight = Math.round((pkmnResponse.data.weight * 0.220462 + 0.0001) * 100)/100;

        const types  = pkmnResponse.data.types.map(type => type.type.name);

        const abilities = pkmnResponse.data.abilities.map(abilities => {
           return abilities.ability.name
            .toLowerCase()
           .split('-')
           .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
         });

        const getDesc = await axios.get(pkmnSpecies);

        let description ='';

        getDesc.data.flavor_text_entries.some(flavor => {

            if (flavor.language.name === 'en') {
                description = flavor.flavor_text;
                return description;
                }
            });

           

        this.setState({ imageUrl, index, name, types, stats: { hp, attack, defense, speed, specialAttack, specialDefense}, height, weight, abilities, description })
    }

    render(){
        return (
            <div className='mx-auto w-fit h-screen p-6  md:w-3/5'>
                <div className='flex flex-col items-center justify-center md:flex-col lg:flex-row'>
                        <div className='flex flex-col items-center '>
                            <p className='text-5xl md:text-6xl'>{this.state.name.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</p>
                            <img className=" w-32 h-32 md:w-64 md:h-64 " src={this.state.imageUrl} alt={this.state.name} />
                            <div className='flex flex-row '>
                                <div>{this.state.types[0].toString().toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</div>
                                <div>{this.state.types[1] ? this.state.types[1].toString().toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') :null}</div>
                            </div>
                            <p>Height: {this.state.height} ft.</p>
                            <p>Weight: {this.state.weight} lbs.</p>
                        </div>
                        <div className='flex flex-col items-center '>
                            <p className='text-center my-5'>{this.state.description} </p>
                            
                            <p>Abilities: {this.state.abilities.toString().toLowerCase().split(',').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</p>
                            <div className='flex flex-col items-center mt-4 '>
                                    <p> HP: {this.state.stats.hp}</p>
                                    <p> Attack: {this.state.stats.attack}</p>
                                    <p>Defense: {this.state.stats.defense}</p>
                                    <p>Speed: {this.state.stats.speed}</p>
                                    <p>Spec.Attack: {this.state.stats.specialAttack}</p>
                                    <p>Spec.Defense: {this.state.stats.specialDefense}</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
