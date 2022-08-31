import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const PokemonDetails = () => {

  const {name} = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
  
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err =>console.log(err))
  }, [])
  
console.log(pokemon)  
  

  return (
    <article className="pokemon__article">
      <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
      <h1>{pokemon?.name}</h1>
      <h2>ID: #{pokemon?.id}</h2>
      <h2>Height: {pokemon?.height}</h2>
      <h2>Weight: {pokemon?.weight}</h2>
      <ul className="pokemon__article_list">
          {
            pokemon?.abilities.map(abilitie =>(
               <li key={abilitie.ability.url}> {abilitie.ability.name}</li>
            ))
          }
      <div className="pokemon__type_container">
          {
            pokemon?.types.map(type =>(
              <li key={type.type.url}>{type.type.name}</li>
            ))
          }
      </div>
      </ul>

      </article>
  )
}

export default PokemonDetails