import { Button } from '@mui/material'
import React from 'react'
import './Popup_Custom.css'

function Popup_Custom(props1) {
  return (props1.trigger) ? 
  (

    <div className="popup">
        <div className='popup-inner'>
            
            <img 
                src = {process.env.PUBLIC_URL + `/Imgs/success.png`}
                alt = "Added successfully"
            />
            <h3>
                Good job! You have added successfully! 
            </h3>
            <Button 
                className="close-btn"
                variant='outlined'
                onClick={() => {props1.setTrigger(false)}
                }
            >Close</Button>
        </div>
    </div>
  ) :  "";
}

export default Popup_Custom