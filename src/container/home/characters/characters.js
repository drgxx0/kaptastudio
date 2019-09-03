import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade'

import './characters.css'
const Characters = ({ character, effect, setEffect }) => {

    const [fixed, setFixed] = useState(true)

    useEffect(() => {
        if(!effect) {
            setEffect(true)
        }
    }, [effect, setEffect])

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY === 0) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <React.Fragment>
            <Fade when={effect} duration={800} delay={200}>
                <img className='character' src={require(`components/assets/img/personajes/P${character}.png`)} alt='branding-personaje' style={{position: fixed ? 'fixed' : 'absolute', left: 'auto', right: '0px', zIndex: '100'}} />
            </Fade>
        </React.Fragment>
    )
} 

export default Characters