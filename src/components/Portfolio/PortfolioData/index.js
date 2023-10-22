import eCommerce from '../../../assets/images/e-commerce.png'
import messenger from '../../../assets/images/messenger.png'
import polyCalculator from '../../../assets/images/polyCalculator.png'
import freshStart from '../../../assets/images/fresh-start.png'
import { AiFillHtml5 } from 'react-icons/ai'

const portfolioData = [
  {
    image: freshStart,
    title: 'Fresh-Start',
    description:
      "A MERN app for users to anonymously share their goals and dreams. You can share however many resolutions you want and find inspiration in other's ideas. Every entry is saved into a database that's accessed with ExpressJS via a React application running with Node. Worked in a team of two at Fall Hacks 2023 at SFU.",
    code: 'https://github.com/makih2003/fresh-start',
    language: (
      <span>
        <em>MongoDB</em> / <em>Express.js</em> /<em>React.js</em> /{' '}
        <em>Node.js</em>
      </span>
    ),
  },
  {
    image: messenger,
    title: 'Messenger JavaFX',
    description:
      'Messenger app built with JavaFX. In the first tab, the user can sign in, log in, and log out. A username and password are required in order to sign in and log in. In the second tab, they can read messages they have received. There are two buttons, one to display unread messages and the other to display all messages. In the third tab, they can send a message by typing it in or default smile message.',
    code: 'https://github.com/makih2003/messenger.git',
    language: <span>JavaFX</span>,
  },
  {
    image: polyCalculator,
    title: 'Polynomial Calculator',
    description:
      'Polynomial calculator users can interact on the console. Users can do multiple operations after entering two polynomials, such as addition, subtraction, and differentiation. A linked list is used as its data structure. Big five (copy constructor, copy assignment, destructor, move constructor, move assignment) is also implemented.',
    code: 'https://github.com/makih2003/polynomial-calculator.git',
    language: <span>C++</span>,
  },
  {
    image: eCommerce,
    title: 'E-commerce Website',
    description:
      'Simulated e-commerce website where users can search, browse, add items to the cart, and order. On the cart page, the user can modify the number of items, delete items in the cart, and see the total cost including shipping fee and tax. After the order is placed, the user can check their order history on a separate page.',
    link: 'https://makih2003.github.io/ecommerce-web/',
    code: 'https://github.com/makih2003/ecommerce-web',
    language: (
      <span>
        <em>HTML</em> / <em>CSS</em> /<em>JavaScript</em>
      </span>
    ),
  },
]

export default portfolioData
