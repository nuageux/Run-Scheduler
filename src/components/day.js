import React, {useState} from 'react'

// grey = rest day, green = completion, blue = incomplete, red = didn't run
const colorCycle = ['gainsboro', '#8FD5A6', '#BCC4DB', '#EF6F6C']

// getter
function Day (props) {
    const [color, setColor] = useState(0)

    const cellColor = {backgroundColor: colorCycle[color]}

    return (
        <td 
            class="day-data" 
            style={cellColor}
            onClick={() => setColor((prevColor) => (prevColor+1)%colorCycle.length)}>
                {props.miles}</td>
    )
}

export default Day