import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPoke from './StatPoke'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState()

   

    useEffect(() => {
     axios.get(url)
     .then(res => setPokemon(res.data))
     .catch(err => alert("Pokemon not found") )  
    }, [])

    const handleClick = () =>{
        navigate(`/pokedex/${pokemon.name}`)
    }

   const navigate = useNavigate()



    

  return (
    <div className="card__deposit">
    <article className='card' onClick={handleClick}>
        <header>
            <img className='card__img' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
        <section className="body">
            <h3 className='card__title'>{pokemon?.name}</h3>
            <ul className='card__types'>
            {
               pokemon?.types.map(slot => (
                <li key={slot.type.url}> {slot.type.name} </li>
              ))
            }
            </ul>

        </section>
         <footer>
            <ul className='card__stats'>
                {
                    pokemon?.stats.map(stat =>(
                        <StatPoke 
                        key={stat.stat.name}
                        
                        infosStat={stat}
                        endpnt={stat.stat.url}
                        />
                    ))
                }
            </ul>
         </footer>
    </article>
    </div>
  )
}

export default PokemonCard