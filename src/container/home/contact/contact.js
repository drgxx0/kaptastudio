import React from 'react'

import 'bulma/css/bulma.min.css'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
        <img src={require('components/assets/img/Contact/Contact.png')} alt='' />
        <p>Ponte en contacto con nosotros</p>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">Teléfono</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">¿En qué podemos ayudarte?</label>
          <div class="control">
            <textarea class="textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Servicio de tu interés</label>
            <div class="control" style={{display: 'grid'}}>
              <label class="radio">
                <input type="radio" name="question" />
                Branding
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                Packaging
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                Publicity
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                Digital
              </label>
              <label class="radio">
                <input type="radio" name="question" />
                Software
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-danger" style={{ color: '#FFC9A2' }}>Enviar</button>
            </div>
          </div>
        </div>
    )
}


export default Contact