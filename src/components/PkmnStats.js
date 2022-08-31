import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import loading from './loading.gif';
 
 
const PkmnStats = () => {
 
    const [isLoading, setIsLoading] = useState(true); 
    const [pkmnStat, setPkmnStat] = useState();
    const {index, name} = useParams();
 
    const getPkmnStats = async () => { 
 
        
        const pkmnUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`
        const pkmnSpecies = `https://pokeapi.co/api/v2/pokemon-species/${index}/`
 
        try{
                const pkmnResponse = await axios.get(pkmnUrl);
                const imageUrl = pkmnResponse.data.sprites.front_default;
                const species = pkmnResponse.data.species; 
        
                let [ hp, attack, defense, speed, specialAttack, specialDefense] = '';
        
                pkmnResponse.data.stats.map((stat) =>  {
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
                })
    
                
                const height = Math.round((pkmnResponse.data.height * 0.328084 + 0.0001) * 100)/100;
                const weight = Math.round((pkmnResponse.data.weight * 0.220462 + 0.0001) * 100)/100;
        
                const types  = pkmnResponse.data.types.map(types => {return " " + types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1).toLowerCase();});
 
                const abilities = pkmnResponse.data.abilities.map(abilities => {
                    return " " + abilities.ability.name.charAt(0).toUpperCase() + abilities.ability.name.slice(1).toLowerCase();
                }); // returns ablities as individual strings concanted together
                //console.log(abilities)
 
                let description ='';
 
                const getDesc =  axios.get(pkmnSpecies);

                description = (await getDesc).data.flavor_text_entries[0].flavor_text
 
                // getDesc.data.flavor_text_entries.some(flavor => {
    
                //     if (flavor.language.name === 'en') {
                //         description = flavor.flavor_text;
                //         return description;
                //         }
                // });

                setPkmnStat({  index, name, imageUrl, types, stats: {hp, attack, defense, speed, specialAttack, specialDefense}, height, weight, abilities, description})
                setIsLoading(false)


                
        }
        catch(err){
            console.log(err)
            setPkmnStat(null) 
        }

        


    }
    useEffect(() => { 
    
        getPkmnStats();
        
    },[])
        
    
    //Nothing from line 32-110 has any effect until *after* the first render. 
    return (
            <>
            {!isLoading ? ( /* This shows a loading spinner when 'isLoading' is false… */
                <div className='mx-auto w-fit h-screen items-center md:w-3/5'>
                    <div className='flex flex-col align-middle justify-center md:flex-col lg:flex-row'>
                            <div className='flex flex-col items-center justify-center p-6 '>
                                <p className='text-5xl md:text-6xl'>{pkmnStat?.name?.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</p>
                                <img className=" w-32 h-32 md:w-36 md:h-36 " src={pkmnStat.imageUrl} alt={pkmnStat.name} />
                                <div className='flex flex-row '>
                                </div>
                                <p>{pkmnStat.types}</p>
                                <p>Height: {pkmnStat.height} ft.</p>
                                <p>Weight: {pkmnStat.weight} lbs.</p>
                            </div>
                            <div className='flex flex-col p-6 align-middle justify-center h-full bg-green-500 '>
                                <p className='text-left text-xl my-5'>{pkmnStat.description} </p>
                                
                                <p>Abilities: {pkmnStat.abilities}</p>
                                <div className='flex flex-col items-start mt-4 '>
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
                ) : ( <img src={loading} className="mx-auto bg-platnium" alt="loading gif"/>) /* This shows a loading spinner when 'isLoading' is false… */ } 
            </> 
    )
    
}
export default PkmnStats;