import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>راهنما</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        در این قسمت با نحوه‌ی استفاده از بخش های مختلف نرم افزار بصورت تصویری آشنا خواهید شد
      </>
    ),
  },
  {
    title: <>بروزرسانی‌ها</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        تغییرات نسخه‌های جدید نرم‌افزار همچنین نحوه‌ی کار با امکانات جدید بطور دقیق و بصورت تصویری شرح داده خواهد شد
      </>
    ),
  },
  {
    title: <>API &amp; Developer Guide</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        این بخش شامل اطلاعات مفیدی درباره‌ی نحوه‌ی نصب برنامه و همچنین شامل راهنمای برنامه نویسان برای آشنایی با سرویس‌های مختلف برنامه جهت اتصال به نرم‌افزار از طریق برنامه نویسی می‌باشد   
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/benefactors/getting-started')}>
              از کجا شروع کنم؟
            </Link>
          </div>

          <div className={styles.startBox} >
          <Link href="https://staging-emdad.rup.ir">نسخه آزمایشی</Link>  و  <Link href="https://emdad.rup.ir">نسخه اصلی</Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
