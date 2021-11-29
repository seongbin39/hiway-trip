import React from 'react'

const Input = ({...rest}) => {
    return (
        <div>
            <button type="button" name="0150" value='목포' onClick={rest.onClick}>서해안선(목포)</button>
            <button type="button" name="0150" value='시흥' onClick={rest.onClick}>서해안선(시흥)</button>
            <button type="button" name="0010" value='부산' onClick={rest.onClick}>경부선(부산)</button>
            <button type="button" name="0010" value='서울' onClick={rest.onClick}>경부선(서울)</button>
        </div>
    )
}

export default Input