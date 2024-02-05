import React from "react";
const btnStyle = "px-3 py-2 bg-stone-200  mt-4 rounded-xl";
function CloseConfirm({ onConfirm, onCancel }) {
  return (
    <div className="bg-sky-500 px-12 py-10 flex flex-col gap-6 rounded-xl">
      <h1>Are you sure to Submit this Test?</h1>
      <button onClick={onCancel} className={`${btnStyle} hover:bg-green-400`}>
        No
      </button>
      <button onClick={onConfirm} className={`${btnStyle} hover:bg-red-400`}>
        Confirm
      </button>
    </div>
  );
}

export default CloseConfirm;
