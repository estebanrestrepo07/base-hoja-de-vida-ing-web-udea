import React from 'react';

function Modal(props) {
  const { title, info, setOpenModal } = props;
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-screen flex flex-col bg-black/50'>
      <div className='m-auto bg-white w-5/6 md:max-w-xl py-5 rounded-3xl border border-blue-500'>
        <div className='title'>
          <h2 className='text-indigo-900 font-semibold'>{title}</h2>
        </div>
        <div className='body max-h-96 px-5 overflow-y-auto overflow-x-hidden'>
          <p className='whitespace-pre'>{info}</p>
        </div>
        <div className='footer'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 rounded-md border border-blue-500 shadow-sm text-sm font-medium text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 '
            onClick={() => {
              setOpenModal(false);
            }}
            id='closeBtn'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
