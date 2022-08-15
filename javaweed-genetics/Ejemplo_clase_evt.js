import React, { useState } from 'react';


function InputCount({ onConfirm, maxQuantity }) {
  const [val, setVal] = useState(maxQuantity);
  const dispararEnter = (evt) => {
    if (evt.keyCode === 13) {
      // si dio ENTER
      onConfirm(3);
    }
  };

  return (
    <input
      value={val}
      onChange={(evt) => {
        setVal(evt.target.value);
      }}
      onKeyDown={dispararEnter}
    />
  );
}

function ButtonCount({ onConfirm, maxQuantity }) {
  return (
    <button
      onClick={() => {
        onConfirm(4);
      }}
    >
      Contar {maxQuantity}
    </button>
  );
}

function ItemDetail({ item, inputType = 'input' }) {
  const MiComponente = inputType === 'button' ? ButtonCount : InputCount;

  const itemMax = item.max;
  const min = item.min;

  function addToCartParaOnConfirm(quant) {
    console.log('Quant: ', quant);
  }

  return (
    <div>
      <label>Descripción:</label>
      <MiComponente
        onConfirm={addToCartParaOnConfirm}
        maxQuantity={item.max}
      ></MiComponente>
    </div>
  );
}

export default function App() {
  const myItem = {
    max: 10,
    min: 1,
  };
  return (
    <div>
      <ItemDetail item={myItem} inputType={'button'} />
      <ItemDetail item={myItem} inputType={'input'} />
    </div>
  );
}