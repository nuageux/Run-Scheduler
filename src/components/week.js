import React from 'react'

import Day from './day'

function Week() {
    return (
        <tr className="week-row">
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </tr>
    )
}

export default Week