import React from 'react'

import Day from './day'

function Week() {
    let milage = 0  //"✖️"

    return (
        <tr className="week-row">
            <Day miles={milage} />
            <Day miles={milage} />
            <Day miles={milage} />
            <Day miles={milage} />
            <Day miles={milage} />
            <Day miles={milage} />
            <Day miles={milage} />
        </tr>
    )
}

export default Week