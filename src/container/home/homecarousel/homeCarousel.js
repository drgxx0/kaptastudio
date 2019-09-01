import React, { useEffect, useState } from 'react'

import { Fade } from 'react-slideshow-image';
/* import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; */

import './homeCarousel.css'
const HomeCarousel = ({ setCharacter, setEffect, effect }) => {

    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        const onResize = () => {
            if(window.outerWidth < 768) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        if(window.outerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }, [])

    const fadeProperties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: mobile ? false : true,
        arrows: mobile ? false : true,
        onChange: (oldIndex, newIndex) => {
            setCharacter(newIndex)
            if(effect) {
                setEffect(false)
            }
        }
    }

    return (
        <React.Fragment>
            <div className='container'>
                {mobile ? 
                    <img className='logo-mobile' src={require("components/assets/img/carrusel/logo_kapta.png")} alt='' /> : null}
                <div className="slide-container">
                    <Fade {...fadeProperties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={require(`components/assets/img/carrusel/0${mobile ? '-mobile' : ''}.png`)} alt='branding' />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={require(`components/assets/img/carrusel/1${mobile ? '-mobile' : ''}.png`)} alt='packing' />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={require(`components/assets/img/carrusel/2${mobile ? '-mobile' : ''}.png`)} alt='publicity' />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={require(`components/assets/img/carrusel/3${mobile ? '-mobile' : ''}.png`)} alt='digital' />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={require(`components/assets/img/carrusel/4${mobile ? '-mobile' : ''}.png`)} alt='software' />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeCarousel)