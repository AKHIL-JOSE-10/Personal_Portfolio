import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/AKHIL-JOSE-10" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/akhil_jose_10/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/akhil-jose-76b26b26b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
