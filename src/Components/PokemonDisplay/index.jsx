import axios from "axios"
import { useEffect, useState } from "react"

const PokemonDisplay = () => {
const [pokemonObjects, setPokemonObjects] = useState([])

    useEffect(()=>{

axios("https://pokeapi.co/api/v2/pokemon").then((response)=>{
    console.log (response)
    let array = response.data.results;
    setPokemonObjects(array)
})

}, [])

  return (
    <div>
        {pokemonObjects.map((pokeman)=> {
            return (
            <div key= {pokeman.url}>
                <span>{pokeman.name}</span>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} style={{maxWidth: "100px"}}/>
                </div>
            )
        })}



    </div>
  )
}

export default PokemonDisplay