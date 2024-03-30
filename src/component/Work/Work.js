import Bindes from '../../assets/work/bina-desa.jpeg'
import Rsgm from '../../assets/work/rsgm.jpeg'
import Batour from '../../assets/work/BaTour.jpeg'


export const Work = {
  title: 'Work',
  description: 'Some of the noteworthy projects I have built:',
  list: [
    {
      id: 1,
      title: 'Web Travel Agent',
      description:
      'create a destination promotional website for tourists',
      techStack: [
       'wordpress',
      ],
      img: Batour,
      reverse: true,
    },
    {
      id: 2,
      title: 'Waste Management Information System in Saba Village',
      description:
        'Create Waste Management Information System in Saba Village',
      techStack: [
        'Laravel',
        'PHP',
        'SQL',
        'javascript'
      ],
      img: Bindes,
      
      reverse: false,
    },
    {
      id: 3,
      title: 'Information System for Dentist ',
      description:
        'Create Information System for Dentist in Jimbaran ',
      techStack: [
        'CodeIgniter',
        'PHP',
        'SQL',
        'javascript',
      ],
      img: Rsgm,
      reverse: true,
    },
  ],
};
