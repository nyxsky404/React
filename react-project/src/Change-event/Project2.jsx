// Color picker Project

import React, {useState} from 'react'
import styles from './Project2.module.css'


function Project2(){

    const [color, setColor] = useState("#FFFFFF")

    const ColorHandle = (event) => {
        setColor(event.target.value)
    }

    return (<div className={styles.colorPickerContainer}>
        <h1>Color Picker</h1>
        <div className={styles.colorDisplay} style ={{background: color}}>  {/* //! We can also style suing variable */}
            Selected Color: {color}
        </div>
        <label>
            Select a color:
            <input type="color" value={color} onChange={ColorHandle}/>
        </label>
    </div>)
}

export default Project2