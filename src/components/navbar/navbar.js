import React, { useState } from 'react'

    import Fade from 'react-reveal/Fade'

const NavBar = () => {

    const [visible, setVisible] = useState(false)

    return (
        <React.Fragment>
            <div style={{position: 'fixed', zIndex: '100', top: 0, left: 0, marginLeft: '60px', marginTop: '20px'}} onClick={() => setVisible(!visible)}>
                <img src={require('components/assets/img/hamburguesa.png')} alt='' style={{ width: '30%', cursor: 'pointer' }} />
            </div>
            <Fade when={visible}>
            <div style={{position: 'fixed', zIndex: '100', top: 0,   left: '100px', marginLeft: '20px', marginTop: '20px'}}>
                <span style={{ color: '#ffc9a2', fontWeight: 600, userSelect: 'none' }}>Home - About - Etc - Etc - Etc</span>
            </div>
            </Fade>
        </React.Fragment>
    )
}

export default NavBar