import React from 'react'

import Day from './day'

function Week() {
    const days = new Array(7).fill(<Day />)
    let milage = 0  //"✖️"

    return (
        <tr className="week-row">
            {days}
        </tr>
    )
}

export default Week