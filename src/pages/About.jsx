import TagContent from 'components/TagsContent';
import React from 'react';
import profilePicture from 'styles/assets/img/Esteban_Restrepo.jpg';

const text =
  'I am an enthusiastic Front-End Software Developer with +5 years building and maintaining responsive websites. Proficient in JavaScript, TypeScript, HTML5, CSS, SASS and plus modern libraries and frameworks as Angular. Experience in Application State with NgRx and Unit Testing, Proven experience consuming APIs and implementing various design patterns. Architectural patterns and architectural styles and peer code reviews. In addition, I have been working lately with Localization and internationalization (i18n).\n\nI am keen to continue acquiring new skills and enjoy working in software, I have always had a keen interest in technology and pay great attention detailing in the work that I do.\n\nPlus, huge knowledge in infrastructure, computer security and an advanced level of the different operative systems and basic knowledge in PHP, Java, Python and NodeJS.';

const About = () => (
  <>
    <div className='flex flex-col md:flex-row md:w-11/12 lg:w-5/6 md:m-auto'>
      <div className='about-me-picture mt-16 md:mt-20 mb-8 flex justify-center md:w-1/4 lg:w-2/4'>
        <img
          className='rounded-full h-52 w-52 md:h-44 md:w-44 lg:h-52 lg:w-52'
          src={profilePicture}
          alt='Workflow'
        />
      </div>

      <section className='about-me-info my-6 md:ml-8 lg:ml-0 flex-col md:w-3/4 lg:w-2/4'>
        <h2 className='about-me-info-title flex justify-center md:justify-start text-blue-500 mb-3'>
          About me
        </h2>
        <div className='about-me-info-text flex justify-center px-9 md:pr-9 md:pl-0'>
          <span className='text-justify whitespace-pre-wrap'>{text}</span>
        </div>
      </section>
    </div>
    <section className='about-me-details my-6 flex flex-col md:flex-row justify-center'>
      <div className='about-me-languages flex justify-center my-6 mx-4 md:w-2/4'>
        <TagContent
          title='Languages'
          tags={[
            { id: '1', value: 'Spanish - Native', bgColor: 'bg-green-300' },
            { id: '2', value: 'English - B2', bgColor: 'bg-blue-400' },
          ]}
        />
      </div>
      <div className='hidden md:block border border-l-2 border-indigo-900 h-64 mx-5' />
      <div className='abour-me-skills flex justify-center my-6 mx-4 md:w-2/4'>
        <TagContent
          title='Skills'
          tags={[
            { id: '1', value: 'Communication', bgColor: 'bg-indigo-400' },
            { id: '2', value: 'Proactivity', bgColor: 'bg-blue-400' },
            { id: '3', value: 'Creativity', bgColor: 'bg-green-300' },
            { id: '4', value: 'Fast learner', bgColor: 'bg-blue-400' },
          ]}
        />
      </div>
    </section>
  </>
);

export default About;
