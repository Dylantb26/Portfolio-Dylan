import './../../Style/Global.css';
import Layout from '../../Components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import DylanImg from './IMG/DylanTerBruggen.png';

function Index() {
  const { t, setPage, loading } = useContext(LanguageContext);

  useEffect(() => {
    setPage('Index');
  }, [setPage]);

  if (loading) return <Layout><div>Loading...</div></Layout>;

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center">
        <h1>{t('Title')}</h1>
        <h5>{t('subtitle')}</h5>
        <img src={DylanImg} alt="no image found" className='' />
        <div className="d-flex gap-4 mt-5 justify-content-center">
          <a href="https://www.linkedin.com/in/dylan-t-54441b2b7" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-pill px-5 py-3">
            {t('ViewLinkedIn')}
          </a>
          <a href="https://github.com/Dylantb26" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg rounded-pill px-5 py-3">
            {t('ViewGitHub')}
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Index;