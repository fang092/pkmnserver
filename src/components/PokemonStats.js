import {useState, useEffect} from 'react'
import axios from 'axios'


function PkmnStats (){

    const [pkmnStat, setPkmnStat] = {
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
    useEffect(() => {

        const {index} = this.props.match.params;
        const pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`
        const pkmnSpecies = `https://pokeapi.co/api/v2/pokemon-species/${index}/`


        const pkmnResponse =  axios.get(pkmnUrl);
        const name = pkmnResponse.data.name;
        const imageUrl = pkmnResponse.data.sprites.front_default;
        const species = pkmnResponse.data.species;
        setPkmnStat({ name });

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

        const getDesc = axios.get(pkmnSpecies);

        let description ='';

        getDesc.data.flavor_text_entries.some(flavor => {

            if (flavor.language.name === 'en') {
                description = flavor.flavor_text;
                return description;
                }
            });

           

        setPkmnStat({ imageUrl, index, name, types, stats: { hp, attack, defense, speed, specialAttack, specialDefense}, height, weight, abilities, description })
    })


        return (
            <div className='mx-auto w-fit h-screen p-6  md:w-3/5'>
                <div className='flex flex-col items-center justify-center md:flex-col lg:flex-row'>
                        <div className='flex flex-col items-center '>
                            <p className='text-5xl md:text-6xl'>{pkmnStat.name.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</p>
                            <img className=" w-32 h-32 md:w-64 md:h-64 " src={pkmnStat.imageUrl} alt={pkmnStat.name} />
                            <div className='flex flex-row '>
                                <div>{pkmnStat.types[0].toString().toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</div>
                                <div>{pkmnStat.types[1] ? pkmnStat.types[1].toString().toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') :null}</div>
                            </div>
                            <p>Height: {pkmnStat.height} ft.</p>
                            <p>Weight: {pkmnStat.weight} lbs.</p>
                        </div>
                        <div className='flex flex-col items-center '>
                            <p className='text-center my-5'>{pkmnStat.description} </p>
                            
                            <p>Abilities: {pkmnStat.abilities.toString().toLowerCase().split(',').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</p>
                            <div className='flex flex-col items-center mt-4 '>
                                    <p> HP: {pkmnStat.stats.hp}</p>
                                    <p> Attack: {pkmnStat.stats.attack}</p>
                                    <p>Defense: {pkmnStat.stats.defense}</p>
                                    <p>Speed: {pkmnStat.stats.speed}</p>
                                    <p>Spec.Attack: {pkmnStat.stats.specialAttack}</p>
                                    <p>Spec.Defense: {pkmnStat.stats.specialDefense}</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    
}
export default PkmnStats
