import React, {useState} from 'react'

// [0]grey = rest day, [1]blue = planned, [2]green = complete, [3]red = didn't run
const colorCycle = ['gainsboro', '#BCC4DB', '#8FD5A6', '#EF6F6C']

// getter
function Day (props) {
    const [status, setStatus] = useState(0)
    const cellColor = {backgroundColor: colorCycle[status]}

    let showBox 
    if (status == 0)
        showBox = { visibility: 'hidden' }
    else
        showBox = {visibility: 'visible'}
    let boxValue = <input type="number" style={ showBox } onClick={(e) => {e.stopPropagation()}} />
    
    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        <td 
            class="day-data" 
            style={cellColor}
            onClick={() => setStatus((prevStatus) => (prevStatus+1)%colorCycle.length)}>
            {boxValue}
        </td>
    )
}

export default Day