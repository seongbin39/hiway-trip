import React, { useRef } from 'react'
import { useDetectOutsideClick } from "./useDetectOutsideClick.js";

import './DropDown.css'

const Dropdown = ({ ...rest }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive)

  return (
    <div className="menu-container">
      <button className="menu-trigger" onClick={onClick}>
        경로선택
      </button>
      {isActive ? (
        <div className={`menu ${isActive ? 'active': 'inactive'}`} ref={dropdownRef}>
          <button className="button" type="button" name="0150" value='목포' onClick={rest.onClick}>서해안선(목포)</button><br/>
          <button type="button" name="0150" value='시흥' onClick={rest.onClick}>서해안선(시흥)</button><br/>
          <button type="button" name="0010" value='부산' onClick={rest.onClick}>경부선(부산)</button><br/>
          <button type="button" name="0010" value='서울' onClick={rest.onClick}>경부선(서울)</button>
        </div>
      ) : (null)}
    </div>
  )
}

export default Dropdown