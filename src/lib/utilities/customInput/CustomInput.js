import React from 'react';
import "./CustomInput.css"

const CustomInput = ({ type, label, placeholder, name}) => {
   return (
      <>
         <label htmlFor="customInput">{label}</label>
         <input
            name={name}
            type={type}
            id="customInput"
            required
            placeholder={placeholder}
         />
      </>
   )
}

export default CustomInput;
