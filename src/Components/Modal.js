import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });
  return (
    <dialog ref={dialog} className=" modal">
      {children}
    </dialog>
  );
});

export default Modal;
