import './../../Style/Global.css';
import Layout from '../../Components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function History() {
  const { t, setPage, loading } = useContext(LanguageContext);

  useEffect(() => {
    setPage('History');
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

        <h1 className="mb-5 text-center">{t('Title')}</h1>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card history-card h-100">
              <div className="card-body">
                <h5 className="card-title">ROC van Twente ({t('Education')})</h5>
                <h6>{t('Roc-Van_twente-Education')}</h6>
                <p className="history-meta">Start: Jan 2022 - End: Jun 2026</p>

                <p className="history-section">
                  <strong>{t('Description')}:</strong><br />
                  {t('SoftwareDev-Description')}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card history-card h-100">
              <div className="card-body">
                <h5 className="card-title">Crossmedia House ({t('Internship')})</h5>
                <p className="history-meta">Start: Feb 2024 - End: Jun 2024</p>
                <p className="history-meta">{t('Total-Hours')} 680</p>

                <p className="history-section">
                  <strong>{t('Description')}:</strong><br />
                  {t('CrossmediaHouse-Description')}
                </p>

                <p className="history-section">
                  <strong>{t('what-i-did')}</strong><br />
                  {t('CrossmediaHouse-Work-Description')}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card history-card h-100">
              <div className="card-body">
                <h5 className="card-title">Compad software ({t('Internship')})</h5>
                <p className="history-meta">Start: Sep 2025 - End: Jan 2026</p>
                <p className="history-meta">{t('Total-Hours')} 680</p>

                <p className="history-section">
                  <strong>{t('Description')}:</strong><br />
                  {t('CompadSoftware-Description')}
                </p>

                <p className="history-section">
                  <strong>{t('what-i-did')}</strong><br />
                  {t('CompadSoftware-Work-Description')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default History;