import { Image } from 'lucide-react';
import { galleryItems } from '../content';
import PageHero from '../components/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/pages/Gallery/Gallery.css';

function Gallery() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t('pages.galleryEyebrow')}
        icon={Image}
        title={t('pages.galleryTitle')}
        copy={t('pages.galleryCopy')}
      />
      <section className="section gallery-grid">
        {galleryItems.map((item, index) => (
          <article className="gallery-card" key={item}>
            <div className={`gallery-art gallery-art-${(index % 3) + 1}`}>
              <Image size={34} />
            </div>
            <h3>{t(item)}</h3>
          </article>
        ))}
      </section>
    </>
  );
}

export default Gallery;
