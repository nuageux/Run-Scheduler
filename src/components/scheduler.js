import React from 'react'

import Week from './week'

function Scheduler() {
    return (
        <div>
            <p>let's set up a run plan! 😄</p>
            <table className="main-schedule">
                {/* ideally each row is a Week component. */}
                <tr className='header'>
                    <th>sun</th>
                    <th>mon</th>
                    <th>tue</th>
                    <th>wed</th>
                    <th>thu</th>
                    <th>fri</th>
                    <th>sat</th>
                </tr>
                <Week />
                <Week />
                <Week />
            </table>
        </div>
    )
}

export default Scheduler