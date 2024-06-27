import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar, modalHeading }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-x-40 inset-y-0 flex flex-col gap-[1rem]">
        <div className="flex h-screen w-full flex-col gap-[10px] bg-white p-[2rem]">
          <div className="flex justify-end">{actionBar}</div>
          <h2 className="text-[22px] font-semibold">{modalHeading}</h2>
          {children}
        </div>
      </div>
    </div>,

    document.querySelector('.app')
  );
}

export default Modal;
