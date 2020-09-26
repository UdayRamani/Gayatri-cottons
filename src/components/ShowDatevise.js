import React from 'react'
import '../styles/ShowDatevise.css'

function ShowDatevise({date,timestamp}) {
  
    return (
        <div>
        <label className="name">{new Date(timestamp).toDateString()}</label>
        <div className="showdatevise">
             <label className="bro">{date}</label>
        </div>
        </div>
    )
}

export default ShowDatevise
