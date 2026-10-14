import './../../Style/Global.css';
import ColorSwitch from '../ColerSwitch/ColerSwitch';
import LanguageSwitcher from '../LanguageSwitch/LanguageSwitcher';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function Header() {
const { t } = useContext(LanguageContext);  
  return (
    <nav
      id="Header"
      className="navbar navbar-expand-lg navbar-light px-4 py-3"
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <Link to="/" className="navbar-brand fw-bold m-0">
          Portfolio-Dylan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                {t('HeaderHome')}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {t('HeaderAbout')}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                {t('HeaderSkills')}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/History" className="nav-link">
                {t('HeaderHistory')}
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                {t('HeaderProjects')}
              </Link>
            </li>

          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center ms-auto">

            <li className="nav-item ms-3">
              <h6 className="m-0">{t('Light')}</h6>
            </li>
            <li className="nav-item ms-3">
              <ColorSwitch />
            </li>
            <li className="nav-item ms-3">
              <h6 className="m-0">{t('Dark')}</h6>
            </li>

            <li className="nav-item ms-3">
              <LanguageSwitcher />
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;