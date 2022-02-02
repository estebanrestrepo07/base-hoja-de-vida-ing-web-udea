import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const iAm = `I'm `;
const holaMundo = `<Hola Mundo />`;

const icons = [
  {
    iconName: faEnvelope,
    href: 'mailto:esteban_rpo_stm@hotmail.com',
  },
  {
    iconName: faGithub,
    href: 'https://github.com/estebanrestrepo07',
  },
  {
    iconName: faLinkedinIn,
    href: 'https://www.linkedin.com/in/esteban-restrepo-santamaria-78767147/',
  },
  {
    iconName: faWhatsapp,
    href: 'https://wa.link/7ol8zk',
  },
];

const Home = () => (
  <div className='flex flex-col h-screen justify-between'>
    <div className='m-auto'>
      <h1 className='text-blue-500'>{holaMundo}</h1>
      <h1>
        <span className='text-blue-500'>{iAm}</span>
        <span className='text-indigo-500'>Esteban Restrepo</span>
      </h1>
      <h4 className='text-blue-500'>Senior Front-End Developer</h4>

      <div className='icons-ref mt-6'>
        {icons.map((icon) => (
          <a href={icon.href} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon
              icon={icon.iconName}
              className='mr-2 text-2xl text-blue-500'
            />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
