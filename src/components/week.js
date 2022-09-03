import React from 'react'

import Day from './day'

function Week() {
    return (
        <tr className="week-row">
            <Day miles="❌" colorStatus=""/>
            <Day miles="❌"/>
            <Day miles={7}/>
            <Day miles={7}/>
            <Day miles={7}/>
            <Day miles="❌"/>
            <Day miles={7}/>
        </tr>
    )
}

export default Week