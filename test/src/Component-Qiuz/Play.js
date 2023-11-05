import React from 'react'
import './Play.css'

const Play = () => {
    return (
        <div className='conntainer'>
            <div className='numpers'><span>10 sec</span><span> 20/20</span></div>
            <div className='question'><p>What is an IIFE in JavaScript?</p></div>
            <div className='answer'>
                <button>Immediately Invoked Function Expression</button>
                <button>Immediately Invoked Function Expression</button>
                <button>Immediately Invoked Function Expression</button>
                <button>Immediately Invoked Function Expression</button>

            </div>

        </div>
    )
}

export default Play