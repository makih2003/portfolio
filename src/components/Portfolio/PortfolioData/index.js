import eCommerce from '../../../assets/images/e-commerce.png'
import messenger from '../../../assets/images/messenger.png'
import polyCalculator from '../../../assets/images/polyCalculator.png'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3 } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { BiLogoCPlusPlus } from 'react-icons/bi'

const portfolioData = [
  {
    image: eCommerce,
    title: 'E-commerce Website',
    description:
      'Simulated e-commerce website where users can search, browse, add items to the cart, and order. On the cart page, the user can modify the number of items, delete items in the cart, and see the total cost including shipping fee and tax. After the order is placed, the user can check their order history on a separate page.',
    link: 'https://makih2003.github.io/ecommerce-web/',
    code: 'https://github.com/makih2003/ecommerce-web',
    language: (
      <>
        <AiFillHtml5 className="language-icon" />
        <BiLogoCss3 className="language-icon" />
        <BiLogoJavascript className="language-icon" />
      </>
    ),
  },
  {
    image: messenger,
    title: 'Messenger JavaFX',
    description:
      'Messenger app built with JavaFX. In the first tab, the user can sign in, log in, and log out. A username and password are required in order to sign in and log in. In the second tab, they can read messages they have received. There are two buttons, one to display unread messages and the other to display all messages. In the third tab, they can send a message by typing it in or default smile message.',
    code: 'https://github.com/makih2003/messenger.git',
    language: (
      <>
        <em>JavaFX</em>
      </>
    ),
  },
  {
    image: polyCalculator,
    title: 'Polynomial Calculator',
    description:
      'Polynomial calculator users can interact on the console. Users can do multiple operations after entering two polynomials, such as addition, subtraction, and differentiation. A linked list is used as its data structure. Big five (copy constructor, copy assignment, destructor, move constructor, move assignment) is also implemented.',
    code: 'https://github.com/makih2003/polynomial-calculator.git',
    language: (
      <>
        <BiLogoCPlusPlus className="language-icon" />
      </>
    ),
  },
]

export default portfolioData
