import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'components/Modal';

const Card = (props) => {
  const { card } = props;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => {
      document.body.style.overflow = prev ? 'hidden' : 'unset';
      return !prev;
    });
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <div className='flex items-center flex justify-center items-center mb-6 px-6'>
        <div className='w-64 max-w-xs min-h-64 flex flex-col justify-between bg-white rounded-3xl border border-blue-500 mb-6 py-5 px-4 shadow-2xl'>
          {card.showMoreInfoIcon && (
            <div className='flex justify-end'>
              <button type='button'>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className='mr-2 fas fa-lg text-indigo-900'
                  onClick={() => openModal()}
                />
              </button>
            </div>
          )}
          {card.imageSrc && (
            <div className='flex justify-center'>
              <img
                className='h-32 w-32 lg:h-36 lg:w-36'
                src={card.imageSrc}
                alt='Workflow'
              />
            </div>
          )}
          <div>
            <div className='flex flex-col items-center justify-between text-gray-800'>
              <h4 className='text-blue-500'>{card.title}</h4>
              <p className='text-indigo-500 text-base'>{card.detail}</p>
              {card.showDates && (
                <p className='text-sm'>
                  {card.startDate}
                  {card.endDate ? ` - ${card.endDate}` : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          setOpenModal={setShowModal}
          title={card.detail}
          info={card.description}
        />
      )}
    </>
  );
};

export default Card;
