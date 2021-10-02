import React, {useState} from 'react'
import './popup.scss'
import { Data1 } from './data'

const Popup = () => {

    const [popup, setPopup] = useState(false)
    const showPopup = () => {
        setPopup(!popup)
    }

    const closePopup = () => {
        setPopup(false)
    }


    return (
        <div className="popup-container">
            <div className='button-container'>
                <button type='button' onClick={showPopup}>Show Popup</button>
            </div>

            <div className='popup' style={{display: popup ? 'block' : 'none'}}>
                <div className='title'>
                    <h6>Theme Color</h6>
                    <h5>Change Theme</h5>
                </div>

                {Data1.map((props) => {
                    return(
                        <div className='inline'>
                            <p>{props.name}</p>
                            <div className='color'>
                                <span>{props.color}</span>
                                <div style={{background: `${props.color}`}} className='box'></div>
                            </div>
                        </div>
                    )
                })}

                <div className='buttons'>
                    <button type='button' className='button1' onClick={closePopup}>Cancel</button>
                    <button type='button' className='button2'>Save</button>
                </div>
            </div>

            <div className='backdrop' style={{display: popup ? 'block' : 'none'}} onClick={closePopup}></div>

        </div>
    )
}

export default Popup

