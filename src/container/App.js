import React, { useState, useEffect } from 'react';
import Home from './home/home';
import NavBar from 'components/navbar/navbar';

import Fade from 'react-reveal/Fade'

import './App.css'
import Contact from './home/contact/contact';

function App() {

  const [worktype, setWorkType] = useState('none')
  const [effect, setEffect] = useState()
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

  useEffect(() => {
    if(!effect) {
      setEffect(true)
    }
  }, [worktype, effect])

  return (
    <React.Fragment>
        <NavBar />
        <Home />

        {/*know who */}

        <img className='arco-superior' src={require('components/assets/img/Fondo_Kapta/Fondo02.png')} alt='' />
        <div className='knowhow'>
          <div className='kh-logo-container'>
            <img className='iso' src={require('components/assets/img/KnowHow/Isotipo_Kapta.png')} alt='' />
            <img className='kh-logo' src={require('components/assets/img/KnowHow/KnowHow.png')} alt='' />
          </div>
          <div className='kh-texto'>
            <span>
              Somos una agencia creativa técnica
              con más de 15 años de experiencia
              en la creación de experiencias de comunicación
              visual para diferentes productos, nos destacamos
              por dar valor agregado a nuestro diseño, ya que
              somos la única agencia en el Perú que utiliza el
              proceso de aplicabilidad en nuestro método
              creativo, obteniendo así un diseño inteligente que
              sea capaz de adaptarse a cualquier convertidor;
              sin perder personalidad, ni unidad gráfica en su
              reproducción final.
            </span>
          </div>
          <div className='kh-image'>
            <div></div>
            <div className='b1'>
              <img src={require('components/assets/img/KnowHow/Brazo1.png')} alt='' />
            </div>
            <div className='b2'>
              <img src={require('components/assets/img/KnowHow/Brazo2.png')} alt='' />
            </div>
            <div className='b3'>
              <img src={require('components/assets/img/KnowHow/Brazo3.png')} alt='' />
            </div>
            <div className='b4'>
              <img src={require('components/assets/img/KnowHow/Brazo4.png')} alt='' />
            </div>
            <div className='b5'>
              <img src={require('components/assets/img/KnowHow/Brazo5.png')} alt='' />
            </div>
          </div>
        </div>

        {/*Team */}

        <div className='team'>
          <div className='team-bg-form'>
            <img className='team-image' src={require('components/assets/img/Team/team-img.png')} alt='' />
          </div>
          <div className='team-text-container'>
              <p>
              Nuestro equipo está formado por profesionales en diseño de
              empaques, ilustradores, directores de arte, e ingenieros de empaques.
              Dispuestos a dar lo mejor para cualquier
              proyecto que esté en nuestras manos.
              </p>
          </div>
        </div>

        {/*Work*/}
        <div className='work'>
          {mobile ? null : <img className='work-bg-img' src={require('components/assets/img/Fondo_Kapta/Fondo07.png')} alt='' />}
          {mobile ? <div className='work-logo'>
            <img src={require('components/assets/img/Work/Work.png')} alt='' />
          </div> : null}
          {/* <img className='work-info-img' src={require('components/assets/img/Work/Cabeza.png')} alt='' /> */}
          <div className='work-buttons'>
            <img className={worktype === 'Branding' ? 'wk-active bd' : 'bd'} src={require('components/assets/img/Work/Icon_Branding.png')} alt='' onClick={() => {
              setWorkType(worktype !== 'Branding' ? 'Branding' : 'none')
              setEffect(false)
            }
              } />
            <img className={worktype === 'Packaging' ? 'wk-active pk' : 'pk'} src={require('components/assets/img/Work/Icon_Packaging.png')} alt='' onClick={() => {
              setWorkType(worktype !== 'Packaging' ? 'Packaging' : 'none')
              setEffect(false)
              }} />
            <img className={worktype === 'Digital' ? 'wk-active dg' : 'dg'} src={require('components/assets/img/Work/Icon_Digital.png')} alt='' onClick={() => {
              setWorkType(worktype !== 'Digital' ? 'Digital' : 'none')
              setEffect(false)
              }} />
            <img className={worktype === 'Publicity' ? 'wk-active pb' : 'pb'} src={require('components/assets/img/Work/Icon_Publicity.png')} alt='' onClick={() => {
              setWorkType(worktype !== 'Publicity' ? 'Publicity' : 'none')
              setEffect(false)
              }} />
            <img className={worktype === 'Software' ? 'wk-active sw' : 'sw'} src={require('components/assets/img/Work/Icon_Software.png')} alt='' onClick={() => {
              setWorkType(worktype !== 'Software' ? 'Software' : 'none')
              setEffect(false)
              }} />
          </div>
          <div className={worktype === 'none' || mobile ? 'work-info' : 'work-info-pe'}>
          {mobile || worktype !== 'none' ? null : <img className='cabeza' src={require('components/assets/img/Work/Cabeza.png')} alt='' />}
            {mobile ? <img className='work-bg-img' src={require('components/assets/img/Fondo_Kapta/Fondo07.png')} alt='' /> : null}
              {mobile ? null : 
              worktype === 'none' ? <div className='work-logo'>
                <img src={require('components/assets/img/Work/Work.png')} alt='' />
              </div> : null}
              {mobile || worktype !== 'none' ? null : 
              <div className='info-text'>
                <p>
                  En kapta te ayudaremos con las necesidades
                  que tienes para cada proyecto,
                  creando un plan estratégico personalizado,
                  enfocándonos en tus objetivos y
                  consiguiendo um diseño efectivo.
                </p>
              </div>}
              {worktype === 'none' ? 
              <div></div>
              :
              <Fade when={effect}>
               <div className='globo'>
                  <p>Esto es un texto de prueba para ver como queda cada globo</p>
               </div>
               </Fade>}
               {worktype === 'none' ?
               <div></div>
               :
               <div className='work-info-personaje'>
                <Fade right when={effect}><img src={require(`components/assets/img/Work_Cambios_Iconos_Ruleta/Personaje_${worktype}.png`)} alt='' /></Fade>
               </div>}
          </div>
        </div>

        <div className='wk-projects'>            
          <p>A continuación te presentamos nuestros proyectos más recientes</p>
          <div className='projects'>
            <img src={require('components/assets/img/Work_Cuadros/tentacion.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/GELIX.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/UN_DETALLE.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/ARITOS.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/WAFERITO.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/megabit.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/NECTAR.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/proactive2.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/RURUY.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/GELCE.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/villanatura2.png')} alt='' />
            <img src={require('components/assets/img/Work_Cuadros/ALFREDO.png')} alt='' />
          </div>
        </div>

        <Contact />
        
        <div className='footer'>
          <img src={require('components/assets/img/Contact/Logo_Kapta.png')} alt='' />
          <div className='footer-text'>
            <p>Inicia tu proyecto</p>
            <p>Llama al +930484626</p>
            <p>Escríbenos a jtorres@kaptastudio.com</p>
          </div>
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <p className='social-text'>Siguenos</p>
            <div className='social'>
              <img src={require('components/assets/img/Contact/icono_facebook.png')} alt='' />
              <img src={require('components/assets/img/Contact/icono_instagram.png')} alt='' />
              <img src={require('components/assets/img/Contact/icono_youtube.png')} alt='' />
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
