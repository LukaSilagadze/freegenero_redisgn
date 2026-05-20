import { Image } from 'lucide-react';
import { galleryItems } from '../content';
import PageHero from '../components/PageHero';
import '../styles/pages/Gallery/Gallery.css';

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        icon={Image}
        title="Moments from workshops, interviews, and student projects."
        copy="A visual look at the learning environments Freegenero creates for teenagers and partner schools."
      />
      <section className="section gallery-grid">
        {galleryItems.map((item, index) => (
          <article className="gallery-card" key={item}>
            <div className={`gallery-art gallery-art-${(index % 3) + 1}`}>
              <Image size={34} />
            </div>
            <h3>{item}</h3>
          </article>
        ))}
      </section>
    </>
  );
}

export default Gallery;
