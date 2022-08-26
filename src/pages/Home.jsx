import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const iAm = `I'm `;
const title = `<Hola Mundo />`;
const info = {
  name: 'Esteban Restrepo',
  introduction:
    'Feel more than welcome to get to know more about me on the About page and what I have been doing and what I have reached on the Career page. \nYou can contact me on the following links:',
  role: 'Senior Front-End Developer',
};
const icons = [
  {
    id: 0,
    iconName: faEnvelope,
    href: 'mailto:esteban_rpo_stm@hotmail.com',
  },
  {
    id: 1,
    iconName: faGithub,
    href: 'https://github.com/estebanrestrepo07',
  },
  {
    id: 2,
    iconName: faLinkedinIn,
    href: 'https://www.linkedin.com/in/esteban-restrepo-santamaria-78767147/',
  },
  {
    id: 3,
    iconName: faWhatsapp,
    href: 'https://wa.link/7ol8zk',
  },
];

const Home = () => (
  <div className='flex flex-col h-screen justify-between'>
    <div className='m-auto px-4'>
      <h1 className='text-blue-500'>{title}</h1>
      <h1>
        <span className='text-blue-500'>{iAm}</span>
        <span className='text-indigo-500'>{info.name}</span>
      </h1>
      <h4 className='text-blue-500'>{info.role}</h4>

      <div className='max-w-sm text-justify my-4'>{info.introduction}</div>

      <div className='icons-ref mt-6'>
        {icons.map((icon) => (
          <a
            key={icon.id}
            href={icon.href}
            target='_blank'
            rel='noopener noreferrer'
          >
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
