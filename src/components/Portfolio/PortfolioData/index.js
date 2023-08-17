import eCommerce from '../../../assets/images/e-commerce.png'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';

const portfolioData = [
  {
    image: eCommerce,
    title: 'E-commerce Web Site',
    description: 'Simulated e-commerce website where users can search, browse, add items to the cart, and order. On the cart page, the user can modify the number of items, delete items in the cart, and see the total cost including shipping fee and tax. After the order is placed, the user can check their order history on a separate page.',
    link: 'https://makih2003.github.io/ecommerce-website/',
    code: 'https://github.com/makih2003/ecommerce-website',
    language: <><AiFillHtml5 className='language-icon'/><BiLogoCss3 className='language-icon'/><BiLogoJavascript className='language-icon'/></>
  }
];

export default portfolioData;