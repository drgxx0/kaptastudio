import React, { useState } from 'react'

import './home.css'
import Characters from './characters/characters';
import HomeCarousel from './homecarousel/homeCarousel';


const Home = () => {

    const [character, setCharacter] = useState(0)
    const [effect, setEffect] = useState(true)

    return (
        <React.Fragment>
            <Characters character={character} setCharacter={setCharacter} effect={effect} setEffect={setEffect} />
            <HomeCarousel setCharacter={setCharacter} setEffect={setEffect} effect={effect} />
        </React.Fragment>
    )
}


export default Home