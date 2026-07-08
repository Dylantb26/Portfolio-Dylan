import './../../Style/Global.css';
import Layout from '../../Components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function Skils() {
  const { t, setPage, loading } = useContext(LanguageContext);

  useEffect(() => {
    setPage('Skils');
  }, [setPage]);

  if (loading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="container my-5">

        <div className="text-center mb-5">
          <h1 className="mb-3">{t('Title')}</h1>
          <p className="skills-description">
            {t('Subtitle')}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <h2 className="text-center">{t('Programing_Languages')}</h2>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Intermediate')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">CSS & Bootstrap</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>0 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">XAML</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>3 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">JavaScript & TypeScript</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>3 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Sql & MySQL</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>0 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">C#</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Intermediate')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Git</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h2 className="text-center">{t('Programing_Frameworks')}</h2>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">.Net Maui</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>3 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">ASP.NET Core & Identity</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Intermediate')}</strong>
                </p>
                <strong>0 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Entity Framework</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Intermediate')}</strong>
                </p>
                <strong>0 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h2 className="text-center">{t('Programing_Software')}</h2>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Visual Studio</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Intermediate')}</strong>
                </p>
              </div>
            </div>
          </div>

         <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Visual Studio Code</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Microsoft server management Studio</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Oracle data modeler</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Draw io</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h2 className="text-center">{t('Other_Skills')}</h2>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">(OS) Linux Mint</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">(OS) Windows</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">LibreOffice</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Microsoft Office</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Wordpress & WooCommerce</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
                <strong>5 {t('months')}</strong>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">Scrum Agile</h5>
                <p className="card-text">
                  {t('Experience')}: <strong>{t('Basic')}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <h2 className="text-center">{t('Languages')}</h2>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">{t('Dutch')}</h5>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">{t('English')}</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Skils;