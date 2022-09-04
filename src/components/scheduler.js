import React, {useState} from 'react'

import Week from './week'

function Scheduler() {
    const [weeks, setWeeks] = useState([<Week />])
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
                {weeks}
            </table>
            <button className="addWeek" onClick={() => {
                setWeeks(weeks.concat(<Week />))
            }}><strong>+</strong> add another week</button>
        </div>
    )
}

export default Scheduler