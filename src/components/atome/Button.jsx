import React from 'react';

function Button(props) {
  return (
    <button className={`bg-gradient-to-r from-orangel to-orange text-sm text-stone2 my-10 mx-10 px-6 py-1.5 rounded-xl hover:from-verde hover:to-verdel ${props.className}`} onClick={props.onClick}>
      {props.text}
      Subir desde Excel
    </button>
  );
}

export default Button;

