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
        <h6>{t('NoImage')}</h6>


        <img src={DylanImg} alt="no image found" className='' style={{ display: "none" }} />


        <div className="d-flex gap-4 mt-5 justify-content-center">
          <a href="https://github.com/Dylantb26" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg rounded-pill px-5 py-3">
            {t('ViewGitHub')}
          </a>
        </div>


        <div className="col-md-4 mt-5 justify-content-center">
          <h5>{t('LinkedinNotice')}</h5>
          <h6>{t('LinkedinText')}</h6>
        </div>


      </div>
    </Layout >
  );
}

export default Index;