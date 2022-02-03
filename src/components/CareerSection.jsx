import React from 'react';
import Card from 'components/Card';

const CareerSection = (props) => {
  const { title, cards } = props;
  return (
    <section className='careerSection text-center my-9'>
      <h2 className='careerSection-title font-mono mb-12 font-semibold text-indigo-900'>
        {title}
      </h2>
      <div className='flex flex-col justify-center md:w-5/6 md:m-auto md:flex-row md:flex-wrap'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
