import './../../Style/Global.css';
import Layout from '../../Components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function Projects() {
  const { t, setPage, loading } = useContext(LanguageContext);

  useEffect(() => {
    setPage('Projects');
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

        <h1 className="mb-5 text-center">Projects</h1>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card project-card h-100">
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="project-meta">Personal project</p>
                <p className="project-meta">Year: 2026</p>

                <p className="project-description">
                  {t('PortfolioWebsite-Discription')}
                </p>

                <div className="project-links">
                  <a href="https://github.com/PortfolioDyllan/Portfolio-Dylan" className="btn btn-sm btn-outline-primary me-2">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Projects;