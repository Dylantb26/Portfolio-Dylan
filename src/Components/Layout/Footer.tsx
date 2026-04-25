import './../../Style/Global.css';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function Footer() {
  const { t } = useContext(LanguageContext);
  var currentYear = new Date().getFullYear();

  return (
    <footer id="Footer" className="py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
        <div className="mb-3 mb-md-0">
          <h5>{t('FooterContact')}</h5>
          <p className="mb-2">Portfolio.Dylan@protonmail.com</p>
        </div>

        <div className="mb-3 mb-md-0">
          <h5>{t('FooterPages')}</h5>
          <ul className="list-unstyled d-flex flex-wrap">
            <li className="me-3">
              <Link to="/" className="footer-link">{t('FooterHome')}</Link>
            </li>
            <li className="me-3">
              <Link to="/about" className="footer-link">{t('FooterAbout')}</Link>
            </li>
            <li className="me-3">
              <Link to="/skills" className="footer-link">{t('FooterSkills')}</Link>
            </li>
            <li className="me-3">
              <Link to="/History" className="footer-link">{t('FooterHistory')}</Link>
            </li>
            <li className="me-3">
              <Link to="/projects" className="footer-link">{t('FooterProjects')}</Link>
            </li>
          </ul>
        </div>

        <div>
          <br />
          <h5>©{currentYear} Dylan ter Bruggen, All rights reserved.</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;