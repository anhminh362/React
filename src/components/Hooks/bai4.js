import React,{useState} from 'react';

export default function Car(){
    // const [brand,setBrand]=useState('Fort');
    // const [model,setModel]=useState('Mustang');
    // const [year,setYear]=useState('1964');
    // const [color,setColor]=useState('red');
    // return(
    //     <>
    //     <h1>It is my {brand}car</h1>
    //     <p>It's a {color} {model} from {year}</p>
    //     </>
    // )
    const [car,setCar]=useState({
        brand:'Ford',
        model: 'Mustang',
        year: 1964,
        color: 'red'  
    })
    const updateColor=()=>{
        setCar(previousState =>{
            return {...previousState, color:"blue"}
        })
    }
    return(
        <>
        <h1>It is my {car.brand} car</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
        <button onClick={updateColor}>change color to blue</button>
        </>
    )
}

