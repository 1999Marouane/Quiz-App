import React from 'react'
import './Play.css'

const Play = (props) => {
    return (
        <div className='conntainer'>
            <div className='numpers'><span>10 sec</span><span>{props.numper}/19</span></div>
            <div className='question'><p>{props.question}</p></div>
            <div className='answer'>
                <button onClick={props.answer1} value={props.textvalue1}>{props.showanswer1}</button>
                <button onClick={props.answer2} value={props.textvalue2}>{props.showanswer2}</button>
                <button onClick={props.answer3} value={props.textvalue3}>{props.showanswer3}</button>
                <button onClick={props.answer4} value={props.textvalue4}>{props.showanswer4}</button>

            </div>

        </div>
    )
}

export default Play