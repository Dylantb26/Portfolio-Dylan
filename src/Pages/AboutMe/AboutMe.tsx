import './../../Style/Global.css';
import Layout from '../../Components/Layout/Layout';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import DylanImg from './IMG/DylanTerBruggen.png';

function AboutMe() {
  const { t, setPage, loading } = useContext(LanguageContext);

    useEffect(() => {
    setPage('AboutMe');
  }, [setPage]);

  if (loading) return <Layout><div>Loading...</div></Layout>;

  return (
    <Layout>
      <div className="container my-5">

        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="mb-4">{t('Title')}</h1>
            <p className="mb-4">{t('Introduction')}</p>

            <h3 className="mb-3">{t('Education')}</h3>
            <p className="mb-4">{t('EducationText')}</p>

            <h3 className="mb-3">{t('Skills')}</h3>
            <p className="mb-4">{t('SkillsText')}</p>

            <h3 className="mb-3">{t('Interests')}</h3>
            <p className="mb-4">{t('InterestsText')}</p>

            <h3 className="mb-3">{t('Hobbies')}</h3>
            <p className="mb-4">{t('HobbiesText')}</p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={DylanImg}
              alt="Portrait of Dylan ter Bruggen"
              className="img-fluid about-image"
            />
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default AboutMe;