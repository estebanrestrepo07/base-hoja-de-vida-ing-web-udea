import React from 'react';
import CareerSection from 'components/CareerSection';
import gapLogo from 'styles/assets/img/Gap-logo.jpg';
import yuxiLogo from 'styles/assets/img/yuxi-logo.jpg';
import senaLogo from 'styles/assets/img/sena-logo.png';
import udeaLogo from 'styles/assets/img/udea-logo.png';

const GapInfo = {
  id: 0,
  imageSrc: gapLogo,
  title: 'Senior Front-End Developer',
  detail: 'Growth Acceleration Partners',
  startDate: '2018',
  endDate: '',
  description: `
    ● General knowledge about design
    patterns.\n
    ● Proven experience with source code
    version control. \n
    ● Communicate with clients and work
    and use agile methodologies.\n
    ● Participate in scrum meetings, such
    as daily standups, sprint planning,
    sprint retrospectives, demos.\n
    ● Ensure code quality and best
    practices with code reviews.\n
    ● Provide support to other developers of
    the team.\n
    ● Bug fixing.\n
    ● Adding Unit tests for workflows.\n
    ● Implement reusable components.\n
    ● Implement new features.\n
    ● Provide technical support to my
    colleagues.\n
    ● Localization and internationalization
    (i18n)\n
  `,
  showDates: true,
  showMoreInfoIcon: true,
};

const YuxiInfo = {
  id: 1,
  imageSrc: yuxiLogo,
  title: 'Front-End Developer',
  detail: 'Yuxi Global',
  startDate: '2016',
  endDate: '2018',
  description: `
    ● Migrate App Web from AngularJs to
    Angular 2. \n
    ● Support to develop an app using
    IONIC. \n
    ● Direct communication with the client
    to meet the needs of the application. \n
    ● Resolve issues and implement fixes. \n
    ● Help with server configuration and
    deploy configuration. \n
    ● Helping to define the application's
    basic structure. \n
    ● Implement reusable components. \n
    ● Implement new features. \n
    ● Ensure code quality. \n
  `,
  showDates: true,
  showMoreInfoIcon: true,
};

const UdeAInfo = {
  id: 0,
  imageSrc: udeaLogo,
  title: 'Computer Science Engineering',
  detail: 'University of Antioquia',
  startDate: '2014',
  endDate: '',
  showDates: true,
  showMoreInfoIcon: false,
};

const senaInfo = {
  id: 1,
  imageSrc: senaLogo,
  title: 'Network Administration',
  detail: 'SENA',
  startDate: '2016',
  endDate: '2018',
  showDates: true,
  showMoreInfoIcon: false,
};

const WebPackInfo = {
  id: 0,
  title: 'WebPack',
  detail: 'Platzi',
  startDate: '2021',
  endDate: '',
  showDates: true,
  showMoreInfoIcon: false,
};

const AIForEngInfo = {
  id: 1,
  title: 'AI for Engineering and Science',
  detail: 'UdeA',
  startDate: '2020',
  endDate: '',
  showDates: true,
  showMoreInfoIcon: false,
};

const SafeInfo = {
  id: 2,
  title: 'Certified SAFe® 4 Practitioner',
  detail: 'Scaled Agile',
  startDate: '2020',
  endDate: '',
  showDates: true,
  showMoreInfoIcon: false,
};

const RideBikeInfo = {
  id: 0,
  title: 'Ride Motorcycle',
  showDates: false,
  showMoreInfoIcon: false,
};

const MovieInfo = {
  id: 1,
  title: 'Go to the movies & Netflix',
  showDates: false,
  showMoreInfoIcon: false,
};

const SportsInfo = {
  id: 2,
  title: 'Play Sports',
  showDates: false,
  showMoreInfoIcon: false,
};

const experienceCards = [GapInfo, YuxiInfo];
const academicsCards = [UdeAInfo, senaInfo];
const coursesCards = [WebPackInfo, AIForEngInfo, SafeInfo];
const hobbiesCards = [RideBikeInfo, MovieInfo, SportsInfo];

const CareerSections = [
  {
    id: 0,
    title: 'Experience',
    cards: experienceCards,
  },
  {
    id: 1,
    title: 'Academic',
    cards: academicsCards,
  },
  {
    id: 2,
    title: 'Courses & Certifications',
    cards: coursesCards,
  },
  {
    id: 3,
    title: 'Hobbies',
    cards: hobbiesCards,
  },
];

const Career = () => (
  <div className='flex flex-col h-screen justify-between'>
    {CareerSections.map((section) => (
      <CareerSection
        key={section.id}
        title={section.title}
        cards={section.cards}
      />
    ))}
  </div>
);

export default Career;
