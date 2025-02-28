"use client";  // ← Indica que este componente é do lado do cliente no Next.js
import { useEffect, useState } from "react";
import { Character } from "../CharacterList/CharacterList";

export default function CharacterDetails ({id}: {id:string}){

    const [data,setData] = useState<Character>();

    console.log(id)

    console.log(data)
    
    useEffect(() =>{ 
        fetch(`https://rickandmortyapi.com/api/character/${id}/`) 
        .then((Response) => Response.json())  
        .then((data) => setData(data)) 
        .catch((error) => console.error(error)); 
    }, [id]) 

    return(
        <>
        {data && ( // ← Se data for verdadeiro, o código dentro dos parênteses será renderizado.
            <div className="flex flex-col items-center gap-4 bg-slate-200 text-slate-800 font-semibold text-xl p-10 rounded-xl">

                <img 
                src={data.image}  
                alt={data.name}
                className="w-60 h-60 rounded-xl object-contain"
                />
                <p className="text2xl font-bold">{data.name}</p>
                <p className="text2xl font-bold">Espécie: {data.species}</p>
                <p className="text2xl font-bold">Status: {data.status}</p>
                <p className="text2xl font-bold">Gênero: {data.gender}</p>
                <p className="text2xl font-bold">Origem: {data.origin.name}</p>
                <p className="text2xl font-bold">Localização: {data.location.name}</p>

            </div>
        )}
        </>
    );
}