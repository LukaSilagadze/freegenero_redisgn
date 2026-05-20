import { ChevronRight, Newspaper } from 'lucide-react';
import { newsItems } from '../content';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/News/News.css';

function News() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.newsEyebrow')}
        icon={Newspaper}
        title={t('pages.newsTitle')}
        copy={t('pages.newsCopy')}
      />
      <section className="section page-section">
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.titleKey}>
              <span>{t(item.tagKey)}</span>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.copyKey)}</p>
              <a className="text-link" href="mailto:hello@freegenero.com">
                {t('news.requestArticle')}
                <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default News;
